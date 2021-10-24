import React, { FC } from "react";
import { View } from "react-native";
import { useFormik, FormikProvider } from "formik";
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from "@src/constants/navigation-names";
import { ApiRequestStatus } from "@src/constants/api-request-status";
import { useRegisterEffect } from "./useRegisterEffect";
import { Button } from "@ant-design/react-native";
import {
  emailValidator,
  passwordValidator,
  userNameValidator,
} from "@src/utils/validators";
import { FormInput } from "@src/components/form-input";
import styles from "./styles";
import { ScrollContainer } from "@src/components/scroll-container";

const Register: FC = () => {
  const { registerUser, status } = useRegisterEffect();
  const { navigate } = useNavigation();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: data => {
      console.log("data1111", JSON.stringify(data));
      registerUser(data.userName, data.email, data.password);
    },
  });
  if (status === ApiRequestStatus.isSuccessful) {
    setTimeout(() => {
      navigate(NavigationNames.Dashboard);
    }, 50);
  }

  return (
    <FormikProvider value={formik}>
      <ScrollContainer>
        <View style={styles.form}>
          <FormInput
            label="Username"
            hint="Please input username"
            name="userName"
            testId="register-username"
            customValidator={userNameValidator}
          />
          <FormInput
            label="Email"
            hint="Please input email"
            name="email"
            testId="register-email"
            customValidator={emailValidator}
          />
          <FormInput
            type="password"
            label="Password"
            hint="Please input password"
            name="password"
            testId="register-password"
            customValidator={passwordValidator}
          />
          <Button
            loading={status === ApiRequestStatus.isLoading}
            disabled={!(formik.dirty && formik.isValid)}
            onPress={formik.handleSubmit}
            type="primary">
            Register
          </Button>
        </View>
      </ScrollContainer>
    </FormikProvider>
  );
};

export default Register;
