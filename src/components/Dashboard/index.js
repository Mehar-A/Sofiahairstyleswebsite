import React , {useState}from 'react';
import {BtnWrap} from './DashboardElemetns';
import { Button2 } from '../ButtomElements';

const Dashboard = ({Logout}) => {
    const [details,setDetails] = useState ({username:"", password:""});

    const submitHandler = e =>{
        e.preventDefault(); // doesnt load itself
        Logout(details);
    }
    return (
        <div>
            <h2>Welcome to Dashboard</h2>

            <BtnWrap>
                <Button2 onClick={submitHandler} smooth={true} duration={500} spy={true} exact="true" offset={0}>Logout</Button2>
            </BtnWrap>

        </div>
    )
}

export default Dashboard
