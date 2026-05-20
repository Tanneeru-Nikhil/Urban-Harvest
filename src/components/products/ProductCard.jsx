import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { deleteProduct } from '../../redux/slices/productSlice';
import EditProductModal from './EditProductModal';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card group hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium shadow-sm backdrop-blur-md ${
            product.status === 'Available' 
              ? 'bg-green-100/90 text-green-700' 
              : 'bg-red-100/90 text-red-700'
          }`}>
            {product.status}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
          <p className="text-lg font-bold text-primary-600">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">ID: {product.id}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button 
              onClick={handleDelete}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <EditProductModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        product={product} 
      />
    </motion.div>
  );
};

export default ProductCard;
