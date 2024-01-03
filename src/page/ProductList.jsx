// KATEGORI RESIMLERI
import cardCategory1 from "../../public/assets/Productlist/card-cover1.png";
import cardCategory2 from "../../public/assets/Productlist/card-cover2.png";
import cardCategory3 from "../../public/assets/Productlist/card-cover3.png";
import cardCategory4 from "../../public/assets/Productlist/card-cover4.png";
import ShopList from "../data/ShopList";
import Icon from "../components/ProductList/Icon";
import { Link } from "react-router-dom";

const ProductList = () => {
  const productCategory = [
    {
      img: cardCategory1,
    },
    {
      img: cardCategory2,
    },
    {
      img: cardCategory3,
    },
    {
      img: cardCategory4,
    },
  ];

  return (
    <div className="font-['Montserrat']">
      <div>
        <div className="bg-[#FAFAFA] py-12">
          <div className="flex justify-between w-[80%] mx-auto">
            <h2 className=" text-2xl font-bold text-[#252B42]">SHOP</h2>
            <div className="flex justify-center items-center gap-3 ">
              <a href="#">Home</a>
              <i className="text-clr-primary fa-solid fa-chevron-right text-gray-400"></i>
              <h6>Shop</h6>
            </div>
          </div>
          <div className="flex gap-5 justify-between w-[90%] mx-auto flex-wrap mt-8">
            {productCategory.map((item, index) => (
              <div key={index} className="mx-auto relative">
                <img
                  src={item.img}
                  className="w-[15rem] h-[15rem] object-cover mx-auto"
                />
                <div className="absolute top-24 right-20 flex flex-col gap-2">
                  <p className="text-base text-white font-bold">CLOTHES</p>
                  <p className="text-base text-white font-bold">5 ITEM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[80%] mx-auto justify-between py-12 bg-white">
          <label htmlFor="" className="flex">
            <p>Showing all 12 results</p>
          </label>
          <div className="flex gap-2 justify-center items-center">
            <p>Views:</p>
            <i className="fa-solid fa-grip border-solid border-gray-400 border-[1px] p-2"></i>
            <i className="fa-solid fa-list border-solid border-gray-400 border-[1px] p-2"></i>
          </div>
          <div className="flex gap-2">
            <select name="" id="" className="bg-[#F9F9F9]">
              <option value="">Popularity</option>
            </select>
            <button>FILTER</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-[48px] items-center justify-center w-[80%] py-[48px] m-auto bg-white">
          {ShopList.map((item, index) => (
            <div className="flex flex-col w-80 shadow-lg" key={index}>
              <img src={item.img} className="w-[100%] object-cover" />
              <div className="flex flex-col items-center  gap-[10px] p-[25px]">
                <h5 className="text-[16px] font-semibold">{item.title}</h5>
                <p className="text-[14px] text-[#737373] font-bold">
                  {item.category}
                </p>
                <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                  <p className="text-[#BDBDBD]">{item.price}</p>
                  <p className="text-[#23856D]">{item.sale}</p>
                </div>
                <div className="flex gap-[6px]">
                  <i className="w-[1rem] h-[1rem] rounded-full bg-[#23A6F0]"></i>
                  <i className="w-[1rem] h-[1rem] rounded-full bg-[#23856D]"></i>
                  <i className="w-[1rem] h-[1rem] rounded-full bg-[#E77C40]"></i>
                  <i className="w-[1rem] h-[1rem] rounded-full bg-[#23856D]"></i>
                </div>
                <Link to={`/shopping/${item.id}`} key={index}>
                  SEPETE EKLE
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Icon />
      </div>
    </div>
  );
};

export default ProductList;
