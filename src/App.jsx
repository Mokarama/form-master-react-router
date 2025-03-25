
import './App.css'
import Grandpa from './components/GrandPa/GrandPa'

import ReusableForm from './components/ReusableForm/ReusableForm'
import HookForm from './HookForm/HookForm'
// import RefForm2 from './RefForm2/RefForm2'
// import RefForm from './RefForm/RefForm'
// import SatefullForm from './components/StatefullForm/SatefullForm'
// import SimpleForm2 from './components/SimpleForm2/SimpleForm2'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit =data =>{
  //     // e.preventDefault();
  //     console.log('sign up data', data);
  //     }
    
  //     const handleUpdateProfile =data=>{
  //       // e.preventDefault();
  //       console.log('update ProFile', data)
  //       }    

  return (
    <>
   
      <h1>Form Master</h1>
     <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleForm2></SimpleForm2> */}
      {/* <SatefullForm></SatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <RefForm2></RefForm2> */}
      {/* <HookForm></HookForm> */}



      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>SignUp</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Profile Update</h2>
          <p>always keep your proFile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
