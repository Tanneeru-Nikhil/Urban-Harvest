export const mockUser = {
  id: '1',
  name: 'Admin User',
  email: 'admin@urbanharvest.com',
  role: 'admin',
  avatar: 'https://i.pravatar.cc/150?u=admin'
};

export const dashboardStats = {
  totalOrders: { value: 1248, growth: 12.5 },
  revenue: { value: 45600, growth: 8.2 },
  activeUsers: { value: 892, growth: -2.4 },
  pendingDeliveries: { value: 45, growth: 15.0 },
};

export const mockOrders = [
  { id: 'ORD-001', customerName: 'John Doe', amount: 45.99, status: 'Delivered', date: '2024-03-20' },
  { id: 'ORD-002', customerName: 'Jane Smith', amount: 120.50, status: 'Pending', date: '2024-03-20' },
  { id: 'ORD-003', customerName: 'Robert Johnson', amount: 34.20, status: 'Cancelled', date: '2024-03-19' },
  { id: 'ORD-004', customerName: 'Emily Davis', amount: 89.00, status: 'Delivered', date: '2024-03-19' },
  { id: 'ORD-005', customerName: 'Michael Wilson', amount: 56.75, status: 'Pending', date: '2024-03-18' },
];

export const mockProducts = [
  {
    id: 'PRD-001',
    name: 'Organic Avocados',
    price: 4.99,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'PRD-002',
    name: 'Fresh Strawberries',
    price: 6.50,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'PRD-003',
    name: 'Artisan Sourdough Bread',
    price: 5.25,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'PRD-004',
    name: 'Local Honey',
    price: 12.00,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e891347d4?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'PRD-005',
    name: 'Organic Cherry Tomatoes',
    price: 3.99,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80'
  }
];
