import vector from "../../../public/assets/Shapes/Vector.png";
import vector1 from "../../../public/assets/Shapes/Vector-1.png";
import vector2 from "../../../public/assets/Shapes/Vector-2.png";
import vector3 from "../../../public/assets/Shapes/Vector-3.png";
import vector4 from "../../../public/assets/Shapes/Vector-4.png";

const Icon = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex justify-between gap-44 py-12  object-cover w-[80%] mx-auto flex-wrap">
        <img src={vector} alt="" className="object-contain" />
        <img src={vector1} alt="" className="object-contain" />
        <img src={vector2} alt="" className="object-contain" />
        <img src={vector3} alt="" className="object-contain" />
        <img src={vector4} alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default Icon;
