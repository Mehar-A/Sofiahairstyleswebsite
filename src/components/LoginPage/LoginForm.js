import React, {useState} from 'react'


const LoginForm = ({Login}) => {

    const [details,SetDetails] = useState ({username:"", password:""});
    
    const submitHandler = e =>{
        e.preventDefault(); // doesnt load itself
        // console.log(details);
        console.log(Login(details));
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='inner'>
                <h2>Login</h2>
                {/*Error */}
                <div className='group'>
                    <label htmlFor='username'>username</label>
                    <input type = "text" name='user' id='user'/>
                </div>

                <div className='group'>
                    <label htmlFor='password'>password</label>
                    <input type = "text" name='pass' id='pass'/>
                </div>
                <input type="submit" value = "Sign In"/>
            </div>
        </form>
    )
}

export default LoginForm
