import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // This will trigger the backend route
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Dheeraj</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {personalInfo.objective}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={downloadResume}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with code editor and multiple screens" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
