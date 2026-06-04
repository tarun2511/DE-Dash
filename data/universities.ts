export interface University {
  id: string;
  name: string;
  city: string;
  imageSrc: string;
  imageAlt: string;
  slug: string; // Good for dynamic routing later (e.g., /explore/tu-munich)
}

export const UNIVERSITIES: University[] = [
  {
    id: "1",
    name: "TU Munich",
    city: "Munich",
    imageSrc: "/tum.jpeg",
    imageAlt: "Mattes, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons",
    slug: "tu-munich",
  },
  {
    id: "2",
    name: "Humboldt Uni zu Berlin",
    city: "Berlin",
    imageSrc: "/uni2.jpg",
    imageAlt: "Humboldt University Berlin main building",
    slug: "humboldt-berlin",
  },
  {
    id: "luh",
    name: "Leibniz University Hannover (LUH)",
    city: "Hannover",
    imageSrc: "/uni3.jpg",
    imageAlt: "Leibniz University Hannover historic building",
    slug: "leibniz-hannover",
  },
   {
    id: "freie",
    name: "Freie University Berlin",
    city: "Berlin",
    imageSrc: "/freie.png",
    imageAlt: "Universitätsbibliothek, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    slug: "freie-berlin",
  },
    {
    id: "htw",
    name: "Hochschule für Technik und Wirtschaft Berlin (HTW)",
    city: "Berlin",
    imageSrc: "/htw.jpg",
    imageAlt: "HTW Berlin/Alexander Rentsch, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    slug: "htw-berlin",
  },
  {
    id: "tudarmstadt",
    name: "Technische Universität Darmstadt",
    city: "Darmstadt",
    imageSrc: "/tudarmstadt.jpg",
    imageAlt: "Grffine, CC0, via Wikimedia Commons",
    slug: "tu-darmstadt",
  }
];