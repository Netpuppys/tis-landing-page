"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import lineImg from "../../public/yellowLine1.svg";
import schoolLogo from "../../public/schoolLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import "./Navbar.css";
import optionsIcon from "../../public/Button-Open-Menu.png";
import menuIcon from "../../public/menu-text.png";
import menuCloseIcon from "../../public/menu-close-text.png";
import NavMenu from "../navMenu/NavMenu";
import { FaWhatsapp } from "react-icons/fa";
import Form from "../globalComponents/Form";
import { FaPhone } from "react-icons/fa6";
import { useMobile } from "../globalComponents/IsMobileContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const isMobile = useMobile();
  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  const handleFormClick = () => {
    setShowAdmissionForm(true);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const handleMenuBtn = () => {
    setIsNavMenuVisible((prev) => !prev);
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

  const renderNestedLinks = (nestedLinks) => (
    <div className="dropdown">
      {nestedLinks.map((nestedItem, nestedIndex) => (
        <div className="list-item" key={nestedIndex}>
          <a href={nestedItem?.linkTo} style={{ color: "#fff" }} passHref>
            <div className="title-arrow">
              <p className="nested-link-title">{nestedItem?.title}</p>
              {nestedItem?.nestedLinks?.length > 1 && (
                <IoIosArrowForward className="nav-arrows" />
              )}
            </div>
          </a>

          {nestedItem.nestedLinks && nestedItem.nestedLinks.length > 0 && (
            <div className="super-nested-links">
              {nestedItem.nestedLinks.length > 1}
              {renderNestedLinks(nestedItem.nestedLinks)}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed z-20">
      <div className="top-bar">
        <a className="phone-number" href="tel:+91-9458311000">
          <FaPhone className="phone-icon" />
          ADMISSION HELPLINE NO. +91-9458311000
        </a>
        <button onClick={handleFormClick} className="enquire">
          Enquire Now
        </button>
      </div>
      <nav className={`navbar-main-div-global scrolled`}>
        <Link href="https://tis.edu.in/" passHref>
          <Image src={schoolLogo} className="second-nav-logo" alt="school" />
        </Link>

        <div className="navbar-list-main">
          {sitemap.map((item, index) => (
            <div
              className="main-list-item"
              key={index}
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={() => handleMenuLeave()}
            >
              <a href={item.linkTo} passHref>
                <p className="title">{item.title}</p>
                <Image src={lineImg} className="yellow-line" alt="line" />
              </a>
              <div className="dropdown-container">
                {activeMenu === index &&
                  item.nestedLinks &&
                  item.nestedLinks.length > 0 &&
                  renderNestedLinks(item.nestedLinks)}
              </div>
            </div>
          ))}
        </div>
        <button className="options-btn" onClick={handleMenuBtn}>
          <Image src={optionsIcon} className="options" alt="TIS" />
          <div className="menu-icon-div">
            <Image
              src={isNavMenuVisible ? menuCloseIcon : menuIcon}
              className="menu-icon"
              alt="menu"
            />
          </div>
        </button>
      </nav>
      {isNavMenuVisible && (
        <div className="sidebar-container">
          <NavMenu handleMenuBtn={handleMenuBtn} />
        </div>
      )}
      {isMobile && (
        <div className="bottom-bar-all-pages">
          <button onClick={handleFormClick} className="bottom-enquire">
            Enquire Now
          </button>

          <div className="phone-div-bottom-bar">
            <a className="bottom-phone-number" href="tel:+91-9458311000">
              <FaPhone className="bottom-phone-icon" /> +91-9458311000
            </a>
          </div>
        </div>
      )}
      <Form showForm={showAdmissionForm} setShowForm={setShowAdmissionForm} />
    </div>
  );
};

export default Navbar;