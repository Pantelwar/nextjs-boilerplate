export default function getErrorProps(
  formik: Record<"touched" | "errors" | "values", Record<string, any>>,
  name: string
) {
  if (name in formik.values) {
    return {
      error: Boolean(formik.touched[name] && formik.errors[name]),
      helperText:
        formik.touched[name] && formik.errors[name]
          ? (formik.errors[name] as string)
          : " ",
    };
  }
  return {};
}
