import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function SubmitButton({ label }) {
  return (
    <Button
      type="submit"
      fontSize="sm"
      fontWeight="400"
      color="gray.500"
      rounded="sm"
    >
      {label}
    </Button>
  );
}

SubmitButton.defaultProps = {
  label: "Submit",
};

SubmitButton.propTypes = {
  label: PropTypes.string,
};

export default SubmitButton;
