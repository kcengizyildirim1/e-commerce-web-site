import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import hero1 from "../../public/assets/team/hero1.png";
import hero2 from "../../public/assets/team/hero2.png";
import hero3 from "../../public/assets/team/hero3.png";
import hero4 from "../../public/assets/team/hero4.png";
import hero5 from "../../public/assets/team/hero5.png";

import { TeamData } from "../components/Team/TeamData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const hero = [
  {
    others: hero2,
  },
  {
    others: hero3,
  },
  {
    others: hero4,
  },
  {
    others: hero5,
  },
];

const Team = () => {
  return (
    <div className="flex flex-col gap-12 justify-center py-12">
      <div className="flex flex-col items-center justify-center gap-4 sm:text-center ">
        <h5 className="text-base font-bold text-[#737373] tracking-widest">
          WHAT WE DO
        </h5>
        <h2 className="font-bold tracking-wider text-6xl">
          Innovation tailored for you
        </h2>
        <div className="flex justify-center items-center gap-2">
          <NavLink
            to="/"
            className="text-slate-800 text-sm font-bold leading-normal tracking-tight"
          >
            Home
          </NavLink>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            className="p-1 text-gray-500"
          />
          <h6 className="text-stone-300 text-sm font-bold leading-normal tracking-tight">
            Team
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 justify-center sm:grid-cols-1 sm:gap-x-0 sm:gap-y-2 ">
        <div className="sm:w-full">
          <img src={hero1} alt="" className="w-full h-[570px] object-cover" />
        </div>
        <div className="flex flex-wrap gap-[0.1rem] sm:w-full">
          {hero.map((item, index) => {
            return (
              <img
                key={index}
                src={item.others}
                className="w-[49.6%] h-[285px]  object-cover transform scale-x-[-1]"
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5 py-20">
        <div className="flex flex-col items-center justify-center gap-6sm:w-[80%] sm:mx-auto">
          <h2 className="text-slate-800 text-[40px] sm:text-[50px] font-bold leading-[50px] tracking-tight">
            Meet Our Team
          </h2>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center sm:flex-col sm:w-[80%] sm:mx-auto"></div>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-center sm:flex-col sm:w-[80%] sm:mx-auto">
        {TeamData.map((item, index) => (
          <div
            className="flex flex-col items-center w-1/4  rounded shadow-lg sm:w-full h-[450px]"
            key={index}
          >
            <img src={item.img} className="w-full h-full rounded-t" />
            <div className="flex flex-col gap-2 text-center py-3">
              <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">
                {item.header}
              </h5>
              <h6 className="text-sm font-bold leading-normal tracking-tight text-[#737373]">
                {item.role}
              </h6>
              <div className="flex gap-3 items-center text-[#23A6F0]">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-20 sm:text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-wide">
          Start your 14 days free trial
        </h2>
        <p className="text-base font-normal text-[#737373] w-[25%] sm:w-full text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] py-3 px-10 text-white font-bold text-base rounded-sm">
          Try it free now
        </button>
        <div className="flex gap-4 text-[#395185]">
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
      </div>
    </div>
  );
};

export default Team;
