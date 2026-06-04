import type { Metadata } from "next";
import NavBar from "@/components/ui/navBar";
import Footer from "@/components/ui/footer";

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500">
    <NavBar />
      <main className="flex-grow">
        {children}
      </main>
    <Footer />
    </div>
  );
}