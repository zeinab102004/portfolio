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
    projectTitle: "react project",
    category: "react",
    imgPath: "./imges/1.jpg",
  },
  {
    projectTitle: "HTML && Css project",
    category: "Css",
    imgPath: "./imges/2.jpg",
  },
  {
    projectTitle: "Css project",
    category: "Css",
    imgPath: "./imges/3.jpg",
  },
  {
    projectTitle: "react project",
    category: "react",
    imgPath: "./imges/4.jpg",
  },
  {
    projectTitle: "Css project",
    category: "Css",
    imgPath: "./imges/5.jpg",
  },
  {
    projectTitle: "javaSctipt project",
    category: "javaScript",
    imgPath: "./imges/6.jpg",
  },
  {
    projectTitle: "Node project",
    category: "nodeJs",
    imgPath: "./imges/7.jpg",
  },
  {
    projectTitle: "JavaScript project",
    category: "javaScript",
    imgPath: "./imges/8.jpg",
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
              initial={{transform:"scale(0)"}}
              animate={{transform:"scale(1)"}}
              transition={{type:"spring", damping:8,stiffness:50}}
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                  <Button className="link" size="small" sx={{ color: "white" }}>
                    <LinkIcon />
                  </Button>
                  <Button className="link" size="small" sx={{ color: "white" }}>
                    <GitHubIcon />
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
        })
        }</AnimatePresence>
      </div>
    </div>
  );
}
