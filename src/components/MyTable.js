import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { DELETE_USER_BY_ID, GET_USERS } from "../redux/types";
import styled from "styled-components";
export default function MyTable() {
  const rows = useSelector((state) => state.users);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_USERS }), []);
  return (
    <TableContainer component={Paper}>
      <Ttable>
        <TableHead>
          <TableRow>
            <TableCell>Fname</TableCell>
            <TableCell>Lname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.fname}</TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.height}</TableCell>
              <TableCell>
                <Ubutton onClick={() => dispatch(setUserSlice(row))}>
                  Update
                </Ubutton>
              </TableCell>

              <TableCell>
                <Dbutton
                  onClick={() =>
                    dispatch({ type: DELETE_USER_BY_ID, id: row.id })
                  }
                >
                  Delete
                </Dbutton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Ttable>
    </TableContainer>
  );
}

// The following is styling of MyTable
export const Ttable = styled.table`
  width: 100%;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;

export const Ubutton = styled.button`
  background-color: #04aa6d;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;
  &:hover {
    background-color: coral;
  }
`;

export const Dbutton = styled.button`
  background-color: red;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background-color: yellow;
  }
`;
