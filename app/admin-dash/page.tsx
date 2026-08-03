import NavBar from "@/components/ui/navBar";
import Footer from "@/components/ui/footer";
import AdminForm from "@/components/ui/AdminForm";

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500">
    <NavBar />
    <AdminForm />
    <Footer />
    </div>
  );
}