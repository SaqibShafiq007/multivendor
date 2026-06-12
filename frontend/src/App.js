import React from 'react'
import "./App.css"
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { LoginPage , SignupPage} from  "./routes/Routes.js";
function App() {
  return (
    <BrowserRouter>   {/* enables routing for whole app */}
       <Routes>   {/* switches bw pages*/}
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route path = '/sign-up' element = {<SignupPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}


export default App;