import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AI/ML", category: "Intelligence" },
  { name: "Cypress", category: "Testing" },
  { name: "Selenium", category: "Testing" },
  { name: "TypeScript", category: "Language" },
]

const processSteps = [
  {
    step: "01",
    title: "Strategy",
    description: "We analyze your current QA processes and identify opportunities for AI-powered optimization.",
  },
  {
    step: "02",
    title: "Platform Integration",
    description: "Seamless integration of our AI platform with your existing development workflow and CI/CD pipeline.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Our AI continuously monitors, predicts defects, and optimizes test coverage in real-time.",
  },
  {
    step: "04",
    title: "Reporting",
    description: "Comprehensive analytics and insights delivered to stakeholders with actionable recommendations.",
  },
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-primary">Our Expertise</p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Technology & Methodology
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Discover the technical foundations and proven processes behind our AI-powered QA platform.
            </p>
          </div>

          {/* Tech Stack */}
          <section className="mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Our Tech Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {techStack.map((tech) => (
                <Card
                  key={tech.name}
                  className="border-border bg-card text-center transition-all hover:border-primary/50"
                >
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-lg font-bold text-primary">{tech.name.charAt(0)}</span>
                    </div>
                    <p className="font-medium text-foreground">{tech.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{tech.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mt-24">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Our Method</h2>
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-border md:block" />

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <Card key={step.step} className="relative border-border bg-card">
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                    </CardContent>
                    {index < processSteps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-primary lg:block">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Differentiators */}
          <section className="mt-24">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Why Choose Predictive QA?</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Predictive AI",
                    description: "Our ML models predict defects before they occur, reducing bug fixes by up to 60%.",
                  },
                  {
                    title: "Expert Team",
                    description: "20+ years combined experience in QA consulting for Fortune 500 companies.",
                  },
                  {
                    title: "Seamless Integration",
                    description: "Works with your existing tools—GitHub, GitLab, Jira, Jenkins, and more.",
                  },
                  {
                    title: "ROI Focused",
                    description: "Average clients see 3x ROI within the first 6 months of implementation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-6">
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
