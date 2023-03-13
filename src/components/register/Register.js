import React  , {useState}from 'react'
import './Register.css'
import axios from "axios"

import { useHistory } from 'react-router-dom';
export default function Register() {
    const history = useHistory();
    const [user , setUser] = useState({
        name : "",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=e=>{
        const{name , value}  = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {name , email , password }= user
        if(name && email && password){
            if(password === user.reEnterPassword){
                alert("posted")
                axios.post("http://localhost:8000/register" , user )
                .then(res => console.log(res))
            }
        }else{
            alert("ps")
        }
    }

    return (
        <div className='register'>
            
            <h1>login</h1>
            <input type="text" name ="name" value={user.name}placeholder="enter your name" onChange={handleChange}></input>
            <input type="email"name ="email" value={user.email} placeholder="enter your email" onChange={handleChange}></input>
            <input type="password"name ="password" value={user.password} placeholder="enter your Password" onChange={handleChange}></input>
            <input type="password"name ="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your Password" onChange={handleChange}></input>
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={()=> history.push("/login")}>Login</div>
        </div>
    )
}
