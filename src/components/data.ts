// Types
import { Service } from "@/types/service";
import { Testimonial } from "@/types/testimonial";
import { Project } from "@/types/project";
import {Statistic} from "@/types/statistic";
import {Brand} from "@/types/brand";

// Services Data
export const services: Service[] = [
  {
    id: 1,
    image: "/images/service/icon-01.png",
    title: "Architectural Design",
    description: "Creating functional and aesthetically pleasing architectural designs tailored to client needs."
  },
  {
    id: 2,
    image: "/images/service/icon-02.png",
    title: "Project Management",
    description: "Comprehensive project management services to ensure timely and efficient project completion."
  },
  {
    id: 3,
    image: "/images/service/icon-03.png",
    title: "Interior Design",
    description: "Transforming interior spaces with innovative and sustainable design solutions."
  },
  {
    id: 4,
    image: "/images/service/icon-04.png",
    title: "Landscape Design",
    description: "Designing sustainable and aesthetically pleasing landscapes that enhance the built environment."
  },
  {
    id: 5,
    image: "/images/service/icon-05.png",
    title: "Urban Design & Urban Planning",
    description: "Strategic planning and design for urban spaces to promote sustainable and vibrant communities."
  },
  {
    id: 6,
    image: "/images/service/icon-06.png",
    title: "Build Cost Engineering",
    description: "Providing accurate cost estimates and value engineering to optimize construction budgets."
  }
];


// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "TEREGO DISTRICT LOCAL GOVERNMENT ADMINISTRATIVE BLOCK",
    our_role: "Design And Preparation of Tender Documents.",
    status: "Construction Is Ongoing, About 90% Complete",
    imageUrl: "/images/projects/project-01.jpg",
  },
  {
    id: 2,
    title: "Proposed Diocesan Golden Jubilee Office Block 2021-2024",
    our_role: "Consultation",
    status: "Complete",
    imageUrl: "/images/projects/project-02.jpg",
  },
  {
    id: 3,
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    imageUrl: "/images/projects/project-03.jpg",
  },
  {
    id: 4,
    title: "Proposed Commercial Development on Namugongo Road",
    imageUrl: "/images/projects/project-03.jpg",
  },
  {
    id: 5,
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    imageUrl: "/images/projects/project-03.jpg",
  },
];

export const categories = ["All", "Commercial", "Religious", "Residential", "Interior Design"];

export const statistics: Statistic[] = [
  { name: "Certified Engineers", number: 220 },
  { name: "Happy Clients", number: 180 },
  { name: "Awards Won", number: 600 },
  { name: "Projects Done", number: 260 },
];



// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr Nasser Godfrey",
    designation: "Diocese of Ma'di - West Nile",
    content:
      "Resident Architects transformed our office space with innovative designs and efficient project management. Their attention to detail and commitment to excellence is unmatched.",
    image: "/images/testimonials/testimony-01.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Grace Nankinga",
    designation: "Managing Director @Grace Estates",
    content:
      "We couldn't be happier with the landscape design services provided by Resident Architects. Their creative solutions and professionalism truly enhanced the value of our property.",
    image: "/images/testimonials/testimony-02.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "David Okello",
    designation: "Project Manager @UGD Developments",
    content:
      "Resident Architects delivered exceptional urban planning services for our new residential project. Their team's expertise and collaborative approach made the entire process seamless and successful.",
    image: "/images/testimonials/testimony-03.jpg",
    star: 5,
  },
  // {
  //   id: 4,
  //   name: "Sarah Nakato",
  //   designation: "Homeowner",
  //   content:
  //     "Our dream home became a reality thanks to the incredible interior design services from Resident Architects. Their innovative ideas and dedication to our vision exceeded all our expectations.",
  //   image: "/images/testimonials/sarah-nakato.png",
  //   star: 5,
  // },
  // {
  //   id: 5,
  //   name: "Michael Sserwadda",
  //   designation: "Director @Sserwadda Industries",
  //   content:
  //     "The architectural design services provided by Resident Architects were top-notch. Their team was highly professional, and they delivered outstanding results within the agreed timelines.",
  //   image: "/images/testimonials/michael-sserwadda.png",
  //   star: 5,
  // },
  // {
  //   id: 6,
  //   name: "Esther Kyomuhendo",
  //   designation: "Operations Manager @Kyomuhendo Group",
  //   content:
  //     "Working with Resident Architects on our urban development project was a fantastic experience. Their attention to detail and innovative design solutions were exactly what we needed.",
  //   image: "/images/testimonials/esther-kyomuhendo.png",
  //   star: 5,
  // },
];


// Brand Data

export const brands: Brand[] = [
  {
    id: 6,
    name: "Formbold",
    href: "https://formbold.com",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
    imageLight: "/images/brands/lineicons-light.svg",
  },
  {
    id: 4,
    name: "Tailadmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
    imageLight: "/images/brands/tailadmin-light.svg",
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: "/images/brands/plainadmin.svg",
    imageLight: "/images/brands/plainadmin-light.svg",
  },
];

// emails {}
// 'info@real.ug'
// 'customercare@real.ug'
// 'binen@real.ug Arch. Patrick Komakech, Managing Director, ARB reg. no. 290'
// 'kabongej@real.ug' 'Kabonge Joseph Finance'
// 'finance@real.ug'
// 'birungir@real.ug' 'Birungi Ritah Ass. Finance & Admin'
// 'okellob@real.ug' 'Benard Okello Director'
// 'adongd@real.ug' 'Adong Deborah, Director'