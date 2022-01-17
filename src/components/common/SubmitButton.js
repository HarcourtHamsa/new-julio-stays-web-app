import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function SubmitButton({ label, loading, rest }) {
  return (
    <Button
      type="submit"
      fontSize="sm"
      fontWeight="400"
      color="white"
      bg="teal.500"
      size="lg"
      mt="5"
      isLoading={loading}
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
