
import React from "react"
import './App.css'

export default function (props) {
  return (
    <div className="Auth-form-container">
      <div className="bg-div">
        <img className ='bgimgs' src= "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="loginImg"/>
      </div>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
          <p className="forgot-password text-right mt-2">
            New user, <a href="Register">register</a>
          </p>
        </div>
      </form>
    </div>
  )
}