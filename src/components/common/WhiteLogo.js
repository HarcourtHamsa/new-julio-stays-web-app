import React from "react";
import { Image } from "@chakra-ui/react";
import reactSVG from "../../assets/images/whiteLogo.png";

function WhiteLogo({ size, width, height }) {
  return <Image src={reactSVG} alt="julio stays logo" h={"100"} w={"100"} />;
}

export default WhiteLogo;
