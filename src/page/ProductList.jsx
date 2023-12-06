// KATEGORI RESIMLERI
import cardCategory1 from "../../public/assets/Productlist/card-cover1.png";
import cardCategory2 from "../../public/assets/Productlist/card-cover2.png";
import cardCategory3 from "../../public/assets/Productlist/card-cover3.png";
import cardCategory4 from "../../public/assets/Productlist/card-cover4.png";
// PRODUCT LIST RESIMLERI
import shopList1 from "../../public/assets/ShopList/product-cover1.png";
import shopList2 from "../../public/assets/ShopList/product-cover2.png";
import shopList3 from "../../public/assets/ShopList/product-cover3.png";
import shopList4 from "../../public/assets/ShopList/product-cover4.png";
import shopList5 from "../../public/assets/ShopList/product-cover5.png";
import shopList6 from "../../public/assets/ShopList/product-cover6.png";
import shopList7 from "../../public/assets/ShopList/product-cover7.png";
import shopList8 from "../../public/assets/ShopList/product-cover8.png";
import shopList9 from "../../public/assets/ShopList/product-cover9.png";
import shopList10 from "../../public/assets/ShopList/product-cover10.png";
import shopList11 from "../../public/assets/ShopList/product-cover11.png";
import shopList12 from "../../public/assets/ShopList/product-cover12.png";
import Icon from "../components/ProductList/Icon";

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

  const shopList = [
    {
      img: shopList1,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList2,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList3,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList4,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList5,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList6,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList7,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList8,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList9,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList10,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList11,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
    },
    {
      img: shopList12,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      sale: "$6.48",
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
            {productCategory.map((item) => (
              <div key={item} className="mx-auto relative">
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
          {shopList.map((item) => (
            <div key={item} className="flex flex-col w-80 ">
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
