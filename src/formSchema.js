import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
  sauce: yup.string().oneOf(["small", "medium", "large", "huge"]),
  sausage: yup.boolean(),
  pepperoni: yup.boolean(),
  extraCheese: yup.boolean(),
  veggies: yup.boolean(),
  specialInstructions: yup.string().trim(),
});

export default FormSchema;
