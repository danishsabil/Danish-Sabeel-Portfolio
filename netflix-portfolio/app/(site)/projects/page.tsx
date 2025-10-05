import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "EWA Curtain Wall System",
    description: "Comprehensive curtain wall installation project featuring advanced thermal performance and weather sealing systems.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    technologies: ["Curtain Wall", "Thermal Analysis", "Weather Sealing", "Quality Control"],
    status: "Completed",
    year: "2024",
    location: "Boston, MA",
    metrics: [
      { label: "Budget Saved", value: "$250k" },
      { label: "Accuracy", value: "+15%" },
      { label: "Timeline", value: "On Schedule" }
    ],
    links: [
      { label: "Case Study", href: "#" },
      { label: "Documentation", href: "#" }
    ]
  },
  {
    id: 2,
    title: "Heat Strengthening Testing Facility",
    description: "State-of-the-art testing facility for glass heat strengthening with advanced monitoring systems.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    technologies: ["Heat Treatment", "Quality Testing", "Process Automation", "Data Analysis"],
    status: "In Progress",
    year: "2024",
    location: "Boston, MA",
    metrics: [
      { label: "Panels Tested", value: "500+" },
      { label: "Success Rate", value: "98%" },
      { label: "Efficiency", value: "+40%" }
    ],
    links: [
      { label: "Progress Report", href: "#" },
      { label: "Test Results", href: "#" }
    ]
  },
  {
    id: 3,
    title: "Vendor Coordination Platform",
    description: "Digital platform for streamlined vendor communication and project tracking across multiple construction sites.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    technologies: ["Project Management", "Vendor Relations", "Process Automation", "Communication"],
    status: "Completed",
    year: "2023",
    location: "Remote",
    metrics: [
      { label: "Vendors", value: "15+" },
      { label: "Response Time", value: "-40%" },
      { label: "Efficiency", value: "+60%" }
    ],
    links: [
      { label: "Platform Demo", href: "#" },
      { label: "Documentation", href: "#" }
    ]
  },
  {
    id: 4,
    title: "Construction Analytics Dashboard",
    description: "Real-time analytics dashboard for project monitoring, cost tracking, and performance optimization.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    technologies: ["Data Analytics", "Dashboard Design", "Real-time Monitoring", "Cost Control"],
    status: "Completed",
    year: "2023",
    location: "Boston, MA",
    metrics: [
      { label: "Projects Tracked", value: "25+" },
      { label: "Cost Savings", value: "$500k" },
      { label: "Accuracy", value: "99.5%" }
    ],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Technical Docs", href: "#" }
    ]
  },
  {
    id: 5,
    title: "Sustainable Facade Solutions",
    description: "Innovative facade system focusing on energy efficiency and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Sustainability", "Energy Efficiency", "Green Building", "Innovation"],
    status: "In Progress",
    year: "2024",
    location: "Boston, MA",
    metrics: [
      { label: "Energy Savings", value: "30%" },
      { label: "Carbon Reduction", value: "25%" },
      { label: "LEED Points", value: "15+" }
    ],
    links: [
      { label: "Sustainability Report", href: "#" },
      { label: "Case Study", href: "#" }
    ]
  },
  {
    id: 6,
    title: "Digital Twin Implementation",
    description: "Advanced digital twin technology for real-time construction monitoring and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["Digital Twin", "IoT Integration", "Predictive Analytics", "3D Modeling"],
    status: "Planning",
    year: "2025",
    location: "Boston, MA",
    metrics: [
      { label: "Monitoring Points", value: "1000+" },
      { label: "Predictive Accuracy", value: "95%" },
      { label: "Maintenance Cost", value: "-50%" }
    ],
    links: [
      { label: "Concept Design", href: "#" },
      { label: "Technical Specs", href: "#" }
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Innovative construction projects and solutions that showcase expertise in 
              curtain wall systems, project management, and process optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                        className={
                          project.status === "Completed" 
                            ? "bg-green-600 text-white" 
                            : project.status === "In Progress"
                            ? "bg-yellow-600 text-white"
                            : "border-blue-500 text-blue-400"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-rose-500/50 text-rose-400 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-rose-400">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white/10 text-xs"
                          asChild
                        >
                          <a href={link.href}>
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Interested in My Work?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always excited to discuss new projects and opportunities. 
              Let's explore how we can work together on your next construction project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                GitHub Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
