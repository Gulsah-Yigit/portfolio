//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
} from "react-icons/fi";
// import { CiLinkedin } from "react-icons/ci";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/1.png";
import Project2 from "./assets/img/projects/2.png";
import Project3 from "./assets/img/projects/3.png";
import Project4 from "./assets/img/projects/4.png";
import Project5 from "./assets/img/projects/5.png";
import Project6 from "./assets/img/projects/6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
// import SkillImg9 from "./assets/img/skills/bootstrap.png";
// import SkillImg10 from "./assets/img/skills/firebase.png";
// import SkillImg11 from "./assets/img/skills/mongo.png";
// import SkillImg12 from "./assets/img/skills/tailwind.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },

  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/g%C3%BCl%C5%9Fah-yi%C4%9Fit-943b38167/",
    target: "_blank",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Gulsah-Yigit",
    target: "_blank",
  },
  {
    icon: <FiMail />,
    href: "mailto:gulsahyigit3@gmail.com",
    target: "_blank",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsImg = [
  {
    id: "1",
    image: Project1,
    href: "https://netflix-clone-psi-lyart.vercel.app/",
    github: "https://github.com/Gulsah-Yigit/netflix-clone.git",
    target: "_blank",
  },
  {
    id: "2",
    image: Project2,
    href: "https://hulu-clone-eight-xi.vercel.app/",
    github: "https://github.com/Gulsah-Yigit/hulu-clone-with-next.git",
    target: "_blank",
  },
  {
    id: "3",
    image: Project3,
    href: "",
    github: "https://github.com/Gulsah-Yigit/Microsoft-Homepage-Clone.git",
    target: "_blank",
  },
  {
    id: "4",
    image: Project4,
    href: "https://house-marketplace-app-orcin.vercel.app/",
    github: "https://github.com/Gulsah-Yigit/House-Marketplace-App.git",
    target: "_blank",
  },
  {
    id: "5",
    image: Project5,
    href: "https://github-finder-app-bay-eight.vercel.app/",
    github: "https://github.com/Gulsah-Yigit/Github-Finder-App.git",
    target: "_blank",
  },
  {
    id: "6",
    image: Project6,
    href: "https://doh-todo.vercel.app/",
    github: "https://github.com/Gulsah-Yigit/doh-todo.git",
    target: "_blank",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  // {
  //   image: SkillImg9,
  // },
  // {
  //   image: SkillImg10,
  // },
  // {
  //   image: SkillImg11,
  // },
  // {
  //   image: SkillImg12,
  // },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "HTML & CSS Responsive Web Design",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "React JS / Node.js / Javascript Development",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "PSD to Bootstrap Services",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "CMS Theming Services",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at gulsahyigit3@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Istanbul, Turkey",
  },
  {
    icon: <FiPhone />,
    title: "Mobile",
    subtitle: "(0531)-274-48-92",
  },
];
