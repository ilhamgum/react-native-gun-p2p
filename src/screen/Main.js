import React from "react";
import StackRouter from "../router/stackRouter";
import TabRouter from "../router/tabRouter";
import { useAuth } from "../contexts";
import Chat from "./PostLogin/Chat";

export default function Main() {
  const user = useAuth();
  return !user.key ? <StackRouter /> : <TabRouter />;
}
