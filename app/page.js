"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import school from "../public/school.png";
import yellowLine from "../public/yellowLine.png";
import stages from "../public/stages.png";
import stagesMobile from "../public/stagesMobile.png";
import { useMobile } from "./globalComponents/IsMobileContext";
export default function Home() {
  const isMobile = useMobile();
  useEffect(() => {
    const loadScriptAndStyles = () => {
      window.ee_form_widget_baseurl =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

      if (!document.getElementById("__formWidgetCss")) {
        const linkElement = document.createElement("link");
        linkElement.id = "__formWidgetCss";
        linkElement.rel = "stylesheet";
        linkElement.href =
          window.ee_form_widget_baseurl + "css/stylesheet.min.css";
        linkElement.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(linkElement);
      }

      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src =
        window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
      scriptElement.onload = async function () {
        const _eeFormWidget = new eeFormWidget();
        await _eeFormWidget.init("tisd", "form-1", "ee-form-1");
      };

      document.getElementsByTagName("head")[0].appendChild(scriptElement);
    };

    loadScriptAndStyles();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full h-fit min-h-screen relative flex justify-center items-center z-10">
        <Image
          className="w-full h-screen object-cover absolute z-0 top-0"
          src={school}
          alt=""
        />
        <div className="w-[95%] mt-[80vh] md:mt-0 flex md:w-[30%] md:ml-[50%] z-10 flex-col justify-center items-center rounded-3xl max-w-[450px] px-4 bg-white shadow-2xl">
          <div id="ee-form-1"></div>
        </div>
      </div>

      <div className="w-full h-fit bg-white z-10">
        <h3 className="font-[Mirador] text-[30px] md:text-[55px] text-[#000] leading-none text-center block py-12">
          Application <span className="text-[#b90124]">Stages</span>{" "}
          <Image
            src={yellowLine}
            alt=""
            className="ml-[40%] md:ml-[50%] w-[40%] md:w-[15%]"
          />
        </h3>
        <div className="w-full h-fit border-t-2 border-[#b90124] py-8 px-[10%] gap-[10%] md:flex justify-center items-center">
          <Image
            src={stagesMobile}
            alt=""
            className="md:hidden w-full md:w-[45%] max-w-[756px] h-fit"
          />
          <Image
            src={stages}
            alt=""
            className="hidden md:block w-full md:w-[45%] max-w-[756px] h-fit"
          />
          <div
            className="w-full px-2 py-8 md:px-0 md:py-0 md:w-[45%] md:text-[25px] "
            style={{
              fontFamily: "PF din Display",
            }}
          >
            <ul className="list-disc">
              <li>
                Please fill in your personal details in the form above and
                register as a user. Once registered, you can use your Mobile
                Number to Login.
              </li>
              <li>Fill your academic details and upload your documents.</li>
              <li>
                Complete your application form and pay the application fee.
              </li>
              <li>
                We will send you confirmation email for Interview Date subject
                to availability.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
