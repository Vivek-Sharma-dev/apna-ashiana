import LISTING_API from "./api";

// get all listings
export const getAllListing = async () => {
  const res = await LISTING_API.get("/listings");
  return res.data;
};

// get specific listing
export const getSpecificListing = async (id: string) => {
  const res = await LISTING_API.get(`/listings/${id}`);
  return res.data;
};

export const createListing = async (listing: FormData) => {
  const res = await LISTING_API.post("/listings", listing, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
