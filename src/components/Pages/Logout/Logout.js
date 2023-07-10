import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const yesClickHandler = () => {
    navigate("/");
  };

  const noClickHandler = () => {
    navigate("/homedata");
  };
  return (
    <Fragment>
      <Box sx={styles.logoutbox}>
        <Typography>
          Are you sure you want to Logout?
          <Box sx={styles.btns}>
            <Button
              variant="contained"
              onClick={yesClickHandler}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              onClick={noClickHandler}
            >
              No
            </Button>
          </Box>
        </Typography>
      </Box>
    </Fragment>
  );
};

const styles = {
  logoutbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "100px 400px",
    border: "0px solid blue",
    borderRadius: "10px",
    width: "500px",
    height: "250px",

    "&:hover": {
      backgroundColor: "white",
      boxShadow:
        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      transition: "ease-in-out 1s",
    },
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    gap: "10px",
  },
};
