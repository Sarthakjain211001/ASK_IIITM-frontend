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
            As they say life will always come circles, but what we can do is
            draw it better than the last time. With this belief we present you
            the Ask_IIITM, your one stop solution to every college and life
            related problems. Write, Read, Help, Grow. and find the light that
            takes you and your peers far somewhere close to your world of
            dreams. So, come and join us at your very own especially designed
            college social media.
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
