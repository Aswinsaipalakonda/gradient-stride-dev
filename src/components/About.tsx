import profileImage from "@/assets/profile-image.jpg";

const About = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center fade-in">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden hover-glow transition-all duration-300">
                <img
                  src={profileImage}
                  alt="About Srinivas Kanuri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80 -z-10"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate Frontend Developer & UI/UX Designer
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                With over 3 years of experience in web development and design, I specialize in creating 
                intuitive user interfaces and seamless user experiences. My journey started with a 
                fascination for how design and technology can work together to solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                I have expertise in modern web technologies including React, TypeScript, Tailwind CSS, 
                and various design tools like Figma and Adobe Creative Suite. I believe in writing 
                clean, maintainable code and creating designs that are both beautiful and functional.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding or designing, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing my knowledge with the developer community through 
                blogs and mentoring.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;