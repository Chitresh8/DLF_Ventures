import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

export const History = () => {
  const location = useLocation();

  const specificRowData = location.state;
  console.log("rows", specificRowData);

  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mobile UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Fusion UserName</TableCell>
            <TableCell>Printer</TableCell>
            <TableCell>From Date</TableCell>
            <TableCell>To Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{specificRowData.mobileUserName}</TableCell>
            <TableCell>{specificRowData.email}</TableCell>
            <TableCell>{specificRowData.fusionUserName}</TableCell>
            <TableCell>{specificRowData.printer}</TableCell>
            <TableCell>{specificRowData.fromDate}</TableCell>
            <TableCell>{specificRowData.toDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};
