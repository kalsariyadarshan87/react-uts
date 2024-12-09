import React, { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from './Firebase';


const auth=getAuth(app)

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  function Register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(`success`)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <div>
      <h1>Register</h1>
      <input type="text" value={email} name="email" onChange={(e) => { setemail(e.target.value) }} />
      <input type="text" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={Register}>click</button>
    </div>
  )
}
