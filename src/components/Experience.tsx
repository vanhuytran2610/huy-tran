import { Card } from "antd";
import { CalendarFilled, EnvironmentFilled } from "@ant-design/icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Briefcase01Icon } from "@hugeicons/core-free-icons";

export function Experience() {
  const experiences = [
    {
      title: "AI Agent Engineer",
      company: "Personal Project – Badminton Club Management Platform",
      location: "Remote",
      period: "Jan 2026 - Present",
      description:
        "Built an AI agent layer on top of a React/Node.js badminton club app. Admins can manage operations via natural language using LLM function calling, with human-in-the-loop confirmation and persistent conversation memory.",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "LangGraph",
        "LLM Function Calling",
        "Grok (xAI)",
        "MongoDB",
        "Docker",
        "Nginx",
        "i18n",
      ],
    },
    {
      title: "AI Software Engineer",
      company: "Enigco",
      location: "Remote",
      period: "Jan 2025 - Present",
      description:
        "Led AI development in a 3-member startup team. Built computer vision models for seizure and fall detection, real-time inference pipelines with MediaPipe, and FastAPI services integrated into a smart hospital platform.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "OpenCV",
        "MediaPipe",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Enclave",
      location: "Da Nang, Vietnam",
      period: "Jan 2022 - Present",
      description:
        "Delivered 4 production systems: driver behavior detection models (MIT Research Lab joint project), an enterprise RAG chatbot for a US government client, a 360° performance review platform with microservices, and an NGO management system.",
      technologies: [
        "Python",
        "OpenCV",
        "Django",
        "Rasa",
        "RAG",
        "LLM",
        "NestJS",
        "gRPC",
        "TypeScript",
        "React",
        "Redux",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "WebSocket",
        "Docker",
        "Apache2",
        "PHP",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Da Nang, Vietnam",
      period: "Aug 2024 - Aug 2025",
      description:
        "Built a full-stack e-commerce platform for a Japanese supermarket with customer and admin portals, covering product management, shopping cart, online payment, and order tracking.",
      technologies: [
        "PHP",
        "Laravel",
        "React",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "MySQL",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12 font-primaryMedium">
          <h2 className="text-3xl md:text-4xl tracking-wide">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4+ years delivering production web applications and AI-powered systems — from LLM agents and computer vision to full-stack platforms across startups, enterprises, and research labs.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              title={
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-3 md:my-0">
                  <div className="flex flex-col md:items-start gap-1 font-primaryRegular text-gray-800 text-base">
                    <div className="md:my-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <HugeiconsIcon
                          icon={Briefcase01Icon}
                          className="h-5 w-5"
                        />
                        {exp.title}
                      </div>
                      <p className="text-muted-foreground mb-0">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-gray-400 font-primaryRegular text-sm md:my-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarFilled className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <EnvironmentFilled className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              }
              className="rounded-xl"
            >
              <p className="text-muted-foreground mb-4 font-primaryRegular">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm font-primaryRegular text-gray-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
