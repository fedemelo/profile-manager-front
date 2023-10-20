import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LoginPage.css'

export default function LoginPage() {
    return <Container id="loginContainer">
        <p className="loginText"> <FormattedMessage id="login" /></p>
        <div id="loginBox">
            <LoginForm />
        </div>
    </Container>
}

const LoginForm = () => {

    const [formValues, setFormValues] = React.useState({
        login: '',
        password: '',
    })

    const [formValueIsInvalid, setFormValueIsInvalid] = React.useState({
        userName: false,
        password: false,
    })

    const clickSubmit = async () => {

        // const response = await fetch('http://localhost:3001/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formValues),
        // })
        // const data = await response.json()

        // if (data.status === "success") {
        //     window.location.href = "/home"
        // } else {
        //     setFormValueIsInvalid({
        //         userName: true,
        //         password: true,
        //     })
        // }

        window.location.href = "/home"
    }

    const clickCancel = () => {
        setFormValues({
            login: '',
            password: '',
        })
    }

    return <Form id="formBox">
        <Form.Group>
            <Form.Label className="loginText"><FormattedMessage id="username" /></Form.Label>
            <Form.Control
                id='userName'
                onChange={(event) => setFormValues({
                    ...formValues,
                    login: event.target.value
                })}
                value={formValues.login}
                isInvalid={formValueIsInvalid.userName}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label className="loginText"><FormattedMessage id="password" /></Form.Label>
            <Form.Control
                id='password'
                type="password"
                onChange={(event) => setFormValues({
                    ...formValues,
                    password: event.target.value
                })}
                value={formValues.password}
                isInvalid={formValueIsInvalid.password}
            />
        </Form.Group>
        <Container id="loginButtonsText">
            <Container id="loginButtons">
                <Button id="submitButton" variant="success btn-lg" onClick={clickSubmit}>
                    <FormattedMessage id="loginButton" />
                </Button>
                <Button id="cancelButton" variant="danger btn-lg" onClick={clickCancel}>
                    <FormattedMessage id="cancelButton" />
                </Button>
            </Container>
            <Form.Text id="errorAuth" className='loginText'>{(formValueIsInvalid.userName || formValueIsInvalid.password) ? "Error de autenticación. Revise sus credenciales" : ""}</Form.Text>
        </Container>
    </Form>
}
