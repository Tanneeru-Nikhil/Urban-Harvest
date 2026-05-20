import { dashboardStats } from '../mock/data';
import StatCard from '../components/dashboard/StatCard';
import RecentOrders from '../components/dashboard/RecentOrders';
import { ShoppingBag, DollarSign, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const statsConfig = [
    { title: 'Total Orders', value: dashboardStats.totalOrders.value, growth: dashboardStats.totalOrders.growth, icon: ShoppingBag },
    { title: 'Total Revenue', value: `$${dashboardStats.revenue.value.toLocaleString()}`, growth: dashboardStats.revenue.growth, icon: DollarSign },
    { title: 'Active Users', value: dashboardStats.activeUsers.value, growth: dashboardStats.activeUsers.growth, icon: Users },
    { title: 'Pending Deliveries', value: dashboardStats.pendingDeliveries.value, growth: dashboardStats.pendingDeliveries.growth, icon: Truck },
  ];

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Here's what's happening with your store today.</p>
        </div>
        <button className="btn-primary">Download Report</button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsConfig.map((stat, index) => (
          <StatCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      <RecentOrders />
    </div>
  );
};

export default Dashboard;
