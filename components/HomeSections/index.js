import React from "react";
import Intro from "./Intro";
import About from "./About";
import About2 from "./About2";
import Section from "./Section";
import BlogCard from "./BlogCard";
import ProjectCard from "../cards/ProjectCard";
import ExpirenceCard from "../cards/ExpirenceCard";
import Skills from "./Skills";
import SayHello from "./SayHello";

import { attributes as homeAttributes } from "../../content/home.md";
import { attributes as blogAttributes } from "../../content/blogs.md";
import { attributes as experienceAttributes } from "../../content/experience.md";
import { attributes as projectsAttributes } from "../../content/projects.md";
import { attributes as skillsAttributes } from "../../content/skills.md";

// Icons
import { BookOpen } from "styled-icons/remix-line";
import { BriefcaseOutline } from "styled-icons/evaicons-outline";

const HomeSections = [
  {
    id: "intro",
    data: {
      x: -1000,
      y: -1500,
    },
    content: <Intro data={homeAttributes.intro} />,
  },
  {
    id: "about",
    data: {
      x: -300,
      y: -1500,
    },
    content: <About data={homeAttributes.about} />,
  },
  {
    id: "about-2",
    data: {
      x: 350,
      y: -1500,
      rotateZ: 90,
    },
    content: <About2 data={homeAttributes.about} />,
  },
  {
    id: "blog",
    data: {
      x: -1000,
      y: -400,
      rotateZ: 0,
      scale: 6,
    },
    content: (
      <Section
        title={blogAttributes.section_title}
        icon={
          <BookOpen className="text-secondary dark:text-primary h-[50px] w-[50px]" />
        }
      />
    ),
  },
  {
    id: "blog-1",
    data: {
      x: -1200,
      y: 800,
    },
    content: <BlogCard data={blogAttributes.Blogs[0]} />,
  },
  {
    id: "blog-2",
    data: {
      x: -300,
      y: 800,
    },
    content: <BlogCard data={blogAttributes.Blogs[1]} />,
  },
  {
    id: "blog-3",
    data: {
      x: 600,
      y: 800,
    },
    content: <BlogCard data={blogAttributes.Blogs[2]} />,
  },
  {
    id: "blog-4",
    data: {
      x: 1500,
      y: 800,
    },
    content: <BlogCard data={blogAttributes.Blogs[3]} />,
  },
  {
    id: "blog-5",
    data: {
      x: 2400,
      y: -200,
    },
    content: (
      <BlogCard
        data={blogAttributes.Blogs[4]}
        showAll={blogAttributes.blog_url}
      />
    ),
  },
  {
    id: "experience",
    data: {
      x: 6000,
      y: 1700,
      rotateY: 180,
      scale: 6,
    },
    content: (
      <Section
        title={experienceAttributes.section_title}
        icon={
          <BriefcaseOutline className="text-secondary dark:text-primary h-[50px] w-[50px]" />
        }
      />
    ),
  },
  {
    id: "experience-1",
    data: {
      x: 6200,
      y: 2900,
      rotateY: 180,
    },
    content: <ExpirenceCard data={experienceAttributes.Experience[0]} />,
  },
  {
    id: "experience-2",
    data: {
      x: 5300,
      y: 2900,
      rotateY: 180,
    },
    content: <ExpirenceCard data={experienceAttributes.Experience[1]} />,
  },
  {
    id: "experience-3",
    data: {
      x: 4400,
      y: 2900,
      rotateY: 180,
    },
    content: <ExpirenceCard data={experienceAttributes.Experience[2]} />,
  },
  {
    id: "experience-4",
    data: {
      x: 3500,
      y: 2900,
      rotateY: 180,
    },
    content: <ExpirenceCard data={experienceAttributes.Experience[3]} />,
  },
  {
    id: "experience-5",
    data: {
      x: 3500,
      y: 1700,
      rotateY: 180,
    },
    content: <ExpirenceCard data={experienceAttributes.Experience[4]} />,
  },
  {
    id: "skills",
    data: {
      x: 1400,
      y: 3700,
      rotateY: 180,
      rotateZ: 90,
    },
    content: <Skills data={skillsAttributes} />,
  },
  {
    id: "projects",
    data: {
      x: 2500,
      y: 4500,
      rotateY: 180,
      rotateZ: 180,
    },
    content: (
      <ProjectCard
        data={projectsAttributes.Projects[0]}
        show_heading={projectsAttributes.section_title}
      />
    ),
  },
  {
    id: "projects-1",
    data: {
      x: 3800,
      y: 4500,
      rotateY: 180,
      rotateZ: 180,
    },
    content: <ProjectCard data={projectsAttributes.Projects[1]} />,
  },
  // {
  //   id: "projects-2",
  //   data: {
  //     x: 4300,
  //     y: 4500,
  //     rotateY: 180,
  //     rotateZ: 180,
  //   },
  //   content: <ProjectCard data={SiteData.blog.blog1} />,
  // },
  {
    id: "say-hello",
    data: {
      x: 5500,
      y: 4900,
      rotateY: 180,
      rotateZ: 270,
    },
    content: <SayHello />,
  },
];

export default HomeSections;
