import React from "react";
import { Image } from "@chakra-ui/react";
import reactSVG from "../../logo.svg";

function Logo({ size }) {
  return (
    <Image boxSize={size} objectFit="cover" src={reactSVG} alt="react logo" />
  );
}

export default Logo;
