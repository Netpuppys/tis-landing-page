import React, { useState } from "react";
import "./bottomBar.css";
import CompanySocials from "./CompanySocials/CompanySocials";
import Link from "next/link";
function BottomBar() {
  return (
    <div className="bottom-bar">
      <p className="copyright-text">
        Copyright © 2025 Tula&apos;s International School, Dehradun | All Rights
        Reserved <br />
        Designed and Managed By{" "}
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          href={"https://netpuppys.com"}
        >
          NetPuppys
        </Link>{" "}
      </p>
      <CompanySocials />
    </div>
  );
}

export default BottomBar;
