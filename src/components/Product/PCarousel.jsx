import { Carousel } from "@material-tailwind/react";

const PCarousel = ({ title, img, sale }) => {
  return (
    <div className="w-fit ml-64">
      <Carousel className="w-[31.625rem] h-[28.125rem] overflow-hidden">
        <div className="relative h-full w-full bg-[#23856D]">
          <img src={img} alt="image 1" className="h-full w-full object-cover" />
        </div>
      </Carousel>
      <div className="flex mt-10 gap-5">
        <img src={img} alt="" className="w-[120px] h-[100px]" />
        <p>{title}</p>
        <p>{sale}</p>
      </div>
    </div>
  );
};

export default PCarousel;
