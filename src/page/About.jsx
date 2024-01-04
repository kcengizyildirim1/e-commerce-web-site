import aboutpic from "../../public/assets/About/about.png";
import video from "../../public/assets/About/video.png";
import team1 from "../../public/assets/About/team-1.jpg";
import team2 from "../../public/assets/About/team-2.jpg";
import team3 from "../../public/assets/About/team-3.jpg";
import Icon from "../components/ProductList/Icon";
import workgirl from "../../public/assets/About/workgirl.png";

const data = [
  {
    img: team1,
  },
  {
    img: team2,
  },
  {
    img: team3,
  },
];

const About = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap md:gap-10">
        <div className="flex flex-col my-auto mx-auto gap-11">
          <h5 className="text-[#252B42] font-bold text-base sm:hidden">
            ABOUT COMPANY
          </h5>
          <h1 className="text-[#252B42] font-bold text-[3.625rem]">ABOUT US</h1>
          <h4 className="text-[#737373] w-[18rem]">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="w-40 h-10 rounded bg-[#23A6F0] text-white">
            Get Quote Now
          </button>
        </div>
        <img src={aboutpic} alt="" />
      </div>
      <div className="flex justify-center gap-48 flex-wrap md:gap-20">
        <div className="w-[25rem]">
          <p className="text-[#E74040] text-sm font-normal">Problems trying</p>
          <h2 className="text-[#252B42] text-2xl font-bold mt-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="w-[30rem] lg:w-[22rem]">
          <p className="text-[#737373] text-sm font-normal pt-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-32 flex-wrap md:flex-col md:text-center text-[#737373] text-center md:gap-16 my-20">
        <div>
          <h2 className="text-[#252B42] text-[3.625rem] font-bold">15K</h2>
          <h5 className="text-base">Happy Customers</h5>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3.625rem] font-bold">150K</h2>
          <h5 className="text-base">Monthly Visitors</h5>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3.625rem] font-bold">15</h2>
          <h5 className="text-base">Countries Worldwide</h5>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3.625rem] font-bold">100+</h2>
          <h5 className="text-base">Top Partners</h5>
        </div>
      </div>
      <div className="flex justify-center relative">
        <img src={video} className="rounded-[1.25rem] lg:w-[80%]" />
        <div className="w-16 h-16 bg-[#23A6F0] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <i className="fa-solid fa-play top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-white text-2xl"></i>
        </div>
      </div>
      <div className="flex flex-col w-[70%] mx-auto text-center gap-5 my-10">
        <h2 className="text-[2.5rem] text-[#252B42] font-bold">
          Meet Our Team
        </h2>
        <p className="text-[#737373] font-normal w-[45%] lg:w-full mx-auto">
          Problems trying to resolve the conflict <br />
          between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex justify-between lg:flex-col gap-10">
          {data.map((item, key) => (
            <div className="text-center flex flex-col gap-3" key={key}>
              <img src={item.img} className="w-full" />
              <h5 className="text-base text-[#252B42] font-bold">Username</h5>
              <h6 className="text-sm text-[#737373] font-bold">Profession</h6>
              <div className="flex justify-center gap-10 text-2xl">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#FAFAFA] text-center py-10">
        <div className="w-[50%] mx-auto flex flex-col gap-10 md:w-[70%]">
          <h2 className="text-[#252B42] text-[2.5rem] font-bold">
            Big Companies Are Here
          </h2>
          <p className="text-[#737373] text-sm w-[55%] mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <Icon />
      </div>
      <div className="flex justify-between bg-light-blue-900">
        <div className="w-[30%] m-auto text-[#fff] flex flex-col gap-5 md:w-[70%] py-5">
          <h5 className="font-bold text-base">WORK WITH US</h5>
          <h2 className="text-[2.5rem] font-bold">Now Let’s grow Yours</h2>
          <p className="text-sm">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="px-6 py-2  w-fit rounded border border-solid  text-center">
            Button
          </button>
        </div>
        <div>
          <img src={workgirl} className="object-cover h-full md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default About;
