import React, { FC } from "react";
import { FieldMetaProps } from "formik";
import { Text } from "react-native";

interface FormErrorProps {
  meta: FieldMetaProps<unknown>;
  testId: string;
}

const FormError: FC<FormErrorProps> = ({ meta, testId }) => {
  if (meta.touched && meta.error) {
    return (
      <Text style={{ color: "red" }} data-testid={`${testId}-error`}>
        {meta.error}
      </Text>
    );
  }
  return null;
};

export default FormError;
