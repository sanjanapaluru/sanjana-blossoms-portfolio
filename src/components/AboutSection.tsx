import { Heart, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the data
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 fade-in">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hello! I'm Sanajana, a passionate data science enthusiast with a love for uncovering 
                patterns and insights hidden within complex datasets. I believe that data has the 
                power to tell incredible stories and drive meaningful change.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                As a fresher entering the exciting world of data science, I bring fresh perspectives, 
                eagerness to learn, and a strong foundation in analytical thinking. My journey has 
                equipped me with skills in Python, machine learning, and data visualization.
              </p>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Fun Fact</h3>
                </div>
                <p className="text-foreground/80">
                  I love turning coffee into code and data into beautiful visualizations. 
                  When I'm not analyzing datasets, you can find me exploring new ML algorithms 
                  or working on personal projects that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Feature cards */}
            <div className="space-y-6 fade-in">
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Passionate Learner</h3>
                </div>
                <p className="text-foreground/80">
                  Always eager to explore new technologies and methodologies in the 
                  ever-evolving field of data science.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Goal-Oriented</h3>
                </div>
                <p className="text-foreground/80">
                  Focused on building meaningful solutions that create real impact 
                  and drive data-informed decision making.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Creative Problem Solver</h3>
                </div>
                <p className="text-foreground/80">
                  Combining analytical thinking with creative approaches to 
                  tackle complex data challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;