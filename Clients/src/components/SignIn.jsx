import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormControl from "@mui/material/FormControl";
import { Paper } from "@mui/material";
import Dashboard from "./Dashboard";

function SignIn() {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();
  const paperStyle = {
    padding: "30px 20px",
    width: "30vw",
    margin: "50px auto",
  };
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => {
        console.log("Response object:", r);
        console.log("Response data:", r.data);
        if (r.data.detail === "Authentication credentials were not provided.") {
          alert("Invalid Credentials");
        } else {
          localStorage.setItem("secret", secret);
          localStorage.setItem("username", username);
          navigate("/dashboard");
        }
      })
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };
  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        backgroundImage:
          'url("https://i.pinimg.com/736x/88/88/b7/8888b790aa3c41cb9136603a2f3e4e39.jpg")',
        paddingTop: "10vh",
      }}
    >
      <Paper style={paperStyle} elevation={10}>
        <form onSubmit={onLogin}>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>

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

export default SignIn;
