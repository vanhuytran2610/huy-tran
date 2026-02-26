import { Card } from "antd";
import { CalendarFilled, EnvironmentFilled } from "@ant-design/icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Briefcase01Icon } from "@hugeicons/core-free-icons";

export function Experience() {
  const experiences = [
    {
      title: "AI Software Engineer",
      company: "Enigco",
      location: "Remote",
      period: "2025 - Present",
      description:
        "Architect and develop AI-powered systems using Python, FastAPI, and React, with cloud deployment and infrastructure management on Render.",
      technologies: ["Python", "FastAPI", "React", "Render"],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Enclave",
      location: "Da Nang, Vietnam",
      period: "2022 - Present",
      description:
        "Delivered scalable websites, 360° performance review systems, and chatbot solutions using JavaScript, Python, and Laravel frameworks, managing deployment and server configuration on Apache2 (Linux).",
      technologies: [
        "Python",
        "Django",
        "JavaScript",
        "Typescript",
        "React",
        "NestJS",
        "PHP",
        "Laravel",
        "SQL Server",
        "MongoDB",
        "MySQL",
        "Apache2",
        "Git",
      ],
    },
    {
      title: "Frontend Software Engineer",
      company: "Freelance",
      location: "Da Nang, Vietnam",
      period: "2024 - 2025",
      description:
        "Built responsive web applications. Worked with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Javascript", "TypeScript", "React"],
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
            Over 3 years of experience building scalable web applications and AI
            solutions, with a strong focus on full-stack development.
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
