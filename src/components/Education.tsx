import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2016 - 2020",
      grade: "GPA: 3.8/4.0",
      description: "Specialized in software engineering and web development. Completed coursework in data structures, algorithms, database systems, and human-computer interaction.",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Student Association",
        "Winner of Annual Hackathon 2019"
      ]
    },
    {
      degree: "Certificate in UI/UX Design",
      institution: "Design Academy Online",
      location: "Online",
      period: "2020 - 2021",
      grade: "Certificate of Excellence",
      description: "Comprehensive program covering user research, wireframing, prototyping, and visual design principles. Completed multiple real-world projects with industry mentors.",
      achievements: [
        "Top 5% of graduating class",
        "Completed 3 industry client projects",
        "Specialization in Mobile UI Design"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CDA-2023-001"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      credentialId: "GA-2023-SK-001"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-RDC-2022-456"
    },
    {
      name: "Adobe Certified Expert - Figma",
      issuer: "Adobe",
      date: "2022",
      credentialId: "ACE-FIG-2022-789"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic journey and professional certifications that have contributed to my expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-xl hover-glow transition-all duration-300 hover:scale-105 fade-in group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {edu.degree}
                      </h4>
                      <h5 className="text-lg font-semibold text-primary mt-1">
                        {edu.institution}
                      </h5>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h6 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h6>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg hover-glow transition-all duration-300 hover:scale-105 fade-in group border border-border"
                    style={{ animationDelay: `${(index + 2) * 200}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                      <Award className="w-5 h-5 text-primary flex-shrink-0 ml-3" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-8 p-6 bg-card rounded-xl hover-glow transition-all duration-300 fade-in">
                <h4 className="text-lg font-bold mb-4">Additional Learning</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm">Online Courses</h5>
                    <p className="text-xs text-muted-foreground">
                      Advanced React Patterns, TypeScript Deep Dive, Web Performance Optimization
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Workshops & Conferences</h5>
                    <p className="text-xs text-muted-foreground">
                      ReactConf 2023, Design Systems Summit, Frontend Masters Live
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Publications</h5>
                    <p className="text-xs text-muted-foreground">
                      "Modern CSS Grid Techniques" - Medium, "React Performance Tips" - Dev.to
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;