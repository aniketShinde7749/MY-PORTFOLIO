import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"
import profileAvatar from "@/assets/profile-avatar.jpg"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-glow/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <img 
            src={profileAvatar}
            alt="Tomasz Gajda"
            className="w-32 h-32 rounded-full border-4 border-white/20 shadow-glow mx-auto"
          />
        </div>
        
        {/* Name and Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Tomasz Gajda
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 animate-fade-in font-light">
          Creative Designer & Developer
        </p>
        
        <p className="text-lg sm:text-xl mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in">
          Crafting beautiful digital experiences with a passion for design and innovation
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="hero-button px-8 py-4 text-lg"
            onClick={() => scrollToSection('portfolio')}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-lg transform rotate-45 animate-pulse" />
    </section>
  )
}

export default Hero