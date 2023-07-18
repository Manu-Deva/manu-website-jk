import React from "react";
import Image from "next/image";
import { ThreejsOriginal, JavascriptOriginal } from "devicons-react";
import Icon from "./Icon";
const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "C++" },
  { skill: "C" },
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Java" },
  { skill: "TailwindCSS" },
  { skill: "Figma" },
  { skill: "Linux" },
  { skill: "Git" },
  { skill: "npm" },
  { skill: "Node.js" },
  { skill: "Nextjs" },
  { skill: "Express" },
  { skill: "Flask" },
  { skill: "numpy" },
  { skill: "Firebase" },
  { skill: "MATLAB" },
];

const workingSkills = [
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "TypeScript" },
  { skill: "ThreeJS" },
  { skill: "AWS" },
  { skill: "Docker" },
  { skill: "Kotlin" },
  { skill: "Swift" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-8 md:pb-20">
        <h1 className="text-center font-bold text-4xl">
          About me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-brown-1 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="about-title">Get to know me!</h1>
            <p>
              {" "}
              Hi, my name is Manu and I am a{" "}
              <span className="font-bold">{"curious"}</span>,
              <span className="font-bold"> {"passionate"}</span>, and
              <span className="font-bold"> {"dedicated"}</span> student based in
              Evanston, IL.
            </p>
            <br />
            <p>
              I'm a rising junior at Northwestern University, with a Computer
              Science major and Economics minor. I'm the current CTO of Student
              Holdings, a student-run business in Evanston, IL, and an app
              developer intern at Origin Robots Company, a robotics startup
              based in Evanston, IL.
            </p>
            <br />
            <p>
              I primarily code in Python concerning data structures, machine
              learning, and app development, with experience in C++ and Java.
              I've also done computer systems programming in C and Linux and app
              development with React, Javascript, and other frameworks. I hope
              to eventually integrate my interest in economics with computer
              science as a developer.
            </p>
            <br />
            <p>
              My hobbies and passions include basketball, gaming, clothing
              design, music production, art, and more. I'm always trying to
              integrate these passions with my skills in computer science and
              make them more fun!
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="about-title">My Skills</h1>
            <div className="grid grid-rows-4 grid-cols-5 justify-center md:justify-start mb-6 space-y-2">
              {skills.map((item, idx) => {
                return (
                  <div className="flex flex-col items-center">
                    <Icon iconName={item.skill} />
                    <p
                      key={idx}
                      className="px-4 pb-1 mt-1 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  </div>
                );
              })}
            </div>
            <h1 className="about-title">Working On</h1>
            <div className="grid grid-rows-4 grid-cols-5 justify-center md:justify-start mb-6 space-y-2">
              {workingSkills.map((item, idx) => {
                return (
                  <div className="flex flex-col items-center">
                    <Icon iconName={item.skill} />
                    <p
                      key={idx}
                      className="px-4 pb-1 mt-1 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
