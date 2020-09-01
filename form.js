import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { fetchLogin } from "../../grpc/actions";

import { TextFormField } from "../FormFields";

import {
    FormControl,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    InputLabel,
    ButtonGroup
} from "@material-ui/core";

import { validationSchema } from "./validationSchema";

const LoginMainForm = ({ history, setResetPassword }) => {
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    return (
        <>
            <Typography variant="h4" style={{ marginBottom: "30px" }}>
                Login to dashboard
            </Typography>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    remember: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);

                    fetchLogin(values.email, values.password, values.remember)
                        .then(response => {
                            history.push("/");
                            localStorage.setItem("authToken", response.token);
                        })
                        .catch(error => {
                            if (
                                error.message ===
                                "Email or password is incorrect"
                            ) {
                                setInvalidCredentials(true);
                            }
                            setSubmitting(false);
                        });
                }}
            >
                {({ values, handleChange, isSubmitting }) => (
                    <Form>
                        <FormControl
                            className="simple-field"
                            style={{ marginTop: "20px" }}
                        >
                            <InputLabel>Email</InputLabel>
                            <Field name="email" component={TextFormField} />
                        </FormControl>
                        <FormControl className="simple-field">
                            <InputLabel>Password</InputLabel>
                            <Field
                                name="password"
                                inputProps={{ type: "password" }}
                                component={TextFormField}
                            />
                        </FormControl>
                        {invalidCredentials && (
                            <p>
                                <strong>
                                    <em style={{ color: "red" }}>
                                        Wrong email or password
                                    </em>
                                </strong>
                            </p>
                        )}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remember"
                                    checked={values.remember}
                                    onChange={handleChange}
                                    color="primary"
                                />
                            }
                            label="Запомнить"
                        />
                        <ButtonGroup fullWidth>
                            <Button
                                variant="text"
                                color="default"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "auto"
                                }}
                                onClick={() => setResetPassword(true)}
                            >
                                Forgot your password?
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={isSubmitting}
                            >
                                Вход
                            </Button>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default withRouter(LoginMainForm);
