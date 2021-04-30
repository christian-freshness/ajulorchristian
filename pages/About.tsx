import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="my-16">
      <h4 className="text-center mb-2 heading">About</h4>
      <h1 className="text-center mb-10">Let me Introduce Myself</h1>
      <div className="container">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/2 mb-4 profile-pic md:mr-10">
            <img src="images/profilePic.jpeg" width="100%"></img>
          </div>
          <div className="w-full about-text md:w-1/2">
            <p>
              I'm a front-end Developer who loves to make things look perfect. I
              create pixel perfect webpages that are repsonsive on all
              screensizes (small, big and Extra large screen sizes). I'm also a
              Petroleum Engineer. I love learning new things and quickly too.
              And i love to code{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex">
          <div className="profile w-full  md:w-1/2 mb-2 wow fadeInLeft">
            <div className="skills-text">
              <h3 className="mb-4 text-center md:text-left">PROFILE</h3>
              <p className="mb-2">
                I have a Degree in Petroleum Engineering from the great
                University of Benin. I'm a self taught Front End Developer with
                sound knowledge on Front End technologies. I have sound
                knowledge on ReactJs, HTML5, CSS3, SASS, JQUERY, VANILLA
                JAVASCRIPT, RESTFUL APIS and more.
              </p>
              <p>
                Click{" "}
                <button
                  className="btn w-max"
                  style={{ width: "auto", padding: "5px 10px" }}
                >
                  <Link href="/Portfolio">
                    <a>Here</a>
                  </Link>{" "}
                </button>{" "}
                to view my Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-text-center">
        <div className="container">
          <div className="button-flex">
            <Link href="/Contact">
              <a>
                <button className="btn1 shadow">HIRE ME</button>
              </a>
            </Link>
            <a href="./resumedev.pdf" target="/blank">
              <button
                className="btn2 shadow wow fadeInRight"
                data-wow-duration="0.5"
                data-wow-delay="0.4s"
              >
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
