import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

const About = () => {
  const skills = [
    "UI/UX Design", "React", "TypeScript", "Figma", "Adobe Creative Suite",
    "Tailwind CSS", "Node.js", "Python", "Design Systems", "Prototyping"
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
            I'm a passionate designer and developer with a love for creating exceptional digital experiences. 
            With years of experience in both design and development, I bridge the gap between creativity and functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Started as a designer, evolved into a full-stack developer. I believe great products 
              come from understanding both the technical possibilities and user needs. My approach 
              combines aesthetic sensibility with practical problem-solving.
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