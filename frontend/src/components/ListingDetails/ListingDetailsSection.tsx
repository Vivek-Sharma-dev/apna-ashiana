import { Star } from "lucide-react";
import { type ProductType } from "../../types";
const ListingDetailsSection = ({ product }: { product: ProductType }) => {
  const rating: number = 5
  return (
    <div className="lg:w-4xl">
      <div className="relative">
        <h2 className="font-semibold text-2xl ">{product?.location}</h2>
        <p className="text-gray-600 mt-2 flex gap-2 items-center">
          rating -{" "}
          <Star size={16} fill="currentColor" className="text-yellow-500" /> {rating}
        </p>
        {rating > 4 && <p className="text-green-600 font-semibold absolute top-2 right-0">Guest Favorite</p>}
      </div>
    </div>
  );
};

export default ListingDetailsSection;
