import React from "react";
import "./PhotoGridItem.css";
import Image from "next/image";
import Link from "next/link";
function PhotoGridItem({ image, title, path }) {
  return (
    <div className="navmenu-photo-grid-item">
      <Link href={path} passHref>
        <Image src={image} className="image" alt="TIS" />
        <p className="title">{title}</p>
      </Link>
    </div>
  );
}

export default PhotoGridItem;
