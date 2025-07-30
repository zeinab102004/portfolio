import React, { useState } from "react";
import "./main.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { AnimatePresence, motion } from "framer-motion";

const myProjects = [
  {
    projectTitle: "Interactive Portfolio Gallery",
    projectDec:
      "A clean and responsive web portfolio showcasing a curated collection of projects or artworks. Features an intuitive layout and smooth navigation, designed to highlight creative work effectively across different devices.",
    category: "Css",
    imgPath: "./imges/1.jpg",
    gitHub:"https://github.com/zeinab102004/cuorses.git",
    linkDeploy:"https://inspiring-heliotrope-a62b82.netlify.app/"
  },
  {
    projectTitle: "Edubridge",
    projectDec:
      "A clean and user-friendly website designed to offer online courses and educational content. It features organized course listings, easy navigation, and a responsive layout to provide a smooth learning experience across devices.",
    category: "react",
    imgPath: "./imges/2.jpg",
    gitHub:"https://github.com/zeinab102004/edubridge.git",
    linkDeploy:"https://resilient-travesseiro-c62942.netlify.app/"
  },
    {
    projectTitle: "Responsive Navigation Bar",
    projectDec:
      "A clean and functional navigation bar component designed for websites. It features smooth animations, responsive behavior for different screen sizes, and easy accessibility to improve user navigation throughout the site.",
    category: "Css",
    imgPath: "./imges/3.jpg",
    gitHub:"https://github.com/zeinab102004/navBar.git",
    linkDeploy:"https://capable-starlight-6b5bfd.netlify.app/"
  },
    {
    projectTitle: "Product Management CRUDS",
    projectDec:
      "A clean and intuitive product management web application that allows users to view, add, and manage products efficiently. Features a responsive design with organized layouts for easy navigation and seamless user interaction across devices.",
    category: "javaScript",
    imgPath: "./imges/4.jpg",
    gitHub:"https://github.com/zeinab102004/product-management.git",
    linkDeploy:"https://bucolic-yeot-d43b20.netlify.app/"
  },
];
export default function Main() {
  const [activeTab, setActiveTab] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const MotionCard = motion(Card);

  return (
    <div className="main ">
      <div className="sidebar ">
        <ul>
          <li>
            <button
              onClick={() => {
                setActiveTab("all");
                setArr(myProjects);
              }}
              className={activeTab === "all" ? "active" : null}
            >
              All Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab("css");

                const newArr = myProjects.filter((item) => {
                  return item.category === "Css";
                });
                setArr(newArr);
              }}
              className={activeTab === "css" ? "active" : null}
            >
              HTML & CSS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab("javaScript");
                const newArr = myProjects.filter((item) => {
                  return item.category === "javaScript";
                });
                setArr(newArr);
              }}
              className={activeTab === "javaScript" ? "active" : null}
            >
              JAVA SCRIPT
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab("react");
                const newArr = myProjects.filter((item) => {
                  return item.category === "react";
                });
                setArr(newArr);
              }}
              className={activeTab === "react" ? "active" : null}
            >
              REACT & MUI
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab("nodeJs");
                const newArr = myProjects.filter((item) => {
                  return item.category === "nodeJs";
                });
                setArr(newArr);
              }}
              className={activeTab === "nodeJs" ? "active" : null}
              id="node"
            >
              NODE &EXPRESS
            </button>
          </li>
        </ul>
      </div>

      <div className="projects">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <MotionCard
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
                sx={{
                  maxWidth: 345,
                  marginBottom: "1rem",
                  backgroundColor: "var(--bgHeader)",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.imgPath}
                    alt="green iguana"
                  />
                  <CardContent className="card-content">
                    <Typography
                      className="title-project"
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "var(--title)" }}
                    >
                      {item.projectTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--title-secondary)" }}
                    >
                   {item.projectDec}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="project-icons">
                    <Button
                      className="link"
                      size="small"
                      sx={{ color: "white" }}
                    >
                      <a target="blank" href={item.linkDeploy}><LinkIcon /></a>
                    </Button>
                    <Button
                      className="link"
                      size="small"
                      sx={{ color: "white" }}
                    >
                      <a target="blank" href={item.gitHub}><GitHubIcon /></a>
                    </Button>
                  </div>
                  <div className="more">
                    <Button
                      size="small"
                      sx={{ color: "var(--blu)", fontSize: "0.7rem" }}
                    >
                      Share <ArrowForwardIcon style={{ fontSize: "0.7rem" }} />
                    </Button>
                  </div>
                </CardActions>
              </MotionCard>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
