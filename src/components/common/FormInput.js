import React from "react";
import PropTypes from "prop-types";
import { FormControl, Input } from "@chakra-ui/react";

function FormInput({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  variant,
  ...rest
}) {
  return (
    <FormControl id={id}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        variant={variant ?? "filled"}
        size="md"
        fontSize="sm"
        borderRadius="sm"
        required
        {...rest}
      />
    </FormControl>
  );
}

FormInput.defaultProps = {
  type: "text",
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
