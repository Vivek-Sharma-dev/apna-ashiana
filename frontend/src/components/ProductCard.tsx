import { ShoppingCart, Heart } from "lucide-react";
import { type ProductType } from "../types";
import { Link } from "react-router-dom";
import { transformCurrency } from "../functions";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="group relative w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        to={`/product-details/${product._id}`}
        className="absolute inset-0 z-15"
      />
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          aria-label="Add to wishlist"
          className="z-20 absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-rose-500 transition-colors duration-200 shadow-sm"
        >
          <Heart size={20} />
        </button>

        {/* Hover Overlay - Quick Add */}
        <div className="absolute bottom-0 w-full z-30 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex items-end justify-center pb-4 hidden">
          <button className="bg-rose-500  text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-rose-600 shadow-lg flex items-center gap-2">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* <p className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-1">
          {product.category}
        </p> */}
        <h3 className="text-lg font-bold text-gray-800 truncate mb-2 group-hover:text-rose-600 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-black text-gray-900">
            &#x20B9; {transformCurrency(product.price)}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span className="flex text-yellow-400">★★★★</span>
            <span>(4.5)</span>
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-1 w-0 bg-rose-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default ProductCard;
