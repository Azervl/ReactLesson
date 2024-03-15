import React from 'react'
import { useState } from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import Header from '../components/Header'



function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const onHandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const sendData = () => {
        console.log(user)
    }
    return (
        <div className='app'>
            <div className="form">
                <Header></Header>
                <Input type="text"
                    name="username"
                    placeholder="Username.."
                    onChange={(event) => onHandleChange(event)} />
                <Input type="text"
                    name="email"
                    placeholder="Email.."
                    onChange={(event) => onHandleChange(event)} />
                <Input type="password"
                    name="password"
                    placeholder="Password.."
                    onChange={(event) => onHandleChange(event)} />
                <Button text="Register"
                    className="primary"
                    onClick={sendData} />
            </div>
        </div>
    )
}

export default Register