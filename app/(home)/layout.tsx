import AppSidebar from "@/components/app-sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <AppSidebar />
      <main className="px-6 py-10 w-full overflow-hidden">{children}</main>
    </div>
  );
}
