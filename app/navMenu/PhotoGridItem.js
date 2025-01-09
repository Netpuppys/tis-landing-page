import React, { useContext } from "react";
import "./PhotoGridItem.css";
import Image from "next/image";
import Link from "next/link";
import { UtmContext } from "../globalComponents/utmParams";
function PhotoGridItem({ image, title, path }) {
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="navmenu-photo-grid-item">
      <Link href={`${path}${utmParams}`} >
        <Image src={image} className="image" alt="TIS" />
        <p className="title">{title}</p>
      </Link>
    </div>
  );
}

export default PhotoGridItem;
