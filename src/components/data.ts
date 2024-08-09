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
    status: "Construction of project is ongoing and about 90% Complete",
    imageUrl: "/images/projects/project-01.jpg",
    category: "Institutional",
  },
  {
    id: 2,
    title: "Proposed Diocesan Golden Jubilee Office Block 2021-2024",
    our_role: "Consultation by Resident Architects Limited, alongside Dolphin Engineering Consults Ltd.",
    status: "Construction of the project commenced in 2022, and is still ongoing.",
    imageUrl: "/images/projects/project-02.jpg",
    category: "Institutional",
  },
  {
    id: 3,
    title: "Proposed Commercial Development on Namugongo Road",
    location: "Sonde Goma Division-Mukono Municipal Council",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-03.jpg",
    category: "Commercial",
  },
  {
    id: 4,
    title: "Proposed Residential Apartment Development",
    location: "Mbalwa, Kira Municipal Council Wakiso District",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-04.jpg",
    category: "Residential",
  },
  {
    id: 5,
    title: "Proposed Church Building",
    location: "Ntungamo",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-05.jpg",
    category: "Institutional",
  },
  {
    id: 6,
    title: "Proposed Residential Development",
    location: "Kiti Matuga -Wakiso District",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-06.jpg",
    category: "Residential",
  },
  {
    id: 7,
    title: "Interior design for a Coffee Bar",
    location: "Kabanyolo Gayaza",
    our_role: "Project is under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-07.jpg",
    category: "Hospitality",
  },
  {
    id: 8,
    title: "Proposed Commercial Development On Isingiro Town Council",
    location: "Isingiro Town Council",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-08.jpg",
    category: "Commercial",
  },
  {
    id: 9,
    title: "Proposed Office Development",
    location: "Arua City Council",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-09.jpg",
    category: "Commercial",
  },
  {
    id: 10,
    title: "Proposed Classroom Development",
    location: "Iganga",
    our_role: "Project is Designed by and under supervision of Resident Architects Limited.",
    imageUrl: "/images/projects/project-10.jpg",
    category: "Commercial",
  },
];

export const categories = ["All", "Commercial", "Institutional", "Mixed Use Development", "Health Care",
                                    "Hospitality", "Residential"];

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
    href: "#",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 1,
    name: "UIdeck",
    href: "#",
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