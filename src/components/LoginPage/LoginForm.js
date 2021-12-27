import React, {useState} from 'react'
import img from '../../images/logo/1.jpg'
import {LoginContainer, LoginWrapper, LoginRow, Column1, Column2,Img ,ImgWrap} from './LoginElements'
import './LoginElements.css'


const LoginForm = ({Login,error}) => {

    const [details,setDetails] = useState ({username:"", password:""});
    
    const submitHandler = e =>{
        e.preventDefault(); // doesnt load itself
        Login(details);
    }



    return (
        <LoginContainer>
           <LoginWrapper>
               <LoginRow imgStart='false'>
                   <Column1>
                   <ImgWrap>
                   <Img src={img}/>
                   </ImgWrap>
                   </Column1>
                   <Column2>
                        <form onSubmit={submitHandler}>
                            <div className='inner'>
                                <h2>Login:</h2>
                                {(error!=="") ? (<div className='error'>{error}</div>): "" }
                                <div className='group'>
                                    <label htmlFor='username'>Username:</label>
                                    <input type = "text" name='user' id='user' onChange={e =>setDetails({...details, username: e.target.value})} value={details.user}/>
                                </div>

                                <div className='group'>
                                    <label htmlFor='password'>Password:</label>
                                    <input type = "password" name='pass' id='pass'onChange={e =>setDetails({...details, password: e.target.value})} value={details.pass}/>
                                </div>
                                <input type="submit" value = "Sign In"/>
                            </div>
                        </form>
                   </Column2>
               </LoginRow>
               </LoginWrapper> 
            </LoginContainer>   
    )
}

export default LoginForm
