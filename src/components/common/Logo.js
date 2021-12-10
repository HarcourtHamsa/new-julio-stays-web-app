import React from "react";
import { Image } from "@chakra-ui/react";
import reactSVG from "../../assets/images/logo.png";

function Logo({ size, width, height }) {
  return <Image src={reactSVG} alt="julio stays logo" h={"0"} w={"0"} />;
}

export default Logo;
