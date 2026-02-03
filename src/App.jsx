import { useState } from 'react'
import './App.css'
import IntakeForm from './IntakeForm.jsx'
import Profile from './Profile.jsx'

function App() {
  //Setting a state for likes
  const [likes, setLikes] = useState(0)
  //Setting a state for the intake form. 
  const [signUp, setSignUp] = useState(false)
  //Creating a variable for the intake form for conditional rendering. 
  let intake

  //Using a conditional render 
  // (as discussed in class and in the React documentation) 
  // for displaying the intake form.

  if (signUp){
    intake = <IntakeForm/>
    } else {
      intake = <></>
    }

  return (
    <>
    
      <Profile />
      
      <button onClick={() => setLikes((likes) => likes + 1)}>
      Likes: {likes}
      </button>

        <br></br>
        <br></br>

      <button onClick={() => setSignUp((signUp) => !signUp)}>Sign up here for an initial consultation.</button>
       <br></br>
       
       <div>
        {intake}
       </div>

    </>
  )
}

export default App
