import React from "react";
import "./Base.css";

export default function Base({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) {
  return (
    <div>
      <div class="row">
        <div class="column">
          <div className="row width-50">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
        </div>
        <div class="column">
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
          <div className="row">Hello</div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions Feel free to reach out</h4>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => {
              console.log(process.env.REACT_APP_port);
            }}
          >
            Contact us
          </button>
        </div>
        <div className="container">
          <span className="text-muted">
            Amazing <span className="text-white">MERN</span> Bootcamp
          </span>
        </div>
      </footer>
    </div>
  );
}
