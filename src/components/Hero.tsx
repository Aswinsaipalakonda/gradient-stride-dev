import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a dummy CV download - in a real app, this would be a proper PDF file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Srinivas_Kanuri_CV.pdf';
    // In a real application, you would link to an actual CV file
    alert('CV download would start here. Please add your actual CV file.');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm Srinivas Kanuri,{" "}
                <span className="gradient-text">UI/UX Designer</span>
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm a UI/UX and Frontend Developer passionate about crafting user-friendly 
              and visually appealing web experiences. This portfolio website, which I designed 
              and developed myself using Figma, HTML, CSS, and JavaScript, showcases my skills 
              and projects. From wireframing and prototyping in Figma to front-end development, 
              I enjoy the entire process of bringing ideas to life.
            </p>

            <Button
              onClick={handleDownloadCV}
              className="gradient-button text-white font-semibold px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              {/* Gradient Border Container */}
              <div className="gradient-border p-2 animate-float">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-card">
                  <img
                    src={profileImage}
                    alt="Srinivas Kanuri - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;