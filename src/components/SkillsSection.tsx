import { useState, useEffect } from "react";
import { Code, Database, BarChart3, Brain, Monitor, Settings } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById("skills-section");
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      title: "Data Analysis & ML",
      icon: Brain,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Advanced Analysis", level: 70 },
        { name: "Data Mining", level: 68 },
      ]
    },
    {
      title: "Visualization Tools",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: [
        { name: "Tableau", level: 80 },
        { name: "Power BI", level: 70 },
        { name: "Matplotlib/Seaborn", level: 75 },
      ]
    },
    {
      title: "Development Tools",
      icon: Monitor,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: [
        { name: "Streamlit", level: 70 },
        { name: "Jupyter", level: 85 },
        { name: "Git/GitHub", level: 75 },
      ]
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills-section" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and tools I use to transform data into insights
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="glass-card p-6 rounded-2xl hover-lift fade-in"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-12 text-center fade-in">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Additional Skills & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Pandas", "NumPy", "Scikit-learn",, "Excel", 
                  "ETL Processes", "Data Mining", "Statistical Modeling", 
                  "A/B Testing",
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;