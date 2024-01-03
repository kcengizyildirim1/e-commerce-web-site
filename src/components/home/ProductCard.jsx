import sokak from "../../../public/assets/FeaturedPost/sokak.png";
import araba from "../../../public/assets/FeaturedPost/pembeAraba.png";
import semsiye from "../../../public/assets/FeaturedPost/semsiyeler.png";

const data = [
  {
    img: sokak,
    h4: "Loudest à la Madison #1 (L'integral)",
    p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    img: araba,
    h4: "Loudest à la Madison #1 (L'integral)",
    p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    img: semsiye,
    h4: "Loudest à la Madison #1 (L'integral)",
    p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];

const ProductCard = () => {
  return (
    <div className="flex justify-between gap-10 items-center flex-wrap">
      {data.map((item) => (
        <div key={item.p} className="max-w-sm mx-auto shadow-lg">
          <div className=" relative">
            <img
              className="img-absolute object-cover w-[100%]"
              src={item.img}
            />
          </div>

          <div className="flex flex-col gap-y-[0.625rem] px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem]">
            <div className="text-[0.75rem]">
              <span className="text-clr-disabled-element mr-[1rem]">
                Google
              </span>
              <span className="text-clr-second mr-[1rem]">Trending</span>
              <span className="text-clr-second mr-[1rem]">New</span>
            </div>
            <h5 className="text-[1.25rem] text-clr-dark">{item.h4}</h5>
            <p className="max-w-[90%] text-[0.875rem] text-clr-second">
              {item.p}
            </p>

            <div className="flex justify-between">
              <div className="flex justify-center items-center gap-1">
                <i className="fa-regular fa-clock text-sm text-blue-400"></i>
                <span className="text-xs font-normal text-[#737373]">
                  22 April 2021
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <i className="text-clr-secondary-1 fa-solid fa-chart-line text-green-500"></i>
                <span className="text-xs font-normal text-[#737373]">
                  10 comments
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-[0.875rem] text-clr-second mr-[0.625rem]">
                Learn More
              </span>
              <i className="text-clr-primary fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
