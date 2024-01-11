import { Radio, Table } from "antd";
import { Types } from "../types/types";
import type { ColumnsType } from "antd/es/table";
import { fetchData } from "../services/fetchUser";
import React, { useEffect, useReducer } from "react";
import ModalComponent from "./modal";

interface State {
  users: Types.DataType[];
  isModalOpen: boolean;
}

type Action =
  | { type: "SET_USERS"; payload: Types.DataType[] }
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" };

const initialState: State = {
  users: [],
  isModalOpen: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

const UserTable: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, isModalOpen } = state;

  const columns: ColumnsType<Types.DataType> = [
    {
      title: "🆔",
      dataIndex: "key",
      rowSpan: 2,
    },
    {
      title: "Name 🌀",
      dataIndex: "name",
    },
    {
      title: "Username 🤦🏻",
      dataIndex: "username",
    },
    {
      title: "Email 📧",
      dataIndex: "email",
    },
    {
      title: "City 🌆",
      dataIndex: "city",
    },
    {
      title: "Zip Code 🔒",
      dataIndex: "zipcode",
    },
    {
      title: "Website 💻",
      dataIndex: "website",
    },
    {
      title: "Company 💼",
      dataIndex: ["company", "name"],
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Radio.Group>
          <Radio.Button style={{ background: "#16a34a" }}>👁️</Radio.Button>
          <Radio.Button
            style={{ background: "#1e40af" }}
            onClick={() => dispatch({ type: "OPEN_MODAL" })}
          >
            ✍️
          </Radio.Button>
          <Radio.Button style={{ background: "#b91c1c" }}>🗑</Radio.Button>
        </Radio.Group>
      ),
    },
  ];

  useEffect(() => {
    fetchData().then((data) => dispatch({ type: "SET_USERS", payload: data }));
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={users} pagination={false} bordered />
      <ModalComponent
        visible={isModalOpen}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      />
    </>
  );
};

export default UserTable;
