import React, {useState, useEffect} from 'react';
import {withFormik, Form} from 'formik';
import axios from 'axios';

const LoginForm = ({ values, status }) => {
    const [login, setLogin] = useState([]);

    useEffect(() => {
        if (status) {
            setLogin([...login, status]);
        }
    },[status]);

    return (
        <div className="login-form">
            <Form>
                <h1>GET STARTED</h1>

                <button type="submit">I AM A GLOBAL SUPPORTER</button>

                <button type="submit">I AM A CONSERVATION ORGANIZATION</button>

                <button className="button3" type="submit">ALREADY HAVE AN ACCOUNT?</button>
            </Form>
        </div>
    );
};

const FormikLoginForm = withFormik({

    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res));
    }

})(LoginForm);

export default FormikLoginForm;