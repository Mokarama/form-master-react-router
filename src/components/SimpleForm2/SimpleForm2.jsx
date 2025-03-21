
const SimpleForm2 = () => {
    const handelEvent = s =>{
        s.preventDefault();
        console.log(s.target.name.value);
        console.log(s.target.email.value);
        console.log(s.target.email.value)

        console.log('Click me')
      }
      
    return (
        <div>
            <form onSubmit={handelEvent}>
                <input type="text" name="name"/>
                    <br/>
                <input type="email" name="email"/>
                <br/>
                <input type="number" name="phone"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm2;