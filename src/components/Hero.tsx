import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium gradient-text">Career Intelligence Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              Transform Your Career{" "}
              <span className="gradient-text">Trajectory</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Benchmark your resume against anonymized peer data, identify skill gaps, and discover your optimal career path with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Upload Resume
                <Upload className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div>
                <div className="text-2xl font-bold gradient-text">10K+</div>
                <div className="text-muted-foreground">Profiles Analyzed</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-muted-foreground">Career Paths</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold gradient-text">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl glow-primary">
              <img 
                src={heroVisual} 
                alt="Career growth visualization showing upward trajectory and network connections"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
