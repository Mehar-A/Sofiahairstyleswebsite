import React, {useState} from 'react'
import Dashboard from '../Dashboard';
import Deals from '../Deals';
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
        if((details.username == adminUser.username) && (details.password == adminUser.password)){
            console.log("we are loggging in...");
            SetUser({
                username: details.username,
                password: details.password
            });
        }else{
            console.log("not logged in");
            SetError("username or password incorrect!!");
        }
    }

    const Logout = details=>{
        console.log("we have logout");
        console.log(details.username);
        SetUser({
            username: details.username,
            password: details.password
        });
    }

        // understand whats happening here??
    return (
        <div id = "Sigin">
            {(user.username !=="") ?  (<Dashboard Logout = {Logout}/>):(<LoginForm Login={Login} error={error}/>)}
        </div>
    )
}

export default LoginPage
