import React from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
export default function Home() {
  console.log(`API is `, process.env.REACT_APP_BACKEND);
  return (
    <Base title="Home Page">
      {/* <h1 className="text-white">Hello Frontend {API} </h1> */}
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">
            TEST
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">
            TEST
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">
            TEST
          </button>
        </div>
      </div>
    </Base>
  );
}
