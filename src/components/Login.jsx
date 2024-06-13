import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState(
        {
            "email":"",
            "password":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/signin", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") 
                    {
                    alert("Successfully Signed in")
                }
                else 
                {
                    alert("Error")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
        }
  return (
    <div>
        <div className="container1-fluid">
            <h2>SnapBook</h2>
                
            <img  class="img-fluid"
          src="https://clevertap.com/wp-content/uploads/2019/07/FTUE-blog-header1.png"  width="100%"/>
          
       <div className="container1 ">
            <div className="row g-3">
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 ">
                    <label htmlFor="" className="label form-label">Enter Email Id</label>
                    <input type="text" className="form-control" placeholder='email-id' name='email' value={data.email} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label form-label">Enter Password</label>
                    <input type="text" className="form-control" placeholder='password' name='password' value={data.password} onChange={inputHandler}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readValue}>Login</button>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                   <a href='/AddUser' > Sign Up</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login