import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

const About = () => {
  const skills = [
    "HTML","CSS","JavaScript","UI/UX Design", "React", "TypeScript", "Figma", "MongoDB ",
    "Tailwind CSS", "Node.js", "Python", "Express.js", "Vercel", "Locofy.ai" , "Figma" , "Bootstrap " , "Netlify" , ""
  ]

  const highlights = [
    {
      icon: Code,
      title: "Development",
      description: "Building scalable applications with modern technologies"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: Zap,
      title: "Innovation", 
      description: "Always exploring new tools and methodologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    }
  ]

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          🚀 I'm a passionate and curious Full Stack Developer in the making, with a strong focus on crafting clean, user-friendly, and responsive web applications.
Currently diving deep into the MERN stack (MongoDB, Express.js, React.js, Node.js), I blend design and development skills to bring ideas to life—from modern UI prototypes to dynamic backend integrations.
I enjoy turning complex problems into simple, beautiful, and intuitive solutions. Whether it's designing pixel-perfect interfaces or building RESTful APIs, I thrive in both frontend and backend challenges.
Always eager to learn, grow, and contribute to meaningful tech projects.

          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            My journey in tech started with curiosity and a deep passion for building things that solve real-world problems.
             After completing my Diploma in Computer Engineering with a strong academic score of 84.71%, I decided to take a bold step forward in my learning path by entering the world of web development.
I began learning the MERN stack (MongoDB, Express.js, React.js, Node.js) with the goal of becoming a full-stack developer. I dedicated daily time to mastering frontend frameworks like React, understanding backend logic with Node.js and Express, and building clean, responsive UIs using Tailwind CSS and Figma.
In parallel. Tools like GitHub, Locofy.ai, and XAMPP became part of my daily workflow as I turned static designs into dynamic applications.
working on real-world projects, and preparing to become industry-ready—driven by consistency, curiosity, and a hunger to learn.
 Every line of code I write takes me one step closer to my dream of becoming a confident and impactful developer.

            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the design community.
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="portfolio-card text-center">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About