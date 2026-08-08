import NavBar from "../components/ui/navBar";
import ExploreUnis from "@/components/ui/ExploreUnis";
import DashboardClient from "@/components/ui/dashBoardClient";
import Footer from "@/components/ui/footer";
import WhatsNewCard from "@/components/ui/WhatsNewCard";
import { cookies } from "next/headers";

export default async function Home() {
  
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session_token');
  const isLoggedIn = !!sessionToken;

  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="flex-grow">
        <DashboardClient />
        <ExploreUnis />
        <WhatsNewCard />
      </main>
      <Footer />
    </div>
  );
}