import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF9F5] shadow-2xl flex flex-col justify-between z-10 border-l border-[#E2DDD0]">
        
        {/* Wishlist Header */}
        <div className="p-6 border-b border-[#E8E5DA] bg-[#F3F0E6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
            <h3 className="font-serif text-xl font-normal text-[#1C1917] uppercase tracking-wider">
              Saved Pieces ({wishlistProducts.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#57534E] hover:text-[#1C1917]">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Heart className="w-12 h-12 text-[#C5A059]/30 mx-auto" />
              <p className="font-serif text-2xl text-[#1C1917]">Your wishlist is empty.</p>
              <p className="text-xs text-[#57534E]">Save your favorite fine jewellery pieces to revisit or share.</p>
              <button
                onClick={onClose}
                className="bg-[#1C1917] text-[#FAF9F5] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
              >
                Browse Atelier
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="flex gap-4 p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="w-20 h-20 object-cover bg-[#E8E5DA] cursor-pointer border border-[#D4CEBF]"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectProduct(product);
                        }}
                        className="font-serif text-base text-[#1C1917] hover:text-[#C5A059] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(product)}
                        className="text-[#A8A29E] hover:text-red-700 transition-colors"
                        title="Remove from Wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#C5A059] uppercase tracking-wider font-medium">
                      {product.category} • {product.defaultMetal}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E2DDD0]">
                    <span className="text-[10px] uppercase tracking-wider text-[#57534E]">
                      {product.specifications.metalPurity}
                    </span>

                    <button
                      onClick={() => onMoveToCart(product)}
                      className="bg-[#1C1917] text-white px-3 py-1.5 text-[11px] uppercase tracking-wider hover:bg-[#C5A059] transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Design</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
