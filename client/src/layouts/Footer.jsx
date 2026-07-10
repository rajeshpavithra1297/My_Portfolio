import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="">
      <div className="glass flex flex-col  md:flex-row justify-evenly p-2 ">
        <div className="space-y-4 items-center mb-3">
          <h2
            className="text-4xl md:text-5xl font-bold
              animate-fade-in animation-delay-100
                text-secondary-foreground"
          >
            Contact
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
            Feel free to reach out!
          </p>
        </div>
        <ul className="space-y-4 ">
          <li className=" flex flex-row gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Mail />
            <a href="mailto:pavithrarajesh7112@gmail.com">
              pavithrarajesh7112@gmail.com
            </a>
          </li>
          <li className="flex flex-row gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin />
            <a
              href="https://www.linkedin.com/in/pavithrawebdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/pavithrawebdeveloper/
            </a>
          </li>
          <li className="flex flex-row gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github />
            <a
              href="https://github.com/rajeshpavithra1297"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rajeshpavithra1297
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
