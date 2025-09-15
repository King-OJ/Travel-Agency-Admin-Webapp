import AppSidebar from "@/components/app-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { text: string; subtext: string };
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex relative max-w-screen-2xl w-full">
        <AppSidebar user={session.user} />
        <main className="lg:px-10 px-6 py-10 w-full overflow-y-auto overflow-x-hidden flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
