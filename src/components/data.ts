// Types
import { Service } from "@/types/service";
import { Testimonial } from "@/types/testimonial";
import { Project } from "@/types/project";
import {Statistic} from "@/types/statistic";

// Services Data
export const services: Service[] = [
  {
    id: 1,
    image: "/images/services/architectural-design.jpg",
    title: "Architectural Design",
    description: "Creating functional and aesthetically pleasing architectural designs tailored to client needs."
  },
  {
    id: 2,
    image: "/images/services/project-management.jpg",
    title: "Project Management",
    description: "Comprehensive project management services to ensure timely and efficient project completion."
  },
  {
    id: 3,
    image: "/images/services/interior-design.jpg",
    title: "Interior Design",
    description: "Transforming interior spaces with innovative and sustainable design solutions."
  },
  {
    id: 4,
    image: "/images/services/landscape-design.jpg",
    title: "Landscape Design",
    description: "Designing sustainable and aesthetically pleasing landscapes that enhance the built environment."
  },
  {
    id: 5,
    image: "/images/services/urban-design.jpg",
    title: "Urban Design & Urban Planning",
    description: "Strategic planning and design for urban spaces to promote sustainable and vibrant communities."
  },
  {
    id: 6,
    image: "/images/services/build-cost-engineering.jpg",
    title: "Build Cost Engineering",
    description: "Providing accurate cost estimates and value engineering to optimize construction budgets."
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client A",
    designation: "CEO, Company A",
    content: "Excellent service and timely delivery.",
    image: "/images/testimonials/client-a.jpg",
    star: 5
  },
  {
    id: 2,
    name: "Client B",
    designation: "CTO, Company B",
    content: "Highly professional and great quality.",
    image: "/images/testimonials/client-b.jpg",
    star: 4
  },
  // Add more testimonials as needed
];

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-01.jpg",
  },
  {
    id: 2,
    title: "TEREGO DISTRICT LOCAL GOVERNMENT ADMINISTRATIVE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-02.jpg",
  },
  {
    id: 3,
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-03.jpg",
  },
  {
    id: 4,
    title: "Proposed Commercial Development on Namugongo Road",
    subtitle: "Madi & West Nile Diocese",
    imageUrl: "/images/projects/project-03.jpg",
  },
  {
    id: 5,
    title: "DIOCESAN GOLDEN JUBILEE OFFICE BLOCK",
    subtitle: "Madi & West Nile Diocese",
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