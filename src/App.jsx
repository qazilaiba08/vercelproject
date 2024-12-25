import React from "react";
import "./App.css";
import { useState,useEffect } from "react";
// import {useState,useEffect} from "react";

// let student = "Rabia";

// const numbers = [1, 2, 3, 4, 2, 4];

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  },[]);

  return (
    <>

      {data.map((post) => (
        <div  className="container " style={{width: "18rem"}}>
        <img src={post.image} className="card-img-top"style={{width: "18rem", height:"15rem"}} alt="..."/>
        <div className="row">
          <h3 className="card-title">{post.title}</h3>
          <p classNameName="card-text"> {post.body}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      ))}

     
    </>
  );
}

export default App;