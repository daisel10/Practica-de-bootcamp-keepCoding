import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormField from "../common/FormField.js";
import Button from "../common/Button.js"
import { login, relogin } from "../petitions/service"

import './css/LoginPage.css'
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const [remember,setRemember] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const resetError = () => setError(null);
    
    const isButtonEnabled = useMemo(()=>{
        return email && password;
        },[email,password])

        

    const hadleSubimit = async event =>{
        event.preventDefault();
         
        try {
            console.log(relogin())
            await login({ email, password }, remember);
            const to = location.state?.from?.pathname || '/adverts';
            navigate(to, { replace: true });
        } catch(error){
            setError(error);
        }
    }
    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Log in to Adverts</h1>
            <form onSubmit={hadleSubimit}>
                <FormField
                type="email"
                name="email"
                label="email"
                className="loginForm-field"
                onChange={handleChangeEmail}
                value={email}
                />
                <FormField
                type="password"
                name="password"
                label="password"
                className="loginForm-field"
                onChange={handleChangePassword}
                value={password}
                />
                <input
                type="checkbox" 
                id="remember" 
                name="remember" 
                onClick={()=>setRemember(!remember)}
                disabled={!isButtonEnabled}/>
                
                <label name="remember">
                you want us to remember you</label>
                
                
                <Button
                type="submit"
                variant="primary"
                className="loginForm-submit"
                disabled={!isButtonEnabled}
                >   
                Log in
                </Button>
            </form>
            {error && (
            <div onClick={resetError} className="loginPage-error">
            {error.message}
            </div>)}
        </div>
    )
}
export default LoginPage