import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import { Head } from "next/document";
import DashboardShell from "@/components/DashboardShell";

const Dashboard = () => {
 const auth = useAuth();
 if (!auth.user) {
  return (
   <DashboardShell>
    <SiteTableSkeleton />
   </DashboardShell>
  );
 }
 return (
  <DashboardShell>
   <EmptyState />
  </DashboardShell>
 );
};
export default Dashboard;
