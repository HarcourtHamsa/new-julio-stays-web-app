import React from "react";

import { Link as ReactLink } from "react-router-dom";
// p={2}
// href={navItem.href ?? "#"}
// fontWeight={"normal"}
// fontSize="sm"
// color={"black"}
// _hover={{
//   textDecoration: "none",
//   color: linkHoverColor,
// }}

function CustomLink({ to, label, color }) {
  return (
    <ReactLink to={to} style={styles.link(color)}>
      {label}
    </ReactLink>
  );
}

const styles = {
  link: (color) => ({
    padding: "2px",
    color: color ?? "white",
    fontSize: "0.875rem",
    textDecoration: "none",
  }),
};

export default CustomLink;
