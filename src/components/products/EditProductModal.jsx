import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../redux/slices/productSlice';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EditProductModal = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    status: 'Available',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        status: product.status,
        image: product.image
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: formData.name,
      price: parseFloat(formData.price),
      status: formData.status,
      image: formData.image || 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'
    };
    
    dispatch(editProduct(updatedProduct));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md pointer-events-auto overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900">Edit Product</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 rounded-lg p-1 hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="edit-product-name" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    id="edit-product-name"
                    required
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="edit-product-price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input
                      id="edit-product-price"
                      required
                      type="number"
                      step="0.01"
                      min="0"
                      className="input-field"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="edit-product-status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      id="edit-product-status"
                      className="input-field"
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="Available">Available</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="edit-product-image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    id="edit-product-image"
                    type="url"
                    className="input-field"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EditProductModal;
