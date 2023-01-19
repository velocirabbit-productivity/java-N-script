import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom'

import App from '../client/App';
import SignIn from '../client/components/SignIn';
import SignUp from '../client/components/SignUp';
import { BrowserRouter } from "react-router-dom";
 
describe('Java-N-script testing React components', () => {

    describe('Signin and Signup', () => {
      let signin, signup;

      beforeEach(() => {

        signin = render(
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}/>
          </Routes>
        </BrowserRouter>
        );

        signup = render(
          <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
        </BrowserRouter>
        );
      });
  
      test('Signin and Signup displays Welcome message', () => {
        expect(screen.getByText('Java-N-Script')).toBeInTheDocument();  
        
      });
      
      test('Welcome message is in h1 header for signin', () => {
        expect(signin.getByRole('heading',{level: 1}).textContent).toBe('Java-N-Script');
      });

      test('Welcome message is in h1 header for signup', () => {
         expect(signup.getByRole('heading',{level: 1}).textContent).toBe('Java-N-Script');
       });
    });
  
});