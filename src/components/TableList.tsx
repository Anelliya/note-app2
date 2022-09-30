import React from "react";

interface Prop {
  children: React.ReactNode
}

const TableList = ({ children }: Prop) => (
  <tbody className="">{children}</tbody>
);

export default TableList;
