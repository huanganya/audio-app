import React, { FC } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik, FormikProvider } from "formik";
import { Button, WhiteSpace } from "@ant-design/react-native";
import { NavigationNames } from "@src/constants/navigation-names";
import { ApiRequestStatus } from "@src/constants/api-request-status";
import { useLoginEffect } from "./useLoginEffect";
import { FormInput } from "@src/components/form-input";
import { emailValidator, passwordValidator } from "@src/utils/validators";
import { ScrollContainer } from "@src/components/scroll-container";
import styles from "./styles";

const Login: FC = () => {
  const { loginUser, status } = useLoginEffect();
  const { navigate } = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: data => {
      loginUser(data.email.toLowerCase(), data.password);
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
          <WhiteSpace size="md" />
          <Button
            loading={status === ApiRequestStatus.isLoading}
            disabled={
              !(formik.dirty && formik.isValid) ||
              status === ApiRequestStatus.isLoading
            }
            onPress={formik.handleSubmit}
            type="primary">
            Login
          </Button>
          <WhiteSpace size="md" />
          <Button
            onPress={() => {
              navigate(NavigationNames.Home);
            }}>
            Go Home Without Login
          </Button>
          <WhiteSpace size="md" />
          <Button
            type="ghost"
            onPress={() => {
              navigate(NavigationNames.Register);
            }}>
            Register
          </Button>
          <WhiteSpace size="md" />
          <Button type="ghost" size="small" onPress={() => {}}>
            Login with Facebook
          </Button>
          <WhiteSpace size="md" />
          <Button type="ghost" size="small" onPress={() => {}}>
            Login with Twitter
          </Button>
          <WhiteSpace size="md" />
          <Button type="ghost" size="small" onPress={() => {}}>
            Login with Gmail
          </Button>
          <WhiteSpace size="md" />
          <Button type="ghost" size="small" onPress={() => {}}>
            Login with Wechat
          </Button>
          <WhiteSpace size="md" />
        </View>
      </ScrollContainer>
    </FormikProvider>
  );
};

export default Login;
