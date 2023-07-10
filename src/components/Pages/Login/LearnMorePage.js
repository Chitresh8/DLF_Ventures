import { Box, Typography, Button } from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const LearnMorePage = () => {
  return (
    <Fragment>
      <Box sx={styles.learnmorepage}>
        <Typography>Under Development</Typography>
        <Box sx={styles.btns}>
          <Button variant="filled">
            <NavLink to="/">Back to Login Page</NavLink>
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

const styles = {
  learnmorepage: {
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
