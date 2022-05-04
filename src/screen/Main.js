import React from "react";
import StackRouter from "../router/stackRouter";
import { useAuth } from "../contexts";
import ChatRoom from "./PostLogin/ChatRoom";

export default function Main() {
  const user = useAuth();
  return !user.key ? <StackRouter /> : <ChatRoom />;
}
