import { useRef } from "react";


const RefForm2 = () => {
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef =useRef(null);

    const handleFormSubmit =e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                ref={nameRef}
                type="text" name="name" />
                <br/>
                <input 
                ref={emailRef}
                type="email" name="email"/>
                <br/>
                <input 
                ref={passwordRef}
                type="password" name="password"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm2;