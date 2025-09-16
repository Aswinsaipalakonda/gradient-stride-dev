import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led the development of responsive web applications using React and TypeScript",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Optimized application performance, reducing load times by 40%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY", 
      period: "2021 - 2022",
      description: [
        "Designed and developed user interfaces for multiple client projects",
        "Created wireframes, prototypes, and design systems in Figma",
        "Implemented responsive designs with modern CSS frameworks",
        "Conducted user research and usability testing"
      ],
      technologies: ["Figma", "React", "SCSS", "Adobe Creative Suite"]
    },
    {
      title: "Junior Frontend Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      period: "2020 - 2021", 
      description: [
        "Developed interactive web applications using modern JavaScript frameworks",
        "Collaborated with backend developers to integrate REST APIs",
        "Participated in agile development processes and sprint planning",
        "Contributed to open-source projects and internal tools"
      ],
      technologies: ["JavaScript", "Vue.js", "CSS3", "Git"]
    },
    {
      title: "Web Development Intern",
      company: "Creative Agency Co.",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Assisted in building client websites and landing pages",
        "Learned modern web development best practices",
        "Gained experience with responsive design and cross-browser compatibility",
        "Participated in team meetings and project planning sessions"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 fade-in ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 timeline-dot z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="p-6 bg-card rounded-xl hover-glow transition-all duration-300 hover:scale-105 group">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mt-1">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;