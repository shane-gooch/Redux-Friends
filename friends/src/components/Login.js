import React from "react";
import { withFormik, Form, Field, FormikBag } from "formik";
import axios from "axios";

function Login() {
  return (
    <div className="loginForm">
      <h2>Log In</h2>
      <Form>
        <Field type="text" name="username" placeholder="Enter Username" />
        <Field type="password" name="password" placeholder="Enter Password" />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit: (values, formikBag) => {
    console.log(formikBag.props);
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, values)
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
        formikBag.props.history.push("/friendslist");
      })
      .catch(err => console.log(err.response.data));
  }
})(Login);
