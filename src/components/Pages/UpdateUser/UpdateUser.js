import React, { Fragment, useEffect } from "react";
import "./UpdateUser.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetailsActions } from "../../../store/actions/userdetails.actions";
import { userDetails } from "../UserDetails/UserDetails";
import Checkbox from "@mui/material/Checkbox";
import { useLocation } from "react-router-dom";

export const UpdateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("my location", location);
  console.log("locationstate", location.state);

  const rowData = location.state;

  useEffect(() => {
    dispatch(setUserDetailsActions(userDetails));
  }, []);

  const userDetailsListData = useSelector(
    (state) => state.user.selectedUserDetailsData
  );
  console.log("userList", userDetailsListData);

  return (
    <Fragment>
      <Box sx={styles.fragment}>
        <Box sx={styles.box}>
          <Box>
            <Typography
              variant="h4"
              sx={styles.h4}
            >
              Update User
            </Typography>
          </Box>

          <Box sx={styles.buttons}>
            <Button
              variant="contained"
              sx={styles.updateuserbtn}
            >
              Update User
            </Button>
            <Button
              variant="contained"
              sx={styles.cancelbtn}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={styles.h5}
          >
            User details
          </Typography>
        </Box>
        <Box sx={styles.textfield}>
          <TextField
            label="Mobile Username"
            sx={{ width: "300px" }}
            value={rowData.mobileUserName}
          >
            Mobile Username
          </TextField>
          <TextField
            label="Fusion Username"
            sx={{ width: "300px" }}
            value={rowData.fusionUserName}
          >
            Fusion Username
          </TextField>
          <TextField
            label="Printer"
            sx={{ width: "300px" }}
            value={rowData.printer}
          >
            Printer
          </TextField>
          <TextField
            label="Password"
            sx={{ width: "300px" }}
            value={rowData.password}
          >
            Password
          </TextField>
          <TextField
            label="Email ID"
            sx={{ width: "300px" }}
            value={rowData.email}
          >
            Email ID
          </TextField>
          <TextField
            label="From Date"
            min="01"
            max="31"
            step="01"
            sx={{ width: "300px" }}
            value={rowData.fromDate}
          >
            From Date
          </TextField>
          <TextField
            label="To Date"
            min="01"
            max="31"
            step="01"
            sx={{ width: "300px" }}
            value={rowData.toDate}
          >
            To Date
          </TextField>
        </Box>
        <Box sx={styles.userdetailstwo}>
          {userDetailsListData.map((el) => {
            return (
              <Typography
                sx={styles.type}
                key={el.id}
              >
                <Checkbox defaultChecked />
                {el.name}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Fragment>
  );
};

const styles = {
  fragment: { margin: "5px", padding: "5px" },
  textfield: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    gap: "30px",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  box: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    marginTop: "10px",
    gap: "750px",
  },
  h4: {
    fontWeight: "bold",
  },
  h5: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  buttons: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  updateuserbtn: {
    gap: "10px",
  },
  cancelbtn: {
    color: "black",
    backgroundColor: "#80808059",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  userdetailstwo: {
    borderTop: "1px solid #80808059",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexWrap: "wrap",
    fontSize: "4px",
    gap: "10px",
    flexDirection: "row",
  },
  type: {
    width: "316px",
    padding: "2px",
  },
};
