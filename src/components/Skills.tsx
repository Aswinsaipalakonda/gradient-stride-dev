import { 
  Code, 
  Palette, 
  Monitor, 
  Smartphone, 
  Database, 
  GitBranch,
  Figma,
  Chrome
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      description: "React, TypeScript, JavaScript, HTML5, CSS3",
      level: 95
    },
    {
      name: "UI/UX Design", 
      icon: <Palette className="w-8 h-8" />,
      description: "Figma, Adobe XD, Sketch, Prototyping",
      level: 90
    },
    {
      name: "Responsive Design",
      icon: <Monitor className="w-8 h-8" />,
      description: "Tailwind CSS, Bootstrap, CSS Grid, Flexbox",
      level: 92
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "React Native, Progressive Web Apps",
      level: 85
    },
    {
      name: "Backend Integration",
      icon: <Database className="w-8 h-8" />,
      description: "REST APIs, GraphQL, Node.js, MongoDB",
      level: 80
    },
    {
      name: "Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Git, GitHub, GitLab, Collaborative Development",
      level: 88
    },
    {
      name: "Design Tools",
      icon: <Figma className="w-8 h-8" />,
      description: "Figma, Adobe Creative Suite, InVision",
      level: 93
    },
    {
      name: "Web Performance",
      icon: <Chrome className="w-8 h-8" />,
      description: "Optimization, SEO, Accessibility, Testing",
      level: 87
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 rounded-xl bg-card hover-glow transition-all duration-300 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent text-white mb-4 group-hover:animate-pulse">
                {skill.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="gradient-text font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
              "Node.js", "MongoDB", "Git", "Figma", "Adobe XD", "Webpack",
              "Vite", "REST APIs", "GraphQL", "Jest", "Cypress", "Docker"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card text-sm rounded-full border border-border hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;