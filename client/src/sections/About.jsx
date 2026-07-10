export function About() {
  return (
    <section id="about">
      <div className="container flex justify-start my-10 relative overflow-hidden z-10 px-5 md:px-50">
        <div className="space-y-8">
          {/* <div className="animate-fade-in text-start">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </div> */}
          <div className="text-start">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-8 animate-fade-in animation-delay-200">
            <p>
              I'm{" "}
              <span className="text-primary font-semibold">
                Pavithra Rajesh
              </span>
              , a
              <span className="text-primary font-semibold">
                {" "}
                Full Stack Developer
              </span>{" "}
              with a Postgraduate Diploma in Web Design and Development from
              <span className="font-medium text-foreground">
                {" "}
                Conestoga College, Canada
              </span>
              . I enjoy building responsive, user-friendly web applications that
              combine clean design with reliable backend functionality.
            </p>

            <p>
              My expertise includes
              <span className="text-primary"> React</span>,
              <span className="text-primary"> Node.js</span>,
              <span className="text-primary"> Express.js</span>,
              <span className="text-primary"> MongoDB</span>,
              <span className="text-primary"> JavaScript</span>, and
              <span className="text-primary"> Java</span>. I enjoy turning ideas
              into practical solutions through clean, maintainable code.
            </p>

            <p>
              I'm passionate about continuous learning, solving real-world
              problems, and building applications that create meaningful user
              experiences. I'm currently seeking opportunities where I can
              contribute, grow as a developer, and collaborate with talented
              teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
