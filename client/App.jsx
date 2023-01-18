import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import all components here
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx'
import Layout from './components/Layout.jsx'
import ShopList from './components/ShopList.jsx'
import Protected from "./components/Protected.jsx";

import { useAuth } from "./context/useAuthContext.jsx";

function App() {
  console.log(useAuth());

    return (
        <div>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route exact path="/home" element={<Protected><HomePage/></Protected>}/>
          <Route exact path="/shoplist" element={<Protected><ShopList/></Protected>}/>
        </Routes >
        {/* <SignUp /> */}
        </div>
    )
}

 
// sign in page
 //username
 //password
 //submit button
// sign up page
 //username
 //password
 //submit button
// homepage
// default state to 0 for every category
 //num for food, drinks, space, sound, outlets, parking, wifi
   //onChange(handleChange) for each category handleChange updates state
 //submit sends get request referencing state to backend
   //onSubmit (event)
 //
 


export default App;