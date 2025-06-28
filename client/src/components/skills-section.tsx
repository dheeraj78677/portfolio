import { useEffect, useRef, useState } from "react";
import { Monitor, Server, Cloud, Database, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, certifications } from "@/lib/constants";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

function SkillBar({ name, level, color }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, isVisible]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`skill-bar h-2 rounded-full ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Expertise across multiple technologies and platforms</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Monitor className="w-6 h-6 text-blue-600 mr-3" />
                Frontend Development
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color="bg-blue-600"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Server className="w-6 h-6 text-emerald-600 mr-3" />
                Backend Development
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color="bg-emerald-500"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud Technologies */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Cloud className="w-6 h-6 text-amber-600 mr-3" />
                Cloud Technologies
              </h3>
              <div className="space-y-4">
                {skills.cloud.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color="bg-amber-500"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* DevOps & Database */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                DevOps & Database
              </h3>
              <div className="space-y-4">
                {skills.devops.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color="bg-purple-500"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert} className="p-6 text-center">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 text-sm">{cert}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
