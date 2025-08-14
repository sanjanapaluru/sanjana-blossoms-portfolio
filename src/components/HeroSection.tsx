import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/SanjanaPaluru.jpeg";

const HeroSection = () => {

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjana-paluru/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/sanjanapaluru",
      color: "hover:text-gray-800"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:sanjanapaluruwork03@gmail.com",
      color: "hover:text-red-500"
    }
  ];
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-secondary/15 float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-accent/20 float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in visible">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-xl" />
              <img
                src={profileImage}
                alt="Sanjana Paluru"
                className="relative w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white/30 hover-lift"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Sanjana Paluru</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            A passionate <span className="text-primary font-semibold">Data Science</span> fresher
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming data into insights with Python, machine learning, and visualization. 
            Ready to make an impact in the world of data-driven decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="lg" className="px-8">
              <Download className="w-5 h-5" />
              View Resume
            </Button>
            <Button variant="hero" size="lg" className="px-8">
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;