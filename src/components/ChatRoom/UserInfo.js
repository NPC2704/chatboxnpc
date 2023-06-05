import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 16px;
  border-bottom: 1px solid #e6e6e6;
  
  .username {
    color: white;
    margin-left: 5px;
  }
`;
const Button = styled.button`
  background-color: #f4fdf9;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f0f3f7;
  cursor: pointer;
  :hover {
    
    background-color: white;
  }
`
export default function UserInfo() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  const { clearState } = React.useContext(AppContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username" style={{color:"#202020",fontSize:"20px"}}>{displayName}</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          // clear state in App Provider when logout
          clearState();
          auth.signOut();
        }}
        
      >
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
