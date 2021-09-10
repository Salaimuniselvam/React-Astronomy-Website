import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import axios from "axios";
import MainPage from "./MainPage";
import { Route, Link as Linker } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgot: {
    marginLeft: theme.spacing(25),
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [state, setState] = useState(true);
  const classes = useStyles();
  const eref = useRef();
  const pref = useRef();

  const validator = async () => {
    try {
      const datas = { email, password };
      axios
        .post("https://backend-for-final-project.herokuapp.com/signin", datas)
        .then((data) => {
          console.log(data);
          if (data.data.errors) {
            setEmailError(data.data.errors.email);
            setPasswordError(data.data.errors.password);
            console.log("error");
          }
          if (data.data.user) {
            setEmail("");
            setPassword("");

            setState(false);
          }
        });
    } catch (err) {
      console.log("error vl");
      console.log(err);
    }
  };

  return (
    <>
      {state && (
        <>
          <Navbar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                className={classes.form}
                onSubmit={(event) => {
                  event.preventDefault();
                  return validator();
                }}
                noValidate
              >
                <input
                  name="Email"
                  placeholder=" Enter your Email *"
                  onChange={(e) => setEmail(e.target.value)}
                  ref={eref}
                  autoFocus
                />
                <div className="email error">{emailError}</div>
                <input
                  required
                  name="password"
                  type="password"
                  ref={pref}
                  placeholder=" Enter your Password *"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="password error">{passwordError}</div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container className={classes.forgot}>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </>
      )}
      {!state && (
        <>
          {" "}
          <MainPage />
        </>
      )}
    </>
  );
}
