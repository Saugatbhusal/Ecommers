import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import companilogo from "../static/companilogo.JPG";
import flag from "../static/flag.JPG";

// import { useState } from "react"
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

function SignupSeller() {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const navigate = useNavigate()

  return (
    <div>
      <div className="stickybar ">
        <nav className="navbar bg-body-tertiary fixed-top  p-0 ">
          <div
            className="container-fluid d-flex  "
            style={{ backgroundColor: "red" }}
          >
            {/* Left side: Map of Nepal */}
            <div className="left-content bg-danger ">
              <img
                src={companilogo}
                alt="Logo"
                className="map-image"
                style={{ width: "90px", height: "auto" }}
              />
            </div>

            {/* Right side: Logo */}
            <div className="right-content">
              <img
                src={flag}
                alt="Map of Nepal"
                className="logo-image map-image rounded-circle"
                style={{ width: "30px", height: "auto" }}
              />
            </div>
          </div>
        </nav>
      </div>

      <div
        style={{
          paddingTop: "10%",
          marginBottom: "60px",
          backgroundColor: "yellow",
          paddingBottom: "2%",
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <h1
                className="pb-0"
                style={{ fontFamily: "Abolition", fontSize: "80px" }}
              >
                Become A Classic
              </h1>
              <h1
                className="pt-0"
                style={{ fontFamily: "Abolition", fontSize: "80px" }}
              >
                Seller Today{" "}
              </h1>
              <h5 className="" style={{ fontWeight: "bold" }}>
                Create a Classic seller account now and reach millions of
                customers!
              </h5>
            </div>
            <div className="col-md-6 p-5">
              <div className="p-5" style={{ backgroundColor: "white" }}>
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Login with password
                </h5>
                <br></br>
                <form>
                  <input
                    className="form-control ms-0 me-auto"
                    placeholder="Phone number/Email"
                  ></input>
                  <br></br>
                  <input
                    className="form-control ms-0 me-auto"
                    placeholder="password"
                  ></input>
                  <br></br>
                  <button>Login</button>
                </form>
                <div className="text-end">
                  <a
                    href="#"
                    className="text-end"
                    style={{ fontWeight: "bold" }}
                  >
                    Create a new account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container text-start" style={{ marginBottom: "60px" }}>
        <div className="row" style={{ backgroundColor: "" }}>
          <h2 style={{ fontSize: "70px" }}> Why sell on classic ? </h2>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "" }}>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-start">
              <img src="#" alt="img" style={{ marginRight: "10px" }}></img>
              <div>
                <h6 style={{ lineHeight: "1.5em" }}>Reach</h6>
                <br></br>
                <p>
                  Millions of customers on Classic, Pakistan's most visited
                  shopping destination
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container  align-items-start"
        style={{ background: "#f65607", marginBottom: "50px" }}
      >
        <div className="row">
          <div
            className="col-5"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            <p> Learn About Classic Seller Sign up</p>
            <p> Watch Here &rarr;</p>
          </div>
          <div className="col-7">
            <div className="card" style={{ maxWidth: "18rem" }}></div>
            <video
              src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
              className="card-img-top"
              controls
            ></video>
          </div>
        </div>
      </div>

      {/* <div
        className="container-fluid text-center"
        style={{ background: "#f65607", padding: "50px 0" }}
      >
        <div className="row align-items-center">
          <div className="col-md-8 text-start" style={{ padding: "0 20px" }}>
            <h2 style={{ fontSize: "36px", color: "#fff", fontWeight: "bold" }}>
              What are you waiting for? Start  </h2>
             <h2> selling with Classic today.</h2>
           
          </div>
          <div className="col-md-4 text-end">
            <a
              href="#"
              className="btn btn-light"
              style={{
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div> */}

      <div
        className="container-fluid text-center "
        style={{ background: "#f65607" }}
      >
        <div style={{ margin: "100px" }}>
          <div className="row align-items-center">
            <div className="col-md-4" style={{ fontSize: "36px", color: "#fff", fontWeight: "bold", padding:"0" }}>
              What are you waiting for? Start selling with Classic today
            </div>
            <div className="col-md-4 offset-md-4 ">
            <a
              href="#"
              className="btn btn-light"
              style={{
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              GET STARTED
            </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupSeller;
