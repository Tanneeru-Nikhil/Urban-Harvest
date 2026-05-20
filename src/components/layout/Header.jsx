import { Bell, Search, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = ({ setIsOpen }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="h-16 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden md:flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 focus-within:ring-2 focus-within:ring-primary-100 focus-within:border-primary-300 transition-all">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="bg-transparent border-none outline-none ml-2 text-sm w-64 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-gray-100">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</div>
              <div className="text-xs text-gray-500 capitalize">{user?.role || 'admin'}</div>
            </div>
            <img
              src={user?.avatar || 'https://i.pravatar.cc/150?u=admin'}
              alt="User Avatar"
              className="w-9 h-9 rounded-full ring-2 ring-gray-100 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
