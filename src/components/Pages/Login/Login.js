import React, { Fragment, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import wareHouse from "../../../Assets/Screenshot 2023-06-18 153454.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Scanner from "../../../Assets/ScannerScreenshot 2023-06-18 153607.png";
import poweredBy from "../../../Assets/Screenshot 2023-06-18 153520.png";
import managedBy from "../../../Assets/Screenshot 2023-06-18 153542.png";
import Box from "@mui/material/Box";
import simple from "../../../Assets/ScreenshotSimple 2023-06-18 210136.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import title from "../../../Assets/Screenshot 2023-06-13 125831.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showUser, setShowUser] = useState(false);
  const [showPassWord, setShowPassWord] = useState(false);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    setShowUser(false);
  };

  const passWordChangeHandler = (event) => {
    setPassWord(event.target.value);
    setShowPassWord(false);
  };

  const loginClickHandler = () => {
    if (userName === "") {
      setShowUser(true);
    }
    if (passWord === "") {
      setShowPassWord(true);
    }
    if (userName === "" || passWord === "") {
      return;
    }
    navigate("homedata");
  };

  const learnmoreClickHandler = () => {
    navigate("/learnmore");
  };
  return (
    <Fragment>
      <Box sx={{ marginLeft: "15px" }}>
        <Box>
          <Box sx={{ marginTop: "15px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={title}
                alt="title"
              />
              <Box sx={{ marginTop: "20px" }}>
                <Button
                  variant="filled"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ marginRight: "450px", color: "black" }}
                  onClick={learnmoreClickHandler}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
            <img
              src={wareHouse}
              alt="wareHouse"
            />
          </Box>
          <Box
            sx={{
              width: "500px",
              height: "100px",
              marginBottom: "25px",
            }}
          >
            <p>
              Our Application provides for an end-to-end digital warehousing
              solution specialising in medium to large scale warehouse
              management.Developed by Mastek and managed by DLF
              Solutions.Warehouse 360 delivers state of the art and quality
              required to meet today's needs for warehouse management.
            </p>
          </Box>
          <Box sx={styles.icons}>
            <TwitterIcon style={{ color: "04048C" }} />
            <FacebookIcon style={{ color: "04048C" }} />
            <LinkedInIcon style={{ color: "04048C" }} />
            <InstagramIcon style={{ color: "04048C" }} />
          </Box>
          <Box sx={{ marginLeft: "550px", marginTop: "-150px" }}>
            <img
              src={simple}
              alt="simple"
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#1f4f7e",
            width: "400px",
            height: "110vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "1000px",
            marginTop: "-110vh",
            fontSize: "small",
          }}
        >
          <Box sx={styles.loginForm}>
            <img
              src={Scanner}
              alt="Scanner"
            />
            <Box sx={{ alignItems: "left", padding: "10px" }}>
              <h1>Login to your Account</h1>
              <label>Username*</label>
              <TextField
                type="username"
                name="username"
                value={userName}
                size="small"
                onChange={userNameChangeHandler}
                sx={{
                  marginTop: "5px",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              >
                Username
              </TextField>

              {showUser ? (
                <p className="errortext">Please enter Username</p>
              ) : null}
              <label>Password*</label>
              <TextField
                type="password"
                name=""
                value={passWord}
                size="small"
                onChange={passWordChangeHandler}
                sx={{
                  marginTop: "5px",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              >
                Password
              </TextField>
              {showPassWord ? (
                <p className="errortext">Please enter valid Password</p>
              ) : null}
            </Box>

            <Button
              variant="contained"
              onClick={loginClickHandler}
              sx={{
                backgroundColor: "#1f4f7e",
                width: "280px",
                height: "30px",
                marginTop: "5px",
              }}
            >
              Login
            </Button>
            <Box
              sx={{
                display: "flex",
                gap: "90px",
                marginTop: "25px",
                marginBottom: "0px",
              }}
            >
              <img
                src={poweredBy}
                alt="poweredBy"
              />
              <img
                src={managedBy}
                alt="managedBy"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Login;

const styles = {
  img: {
    marginTop: "50px",
  },
  icons: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    gap: "40px",
    marginTop: "20px",
  },
  loginForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "5px",
    width: "300px",
    height: "540px",
    marginRight: "250px",
    marginTop: "65px",
    boxShadow: "1px 1px 3px 4px #00000038",
    padding: "15px",
  },
};
