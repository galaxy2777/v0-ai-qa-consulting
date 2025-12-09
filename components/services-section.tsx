import { Brain, Users, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Brain,
    title: "AI Platform SaaS",
    description:
      "Leverage predictive defect analysis and intelligent test case optimization powered by machine learning.",
    features: ["Predictive Defect Analysis", "Test Case Optimization", "Code Quality Insights", "Real-time Monitoring"],
  },
  {
    icon: Users,
    title: "Expert Consulting",
    description: "Access fractional CTO QA advisory and agile test strategy implementation from industry veterans.",
    features: ["Fractional CTO Advisory", "Agile Test Strategy", "Team Training", "Process Optimization"],
  },
  {
    icon: Shield,
    title: "Managed Testing",
    description: "Full-cycle test automation, performance audits, and security testing handled by our expert team.",
    features: ["Full-Cycle Automation", "Performance Audits", "Security Testing", "24/7 Support"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">What we do</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our collection of tech services spans every stage of the QA process.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Explore how we help businesses transform their software quality.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
