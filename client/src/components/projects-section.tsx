import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, FileText, Play } from "lucide-react";
import { projects } from "@/lib/constants";

export default function ProjectsSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Recent full-stack applications showcasing modern technologies</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden">
              <img 
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {project.title !== "Splitwise Clone" && project.title !== "Shopping Cart App" && (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className={(project.title === "Splitwise Clone" || project.title === "Shopping Cart App") ? "w-full" : "flex-1"}
                    onClick={() => {
                      if (project.title === "TeachTeam Platform") {
                        window.open("https://github.com/dheeraj78677/TeachTeam-repo", "_blank");
                      } else if (project.title === "Splitwise Clone" && project.hasViewDocs) {
                        window.open("/api/project-docs/splitwise", "_blank");
                      } else if (project.title === "Shopping Cart App" && project.hasViewVideo) {
                        setVideoModalOpen(true);
                      } else {
                        // For other projects, you can add their GitHub links here
                        window.open("#", "_blank");
                      }
                    }}
                  >
                    {project.title === "Splitwise Clone" && project.hasViewDocs ? (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        View Documentation
                      </>
                    ) : project.title === "Shopping Cart App" && project.hasViewVideo ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </>
                    ) : (
                      <>
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full" aria-describedby="video-description">
          <DialogHeader>
            <DialogTitle>Shopping Cart App - Demo Video</DialogTitle>
          </DialogHeader>
          <div id="video-description" className="sr-only">
            Demonstration video showing the Shopping Cart App built with Salesforce Lightning Components
          </div>
          <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4">
              <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Demo Video Available</h3>
              <p className="text-gray-600 mb-4">
                This project includes a demonstration video showing the Shopping Cart App functionality.
                Due to video format compatibility, please download to view.
              </p>
            </div>
            <Button 
              onClick={() => window.open("/api/project-video/shopping-cart", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              Download Demo Video
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
