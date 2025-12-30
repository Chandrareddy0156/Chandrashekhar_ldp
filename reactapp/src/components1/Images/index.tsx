import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  rounded?: boolean;
  lazy?: boolean;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  rounded = false,
  lazy = true,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      style={{
        borderRadius: rounded ? "50%" : "0px",
        objectFit: "cover",
      }}
    />
  );
};

export default Image;
