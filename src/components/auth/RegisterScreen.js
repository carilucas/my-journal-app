import React from 'react';
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
   return (
      <div>
         <h3 className="auth__title mb-5">Register</h3>
            <input 
               className="auth__input"
               type="text"
               name="name"
               placeholder="Name"
               autoComplete="off"
            />
            <input 
               className="auth__input"
               type="text"
               name="email"
               placeholder="Email"
               autoComplete="off"
            />

            <input 
               className="auth__input"
               type="password"
               name="password"
               placeholder="Password"
            />
            
            <input 
               className="auth__input"
               type="password"
               name="password2"
               placeholder="Confirm Password"
            />

            <button
               type="submit"
               className="btn btn-primary btn-block"
            >
               Register
            </button>  

            <Link 
               to="/auth/login"   
               className="link mt-5" 
            >
               Already register
            </Link>
      </div>
   )
}
