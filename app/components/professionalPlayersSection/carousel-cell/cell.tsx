import Image from "next/image";
import React from "react";

interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
}

function Cell({ data }: { data: SectionData }) {
  return (
    <a>
      <Image
        width={data.Image.width}
        height={data.Image.height}
        alt={data.Image.alt}
        src={data.Image.src}
      />
      <div>
        <h3>{data.h3}</h3>
      </div>
    </a>
  );
}

export default Cell;