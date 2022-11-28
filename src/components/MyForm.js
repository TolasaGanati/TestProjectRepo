import Input from "@mui/material/Input";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";
import styled from "styled-components";



const MyForm = () => {
  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));





  };
  const handleSubmit = () => {
    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ type: UPDATE_USER_BY_ID, user });

    dispatch(
      setUserSlice({
        id: 0,
        fname: "",
        lname: "",
        age: "",
        gender: "",
        height: "",
      })
    );

     
  };
  
  return (
    <>
      <Header>
        <Input value={user.id} disabled />
        <Input
          onChange={handleChange("fname")}
          placeholder="Enter fname"
          value={user.fname}
        />
        <Input
          onChange={handleChange("lname")}
          placeholder="Enter lname"
          
          value={user.lname}
        />
        <Input
          onChange={handleChange("age")}
          placeholder="Enter age"
          type="number"
         
          value={user.age}
        />
        <Input
          onChange={handleChange("gender")}
          placeholder="Enter gender"
         
          value={user.gender}
        />
        <Input
          onChange={handleChange("height")}
          placeholder="Enter height"
          type="number"
          value={user.height}
        />
        <Button onClick={
          () => handleSubmit()}>Submit</Button>
      </Header>
    </>
  );
};
export default MyForm;
// The following is styling of the form
export const Header = styled.button`
  margin: 20px 5px 50px 5px;
  Button {
    background-color: #04aa6d;
    box-sizing: border-box;
    border-radius: 8px;
    color: black;
    height: 30px;
    width: 50px;
    margin-top: 20px;
    padding: 10px;
    &:hover {
      background-color: burlywood;
    }
  }
  Input {
    margin-right: 1px;
    border: none;
    border-radius: 4px;
    color: black;
  }
`;