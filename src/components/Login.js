import { useState } from 'react';
import Header from './Header'

const Login =  ()=>{

  const [isSignInForm,setisSignInForm] = useState(true);
  const togglesigin =  () => {
    setisSignInForm(!isSignInForm);
    console.log("setisSignInForm"+isSignInForm);
  }
  return(
<div>

  <Header/>
<div  className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" alt="Hbg"/>   
        
 </div>
 <div >
  <form  className='absolute w-3/12 p-12 my-36  mx-auto left-0 right-0 bg-black text-white bg-opacity-70' >
  <h1 className='p-2 m-2 font-bold text-3xl' >{isSignInForm?"Sign In":"Sign Up"}</h1>
{!isSignInForm && (
  <input type="text" placeholder='enter Your Name ' className='p-2 m-2 w-full bg-gray-700 rounded-lg'></input>)
}
  <input type="text" placeholder='enter Email address or number' className='p-2 m-2 w-full bg-gray-700 rounded-lg'></input>
  <input type="password" placeholder='enter Password'  className='p-2 m-2 w-full bg-gray-700 rounded-lg'></input>
  <button type="submit" className='p-4 m-4 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
  <p className='p-2 m-2'  onClick={togglesigin}>{isSignInForm?"New to Netflix? Sign up now.":"if loggined user ?plz Sign In"}</p>
  </form>
</div>

</div>


    )
};
export default Login;