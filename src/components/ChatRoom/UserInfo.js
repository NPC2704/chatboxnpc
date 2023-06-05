import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;

  .username {
    margin-left: 5px;
    color: #202020;
    font-size: 20px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;

    .username {
      display: none;
    }
  }
`;

const Button = styled.button`
  background-color: #f4fdf9;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f0f3f7;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  :hover {
    background-color: white;
  }

  @media (max-width: 760px) {
    font-size: 8px;
    margin-top: 10px;
  }
`;

export default function UserInfo() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  const { clearState } = React.useContext(AppContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL} style={{ marginRight: "10px" }}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button
        className="button"
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
