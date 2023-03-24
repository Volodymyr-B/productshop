import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validationSchema";

import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../hooks/redux";
import { createGoodsFetch } from "../store/goods-slice/goods-action";

export const CreateGoods = () => {
  const dispatch = useAppDispatch();
  const [successForm, setsuccessForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      author: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(createGoodsFetch(values));
    },
  });
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        className="flex flex-col gap-10 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" className="text-center">
          Create new product
        </Typography>
        <TextField
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="author"
          label="Author"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.author && Boolean(errors.author)}
          helperText={touched.author && errors.author}
        />
        <TextField
          id="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          submit
        </Button>
        <Snackbar
          open={successForm}
          autoHideDuration={4000}
          onClose={() => setsuccessForm(false)}
        >
          <Alert severity="success" sx={{ width: "400px" }}>
            Success !
          </Alert>
        </Snackbar>
        <Snackbar
          open={errorForm}
          autoHideDuration={4000}
          onClose={() => setErrorForm(false)}
        >
          <Alert severity="error" sx={{ width: "400px" }}>
            Error, please try again later!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
