import React, { Fragment } from "react";
import image from "../../../Assets/Screenshot 2023-06-13 125831.png";
import { Box, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("loc", location);

  const logoutClickHandler = () => {
    navigate("/logout");
  };

  return (
    <Fragment>
      <Box sx={styles.header}>
        <img src={image} />
        {location.pathname !== "/" ? (
          <Button
            variant="contained"
            sx={styles.logoutBtn}
            onClick={logoutClickHandler}
          >
            Logout
            <LogoutIcon />
          </Button>
        ) : null}
      </Box>
      <Box></Box>
    </Fragment>
  );
};

export default Header;
const styles = {
  header: {
    paddingLeft: "20px",
    height: "60px",
    backgroundColor: "white",
    backdropFilter: "blur(8px)",
    textAlign: "left",
    display: "flex",
    paddingRight: "20px",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
    justifyContent: "space-between",
    borderBottom: "1px #00000024 solid",
  },
  logoutBtn: {
    width: "120px",
    height: "30px",
    margin: "15px -15px",
  },
};
