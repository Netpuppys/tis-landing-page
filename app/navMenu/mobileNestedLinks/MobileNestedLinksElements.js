import React, { useContext, useState } from "react";
import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./MobileNestedLinkElements.css";
import { UtmContext } from "@/app/globalComponents/utmParams";
function MobileNestedLinkElements({ title, navlinks, setNestedLinksVisible }) {
  const [superNestedLinksVisible, setSuperNestedLinksVisible] = useState(false);
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="mobile-nested-links-div">
      <div className="content">
        <button
          className="close-btn"
          onClick={() => setNestedLinksVisible(false)}
        >
          <FaLongArrowAltLeft className="left-arrow" />
          <p className="text">main menu</p>
        </button>
        <p className="title">{title}</p>
        <ul className="list">
          {navlinks.map((item, id) => (
            <React.Fragment key={id}>
              <li
                className="link-item"
                onClick={() => setSuperNestedLinksVisible((prev) => !prev)}
              >
                <Link href={`${item.linkTo}${utmParams}`} className="links">
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
                          href={`${nestedItem.linkTo}${utmParams}`}
                          key={index}
                          className="super-nested-link-item"
                        >
                          -{nestedItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileNestedLinkElements;
