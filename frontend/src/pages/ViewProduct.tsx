import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { type ProductType } from "../types";
import type { AxiosError } from "axios";
import { getSpecificListing } from "../api/Listing";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import ImageWrapper from "../components/ImageWrapper";
import { ArrowLeftFromLine } from "lucide-react";
import ListingDetailsSection from "../components/ListingDetails/ListingDetailsSection";

const ViewProduct = () => {
  const { id } = useParams<string>();

  const isValidId = id && id.length === 24 && typeof id === "string";
  console.log(id);

  const { data, isPending, error } = useQuery<
    ProductType,
    AxiosError<{ message: string }>
  >({
    queryKey: [`listings`, id],
    queryFn: () => {
      return getSpecificListing(id!);
    },
    enabled: !!isValidId,
  });

  if (!isValidId) return <ErrorState message="Invalid ID" />;
  if (isPending) return <Loader fullPage={true} />;
  if (error)
    return (
      <ErrorState message={error.response?.data?.message || error.message} />
    );

  console.log(data, isPending, error);

  return (
    <div>
      <button aria-label="Go To Back">
        <ArrowLeftFromLine className="text-rose-500 hover:text-rose-400 active:scale-90 cursor-pointer transition-all duration-300" />
      </button>
      <h1 className="text-xl lg:text-2xl font-semibold my-3 ms-2 text-rose-500">
        {data?.title}
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[50dvh] rounded-2xl overflow-hidden  relative mb-5">
        {data?.images.map((img, i) => (
          <ImageWrapper
            key={i}
            img={img}
            title={data.title}
            className={i === 0 ? "col-span-2 row-span-2" : ""}
          />
        ))}
        <button className="absolute bottom-3 right-3 text-white font-bold hover:bg-rose-600 cursor-pointer rounded-2xl px-3 py-1 bg-rose-500 z-20">
          show all photos
        </button>
      </div>

      <ListingDetailsSection product={data!} />
    </div>
  );
};

export default ViewProduct;
