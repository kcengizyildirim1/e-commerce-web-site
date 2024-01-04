import contactbg from "../../public/assets/contact/bgcontact.png";

const Contact = () => {
  return (
    <div className="relative">
      <img src={contactbg} alt="" className="w-full object-cover h-[30rem]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-5 w-[30rem] md:w-[16rem] ">
        <h2 className="text-[2.5rem] font-bold text-[#252B42]">
          Questions & Answers
        </h2>
        <p className="text-lg text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <h2 className="text-sm font-bold text-[#23A6F0]">CONTACT US</h2>
      </div>
    </div>
  );
};

export default Contact;
