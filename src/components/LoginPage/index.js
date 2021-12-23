import React, {useState} from 'react'
import Dashboard from '../Dashboard';
import LoginForm from './LoginForm';

const LoginPage = () => {

    const adminUser = {
        username: "sofiajure",
        password: "admin123"
    }

    const [user,SetUser] = useState({username:"", password:""});
    const [error,SetError] = useState("");

    const Login = details=>{
        console.log(details);
    }

    const Logout = ()=>{
        console.log("logout");
    }

    return (
        <div id = "Sigin">
            {(user.username !=="") ?  (<Dashboard/>): (<LoginForm Login={Login}/>)}
        </div>
    )
}

export default LoginPage
