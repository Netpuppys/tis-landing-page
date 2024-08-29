import React from "react";
import Link from "next/link";
// import logo from "../../../assets/cmpny_logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./companySocials.css";
function CompanySocials() {
  const socials = [
    {
      id: 1,
      mediaName: "faceBook",
      link: "https://www.facebook.com/tulasinternationalschool/",
      logo: (
        <FaFacebookF className="text-[32px] rounded-full bg-[#efefefd8] p-2 text-[#b90124]" />
      ),
    },
    {
      id: 2,
      mediaName: "twitter",
      link: "https://twitter.com/tulas_intschool?lang=en",
      logo: (
        <FaTwitter className="text-[32px] rounded-full bg-[#efefefd8] p-2 text-[#b90124]" />
      ),
    },
    {
      id: 3,
      mediaName: "linkedin",
      link: "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      logo: (
        <FaLinkedinIn className="text-[32px] rounded-full bg-[#efefefd8] p-2 text-[#b90124]" />
      ),
    },
    {
      id: 4,
      mediaName: "instagram",
      link: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      logo: (
        <FaInstagram className="text-[32px] rounded-full bg-[#efefefd8] p-2 text-[#b90124]" />
      ),
    },
    {
      id: 5,
      mediaName: "youtube",
      link: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      logo: (
        <FaYoutube className="text-[32px] rounded-full bg-[#efefefd8] p-2 text-[#b90124]" />
      ),
    },
  ];

  return (
    <div className="cmpny-socials-container">
      {/* <Image src={logo} className='cmpny-socials-logo' alt='logo' />
        <h4 className='cmpny-tagline'>Random 2 line text to fill out empty space real text added later</h4> */}
      <div className="cmpny-social-btns">
        <ul className="cmpny-socials-btns-list">
          {socials.map((item, id) => (
            <li className="cmpny-socials-btns-item" key={id}>
              <Link
                href={item.link}
                target="blank"
                className="cmpny-socials-btns-link"
                passHref
                // onClick={handleClick}
              >
                {item.logo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanySocials;
