import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div style={styles.loader}>
      <div>
        <Spinner
          thickness="5px"
          speed="0.85s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </div>
    </div>
  );
};

const styles = {
  loader: {
    height: "100vh",
    backgroundColor: "rgb(250, 250, 250)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Loader;
