import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using Python and scikit-learn. Achieved 87% accuracy with feature engineering and ensemble methods.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      category: "Machine Learning"
    },
    {
      title: "Sales Dashboard Analytics",
      description: "Interactive Tableau dashboard for sales performance analysis with real-time KPI tracking and trend visualization for business insights.",
      technologies: ["Tableau", "SQL", "Excel", "Data Visualization"],
      icon: BarChart3,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      category: "Data Visualization"
    },
    {
      title: "Stock Price Predictor",
      description: "Time series analysis and LSTM neural network to predict stock prices. Includes data preprocessing, feature scaling, and model evaluation.",
      technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
      category: "Deep Learning"
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
                    <project.icon className={`w-6 h-6 ${project.color}`} />
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
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
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
            <Button variant="cta" size="lg" className="px-8">
              <Github className="w-5 h-5" />
              <a href="https://github.com/sanjanapaluru">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;