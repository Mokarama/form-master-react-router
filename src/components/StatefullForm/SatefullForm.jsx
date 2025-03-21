import { useState } from "react";

const SatefullForm = () => {

const [name, setName] =useState('shanta');
const [email, setEmail] =useState(null);
const [password, setPassword] =useState(null);
const [error, setError] =useState('')

    const handleClick =e =>{
        if(password.length<6){
            setError('password must be 6 characters or longer')
        }
        else{
            setError('')
        }
       e.preventDefault();
       console.log(name,email,password)   
    }

    const handleNameChange =e =>{
        console.log(e.target.value);
        setName(e.target.value);
        
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);

    }
    const handlePasswordChange =e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleClick}>
                <input 
                onChange={handleNameChange}
                type="text" value={name} name="name"  />
                <br/>
                <input 
                onChange={handleEmailChange }
                type="email" name="email" required/>
                <br/>
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" required/>
                <br/>
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default SatefullForm;