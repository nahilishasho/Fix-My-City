import React from 'react';
import Logo from '../Assets/Logo.PNG';
import TextField from "@material-ui/core/TextField"
const Login = () =>{
    return (
        <div className = "w-screen h-screen bg-blue fixed flex place-content-center  ">
            <div className = " w-[450px] h-[570px] bg-white  -mt-[-22px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.255) z-100 rounded place-content-center" >
                <div className = '-mt-[-50px] -ml-[-149px] -mb-[-20px]'>
                   <img src = {Logo} alt = "this is an "/>
                </div>
                <div>
                <p class = 'text-center font-["Mulish"]'>
                    <h1 className = 'text-3xl font-bold '>Log In To FixMyCity</h1>
                    <p className = 'text-xs -mt-[-10px]'>ENTER YOUR USERNAME AND PASSWORD BELOW</p>
                </p>
                </div>
                <div className = '-mt-[-50px] -ml-[-80px] w-screen' >
                     <form >
                     <div>
                        <label >Username</label><p/>
                        <input className="w-[290px] h-[30px] bg-gray-200 rounded border-solid" 
                            type = "text" 
                        />
  
                    </div> 
                    <div>
                        <label>Password</label><p/>
                        <input className="w-[290px] h-[30px] bg-gray-200 rounded border-solid" 
                           type = "password" 
                     
                        />
  
                    </div> 

                     </form>
                     <div>
                     <button type = "button" className = "bg-blue w-[200px] h-[40px] rounded -mt-[-30px] -ml-[-45px]"><p className = "text-white font-bold">Login</p></button>  
                      <p className = "text-blue text-sl -ml-[-85px]">Forgot password?</p>
                     </div>
                     
                </div>
                
            
            </div>
        </div>
    );
}
export default Login;