import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Rocket, MessageSquare, Leaf, Briefcase, Activity } from "lucide-react";

const ProjectsSection = () => {
  const iconMap = {
    Rocket,
    MessageSquare,
    Leaf,
    Briefcase,
    Activity,
  };

  const projects = [
    {
      title: "Predicting Startup Success and Revenue",
      description: "Applied machine learning and data mining to predict startup success/failure, estimate revenue, cluster startups, and simulate investor–startup recommendations using a dataset of 5,000 startups.",
      technologies: ["Python", "Scikit-learn", "Keras", "Statsmodels", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Surprise"],
      icon: "Rocket",
      color: "text-primary",
      bgColor: "bg-primary/10",
      category: "Machine Learning",
      github: "https://github.com/sanjanapaluru/Predicting-Startup-Success-and-Revenue-with-Machine-Learning"
    },
    {
      title: "Customer Review Sentiment Analysis",
      description: "Comprehensive sentiment analysis system for customer reviews using multiple deep learning architectures (NBoW, LSTM, CNN, BERT) with PyTorch and modern NLP techniques.",
      technologies: ["Python", "PyTorch", "Transformers", "NLTK", "Matplotlib", "Amazon Reviews Dataset"],
      icon: "MessageSquare",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      category: "Natural Language Processing",
      github: "https://github.com/sanjanapaluru/review-sentiment-analysis"
    },
    {
      title: "AgTech - Crop Recommendation System",
      description: "End-to-end machine learning system that recommends optimal crops based on soil and climate data, with interactive Tableau dashboards for farmers' decision-making.",
      technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau", "Google Colab"],
      icon: "Leaf",
      color: "text-accent",
      bgColor: "bg-accent/10",
      category: "Applied Machine Learning",
      github: "https://github.com/sanjanapaluru/AgTech"
    },
    {
      title: "Business Analyst Job Market Insights",
      description: "Analyzed job postings across industries to uncover salary trends, hiring cycles, remote/hybrid work evolution, and applied NLP-based intelligent web scraping for insights.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "BeautifulSoup", "Requests"],
      icon: "Briefcase",
      color: "text-primary",
      bgColor: "bg-primary/10",
      category: "Data Analytics",
      github: "https://github.com/sanjanapaluru/business-analyst-job-analysis"
    },
    {
      title: "Real-Time Sensor Dashboard with Smart Alerts",
      description: "Developed a real-time dashboard that connects to BMC via Redfish API, visualizes sensor data (temperature, fan speed, voltage), and triggers smart alerts with Slack integration.",
      technologies: ["Python", "Plotly", "Redfish API", "Slack Webhooks"],
      icon: "Activity",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      category: "IoT & Dashboards",
      github: "https://github.com/Axiado-Hackathon/axiado-hackathon-repo-data-tech"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my data science journey through hands-on projects
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-6 rounded-2xl hover-lift fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[project.icon as keyof typeof iconMap] && React.createElement(iconMap[project.icon as keyof typeof iconMap], { className: "w-7 h-7" })}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.bgColor} ${project.color}`}>
                    {project.category}
                  </span>
                </div>

                {/* Project content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="px-8"
              onClick={() => window.open('https://github.com/sanjanapaluru?tab=repositories', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;