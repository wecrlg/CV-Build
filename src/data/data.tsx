import Hero_person from "../assets/person.png";
import java from "../assets/java.png";
import springBoot from "../assets/spring-boot.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/node-js.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import Git from "../assets/Git.png";
import MySql from "../assets/MySql.png";
import autocad from "../assets/autocad.png";
import msOffice from "../assets/msOffice.png";



import project1 from "../assets/img1.png";
import project2 from "../assets/img2.png";
import project3 from "../assets/img3.png";
import person_project from "../assets/person.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";


import services1 from "../assets/logo1.png";
import services2 from "../assets/logo2.png";
import services3 from "../assets/logo3.png";

import { FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsCodeSlash, BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdArrowForward, MdCall } from "react-icons/md";

export const documentTitle = "Nwanu Martins Portfolio";
const year = new Date().getFullYear();


export const content = {
  nav: [
    {
      id: 1,
      link: "#home",
      icon: FaHome,
      title: "Home",
      innerHtml: "Home",
    },
    {
      id: 2,
      link: "#skills",
      icon: BsCodeSlash,
      title: "Skills",
      innerHtml: "Skills",
    },
    {
      id: 3,
      link: "#services",
      icon: RiServiceLine,
      title: "Services",
      innerHtml: "Services",
    },
    {
      id: 4,
      link: "#projects",
      icon: RiProjectorLine,
      title: "Projects",
      innerHtml: "Projects",
    },
    {
      id: 5,
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
      title: "Contact",
      innerHtml: "Contact",
    },
  ],
  hero: {
    movingTextData: [
      "Welcome to my world",
      "My names are",
      "Nwanu Ndubuisi Martin",
      "I am a Full Stack Developer",
      "My portfolio for your perusal",
    ],
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experience in Programming",
      },
      {
        count: "25+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "85%",
        logo: java,
      },
      {
        name: "Node js",
        para: "65%",
        logo: nodejs,
      },
      {
        name: "Spring framework, Java EE",
        para: "90%",
        logo: springBoot,
      },
      {
        name: "JavaScript",
        para: "56%",
        logo: javascript,
      },
      {
        name: "HTML",
        para: "60%",
        logo: html,
      },
      {
        name: "CSS",
        para: "45%",
        logo: css,
      },
      {
        name: "Bootstrap",
        para: "62%",
        logo: bootstrap,
      },
      {
        name: "JQuery & AJAX",
        para: "72%",
        logo: jQuery,
      },
      {
        name: "Git",
        para: "90%",
        logo: Git,
      },
      {
        name: "MySQL",
        para: "66%",
        logo: MySql,
      },
      {
        name: "AutoCAD",
        para: "75%",
        logo: autocad,
      },
      {
        name: "Microsoft office packages",
        para: "94%",
        logo: msOffice,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        id: 1,
        title: "Web / Software Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services1,
      },
      {
        id: 2,
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services2,
      },
      {
        id: 3,
        title: "Web Hook",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services3,
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY ACCOMPLISHMENTS",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
    projects_desc: [
      {
        id: 1,
        company: "Ministry of Land and Survey",
        title: "MinistryOfLand",
        accomplishments: [
          "Create assembly and layout drawings using AutoCAD 2007.",
          "Carryout topographic survey",
          "Prepared plans and layouts for equipment / system arrangements and space allocation",
        ],
      },
      {
        id: 2,
        company: "Longbridge Technologies Ltd",
        title: "LongbridgeTechnologies",
        accomplishments: [
          "Worked closely withother team members toplan, design and develop robust solutions in a timely manner.",
          "Designed and developed help desk application for support unit",
          "Modified existing software to correct errors, upgrade interface and improve performance",
          "Performed regression and system-level testing to verify software quality and function before it will be release.",
          "Designed and developed help desk application for support unit",
          "Modified existing software to correct errors, upgrade interface and improve performance",
          "Interfaced with business analysts, other developers and technical support teams to determine the best requirements to meet satisfactory customer experience for solutions.",
        ],
      },
      {
        id: 3,
        company: "Renmoney MFB",
        title: "RenmoneyMFB",
        accomplishments: [
          "Supported all existing java application (Gds-fast-track, credit check report, bulk payment upload, pay out).",
          "Developed Node JS application that process bank statement.",
          "Developed Java API(REST) that encrypt and decrypt request / response for NIBBS transaction.",
          "Developed Java application that send out settlement sheet(offer letter)to clients.",
          "Developed Java application, my bank statement (MBS), App that get client last six months bank statement, loop through the bank statement narration for keywords set by the admin in the database, process, save, update necessary field and notified data science team for decision making.",
          "Developed java application that sends repayment schedule notification to clients via email and sms.",
          "Developed java application and API that generate Renmoney bank statement.",
          "Developed an API that returns Paystack link for payment.",
          "Developed java API for BVNverification.",
          "Developed an APIfor funds transfer, name enquire and transaction verification.",
          "Developed java application for under-writer team for decision making.",
          "Developed java API for intra bank transfer.",
          "Developed java API for ID (Voters card, BVN, Driver’s license, e.t.c.) verification.",
          "Developed java API that generate Renmoney account number (using CBN algorithm).",
          "Currently developing an APIs for Renmoney mobile and web app.",
        ],
      },
      {
        id: 4,
        company: "Creditville Limited",
        title: "Creditville",
        accomplishments: [
          "Handling of proper UAT and go-live process",
          "Handling of support of creditville savings and loans mobile application (C Money) version 1.0",
          "Review and guidance of Creditville new application development process",
          "Setting up and improvement of software engineers that manages all the Creditville subsidiary such as website development, application development and system support.",
          "Supporting of all existing applications (such as credit check report, bulk payment upload).",
          "Managing / development of Creditville (Touchgold MFB) mobile banking application (C Money) version 2.0",
          "Supervising and development of Creditville portal system (Ongoing project)",
          "Supervising and development of C Money web application. (Ongoing project)",
          "Supervising and development of Touchgold MFB, (one of Creditville Limited subsidiary) website(Ongoing project)",
        ],
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "Our team has been thoroughly impressed with the full stack developer's ability to handle complex projects and deliver them on time. Their deep understanding of both front-end and back-end development has been a valuable asset to our company.",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "The full stack developer's attention to detail and problem-solving skills are top-notch. They are able to quickly identify and resolve any issues that arise during development, ensuring a smooth and efficient process.",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "The full stack developer's expertise in multiple programming languages and frameworks has allowed them to take on a variety of projects and consistently deliver high-quality results.",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "The full stack developer's strong communication skills and ability to work well in a team have made them a pleasure to work with. They are always willing to go the extra mile to ensure the success of a project.",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "nwanumartins@gmail.com",
        icon: GrMail,
        link: "mailto: nwanumartins@gmail.com",
      },
      {
        text: "+2348164755717",
        icon: MdCall,
        link: "tel: +2348164755717",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/nwanumartins/",
      },
      {
        text: "WhatsApp",
        icon: BsWhatsapp,
        link: "https://wa.me/+2348164755717",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://www.github.com/nwanumartins/",
      },
    ],
  },
  footer: {
    text: `© Copy-right Nwanu Martins Ndubuisi ${year}`,
  },
};
