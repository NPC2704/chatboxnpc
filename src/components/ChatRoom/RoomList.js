import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header {
      color: black;
      background-color: #f3f3f5;
      border-bottom: 1px solid #f0f3f7;
      border-radius: 0px;
    }
    @media (max-width: 760px) {
      .ant-collapse-header {
        font-size: 10px;
        padding: 5px 5px;
      }
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    @media (max-width: 760px) {
      .ant-collapse-content-box {
        padding: 0 10px;
        font-size: 10px;
      }
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 20px;
  color: black;
  border: 2px solid #f6f6fe;
  &:hover {
    background-color: #f6f6fe;
  }
  @media (max-width: 760px) {
    font-size: 10px;
    padding: 0px 10px;
    margin-top: 5px;
    text-align: center;
    border-radius: 5px;
  }
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse
      ghost
      defaultActiveKey={["1"]}
      style={{ height: "85vh", overflowY: "auto" }}
    >
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <LinkStyled
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
            style={{ color: "black" }}
          >
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusOutlined />}
          className="add-room"
          onClick={handleAddRoom}
          style={{
            color: "black",
            padding: "5px",
            borderRadius: "50%",
            border: "1px solid #e4e4e4",
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Button>
      </PanelStyled>
    </Collapse>
  );
}
