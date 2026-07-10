import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { getExperiences } from "../services/experienceServices";

export function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <section className="relative overflow:hidden px-5" id="experience">
      <div className=" my-10 space-y-8 md:px-50">
        <h2
          className="text-4xl md:text-5xl font-bold
            animate-fade-in animation-delay-100
            text-secondary-foreground"
        >
          Experience and Education
        </h2>

        <div className="glass rounded-3xl grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-200 ">
          {/* Skills */}
          <div className="grid grid-cols-3 items-center justify-self-center gap-4 p-10">
            {skills.map((skill, id) => {
              const Icon = skill.imageSrc;
              return (
                <div key={id}>
                  <Icon className="text-5xl" />
                  <span>{skill.title}</span>
                </div>
              );
            })}
          </div>

          {/* Experiences */}
          <div className="space-y-2 py-4">
            {experiences.map((exp) => {
              return (
                <div key={exp._id} className="">
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
