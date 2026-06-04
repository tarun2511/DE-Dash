import { supabase } from './db.js';

async function getWikiSummary() {
    console.log("ran");
   const { data: universities, error: fetchError } = await supabase
    .from('university')
    .select('id, name')
    .is('description', null);

    console.log("Fetched universities without descriptions:", universities);

    if (fetchError) {
        console.error('Error fetching data from Supabase:', fetchError);
        return;
    }

    if (!universities || universities.length === 0) {
        console.log('All universities already have descriptions! Nothing to do.');
        return;
    }

    for (let uni of universities) {
        try {
            const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(uni.name)}&utf8=&format=json&origin=*`;
            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();

            if (!searchData.query?.search || searchData.query.search.length === 0) {
                console.log(`No Wikipedia page found for: ${uni.name}. Skipping.`);
                continue;
            }
            // Grab the exact official title of the #1 search result
            const officialTitle = searchData.query.search[0].title;
            const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(officialTitle)}`;
            const summaryResponse = await fetch(summaryUrl);
            if (!summaryResponse.ok) {
                console.log(`Failed to get summary for "${officialTitle}". Skipping.`);
                continue;
            }
            const summaryData = await summaryResponse.json();
            const cleanText = summaryData.extract;

            if (!cleanText) {
                console.log(`Summary text was empty for "${officialTitle}". Skipping.`);
                continue;
            }

            const {error: updateError} = await supabase
            .from('university')
            .update({ description: cleanText })
            .eq('id', uni.id);

            if (updateError) {
                console.error(`Error updating description for ${uni.name}:`, updateError);
            } else {
                console.log(`Successfully updated description for ${uni.name}`);
            }
            // Wait 1.5 seconds before hitting Wikipedia again
            await new Promise(resolve => setTimeout(resolve, 1500));
        } catch (error) {
            console.error(`Error fetching Wikipedia summary for ${uni.name}:`, error);
        }
            
    }
}

getWikiSummary();