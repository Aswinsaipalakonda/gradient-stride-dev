import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in CSE - Cyber Security",
      institution: "Maharaj Vijayaram Gajapathi Raj College of Engineering (A)",
      location: "Vizianagaram, India",
      period: "Sep 2023 - Present",
      grade: "Currently Pursuing",
      description: "Specializing in Cyber Security with focus on web security, ethical hacking, and secure software development practices.",
      achievements: [
        "Active member of Cyber Security Club",
        "Participating in CTF competitions", 
        "Learning advanced security protocols"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Vizianagaram, India",
      period: "Apr 2020 - Mar 2022",
      grade: "Completed",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving foundation.",
      achievements: [
        "Strong performance in Mathematics",
        "Developed interest in programming",
        "Participated in science exhibitions"
      ]
    },
    {
      degree: "10th Grade",
      institution: "St. Joseph's English Medium High School",
      location: "Vizianagaram, India",
      period: "June 2016 - Feb 2020",
      grade: "Completed",
      description: "Completed secondary education with focus on academics and extracurricular activities.",
      achievements: [
        "Good academic performance",
        "Active in school events",
        "Developed communication skills"
      ]
    }
  ];

  const certifications = [
    {
      name: "Web Development Certification",
      issuer: "Online Learning Platform",
      date: "2024",
      credentialId: "WEB-DEV-2024-001"
    },
    {
      name: "App Development Certification",
      issuer: "Mobile Development Institute",
      date: "2024", 
      credentialId: "APP-DEV-2024-002"
    },
    {
      name: "SEO Analysis Certification",
      issuer: "Digital Marketing Academy",
      date: "2024",
      credentialId: "SEO-2024-003"
    },
    {
      name: "Marketing Certification",
      issuer: "Marketing Institute",
      date: "2024",
      credentialId: "MKT-2024-004"
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

            {/* Certifications Column - Using Image Auto Slider */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Professional Certifications
              </h3>
              
              <div className="rounded-lg overflow-hidden bg-secondary/30 border border-border">
                <div className="w-full h-64 relative">
                  <style>{`
                    @keyframes scroll-right {
                      0% {
                        transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-50%);
                      }
                    }

                    .infinite-scroll {
                      animation: scroll-right 20s linear infinite;
                    }

                    .scroll-container {
                      mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 10%,
                        black 90%,
                        transparent 100%
                      );
                      -webkit-mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 10%,
                        black 90%,
                        transparent 100%
                      );
                    }

                    .image-item {
                      transition: transform 0.3s ease, filter 0.3s ease;
                    }

                    .image-item:hover {
                      transform: scale(1.05);
                      filter: brightness(1.1);
                    }
                  `}</style>
                  
                  <div className="scroll-container w-full h-full">
                    <div className="infinite-scroll flex gap-4 w-max h-full">
                      {[
                        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="image-item flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg"
                        >
                          <img
                            src={image}
                            alt={`Certificate ${(index % 8) + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Professional certifications in Web Development, App Development, SEO Analysis, and Marketing
                  </p>
                </div>
              </div>

              {/* Additional Skills */}
              <div className="mt-8 p-6 bg-card rounded-xl hover-glow transition-all duration-300 fade-in">
                <h4 className="text-lg font-bold mb-4">Technical Skills</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm">Core Skills</h5>
                    <p className="text-xs text-muted-foreground">
                      Web Development, App Development, SEO Analysis, Marketing
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Soft Skills</h5>
                    <p className="text-xs text-muted-foreground">
                      Leadership, Communication, Problem-Solving
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Languages</h5>
                    <p className="text-xs text-muted-foreground">
                      Telugu (Fluent), English (Fluent)
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