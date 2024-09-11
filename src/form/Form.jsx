import React,{useState} from 'react'


function Form() {
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(event)=>{
    const {name,value}=event.target
    setInput([...input,[name]=value])
  }
  return (
    <>
    <form action="">
      <label htmlFor="">Name : </label>
      <input type="text" name='name' value={input.name} onChange={handleChange}/>
      <label htmlFor="">Email : </label>
      <input type="email" name='email' value={input.email} onChange={handleChange}/>
      <label htmlFor="">Password : </label>
      <input type="password" name='password' value={input.password} onChange={handleChange}/>
    </form>
    </>
  )
}

export default Form