import { useEffect, useState } from "react";

interface Props {
  img: string;
  title: string;
  className: string;
}

const ImageWrapper = ({
  img,
  title,
  className = "col-span-1 row-span-1",
}: Props) => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setStatus("success");
    };
    image.onerror = () => {
      setStatus("error");
    };
  }, [img]);

  if (status !== "success") return null;
  console.log(img);
  return (
    <div
      className={`max-h-[50dvh] rounded-2xl relative w-full ${className ? className : ""}`}
    >
      <div className="absolute hover:bg-black/10 inset-0 z-10"></div>
      <img src={img} alt={title} className="object-cover w-full h-full" />
    </div>
  );
};

export default ImageWrapper;
