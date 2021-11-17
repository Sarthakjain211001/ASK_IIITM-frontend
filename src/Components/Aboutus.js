import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div
      className="text-center container rounded mt-5 pt-5"
      style={{ backgroundColor: "#4C4C4C" }}
    >
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover" style={{ color: "white" }}>
          <h1 className="cover-heading">About Us</h1>
          <p className="lead p-4">
            about us is a one-page template for building simple and beautiful
            home pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.about us is a one-page template
            for building simple and beautiful home pages. Download, edit the
            text, and add your own fullscreen background photo to make it your
            own.
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary mb-5 ">
              Learn more
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
