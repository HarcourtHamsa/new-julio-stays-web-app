import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function SubmitButton({ label, rest }) {
  return (
    <Button
      type="submit"
      fontSize="sm"
      fontWeight="400"
      color="white"
      rounded="0"
      bg='black'
      size="lg"
      {...rest}
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
