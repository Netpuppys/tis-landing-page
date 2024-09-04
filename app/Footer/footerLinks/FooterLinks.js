"use client";
import React, { useEffect } from "react";
import "./footerLinks.css";

function FooterLinks(props) {
  const linkData = props.linksData;

  return (
    <div className="footerlinks-container">
      {/* About section */}
      {linkData[0].links.map((item) => (
        <li className="footerlinks-link" key={item.id}>
          <a onClick={item.OnClick} href={item.linkTo}>
            <h5 className="footerlinks-link-name">{item.linkName}</h5>
          </a>
        </li>
      ))}
    </div>
  );
}

export default FooterLinks;
