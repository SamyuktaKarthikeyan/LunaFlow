import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const paperStyle = {
  padding: "30px 20px",
  width: "30vw",
  margin: "40px auto",
};

function SignUp(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  //   const dispatch = useDispatch();
  const register = (e) => {
    // dispatch({
    //   type: "REGISTER",
    //   payload: {
    //     id: new Date().getTime().toString(),
    //     fname: data.fname,
    //     lname: data.lname,
    //     email: data.email,
    //     empno: data.empno,
    //     password: data.password,
    //   },
    // });
    console.log(username, secret, email, first_name, last_name);
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => {
        console.log("Response object:", r);
        console.log("Response data:", r.data);
        if (r.data.message === "This username is taken.") {
          alert("User already exists");
        } else {
          navigate("/signin");
        }
      })
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const ValidateEmail = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      return <div>Enter Email ID</div>;
    } else if (email.match(mailformat)) {
      return <div></div>;
    } else {
      return <div>Invalid Email ID</div>;
    }
  };

  return (
    <div
      style={{
        margin: 0,
        height: "130vh",
        backgroundImage:
          'url("https://png.pngtree.com/background/20210714/original/pngtree-pink-roses-seamless-floral-pattern-background-picture-image_1233694.jpg")',
        backgroundSize: "cover",
        paddingTop: "10vh",
      }}
    >
      <Paper style={paperStyle} elevation={10}>
        <form onSubmit={register}>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <TextField
            id="outlined-basic-fname"
            label="First Name"
            variant="outlined"
            value={first_name}
            helperText={first_name === "" ? "Enter First Name" : ""}
            onChange={(e) => setFirstName(e.target.value)}
          />{" "}
          <br />
          <br />
          <TextField
            id="outlined-basic-lname"
            label="Last Name"
            variant="outlined"
            value={last_name}
            helperText={last_name === "" ? "Enter Last Name" : ""}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            helperText={ValidateEmail()}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic-username"
            label="Username"
            variant="outlined"
            value={username}
            helperText={username === "" ? "Enter Username" : ""}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            id="outlined-basic-password"
            label="Password"
            variant="outlined"
            type="password"
            helperText={secret === "" ? "Enter Password" : ""}
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" type="submit" style={{ width: "10vw" }}>
              Submit
            </Button>
            <br />
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default SignUp;
