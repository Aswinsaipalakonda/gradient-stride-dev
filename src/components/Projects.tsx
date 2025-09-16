import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, user authentication, and payment integration.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management Dashboard", 
      description: "A comprehensive project management tool with real-time collaboration features, drag-and-drop functionality, and team analytics.",
      image: project2Image,
      technologies: ["React", "Redux", "Material-UI", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: project3Image,
      technologies: ["React Native", "TypeScript", "Weather API", "Maps SDK"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing design skills and development projects with smooth animations and modern UI.",
      image: project1Image,
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with real-time data visualization and performance metrics.",
      image: project2Image,
      technologies: ["Vue.js", "Chart.js", "Firebase", "Social APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "A comprehensive LMS with course management, student progress tracking, and interactive learning modules.",
      image: project3Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Video.js"],
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