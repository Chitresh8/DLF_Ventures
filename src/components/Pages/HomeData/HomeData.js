// import React, { Fragment, useState } from "react";
import "./HomeData.css";
// import { myData } from "../../utils";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HistoryIcon from "@mui/icons-material/History";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import { dataas } from "../../../dataas";
import {
  setDataActions,
  setEmailActions,
  setFusionUserActions,
  setMobileUserActions,
  setResetActions,
  setResetTwoActions,
  setSearchActions,
} from "../../../store/actions/home.actions";
import { useNavigate } from "react-router-dom";

export const HomeData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDataActions(dataas));
  }, []);

  const selectedData = useSelector((state) => state.home.selectedData);

  const mobileUserInputs = useSelector(
    (state) => state.home.mobileUserNameInput
  );
  console.log("mobileUserInput", mobileUserInputs);

  const emailUserInputs = useSelector((state) => state.home.emailInput);

  const fusionUserInputs = useSelector((state) => state.home.fusionUserInput);

  const search = useSelector((state) => state.home.searchData);

  const resetTwo = useSelector((state) => state.home.selectedResetTwo);

  const apiD = useSelector((state) => state.home.apiData);

  const mobileUserChangeHandler = (event) => {
    const value = event.target.value;
    dispatch(setMobileUserActions(value));
  };

  const emailChangeHandler = (event) => {
    const value = event.target.value;
    dispatch(setEmailActions(value));
  };

  const fusionUserChangeHandler = (event) => {
    const value = event.target.value;
    dispatch(setFusionUserActions(value));
  };

  const searchClickHandler = () => {
    const mapMastekData = apiD.filter((el) => {
      return el.mobileUserName.toLowerCase().includes(mobileUserInputs);
    });
    const emailInputBox = mapMastekData.filter((el) => {
      return el.email.toLowerCase().includes(emailUserInputs);
    });
    const fusionUserInputBox = emailInputBox.filter((el) => {
      return el.fusionUserName.toLowerCase().includes(fusionUserInputs);
    });
    dispatch(setSearchActions(fusionUserInputBox));
  };

  const resetClickHandler = () => {
    dispatch(setEmailActions(""));
    dispatch(setFusionUserActions(""));
    dispatch(setMobileUserActions(""));
    dispatch(setDataActions(apiD));
  };

  const detailsClickHandler = (el) => {
    navigate("/homedata/updateuser", {
      state: {
        id: el.id,
        mobileUserName: el.mobileUserName,
        fusionUserName: el.fusionUserName,
        printer: el.printer,
        password: "*******",
        email: el.email,
        fromDate: el.fromDate,
        toDate: el.toDate,
      },
    });
  };

  const detailsTwoClickHandler = (el) => {
    navigate("/homedata/history", {
      state: {
        mobileUserName: el.mobileUserName,
        fusionUserName: el.fusionUserName,
        printer: el.printer,
        password: "*******",
        email: el.email,
        fromDate: el.fromDate,
        toDate: el.toDate,
      },
    });
  };

  const addClickHandler = () => {
    navigate("/add");
  };

  const exportClickHandler = () => {
    navigate("/export");
  };

  const importClickHandler = () => {
    navigate("/import");
  };

  const masterClickHandler = () => {
    navigate("/master");
  };
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ marginLeft: "10px", marginTop: "10px" }}
      >
        Search
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          gap: "20px",
        }}
      >
        <TextField
          label="Mobile UserName"
          sx={{ marginLeft: "10px", marginTop: "10px", width: "300px" }}
          onChange={mobileUserChangeHandler}
          value={mobileUserInputs}
        >
          Mobile User Name
        </TextField>
        <TextField
          label="Email"
          sx={{ marginLeft: "10px", marginTop: "10px", width: "300px" }}
          onChange={emailChangeHandler}
          value={emailUserInputs}
        >
          Email
        </TextField>
        <TextField
          label="Fusion UserName"
          sx={{ marginLeft: "10px", marginTop: "10px", width: "300px" }}
          onChange={fusionUserChangeHandler}
          value={fusionUserInputs}
        >
          Fusion User Name
        </TextField>
        <Button
          variant="contained"
          sx={{ height: "50px", marginLeft: "10px", marginTop: "10px" }}
          onClick={searchClickHandler}
        >
          Search
        </Button>
        <Button
          variant="contained"
          sx={{ height: "50px", marginLeft: "10px", marginTop: "10px" }}
          onClick={resetClickHandler}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          sx={{ height: "50px", marginLeft: "10px", marginTop: "10px" }}
          onClick={masterClickHandler}
        >
          Master
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          marginTop: "10px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginLeft: "10px", marginTop: "10px" }}
        >
          All Users
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            gap: "20px",
            marginLeft: "870px",
          }}
        >
          <Button
            variant="filled"
            sx={styles.add}
            onClick={addClickHandler}
          >
            Add <PersonAddIcon />
          </Button>
          <Button
            variant="filled"
            sx={styles.add}
            onClick={exportClickHandler}
          >
            Export <UploadIcon />
          </Button>
          <Button
            variant="filled"
            sx={styles.add}
            onClick={importClickHandler}
          >
            Import <DownloadIcon />
          </Button>
        </Box>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>Mobile User Name</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Fusion User Name</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Printer</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>From Date</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>To Date</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Details</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>History</TableCell>
          </TableRow>
        </TableHead>

        {selectedData.map((el) => {
          return (
            <TableBody key={el.id}>
              <TableRow>
                <TableCell>{el.mobileUserName}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>{el.fusionUserName}</TableCell>
                <TableCell>{el.printer}</TableCell>
                <TableCell>{el.fromDate}</TableCell>
                <TableCell>{el.toDate}</TableCell>
                <TableCell>
                  <Button sx={styles.style}>
                    <ListAltIcon
                      onClick={() => {
                        detailsClickHandler(el);
                      }}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button sx={styles.style}>
                    <HistoryIcon
                      onClick={() => {
                        detailsTwoClickHandler(el);
                      }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </Box>
  );
};

// export const HomeData = () => {
//   // const myData = [];
//   const [mobileUserInput, setMobileUserInput] = useState("");
//   const [emailInput, setEmailInput] = useState("");
//   const [fusionUserInput, setFusionUserInput] = useState("");
//   // const [mastekData, setMastekData] = useState(myData);
//   // const [dupMastekData, setDupMastekData] = useState(myData);

//   const mobileUserChangeHandler = (event) => {
//     setMobileUserInput(event.target.value);
//   };

//   const emailChangeHandler = (event) => {
//     setEmailInput(event.target.value);
//   };

//   const fusionUserChangeHandler = (event) => {
//     setFusionUserInput(event.target.value);
//   };

//   const searchClickHandler = () => {
//     // const mapMastekData = mastekData.filter((el) => {
//     //   return (
//     //     el.mobileUserName.toLowerCase().includes(mobileUserInput) ||
//     //     mobileUserInput === ""
//     //   );
//     // });

//     const emailChange = mapMastekData.filter((el) => {
//       return el.email.includes(emailInput) || emailInput === "";
//     });
//     // console.log(emailChange, "email");

//     const fusionChange = emailChange.filter((el) => {
//   //     return (
//   //       el.fusionUserName.includes(fusionUserInput) || fusionUserInput === ""
//   //     );
//   //   });

//   //   // console.log(fusionChange, "fusion");
//   //   setDupMastekData(fusionChange);
//   // };

//   const data = JSON.stringify(dataas);
//   console.log("mydata", data);

//   const resetClickHandler = () => {
//     setMobileUserInput("");
//     setEmailInput("");
//     setFusionUserInput("");
//     // setDupMastekData(mastekData);
//   };
//   return (
//     <Fragment>
//       <Box>
//         <Typography
//           variant="h4"
//           sx={{ padding: "15px" }}
//         >
//           Search
//         </Typography>
//       </Box>
//       <Box sx={{ padding: "5px" }}>
//         <TextField
//           id="outlined-basic"
//           label="Mobile User Name"
//           variant="outlined"
//           sx={{ marginLeft: "10px", gap: "10px", width: "300px" }}
//           value={mobileUserInput}
//           onChange={mobileUserChangeHandler}
//         >
//           Mobile User Name
//         </TextField>
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           sx={{ marginLeft: "10px", gap: "10px", width: "300px" }}
//           value={emailInput}
//           onChange={emailChangeHandler}
//         >
//           Email
//         </TextField>
//         <TextField
//           id="outlined-basic"
//           label="Fusion User Name"
//           variant="outlined"
//           sx={{ marginLeft: "10px", gap: "10px", width: "300px" }}
//           value={fusionUserInput}
//           onChange={fusionUserChangeHandler}
//         >
//           Fusion User Name
//         </TextField>
//         <Button
//           variant="contained"
//           sx={{
//             marginLeft: "10px",
//             gap: "10px",
//             margin: "10px",
//           }}
//           onClick={searchClickHandler}
//         >
//           Search
//         </Button>
//         <Button
//           variant="contained"
//           sx={{ marginLeft: "10px", gap: "10px", margin: "10px" }}
//           onClick={resetClickHandler}
//         >
//           Reset
//         </Button>
//         <Button
//           variant="contained"
//           sx={{ marginLeft: "10px", gap: "10px", margin: "10px" }}
//         >
//           Master
//         </Button>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "25px",
//           borderBottom: "1px solid #80808030",
//         }}
//       >
//         <Box>
//           <Typography variant="h5">All Users</Typography>
//         </Box>
//         <Box sx={{ marginRight: "60px" }}>
//           <Button
//             variant="filled"
//             sx={{ color: "grey" }}
//           >
//             Add
//             <PersonAddIcon />
//           </Button>
//           <Button
//             variant="filled"
//             sx={{ color: "grey" }}
//           >
//             Export
//             <UploadIcon />
//           </Button>
//           <Button
//             variant="filled"
//             sx={{ color: "grey" }}
//           >
//             Import
//             <DownloadIcon />
//           </Button>
//         </Box>
//       </Box>
//       <Box>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 600 }}>Mobile User Name</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Fusion User Name</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Printer</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>From Date</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>To Date</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Details</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>History</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* {dupMastekData.map((el) => {
//               return (
//                 <TableRow key={el.id}>
//                   <TableCell>{el.mobileUserName}</TableCell>
//                   <TableCell>{el.email}</TableCell>
//                   <TableCell>{el.fusionUserName}</TableCell>
//                   <TableCell>{el.printer}</TableCell>
//                   <TableCell>{el.fromDate}</TableCell>
//                   <TableCell>{el.toDate}</TableCell>
//                   <TableCell>
//                     <Button>
//                       <ListAltIcon sx={{ color: "black" }} />
//                     </Button>
//                   </TableCell>
//                   <TableCell>
//                     <Button>
//                       <HistoryIcon sx={{ color: "black" }} />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               );
//             })} */}
//           </TableBody>
//         </Table>
//       </Box>
//     </Fragment>
//   );
// };
const styles = {
  style: {
    color: "gray",
  },
  add: {
    backgroundColor: "#80808005",
    fontWeight: "bold",
    color: "black",
  },
};
