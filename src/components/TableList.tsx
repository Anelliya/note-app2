import React from "react";

interface Prop {
  children: React.ReactNode
}

const TableList = ({ children }: Prop) => (
  <tbody>{children}</tbody>
);

export default TableList;
