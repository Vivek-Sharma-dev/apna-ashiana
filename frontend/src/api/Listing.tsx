import LISTING_API from "./api";

// get all listings
export const getAllListing = async () => {
    const res = await LISTING_API.get("/listings");
    return res.data;
}

// get specific listing
export const getSpecificListing = async (id: string) => {
    const res = await LISTING_API.get(`/listings/${id}`);
    return res.data;
}