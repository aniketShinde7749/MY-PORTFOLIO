import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/aniketShinde7749", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aniket-shinde-8784b5298/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              ANIKET SHINDE
            </button>
            <p className="text-muted-foreground mt-2">
              Creative Designer & Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by ANIKET SHINDE
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer