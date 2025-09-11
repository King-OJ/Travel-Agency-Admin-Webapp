import AppSidebar from "@/components/app-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex relative max-w-screen-2xl w-full">
        <AppSidebar />
        <main className="lg:px-10 px-6 py-10 w-full overflow-y-auto overflow-x-hidden flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
