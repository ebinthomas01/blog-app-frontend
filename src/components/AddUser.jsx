import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {
    
    
  return (
    <div>
        <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label fomr-label">Name</label>
                    <input type="text" className="form-control"  />
                  </div>

                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Date Of Birth</label>
                  <input type="date" className="form-control" />
                  </div>
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Mobile</label>
                  <input type="text" className="form-control"  />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Address</label>
                  <textarea name="address" id="" className="form-control"  ></textarea>
                  </div>
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label form-label">District</label>
                  <select name="blood" id="" className="form-control">
                    <option value="	Alappuzha">	Alappuzha</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasaragod">	Kasaragod</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Wayanad">Wayanad</option>
                  </select>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Place</label>
                  <input type="text" className="form-control" name='place'  />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Email</label>
                  <input type="text" className="form-control" name='email'  />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">User Name</label>
                  <input type="text" className="form-control" name='username' />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Password</label>
                  <input type="text" className="form-control" name='password'  />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Confirm Password</label>
                  <input type="text" className="form-control" name='confirmpass' />
                  </div>
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-warning"  > CREATE ACCOUNT</button>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <a href='/'> Go Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AddUser