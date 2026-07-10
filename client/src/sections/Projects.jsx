import { ArrowUpRight, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="container my-10 relative z-10 px-5 md:px-50">
        {/* Section Header */}
        <div className="text-start max-w-3xl space-y-8 ">
          {/* <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-5">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
            >
              <div className="relative overflow-hidden ">
                <img
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />

                {/* Gradient of image  */}
                <div
                  className="absolute inset-0 
                    bg-gradient-to-t from-card via-card/50
                    to-transparent opacity-60"
                />

                <div className="absolute inset-0 items-center flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className=" p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology._id}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
