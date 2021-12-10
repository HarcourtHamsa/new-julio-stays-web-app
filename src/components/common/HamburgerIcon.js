import React from "react";

function HamburgerIcon() {
  return (
    <div>
      <div style={styles.line}></div>
      <div style={styles.line}></div>
    </div>
  );
}

const styles = {
  line: {
    width: "30px",
    height: "2px",
    backgroundColor: "black",
    margin: "5px",
  },
};

export default HamburgerIcon;
