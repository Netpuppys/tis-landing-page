"use client";
import React, { useEffect } from "react";
import "./footerLinks.css";

function FooterLinks(props) {
  const linkData = props.linksData;
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
  return (
    <div className="footerlinks-container">
      {/* About section */}
      {linkData[0].links.map((item) => (
        <li className="footerlinks-link" key={item.id}>
          <a
            onClick={item.OnClick}
            className="show-publuu-viewer"
            href={item.linkTo}
          >
            <h5 className="footerlinks-link-name">{item.linkName}</h5>
          </a>
        </li>
      ))}
    </div>
  );
}

export default FooterLinks;
