import React, { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Camera,
  MapPin,
  IndianRupee,
  Globe,
  FileText,
  Home,
  Star,
  X,
} from "lucide-react";
import Preview from "../components/CreateNewListingPage/Preview";
import SelectImage from "../components/CreateNewListingPage/SelectImage";
import { inputStyle } from "../utils/styles/CreateListing";
import { useMutation } from "@tanstack/react-query";
import { createListing } from "../api/Listing";
import SuccessModal from "../components/CreateNewListingPage/SuccessModal";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
// import { type ProductType } from "../types";

const CreateListing: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const SelectedFiles = Array.from(e.target.files);
      setImageFiles((prev) => [...prev, ...SelectedFiles]);

      const newPreviews = SelectedFiles.map((file) =>
        URL.createObjectURL(file),
      );
      setGalleryPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(galleryPreviews[index]);
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setGalleryPreviews((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleBannerImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBannerImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return createListing(data);
    },
    onSuccess: () => {
      galleryPreviews.forEach((image) => URL.revokeObjectURL(image));
      if (preview) URL.revokeObjectURL(preview);

      setBannerImageFile(null);
      setImageFiles([]);
      setGalleryPreviews([]);
      setPreview(null);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 3000);
    },

    onError: (err) => {
      console.log(err);
    },
  });

  if (isPending)
    return (
      <Loader
        fullPage={true}
        message="Uploading Your data on server Please Wait for a while"
      />
    );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (bannerImageFile) formData.append("image", bannerImageFile);
    if (imageFiles)
      imageFiles.forEach((file) => formData.append("images", file));
    mutate(formData as FormData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            List Your <span className="text-rose-500">Ashiana</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Enter your property details below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-4xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 space-y-7">
            {/* Title Section */}
            <div className="group">
              <label className="relative flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 group-focus-within:text-rose-500 transition-colors">
                <Home size={18} /> Property Title
                <span className="relative -top-1">
                  <Star size={10} fill="currentColor" />
                </span>
              </label>
              <input
                type="text"
                name="listing[title]"
                required
                className={inputStyle}
                placeholder="e.g. Royal Palace of Jaipur"
              />
            </div>
            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FileText size={18} className="text-rose-500" /> Description
              </label>
              <textarea
                name="listing[description]"
                rows={4}
                required
                className={inputStyle}
                placeholder="Describe the vibes of your place..."
              ></textarea>
            </div>
            {/* Price & Location Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <IndianRupee size={18} className="text-rose-500" /> Price per
                  month
                </label>
                <input
                  type="number"
                  name="listing[price]"
                  required
                  className={inputStyle}
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <MapPin size={18} className="text-rose-500" /> Location
                </label>
                <input
                  type="text"
                  name="listing[location]"
                  required
                  className={inputStyle}
                  placeholder="e.g. Bani Park, Jaipur"
                />
              </div>
            </div>
            {/* Country */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <Globe size={18} className="text-rose-500" /> Country
              </label>
              <input
                type="text"
                name="listing[country]"
                required
                className={inputStyle}
                placeholder="India"
              />
            </div>
            {/* Image Upload Area */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
                <Camera size={18} className="text-rose-500" /> Banner
              </label>

              <div className="relative group">
                <label
                  htmlFor="image-upload"
                  className={`flex flex-col items-center justify-center w-full h-72 border-2 border-dashed rounded-4xl cursor-pointer transition-all duration-300
                    ${preview ? "border-transparent shadow-inner" : "border-gray-300 bg-gray-50 hover:bg-rose-50/30 hover:border-rose-300"}`}
                >
                  {preview ? <Preview preview={preview} /> : <SelectImage />}
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleBannerImage}
                  />
                </label>
              </div>
            </div>
            {/* select multiple property images */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
                <Camera size={18} className="text-rose-500" /> Property Images
              </label>
              <div className="relative group">
                <input
                  id="select-images"
                  type="file"
                  className={inputStyle}
                  accept="image/*"
                  multiple
                  onChange={handleImages}
                />
                {imageFiles.length > 0 && (
                  <>
                    <h4 className="text-rose-500 font-medium mt-5 text-lg">
                      Selected Images preview
                    </h4>
                    <p className="mt-2 ms-3 text-sm text-gray-400 ">
                      total selected images is{" "}
                      <span className="font-bold text-md text-rose-500">
                        {imageFiles.length}
                      </span>
                    </p>
                    <div className="grid grid-cols-4 gap-2 mt-2 relative">
                      {galleryPreviews.map((image, index) => (
                        <div
                          key={index}
                          className="h-30 overflow-hidden rounded-2xl relative"
                        >
                          {/* remove image */}
                          <div className="absolute top-2 right-2 flex items-center">
                            <button
                              className="font-bold text-white p-1 bg-red-600 rounded-full cursor-pointer"
                              onClick={() => {
                                removeImage(index);
                              }}
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <img
                            src={image}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 bg-gray-50/80 border-t border-gray-100">
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4.5 rounded-2xl shadow-xl shadow-rose-200 hover:shadow-rose-300 transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
            >
              <Home size={22} /> List Your Ashiana
            </button>
          </div>
        </form>
      </div>
      {/* Modal */}
      {showSuccess && (
        <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default CreateListing;
