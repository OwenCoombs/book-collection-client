import { Link } from "react-router-dom"
import { createUser } from "./apis"
import { useState, useContext } from "react"


// const CreateUser = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [email, setEmial] = useState('')
//   const [lastName, setLastName] = useState('')

//   const submit = () => {
//     createUser({username, email, password, firstName, lastName})
//   }

//   return (
//     <div>

//     </div>
//   )

// }



function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')

  const submit = () => {
    createUser({username, email, password, firstName, lastName})
  }

  return (
  <>
    <div className="p-5 text-center">
      <h1>Sign Up</h1>
    </div>
    <div className="text-center">
      <input
      onChange={e => setUsername(e.target.value)} 
      value={username}
      placeholder="Enter Username"
      />
    </div>
    <div className="text-center">
      <input
      onChange={e => setFirstName(e.target.value)} 
      value={firstName}
      placeholder="Enter First Name"
      />
    </div>
    <div className="text-center">
      <input
      onChange={e => setLastName(e.target.value)} 
      value={lastName}
      placeholder="Enter Last Name"
      />
    </div>
    <div className="text-center">
      <input
      onChange={e => setEmail(e.target.value)} 
      value={email}
      placeholder="Enter Email"
      />
    </div>
    <div className="text-center">
      <input style={{marginTop: 20}} 
      type="password"
      onChange={e => setPassword(e.target.value)}
      value={password}
      placeholder="Enter Password"
      />
    </div>
    <div className="text-center">
      <button 
      style={{marginTop: 20}}
      onClick={() => submit()}
      >Sign Up</button>
    </div>
    <div className="text-center">
      <Link to='/login'>Already have an account? Click here!</Link>
    </div>
  </>
  )
}


export default SignUp