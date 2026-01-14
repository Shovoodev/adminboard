import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import DashboardCard from "@/components/DashboardCard";
import TodoList from "@/components/TodoList";

export default function Homepage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
      {/* Main Bar Chart */}
      <DashboardCard className="lg:col-span-2 2xl:col-span-3">
        <AppBarChart />
      </DashboardCard>

      {/* Pie Charts */}
      <DashboardCard>
        <AppPieChart />
      </DashboardCard>

      <DashboardCard>
        <AppPieChart />
      </DashboardCard>

      <DashboardCard>
        <AppPieChart />
      </DashboardCard>

      <DashboardCard>
        <AppPieChart />
      </DashboardCard>

      {/* Popular Content */}
      <DashboardCard className="lg:col-span-2 2xl:col-span-2">
        <CardList title="Popular Content" />
      </DashboardCard>

      {/* Area Chart */}
      <DashboardCard className="lg:col-span-2 2xl:col-span-3">
        <AppAreaChart />
      </DashboardCard>

      {/* Todo */}
      <DashboardCard>
        <TodoList />
      </DashboardCard>

      {/* Placeholder */}
      <DashboardCard>test</DashboardCard>
    </div>
  );
}
