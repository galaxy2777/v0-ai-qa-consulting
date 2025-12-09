import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Platform Basic",
    price: "Free",
    period: "",
    description: "Perfect for teams getting started with AI-powered QA insights.",
    features: [
      "QA Health Check Tool",
      "Basic Code Analysis",
      "Community Support",
      "Up to 3 Projects",
      "Basic Reporting",
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Professional SaaS",
    price: "$299",
    period: "/month",
    description: "Advanced AI features for growing engineering teams.",
    features: [
      "Everything in Basic",
      "Predictive Defect Analysis",
      "Test Case Optimization",
      "Unlimited Projects",
      "Priority Support",
      "API Access",
      "Advanced Analytics",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    period: "",
    description: "Full consulting & managed services with dedicated team.",
    features: [
      "Everything in Professional",
      "Dedicated QA Team",
      "Custom SLA",
      "Fractional CTO Advisory",
      "24/7 Premium Support",
      "On-premise Deployment",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-primary">Pricing</p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Choose the plan that best fits your team&apos;s needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col border-border bg-card ${
                  tier.featured ? "border-primary shadow-lg shadow-primary/10" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.featured ? "default" : "outline"}>
                    <Link href="/login">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-24">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Compare Plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-4 text-left text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground">Basic</th>
                    <th className="px-4 py-4 text-center text-sm font-medium text-primary">Professional</th>
                    <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Projects", basic: "3", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "AI Analysis", basic: "Basic", pro: "Advanced", enterprise: "Custom" },
                    { feature: "Support", basic: "Community", pro: "Priority", enterprise: "24/7 Premium" },
                    { feature: "API Access", basic: "—", pro: "✓", enterprise: "✓" },
                    { feature: "Custom Integrations", basic: "—", pro: "—", enterprise: "✓" },
                    { feature: "Dedicated Team", basic: "—", pro: "—", enterprise: "✓" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-secondary/20" : ""}>
                      <td className="px-4 py-3 text-sm text-foreground">{row.feature}</td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">{row.basic}</td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">{row.pro}</td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
