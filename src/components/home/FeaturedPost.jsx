import ProductCard from "./ProductCard";

const FeaturedPost = () => {
  return (
    <div className="py-28 gap-20 flex-col flex justify-center items-center">
      <div className="text-center flex flex-col gap-3">
        <h6 className="text-[#23A6F0] text-sm font-bold"> Practice Advice </h6>
        <h3 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h3>
        <p className="text-neutral-500 text-sm font-normal">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <ProductCard />
    </div>
  );
};

export default FeaturedPost;
