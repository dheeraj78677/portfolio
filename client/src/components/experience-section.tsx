import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { workExperience } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Professional journey across leading technology companies</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } group`}
              >
                <div className="flex items-center md:w-5/12">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <Card 
                    className={`ml-6 md:ml-0 shadow-lg ${
                      index % 2 === 1 ? "md:ml-8 md:mr-0" : "md:mr-8"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{experience.title}</h3>
                        <span className="text-sm text-gray-500">{experience.period}</span>
                      </div>
                      <h4 className="text-blue-600 font-semibold mb-3">{experience.company}</h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
