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
                  alt="About Sai Balaji"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80 -z-10"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate Frontend Developer & Tech Specialist
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Successfully contributed to the launch of multiple products that enhanced clients' digital 
                experiences at NetMaxin. Played a vital role in supporting the company's growth, helping to 
                establish NetMaxin as a key player in the tech industry through dedicated freelance work.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in web development, app development, SEO analysis, and marketing. My technical 
                skills combined with strong leadership and communication abilities allow me to deliver 
                exceptional results and solve complex problems effectively.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently pursuing B.Tech in CSE - Cyber Security, I'm passionate about learning new 
                technologies and contributing to innovative projects that make a real impact.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card hover-glow transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;