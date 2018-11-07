import React,{Component} from 'react'
let id=()=>document.getElementById("id");
let count=(id)=>{
  const idValue=id(id).value
  const num=parseInt(idValue)
  const dNum=1000-num
}
count("boxTextarea");