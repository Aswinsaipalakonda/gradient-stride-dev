import { Github } from "lucide-react";

const Skills = () => {
  const programmingLanguages = [
    {
      name: "HTML5",
      icon: (
        <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          HTML
        </div>
      ),
    },
    {
      name: "CSS3", 
      icon: (
        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          CSS
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
          JS
        </div>
      ),
    },
    {
      name: "Python",
      icon: (
        <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          PY
        </div>
      ),
    },
    {
      name: "C++",
      icon: (
        <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          C++
        </div>
      ),
    },
    {
      name: "C",
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          C
        </div>
      ),
    },
  ];

  const toolsAndTechnologies = [
    {
      name: "GitHub",
      icon: <Github className="w-16 h-16 text-gray-300" />,
    },
    {
      name: "Figma",
      icon: (
        <div className="w-16 h-16 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
        </div>
      ),
    },
    {
      name: "VS Code",
      icon: (
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          VS
        </div>
      ),
    },
    {
      name: "Git",
      icon: (
        <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Git
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          R
        </div>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          Node
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Two Card Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Programming Languages Card */}
          <div className="group p-8 rounded-2xl bg-card border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:scale-105 hover-glow fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center group-hover:gradient-text transition-all duration-300">
              Programming Languages
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {programmingLanguages.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-4 group/skill cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon with hover effect */}
                  <div className="transform transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-3 group-hover/skill:shadow-lg">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="text-lg font-semibold text-center group-hover/skill:gradient-text transition-all duration-300">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Card */}
          <div className="group p-8 rounded-2xl bg-card border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:scale-105 hover-glow fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center group-hover:gradient-text transition-all duration-300">
              Tools & Technologies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {toolsAndTechnologies.map((tool, index) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center space-y-4 group/tool cursor-pointer"
                  style={{ animationDelay: `${(index + programmingLanguages.length) * 100}ms` }}
                >
                  {/* Icon with hover effect */}
                  <div className="transform transition-all duration-300 group-hover/tool:scale-110 group-hover/tool:rotate-3 group-hover/tool:shadow-lg">
                    {tool.icon}
                  </div>
                  
                  {/* Tool Name */}
                  <h4 className="text-lg font-semibold text-center group-hover/tool:gradient-text transition-all duration-300">
                    {tool.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Badge Section */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-xl font-semibold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "TypeScript", "Tailwind CSS", "Bootstrap", "SASS", "Webpack", "Vite",
              "MongoDB", "MySQL", "REST APIs", "GraphQL", "Docker", "AWS",
              "Jest", "Cypress", "Photoshop", "Illustrator", "After Effects"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-sm rounded-full border border-border hover:border-primary/50 hover-glow transition-all duration-300 hover:scale-105 cursor-pointer"
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