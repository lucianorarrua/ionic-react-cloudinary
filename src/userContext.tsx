import React, { useState } from "react";

export interface Usuario {
  nickName: string;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
}
export const UserContext = React.createContext<Usuario>({
  nickName: "",
  setNickName: () => {}
});

export const UserContextProvider = (props: any) => {
  const [nickName, setNickName] = useState<string>("");
  return <UserContext.Provider value={{ nickName, setNickName }} {...props} />;
};
