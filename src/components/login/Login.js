import axios from 'axios'
import React,{useState} from 'react'


import './Login.css'


import { useHistory } from 'react-router-dom';


export default function Login(props) {

    const { user1 , handleLogin} = props;
    const history = useHistory();

    const [user , setUser] = useState({
     
        email:"",
        password:"",
      
    })

    const handleChange=e=>{
        const{name , value}  = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }


    const login=()=>{
        axios.post("http://localhost:8000/login" , user )
         .then(res => {console.log(res)
                      alert("Login succesfull !")
                      handleLogin()
                      history.push("/")
        })
    }

  return (
    <div className='login'>
        
        <h1>login</h1>
        <input type="email" name ="email" value={user.email}  onChange={handleChange} placeholder="enter your email"></input>
        <input type="password" name ="password" value={user.password}  onChange={handleChange} placeholder="enter your Password"></input>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={()=> history.push('/register')}>Register</div>
    </div>
  )
}
