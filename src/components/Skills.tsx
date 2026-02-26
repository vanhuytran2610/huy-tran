import { Card } from "antd";
import {
  CodeOutlined,
  SettingOutlined,
  GlobalOutlined,
  CloudServerOutlined,
  DatabaseFilled,
  WindowsFilled,
} from "@ant-design/icons";

export function Skills() {
  const skillCategories = [
    {
      icon: CodeOutlined,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
    },
    {
      icon: CloudServerOutlined,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "Apache2"],
    },
    {
      icon: GlobalOutlined,
      title: "Frontend",
      skills: ["React", "HTML", "CSS"],
    },
    {
      icon: SettingOutlined,
      title: "Backend",
      skills: ["Django", "Flask", "FastAPI", "NestJS", "Laravel"],
    },
    {
      icon: DatabaseFilled,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"],
    },
    {
      icon: WindowsFilled,
      title: "Operating Systems",
      skills: ["Linux (Ubuntu)", "Windows"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-primaryMedium tracking-wide">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-primaryRegular">
            Comprehensive expertise across modern development stack with focus
            on scalable web applications and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                title={
                  <div className="flex items-center gap-3">
                    {/* dịch nhẹ sang trái cho đẹp */}
                    <div className="rounded-full">
                      <IconComponent className="text-lg" />
                    </div>
                    <span className="text-md font-primaryRegular">
                      {category.title}
                    </span>
                  </div>
                }
                className="h-full font-primaryRegular rounded-xl"
              >
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-200 p-1.5 rounded-lg text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
