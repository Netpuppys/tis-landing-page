"use client";

import React, { useState, useEffect } from "react";
import { useMobile } from "../globalComponents/IsMobileContext";
import FooterLinks from "./footerLinks/FooterLinks";
import footerLogo from "../../public/footer-logo.png";
import footerLogoMobile from "../../public/footer-logo-mobile.png";
import markerIcon from "../../public/marker.svg";
import phoneIcon from "../../public/phone.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import BottomBar from "./BottomBar";
import Form from "../globalComponents/Form";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const { isMobile } = useMobile();
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

  useEffect(() => {
    // Initialize Publuu Viewer when the component mounts
    const initPubluuViewer = () => {
      const id = "publuu-viewer-popup";
      let popup = document.getElementById(id);

      if (!popup) {
        popup = document.createElement("div");
        popup.id = id;
        popup.style.cssText =
          "visibility:hidden;z-index:99999;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0, 0, 0, 0.7);opacity:0;transition:all 500ms ease-in-out;";

        const internalElem = document.createElement("div");
        internalElem.style.cssText =
          "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border-radius:5px;width:80%;max-width:1345px;height:90%;max-height:850px;padding:0px;";
        popup.appendChild(internalElem);

        const closeBtn = document.createElement("a");
        closeBtn.href = "";
        closeBtn.innerHTML = "&times;";
        closeBtn.style.cssText =
          "position: absolute; top: -10px; right: -10px; text-decoration: none; width: 24px; height: 24px; font-size: 19px; font-weight: 700; color: rgb(0 0 0); border-radius: 50%; background: white; text-align: center; line-height: 24px; padding-left: 1px;";
        internalElem.appendChild(closeBtn);

        closeBtn.addEventListener("click", (event) => {
          event.preventDefault();
          closePopup();
        });

        const iframe = document.createElement("iframe");
        iframe.setAttribute("allowFullScreen", "");
        iframe.allow = "clipboard-write";
        iframe.style.cssText =
          "width:100%;height:100%;border:0;border-radius: 5px;";
        internalElem.appendChild(iframe);

        document.body.appendChild(popup);
      }

      const showPopup = (url) => {
        const iframe = popup.getElementsByTagName("iframe")[0];
        iframe.src = url;

        popup.style.visibility = "visible";
        popup.style.opacity = "1";
      };

      const closePopup = () => {
        const iframe = popup.getElementsByTagName("iframe")[0];
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";

        if (!iframe) return;

        setTimeout(
          () =>
            (iframe.src += `${
              iframe.src.indexOf("?") === -1 ? "?" : "&"
            }t=${Date.now()}`),
          250
        );
        setTimeout(() => (iframe.src = ""), 500);
      };

      const buttons = document.querySelectorAll(".show-publuu-viewer");
      buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();

          const url = this.getAttribute("href");
          if (
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1
          ) {
            window.open(url, "_blank");
          } else {
            showPopup(url);
          }
        });
      });
    };

    // Initialize the viewer
    initPubluuViewer();
  }, []);

  const handleClickProspectus = () => {
    setShowAdmissionForm(true);
  };

  const ourCampusLinks = [
    {
      title: "Our Campus",
      links: [
        { id: 1, linkName: "FAQ", linkTo: "https://tis.edu.in/faq/" },
        {
          id: 2,
          linkName: "Calendar",
          linkTo: "https://online.publuu.com/631991/1413467/page/1?cover",
        },
        {
          id: 3,
          linkName: "Brochure",
          linkTo: "https://online.publuu.com/631991/1413465/page/1?cover",
        },
        {
          id: 4,
          linkName: "E-Prospectus",
          OnClick: handleClickProspectus,
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
  ];

  const socialLinks = [
    {
      title: "facebook",
      linkTo: "https://www.facebook.com/tulasinternationalschool/",
      icon: <FaFacebook className="icon text-[#efefefd8]" />,
    },
    {
      title: "instagram",
      linkTo: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      icon: <FaInstagram className="icon text-[#efefefd8]" />,
    },
    {
      title: "X/Twitter",
      linkTo: "https://twitter.com/tulas_intschool?lang=en",
      icon: <FaTwitter className="icon text-[#efefefd8]" />,
    },
    {
      title: "Youtube",
      linkTo: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      icon: <FaYoutube className="icon text-[#efefefd8]" />,
    },
    {
      title: "Linkedin",
      linkTo:
        "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      icon: <FaLinkedinIn className="icon text-[#efefefd8]" />,
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
    <div className="footer-container z-20">
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
              Apply
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
            <Link href="https://tis.edu.in/">
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
                <a
                  onClick={item.OnClick}
                  className="show-publuu-viewer"
                  key={index}
                  href={item.linkTo}
                >
                  <p className="link">
                    <p className="links">{item.linkName}</p>
                  </p>
                </a>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((item, index) => (
                <a className="link" key={index} href={item.linkTo}>
                  {item.icon}
                  <p className="title">{item.title}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="three-buttons">
            <div onClick={handleVirtual} className="button">
              Virtual Tour
            </div>

            <div onClick={handleApply} className="button">
              Apply
            </div>

            <div className="button" onClick={handlefedena}>
              fedena Login
            </div>
          </div>
        </>
      )}

      <Form showForm={showAdmissionForm} setShowForm={setShowAdmissionForm} />
    </div>
  );
}

export default Footer;
