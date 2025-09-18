import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Bug Fixing",
      description: "Resolved key bugs to improve platform stability and enhance user experience across multiple NetMaxin applications, ensuring smooth functionality.",
      image: project1Image,
      technologies: ["JavaScript", "React", "Debugging", "Testing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Tools Testing", 
      description: "Tested AI tools for reliability and user satisfaction, ensuring seamless integration within the NetMaxin ecosystem and optimal performance.",
      image: project2Image,
      technologies: ["AI Testing", "Quality Assurance", "Integration", "Performance"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "UI Improvement",
      description: "Enhanced the NetMaxin app's interface for a better user experience with modern design principles and responsive layouts.",
      image: project3Image,
      technologies: ["UI/UX", "Frontend", "Responsive Design", "User Experience"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-card hover-glow transition-all duration-300 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="gradient-button text-white flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-primary hover:text-white"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Desktop/Tablet */}
                <div className="hidden sm:flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center fade-in">
          <Button
            className="gradient-button text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
            onClick={() => alert('View all projects section would be implemented here')}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;