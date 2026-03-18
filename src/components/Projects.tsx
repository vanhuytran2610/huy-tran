import { Card } from "antd";
import { Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { ImageWithFallback } from "./ImageWithFallback";
import ecommerceImage from "../assets/images/ecommerce.jpg";
import enigcoImage from "../assets/images/enigco.jpg";
import erpImage from "../assets/images/erp.png";
import mitImage from "../assets/images/mit.png";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Website for Japanese Supermarket",
      description:
        "Frontend e-commerce solution built with React and TypeScript. Features include customer pages, user authentication, payment processing, and admin dashboard.",
      image: ecommerceImage,
      technologies: [
        "Javascript",
        "TypeScript",
        "PHP",
        "React",
        "Laravel",
        "Hostinger",
      ],
      demo: "https://shokyutiemvayca.com/",
    },
    {
      title: "AI Patient Safety & Smart Hospital Platform",
      description:
        "Real-time patient monitoring, AI-powered clinical support, and an intelligent hospital operations management system built with Python, FastAPI, React, and deployed on Render.",
      image: enigcoImage,
      technologies: ["Python", "FastAPI", "React", "Render", "PostgreSQL"],
      demo: "https://enigco.com/",
    },
    {
      title: "360° Performance Review System",
      description:
        "Built a 360-degree performance review platform that allows employees to conduct self-assessments, suggest salary adjustment percentages, and outline personal growth plans.",
      image: erpImage,
      technologies: ["TypeScript", "React", "NestJS", "WebSocket", "MongoDB"],
      demo: "https://eerp.enclave.vn/",
    },
    {
      title:
        "Driver Behavior Detection System - Joint Project with MIT Research Lab",
      description:
        "Collaborated with MIT researchers to develop a driver behavior detection system using computer vision and machine learning techniques. The system analyzes video feeds to identify risky driving behaviors and provide real-time feedback.",
      image: mitImage,
      technologies: ["Python", "PostgreSQL"],
      demo: "/",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12 font-primaryMedium">
          <h2 className="text-3xl md:text-4xl tracking-wide">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack
            and AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden"
              cover={
                <div className="aspect-video overflow-hidden h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              }
            >
              <div className="space-y-4">
                <p className="font-primaryMedium text-base">{project.title}</p>
                <p className="text-muted-foreground font-primaryRegular">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-primaryRegular text-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-8">
                  <div className="absolute bottom-4">
                    <Button size="middle" color="default" variant="solid">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExportOutlined className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
