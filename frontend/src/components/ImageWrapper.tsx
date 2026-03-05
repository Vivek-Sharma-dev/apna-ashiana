
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
