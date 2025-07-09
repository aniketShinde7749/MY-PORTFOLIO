import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and secure payments.",
      tags: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      title: "Design System",
      description: "Comprehensive design system built for a SaaS company. Includes reusable components, design tokens, and documentation.",
      tags: ["Figma", "React", "Storybook", "Design Tokens"],
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking mobile application. Complete user journey from onboarding to goal tracking.",
      tags: ["Figma", "Prototyping", "User Research", "Mobile UI"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard for AI-powered insights. Features data visualization, real-time metrics, and predictive analytics.",
      tags: ["Vue.js", "D3.js", "Python", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design for a tech startup including logo, color palette, typography, and brand guidelines.",
      tags: ["Branding", "Logo Design", "Adobe Creative Suite", "Brand Guidelines"],
      image: "https://images.unsplash.com/photo-1634987666644-cf8e8c91c0d5?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    }
  ]

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in design and development. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio