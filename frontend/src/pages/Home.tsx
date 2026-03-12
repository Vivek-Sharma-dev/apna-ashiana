import { type ProductCardType } from "../types";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getAllListing } from "../api/Listing";
const Home = () => {
  const { data, isPending, error } = useQuery<
    ProductCardType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["listings"],
    queryFn: getAllListing,
  });
  if (isPending)
    return <Loader fullPage={true} message="Loading Apna Ashiana..." />;
  if (error)
    return (
      <ErrorState message={error.response?.data?.message || error.message} />
    );

  return (
    <>
      <section className="px-4 py-8">
        <div className="grid grid-cols-3 space-x-5 space-y-5">
          {data.map((item: ProductCardType) => (
            <div key={item._id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
