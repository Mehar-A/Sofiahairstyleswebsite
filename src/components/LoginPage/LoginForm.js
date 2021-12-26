import React, {useState} from 'react'


const LoginForm = ({Login,error}) => {

    const [details,setDetails] = useState ({username:"", password:""});
    
    const submitHandler = e =>{
        e.preventDefault(); // doesnt load itself
        Login(details);
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='inner'>
                <h2>Login</h2>
                {(error!="") ? (<div className='error'>{error}</div>): "" }
                <div className='group'>
                    <label htmlFor='username'>username</label>
                    <input type = "text" name='user' id='user' onChange={e =>setDetails({...details, username: e.target.value})} value={details.user}/>
                </div>

                <div className='group'>
                    <label htmlFor='password'>password</label>
                    <input type = "password" name='pass' id='pass'onChange={e =>setDetails({...details, password: e.target.value})} value={details.pass}/>
                </div>
                <input type="submit" value = "Sign In"/>
            </div>
        </form>
    )
}

export default LoginForm
