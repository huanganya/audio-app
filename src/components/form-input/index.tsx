import React, { FC, forwardRef } from "react";
import { useField, useFormikContext } from "formik";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { InputItem, List } from "@ant-design/react-native";
import { generateValidator, ValidatorType } from "@src/utils/validators";
import FormError from "@src/components/form-error";
// import { TextInput } from "../TextInput";

export interface FormFieldProps {
  label?: string;
  hint?: string;
  isMandatory?: boolean;
  hiddenAsterisk?: boolean;
  testId: string;
}

interface FormInputProps extends FormFieldProps {
  type?:
    | "number"
    | "text"
    | "password"
    | "bankCard"
    | "phone"
    | "digit"
    | KeyboardTypeOptions
    | undefined;
  isDisabled?: boolean;
  disableAutoComplete?: boolean;
  name: string;
  customValidator?: ValidatorType;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const FormInput: FC<FormInputProps> = forwardRef(
  (
    {
      type = "text",
      label,
      hint,
      isMandatory = false,
      isDisabled = false,
      name,
      testId,
      customValidator,
      onChange,
      onBlur,
    },
    ref,
  ) => {
    const [field, meta] = useField({ name, validate: customValidator });
    const { handleBlur, handleChange } = useFormikContext();
    console.log(name, "meta:", meta);
    const borderColor =
      meta.touched && meta.error ? { borderColor: "red" } : {};
    return (
      <View
        style={{
          height: 70,
        }}>
        <Text data-testid={`${testId}-label`}>
          {label}
          {!isMandatory && <Text style={{ color: "red" }}>*</Text>}
        </Text>
        <TextInput
          style={{
            height: 30,
            borderRadius: 5,
            borderWidth: StyleSheet.hairlineWidth,
            padding: 8,
            ...borderColor,
          }}
          secureTextEntry={type === "password"}
          error={meta.touched && meta.error ? true : false}
          name={name}
          disabled={isDisabled}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          placeholder={hint}
          data-testid={`${testId}-input`}
          ref={ref}
        />
        <FormError meta={meta} testId={testId} />
      </View>
    );
  },
);
