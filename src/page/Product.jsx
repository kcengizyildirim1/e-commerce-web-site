import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PCarousel from "../components/Product/PCarousel";
import ShopList from "../data/ShopList";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  const product = ShopList.find((item) => item.id === productId);

  const { title, img, sale } = product;
  console.log(title);
  console.log(img);
  console.log(sale);

  return (
    <div className="product">
      <div className="bg-[#FAFAFA]">
        <nav className="flex items-center gap-2">
          <div className="text-slate-800 text-sm font-bold leading-normal tracking-tight">
            Home
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="sm"
            className="text-slate-400"
          />
          <div className="text-slate-400 text-sm font-bold leading-normal tracking-tight">
            Shop
          </div>
        </nav>
        <PCarousel title={title} img={img} sale={sale} />
      </div>
    </div>
  );
};

export default Product;
