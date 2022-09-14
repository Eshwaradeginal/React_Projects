import React, { useState, useEffect } from "react";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../utilities/ScrollService";
import Animations from "../utilities/Animation";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " To " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Certifications", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "MERN Stack", ratingPercentage: 50 },
    { skill: "Python", ratingPercentage: 30 },
    { skill: "SQL", ratingPercentage: 75 },
    { skill: "MS Excel", ratingPercentage: 70 },
    { skill: "PowerBI & Tablue", ratingPercentage: 60 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Sep-2022 ", toDate: " Sep-2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap,Node JS,Heroku",
    },
    {
      title: "Yield predication using XGBoost Algorithm",
      duration: { fromDate: "Nov-2021", toDate: "Apr-2022" },
      description:
        "By considering various factors such as soil conditions, rainfall, temperature, yield and other entities the system builds a predicting model using machine learning techniques. Using XGBoost for time-series analysis can be considered as an advanced approach of time series analysis",
      subHeading:
        "Technologies Used:  Python,Django,HTML,CSS,JavaScript,Machine Learning Techniques",
    },
    {
      title: "Student Management System",
      duration: { fromDate: "Dec-2018", toDate: "Feb-2019" },
      description:
        "Student Management System (SMS) tracks all the details of a student from the day one to the end of his course which can be used for tracking enrolment, completed semesters years and all these will be available for future references too",
      subHeading:
        "Technologies Used: HTML,CSS,JavaScript,PHP,MySql,Bootstrap,SDLC method.",
    },
    
    

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bapuji Institute Of engineering and Technology, Davangere"}
        subHeading={"Information Science and Engineering"}
        fromDate={"2019"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Jain Polytechnic, Davangere"}
        subHeading={"Computer Science and Engineering"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Siddaganga Composite High School,Davangere"}
        subHeading={"SSLC"}
       
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Acranton Technologies Pvt Ltd,Davangere"}
          subHeading={"FULL STACK  INTERN"}
          fromDate={"Mar-2022"}
          toDate={"Jun-2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Collaborated in a cross-functional team of 5 interns (incl. software
engineers and program manager) on an application for inquiry
management.

          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Certifications */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="JAVA Programming - Beginner to Master"
        description="Learn Java Basic to Advanced Concepts like Methods,OOPS Concepts,Collection Framework,Multithreading...etc."
      />
      <ResumeHeading
        heading="FullStack Java Devlopment By Pentagon Space(Persuing)"
        description="Learn Java Basic to Advanced,SQL,SpringBoot,Hibernet...etc"
      />
      <ResumeHeading
        heading="MERN Fullstack WebDevlopment by MicroDegree"
        description="Learn Skills Like HTML,CSS,JavaScript,ReactJS,NodeJS,ExpressJS,MongoDB"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/ResumeIcons/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
