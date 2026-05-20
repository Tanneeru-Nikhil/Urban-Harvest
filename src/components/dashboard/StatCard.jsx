import { ShoppingBag, DollarSign, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, growth, icon: Icon, index }) => {
  const isPositive = growth >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{growth}%
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </motion.div>
  );
};

export default StatCard;
