import useInputState from "../hooks/useInputState";

const HookForm = () => {
// const [name,handleNameChange ]=useInputState('Rojoni')
const emailState=useInputState('rojoni@.com')

const handleChange = e =>{
    console.log('Form data', emailState.value)
    e.preventDefault();
}
    return (
        <div onSubmit={handleChange}>
            <form>
                {/* <input value={name} onChange={handleNameChange}        type="text" name="name" /> */}
                <br/>
                <input {...emailState} type="email" name="email" />
                <br/>
                <input type="password" name="password"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;