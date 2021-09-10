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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [state, setState] = useState(true);
  const classes = useStyles();
  const eref = useRef();
  const pref = useRef();

  const validator = async (event) => {
    event.preventDefault();
    try {
      const datas = { email, password };
      axios
        .post("https://backend-for-final-project.herokuapp.com/signup", datas)
        .then((data) => {
          if (data.data.errors) {
            setEmailError(data.data.errors.email);
            setPasswordError(data.data.errors.password);
            console.log("error");
          }
          if (data.data.user) {
            setEmail("");
            setPassword("");
            eref.current.value = "";
            pref.current.value = "";
            setState(false);
          }
          return 0;
        })
        .catch((err) => {
          console.log("error");
        });
    } catch (err) {
      console.log("error vl");
      console.log(err);
    }
  };

  return (
    <>
      {" "}
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
                Sign up
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
                  name="email"
                  placeholder=" Enter your Email Address *"
                  required
                  ref={eref}
                  onChange={(e) => setEmail(e.target.value)}
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => validator(e)}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
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
