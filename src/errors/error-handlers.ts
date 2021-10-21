import { Modal } from "@ant-design/react-native";

type unused = unknown;

export const GenericErrorWrapper =
  () =>
  (
    _: unused,
    __: unused,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor => {
    const descriptorCopy = { ...descriptor };
    const originalMethod = descriptorCopy.value;
    descriptorCopy.value = async (...args: any[]) => {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        Modal.alert("Error", "Something wrong with API calling", [
          { text: "OK" },
        ]);
        throw error;
      }
    };
    return descriptorCopy;
  };
