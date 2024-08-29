import React, { useState, useEffect } from "react";
import Link from "next/link"; // Correct import for Next.js Link component
import { useMobile } from "../globalComponents/IsMobileContext";
import firstcard from "../../public/header-admissions1.JPG";
import secondCard from "../../public/header-admissions2.JPG";
import thirdCard from "../../public/header-admissions3.JPG";
import fourthCard from "../../public/header-admissions4.JPG";
import closeIcon from "../../public/close.svg";
import PhotoGridItem from "./PhotoGridItem";
import { IoAddSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import MobileNestedLinkElements from "./mobileNestedLinks/MobileNestedLinksElements";
import "./NavMenu.css";
import Image from "next/image";

function NestedLinkElements({ navlinks, setNestedLinksVisible }) {
  const [superNestedLinksVisible, setSuperNestedLinksVisible] = useState(false);

  return (
    <div className="nested-links-div">
      <div className="content">
        <button
          className="close-btn"
          onClick={() => setNestedLinksVisible(false)}
        >
          <Image src={closeIcon} className="close-icon" alt="exit" />
        </button>
        <ul>
          {navlinks.map((item, id) => (
            <React.Fragment key={id}>
              <div
                className="link-item"
                onClick={() => setSuperNestedLinksVisible((prev) => !prev)}
              >
                <Link href={item.linkTo || "#"} className="links">
                  {item.title}
                  {item.nestedLinks && item.nestedLinks.length > 0 && (
                    <IoAddSharp className="expand-icon" />
                  )}
                </Link>

                {item.nestedLinks &&
                  item.nestedLinks.length > 0 &&
                  superNestedLinksVisible && (
                    <div className="nested-links-dropdown">
                      {item.nestedLinks.map((nestedItem, index) => (
                        <Link
                          key={index}
                          href={nestedItem.linkTo || "#"}
                          className="super-nested-link-item"
                        >
                          -{nestedItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NavMenu({ handleMenuBtn }) {
  const { isMobile } = useMobile();
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [rightDivOpacity, setRightDivOpacity] = useState(1);

  useEffect(() => {
    if (nestedLinksVisible === true) {
      setRightDivOpacity(0.3);
    } else {
      setRightDivOpacity(1);
    }
  }, [nestedLinksVisible]);

  const toggleNestedLinks = (id) => {
    setNestedLinksVisible(true);
    setActiveLink(id);
  };

  const sitemap = [
    {
      title: "About TIS",
      nestedLinks: [
        {
          title: "Our History",
          linkTo: "https://tis.edu.in/about-tis/our-history/",
        },
        {
          title: "Why Choose Us?",
          linkTo: "https://tis.edu.in/about-tis/why-choose-us/",
        },
        {
          title: "Vision & Mission",
          linkTo: "https://tis.edu.in/about-tis/vision-mission/",
        },
        {
          title: "Awards & Achievements",
          linkTo: "https://tis.edu.in/about-tis/awards-achievements/",
        },
        {
          title: "Headmaster's Profile",
          linkTo: "https://tis.edu.in/about-tis/principal-message/",
        },
        {
          title: "Our Management",
          linkTo: "https://tis.edu.in/about-tis/about-management/",
        },
        { title: "Virtual Tour", linkTo: "https://tis.edu.in/virtual-tour/" },
      ],
    },
    {
      title: "Academics",
      nestedLinks: [
        { title: "Pedagogy", linkTo: "https://tis.edu.in/academics/pedagogy/" },
        {
          title: "Curriculum",
          linkTo: "https://tis.edu.in/academics/affilation",
        },
        {
          title: "Streams Offered",
          linkTo: "https://tis.edu.in/academics/streams-offered/",
        },
        {
          title: "Career Counselling",
          linkTo: "https://tis.edu.in/academics/career-counselling/",
        },
        {
          title: "International Tie-Ups",
          linkTo: "https://tis.edu.in/academics/international-tie-ups/",
        },
        {
          title: "Publications",
          linkTo: "https://tis.edu.in/academics/publications/",
        },
      ],
    },
    {
      title: "Boarding Life",
      nestedLinks: [
        {
          title: "Pastoral Care",
          linkTo: "https://tis.edu.in/boarding-life/pastoral-care/",
        },
        {
          title: "Food & Nutrition",
          linkTo: "https://tis.edu.in/boarding-life/food-and-nutrition/",
        },
        {
          title: "Facilities",
          linkTo: "https://tis.edu.in/boarding-life/facilities/",
        },
        {
          title: "Infirmary & Medical Facilities",
          linkTo:
            "https://tis.edu.in/boarding-life/infirmary-and-medical-facilities/",
        },
        {
          title: "Our House System",
          linkTo: "https://tis.edu.in/boarding-life/our-house-system/",
        },
      ],
    },
    {
      title: "Beyond Academics",
      nestedLinks: [
        {
          title: "Sports",
          linkTo: "https://tis.edu.in/beyond-academics/sports/",
        },
        {
          title: "Music & Dance",
          linkTo: "https://tis.edu.in/beyond-academics/music",
        },
        {
          title: "Clubs & Societies",
          linkTo: "https://tis.edu.in/beyond-academics/clubs-and-societies/",
        },
        {
          title: "Celebrations",
          linkTo: "https://tis.edu.in/events/celebrations/",
        },
        {
          title: "Confluence",
          linkTo: "https://tis.edu.in/events/confluence/",
        },
      ],
    },
    {
      title: "Admission",
      nestedLinks: [
        {
          title: "Admission Procedure",
          linkTo: "https://tis.edu.in/admission-procedure/",
        },
        {
          title: "Registration Process",
          linkTo: "https://tis.edu.in/admission-procedure/registration-form/",
        },
        {
          title: "Pay Fee Online",
          linkTo: "https://pages.razorpay.com/pl_EehyEVeDo25wMd/view",
        },
        {
          title: "Fee Structure",
          linkTo: "https://tis.edu.in/admission-procedure/fee-structure/",
        },
        {
          title: "Scholarship Programs",
          linkTo:
            "https://tis.edu.in/admission-procedure/scholarship-programmes/",
        },
        {
          title: "Withdrawal Policy",
          linkTo: "https://tis.edu.in/admission-procedure/withdrawal-policy/",
        },
      ],
    },
    {
      title: "Mandatory Disclosure",
      nestedLinks: [
        {
          title: "Mandatory Disclosure",
          linkTo: "https://tis.edu.in/cbse-documents/",
        },
      ],
    },
    {
      title: "Quick Links",
      nestedLinks: [
        { title: "Blogs", linkTo: "https://tis.edu.in/blog" },
        { title: "Contact Us", linkTo: "https://tis.edu.in/contact-us/" },
        { title: "Newsletter", linkTo: "https://tis.edu.in/newsletter/" },
        { title: "Careers", linkTo: "https://tis.edu.in/careers/" },
      ],
    },
  ];
  return (
    <>
      <div className="nav-menu-main-div">
        <div className="left-div">
          {isMobile && nestedLinksVisible ? (
            <MobileNestedLinkElements
              title={sitemap[activeLink].title}
              navlinks={sitemap[activeLink].nestedLinks}
              setNestedLinksVisible={setNestedLinksVisible}
            />
          ) : (
            <>
              <ul>
                <li className="list-item-home">
                  <Link
                    href="https://tis.edu.in/"
                    onClick={handleMenuBtn}
                    className="list-item"
                  >
                    Home
                  </Link>
                </li>
                {sitemap.map((item, index) => (
                  <li
                    key={index}
                    className={activeLink === index ? "active" : ""}
                  >
                    <p
                      onClick={() => toggleNestedLinks(index)}
                      className="list-item"
                    >
                      {item.title}
                      <FaLongArrowAltRight className="arrow-icon" />
                    </p>
                  </li>
                ))}
              </ul>
              {!isMobile && nestedLinksVisible && (
                <NestedLinkElements
                  navlinks={sitemap[activeLink].nestedLinks}
                  setNestedLinksVisible={setNestedLinksVisible}
                />
              )}
            </>
          )}
        </div>
        <div style={{ opacity: rightDivOpacity }} className="right-div">
          <div className="promo-div">
            <div className="photo-grid">
              <div className="photo-div">
                <PhotoGridItem
                  image={firstcard}
                  path="https://tis.edu.in/about-tis/why-choose-us/"
                  title={"Explore our vibrant campus life."}
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  image={secondCard}
                  path="https://tis.edu.in/academics/streams-offered"
                  title={"Discover our comprehensive academic programs."}
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  image={thirdCard}
                  path="https://tis.edu.in/boarding-life/facilities"
                  title={
                    "Learn about our state-of-the-art boarding facilities."
                  }
                />
              </div>
              <div className="photo-div">
                <PhotoGridItem
                  path="https://tis.edu.in/beyond-academics/clubs-and-societies"
                  image={fourthCard}
                  title={"Join us in celebrating diverse cultural events."}
                />
              </div>
            </div>
          </div>
          {/*
          <div className="footer-btns-div">
            <button className="btn student">STUDENTS</button>
            <div className="divider"></div>
            <button className="btn staff">FACULTY/STAFF</button>
          </div>
           */}
        </div>
      </div>
    </>
  );
}

export default NavMenu;
