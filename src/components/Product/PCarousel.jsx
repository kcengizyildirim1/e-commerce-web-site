import { Carousel, IconButton } from "@material-tailwind/react";

const PCarousel = ({ title, img, sale }) => {
  return (
    <div className="w-fit mx-auto">
      <Carousel className="w-[25.625rem] h-[25.125rem] overflow-hidden">
        <div className="relative h-full w-full ">
          <img src={img} className="h-full w-full object-cover" />
        </div>
      </Carousel>
      <div className="flex mt-10 gap-5">
        <img src={img} className="w-[120px] h-[100px]" />
      </div>
    </div>
  );
};

export default PCarousel;
