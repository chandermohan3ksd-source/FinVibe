import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useEffect } from "react";
import { LockClock } from "@mui/icons-material";

 export default function Home (){
const urlParams=new URLSearchParams(window.location.search);
  const tokenForm=urlParams.get("token");
  const username=urlParams.get("username");
  if(tokenForm){
    localStorage.setItem("token",tokenForm);
    if(username){
        localStorage.setItem("username",username);
    }
  window.history.replaceState({},document.title,"/")
  }
  const finalToken=localStorage.getItem("token");
  const finalUsername=localStorage.getItem("username") || "User";
  console.log(finalToken);
    if(!finalToken){
        window.location.href="http://localhost:5173/";
        return null;
    }

   
    return (
        <>
        <TopBar username={finalUsername}/>
        <Dashboard username={finalUsername}/>
        </>
    )
 }