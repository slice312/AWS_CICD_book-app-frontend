import {useFormik} from "formik";
import css from "./styles.module.scss";
import {Button} from "@/shared/ui/button";
import {useNavigate} from "react-router-dom";

import {signUpUserWithEmail} from "@/shared/lib/cognito";


export const Home = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: ""
        },
        onSubmit: async (values, {resetForm}) => {
            const response = await signUpUserWithEmail(values.name, values.email, values.password);
            console.log(response);
            navigate("/confirm-code");
        }
    });


    return (
        <div>
            <form className={css.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="">
                    email
                    <input
                        type="text"
                        {...formik.getFieldProps("email")}
                    />
                </label>
                <label htmlFor="">
                    name
                    <input
                        type="text"
                        {...formik.getFieldProps("name")}
                    />
                </label>
                <label htmlFor="">
                    password
                    <input
                        type="text"
                        {...formik.getFieldProps("password")}
                    />
                </label>

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
            <Button linkTo={"/confirm-code"}>
                Confirm Code
            </Button>
        </div>
    );
};