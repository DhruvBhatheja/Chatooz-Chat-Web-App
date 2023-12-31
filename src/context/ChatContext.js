import { onAuthStateChanged } from "firebase/auth";
import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext, useInsertionEffect, useState } from "react";
import{auth} from "../firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext=createContext();



export const ChatContextProvider=({children})=>{
    const {currentUser}=useContext(AuthContext)
   const Initial_State={
    chatId:"null",
    user:{},
   };
   const chatReducer =(state,action)=>{
    switch(action.type){
        case "CHANGE_USER":
        return{
user:action.payload,
chatId: currentUser.uid > action.payload.uid
? currentUser.uid + action.payload.uid
: action.payload.uid + currentUser.uid,
        };
    
    default:
        return state;
   }
};

const[state,dispatch]=useReducer(chatReducer,Initial_State)
    return(
<ChatContext.Provider value={{data:state,dispatch}}>
    {children}
    </ChatContext.Provider>
    );
}