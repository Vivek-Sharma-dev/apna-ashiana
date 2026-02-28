import LISTING_API from "../api/api";
import { type ProductType } from "../types";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
const Home = () => {
  const { data, isPending, error } = useQuery<
    ProductType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["listings"],
    queryFn: async () => {
      const res = await LISTING_API.get("/listings");
      return res.data;
    },
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
          {data.map((item: ProductType) => (
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
