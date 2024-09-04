"use client";

import React, { useEffect } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import FooterLinks from "./footerLinks/FooterLinks";
import footerLogo from "../../public/footer-logo.png";
import footerLogoMobile from "../../public/footer-logo-mobile.png";
import markerIcon from "../../public/marker.svg";
import phoneIcon from "../../public/phone.svg";
import facebookLogo from "../../public/facebook.svg";
import twitterLogo from "../../public/twitter.svg";
import instagramLogo from "../../public/instagram.svg";
import linkedinLogo from "../../public/linkedin.svg";
import youtubeLogo from "../../public/youtube.svg";
import "./Footer.css";
import BottomBar from "./BottomBar";
import Link from "next/link";
import Image from "next/image";
import Calendar from "../../public/TIS_CALENDAR_2024__PDF.pdf";
import Broucher from "../../public/TIS_BROCHURE.pdf";

function Footer() {
  const { isMobile } = useMobile();
  useEffect(() => {
    const loadScriptAndStyles = () => {
      var t = document.createElement("script");
      t.type = "text/javascript";
      t.src =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/tisd/ee-form-widget/form-2/widget.js";
      document.getElementsByTagName("head")[0].appendChild(t);
    };

    loadScriptAndStyles();
  }, []);
  const ourCampusLinks = [
    {
      title: "Our Campus",
      links: [
        { id: 1, linkName: "FAQ", linkTo: "https://tis.edu.in/faq/" },
        {
          id: 2,
          linkName: "Calendar",
          linkTo:
            "https://tis.edu.in/_next/static/files/src/app/assets/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf",
        },
        {
          id: 3,
          linkName: "Brouchure",
          linkTo:
            "https://tis.edu.in/_next/static/files/src/app/assets/MandatoryPDF/TIS_BROCHURE.pdf",
        },
        {
          id: 4,
          linkName: (
            <button id="extraedge-popup6" className="prospectus">
              E-Prospectus
            </button>
          ),
        },
        {
          id: 5,
          linkName: "Registration Form",
          linkTo: "https://tis.edu.in/admission-procedure/registration-form/",
        },
        { id: 6, linkName: "Blogs", linkTo: "https://tis.edu.in/blog" },
        {
          id: 7,
          linkName: "Privacy Policy",
          linkTo: "https://tis.edu.in/privacy-policy/",
        },
        {
          id: 8,
          linkName: "Terms & Conditions",
          linkTo: "https://tis.edu.in/terms-conditions/",
        },
      ],
    },
    // Add more sections as needed
  ];

  const socialLinks = [
    {
      title: "facebook",
      linkTo: "https://www.facebook.com/tulasinternationalschool/",
      icon: facebookLogo,
    },
    {
      title: "instagram",
      linkTo: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      icon: instagramLogo,
    },
    {
      title: "X/Twitter",
      linkTo: "https://twitter.com/tulas_intschool?lang=en",
      icon: twitterLogo,
    },
    {
      title: "Youtube",
      linkTo: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      icon: youtubeLogo,
    },
    {
      title: "Linkedin",
      linkTo:
        "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      icon: linkedinLogo,
    },
  ];
  const handlefedena = () => {
    window.location.href = "https://tis.fedena.com/";
  };
  const handleVirtual = () => {
    window.location.href = "https://tis.edu.in/virtual-tour/";
  };
  const handleApply = () => {
    window.location.href =
      "https://tis.edu.in/admission-procedure/registration-form/";
  };

  return (
    <div className="footer-container">
      {!isMobile && (
        <>
          <iframe
            className="map-footer"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "20%",
              height: "350px",
              marginLeft: "-10%",
              marginRight: "2%",
            }}
            src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India%3A%20Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%3B%20Dehradun%2C%20Uttarakhand%3B%20India&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            aria-label="Dhoolkot, P.O - Selaqui, Chakrata Road Dehradun, Uttarakhand India: Dhoolkot, P.O - Selaqui, Chakrata Road; Dehradun, Uttarakhand; India"
            data-rocket-lazyload="fitvidscompatible"
            alt=""
            data-lazy-src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India%3A%20Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%3B%20Dehradun%2C%20Uttarakhand%3B%20India&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="Map of Dhoolkot, P.O - Selaqui, Chakrata Road Dehradun, Uttarakhand India"
          ></iframe>

          <div className="hero">
            <Image src={footerLogo} className="logo" alt="TIS" />
            <p className="address">
              Tula&apos;s International School
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z/data=!3m1!4b1!4m6!3m5!1s0x390f2a8f6621db6d:0xb5df8a7bd77caf7d!8m2!3d30.3430336!4d77.8891652!16s%2Fm%2F0121_pmh?entry=ttu"
              >
                Vill.Dhoolkot, near Tula&apos;s Institute Selaqui near Mandir
                <br /> Dehradun, Uttarakhand, 248197{" "}
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="tel:+919458311000"
              >
                +919458311000
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="mailTo:info@tis.edu.in"
              >
                info@tis.edu.in
              </a>
            </p>
          </div>
          <div className="linkTo-list">
            <FooterLinks linksData={ourCampusLinks} />
          </div>
          <div className="three-buttons">
            <div onClick={handleVirtual} className="button">
              Virtual Tour
            </div>

            <div onClick={handleApply} className="button">
              Apply Now
            </div>

            <div className="button" onClick={handlefedena}>
              fedena Login
            </div>
          </div>

          <BottomBar />
        </>
      )}

      {isMobile && (
        <>
          <div className="header">
            <Link href="/">
              <Image src={footerLogoMobile} className="logo" alt="TIS" />
            </Link>
            <div className="right">
              <div className="info-div">
                <Image src={markerIcon} className="icon" alt="point" />
                <p className="text">
                  Tula&apos;s International School Vill.Dhoolkot, near
                  Tula&apos;s Institute Selaqui near Mandir Dehradun,
                  Uttarakhand, 248197
                </p>
              </div>

              <div className="info-div">
                <Image src={phoneIcon} className="icon" alt="phone" />
                <p className="text">
                  (+91) 9458311000
                  <br />
                  info@tis.edu.in
                </p>
              </div>
            </div>
          </div>

          <div className="all-links">
            <div className="mobile-links">
              {ourCampusLinks[0].links.map((item, index) => (
                <a className="link" key={index} href={item.linkTo}>
                  <p className="links">{item.linkName}</p>
                </a>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <a className="link" key={index} href={item.linkTo}>
                  <Image src={item.icon} className="icon" alt={item.title} />
                  <p className="title">{item.title}</p>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;
