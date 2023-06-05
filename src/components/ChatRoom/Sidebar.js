import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background: white;
  color: black;
  height: 100vh;
 
  border:  1px solid #f0f3f7;
`;

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo/>
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
