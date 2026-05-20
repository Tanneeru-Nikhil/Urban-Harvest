import { mockOrders } from '../../mock/data';
import { motion } from 'framer-motion';

const RecentOrders = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="card mt-8"
    >
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700">View All</button>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
              <th className="p-4 pl-6">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Date</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 pl-6 font-medium text-gray-900">{order.id}</td>
                <td className="p-4 text-gray-600">{order.customerName}</td>
                <td className="p-4 text-gray-500">{order.date}</td>
                <td className="p-4 text-gray-900 font-medium">${order.amount.toFixed(2)}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {mockOrders.map((order) => (
          <div key={order.id} className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{order.id}</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div className="text-sm text-gray-600">{order.customerName}</div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{order.date}</span>
              <span className="font-medium text-gray-900">${order.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentOrders;
