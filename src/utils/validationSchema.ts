import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("this field is required"),
  author: yup.string().required("this field is required"),
  description: yup.string(),
});
