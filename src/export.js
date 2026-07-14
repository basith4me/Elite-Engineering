import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";
//project images
import project1 from "../src/assets/project1.jpg";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import project7 from "../src/assets/project7.jpg";
import project8 from "../src/assets/project8.jpg";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Upgrade older structures with safe, efficient renovation work that improves function, appearance, and long-term value.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Deliver reliable construction solutions from foundation to finishing with quality workmanship and on-site coordination.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Plan projects carefully with practical designs, clear timelines, and build-ready details that keep work moving forward.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Handle permits, drawings, and project records so every stage stays organized, compliant, and easy to track.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Create clean, functional interiors that match the project’s purpose, style, and budget.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Stay available with responsive project support, clear communication, and timely updates from start to finish.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We review site needs, budgets, and timelines to create a practical roadmap before construction begins.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Our design phase turns project goals into buildable plans with smart layouts and material selection.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Skilled crews carry out the build with attention to safety, precision, and consistent quality.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We complete the final details, inspections, and handover so the finished space is ready to use.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Elite Engineering managed our renovation with clear communication, steady progress, and a finished result that exceeded expectations.",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Their planning and design approach made the whole project smooth, efficient, and easy to manage.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "The team delivered solid workmanship, stayed on schedule, and kept us updated at every stage.",
    post: "Builder",
  },
];

export const projects = [
  {
    image: project1,
  },
  {
    image: project2,
  },
  {
    image: project3,
  },
  {
    image: project4,
  },
  {
    image: project5,
  },
  {
    image: project6,
  },
  {
    image: project7,
  },
  {
    image: project8,
  },
];
