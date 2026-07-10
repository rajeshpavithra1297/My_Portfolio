import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/Button";

const skills = [
  "HTML",
  "CSS",
  "Java",
  "JavaScrpt",
  "Angular",
  "React",
  "Node.js",
  "MongoDB",
  "AWS Basics",
  "Tailwind CSS",
  "Git",
  "GitHub Actions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow:hidden">
      <div className="absolute inset-0 overflow-hidden pointerr-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto relative z-10 px-5 md:px-50">
        <div className=" grid lg:grid-cols-2 gap-30 items-center">
          {/* left content */}
          <div className="space-y-8 mt-10">
            <div className="animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mt-7">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Web Developer, Full Stack
              </span>
            </div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-primary font-medium tracking-wide">
                👋 Welcome to my portfolio
              </p>

              <h1 className="text-5xl font-bold">
                Hi, I'm <span className="text-primary">Pavithra Rajesh</span>
              </h1>

              <p className="text-md leading-6 text-muted-foreground max-w-2xl">
                A Full Stack Developer passionate about creating responsive web
                applications and delivering intuitive digital experiences.
                Discover projects built with React, Node.js, Express, MongoDB,
                and modern web technologies.
              </p>
            </div>

            {/* CTA */}
            <div className="relative flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="default">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/Pavitra_Rajesh_Resume.pdf" target="_blank">
                <Button size="default">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}

            <div className="relative flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/rajeshpavithra1297" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pavithrawebdeveloper/",
                },
              ].map((x, idx) => (
                <a
                  key={idx}
                  href={x.href}
                  className="p-2 rounded-full glass hover:bg-primary/20 hover: text-primary transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<x.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}

          <div className="relative animate-fade-in animation-delay-300 flex justify-center ">
            <div className="relative max-w-sm mx-auto ">
              {/* profile image */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via transparent to primary/10 blur-2xl animate-pulse"/>  */}
              <div className="relative glass w-60 h-60 md:w-80 md:h-80  rounded-full glow-border">
                <img
                  src="profile-photo.jpg"
                  alt="Pavithra Rajesh"
                  className="w-full h-full object-cover rounded-full"
                ></img>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-1 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span text-sm font-medium>
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className=" mt-5 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((name, i) => (
                <div key={i} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
