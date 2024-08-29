"use client";

import React, { useEffect, useRef } from "react";
import { useMobile } from "./IsMobileContext";

const Form = ({ showForm, setShowForm }) => {
  const modalRef = useRef();
  const { isMobile } = useMobile();
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";

    script.onload = () => {
      // Initialize widget if necessary
    };

    script.onerror = () => {};

    document.body.appendChild(script);

    if (showForm) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.removeChild(script);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showForm, setShowForm]);

  return (
    <>
      {showForm && (
        <div
          className="modal"
          style={{
            borderRadius: "15px",
            background: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            position: "fixed",
            inset: "0px",
            zIndex: "999",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            ref={modalRef}
            className="npf_wgts"
            data-height="500px"
            style={{
              width: isMobile ? "90%" : "40%",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
            }}
            data-w="43cde486b796708909f0caeb58a1cd48"
          ></div>
        </div>
      )}
    </>
  );
};

export default Form;
