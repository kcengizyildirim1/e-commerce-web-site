import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PCarousel from "../components/Product/PCarousel";
import ShopList from "../data/ShopList";
import { useParams } from "react-router-dom";
import { Images } from "../imagesData/Images";
import DescImg from "../../public/assets/Product/desc-img.png";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = ShopList.find((item) => item.id === productId);

  const { title, img, sale } = product;
  console.log(title);
  console.log(img);
  console.log(sale);

  return (
    <div className="bg-[#FAFAFA] flex flex-col">
      <div className="py-6">
        <div className="w-[70rem] mx-auto">
          <div className="flex items-center gap-2 ml-16 md:ml-4">
            <p className="text-[#252B42] font-bold text-sm">Home</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              className="text-slate-400"
            />
            <p className="text-[#BDBDBD] text-sm font-bold ">Shop</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-64 gap-y-12 mx-auto">
        <PCarousel title={title} img={img} sale={sale} />
        <div className="flex flex-col max-w-[25rem] mx-auto gap-3 py-10">
          <h4>{title}</h4>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-star text-[#F3CD03]"></i>
            <i className="fa-solid fa-star text-[#F3CD03]"></i>
            <i className="fa-solid fa-star text-[#F3CD03]"></i>
            <i className="fa-solid fa-star text-[#F3CD03]"></i>
            <i className="fa-regular fa-star-half-stroke text-[#F3CD03]"></i>
            <h6 className="text-sm">10 Reviews</h6>
          </div>
          <h5>{sale}</h5>
          <p>Availability: In Stock</p>
          <p className="text-sm text-[#858585]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className=" border-[#BDBDBD]" />
          <div className="flex gap-3">
            {Images.shapes.ellipses.map((color, key) => (
              <img src={color} key={key} className="h-5 w-5"></img>
            ))}
          </div>
          <div className="flex gap-3 items-center mt-12">
            <button className="px-5 py-3 rounded-md bg-[#23A6F0] text-white">
              Select Options
            </button>
            <button className="rounded-full w-7 h-7 border border-solid border-[#E8E8E8] ">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="rounded-full w-7 h-7 border border-solid border-[#E8E8E8]">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="rounded-full w-7 h-7 border border-solid border-[#E8E8E8]">
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 bg-white py-10">
        <div className="flex justify-center gap-x-20 py-6 text-[#737373] font-semibold text-sm md:text-xs">
          <h6 className="w-fit">Description</h6>
          <h6 className="w-fit">Additional Information</h6>
          <h6 className="w-fit">
            Reviews <span className="text-green-900">(0)</span>
          </h6>
        </div>
        <hr className="max-w-[70rem] mx-auto" />
      </div>
      <div className="flex justify-start w-[80%] mx-auto gap-14 md:flex-col ">
        <div className="w-[28%] md:w-full">
          <img
            className="w-full h-96 object-cover object-center"
            src={DescImg}
          />
        </div>
        <div className="w-[27%] flex flex-col gap-6 md:w-full ">
          <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
            the quick fox jumps over
          </h5>
          <h6 className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className=" text-[#737373] text-2xl font-bold  tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold leading-normal tracking-tight">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
