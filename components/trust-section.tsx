const companies = ["Acme Corp", "InnovateTech", "Global Finance", "CloudScale", "DataPrime", "TechVenture"]

export function TrustSection() {
  return (
    <section className="border-y border-border bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm text-muted-foreground">Trusted by innovative companies worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-muted">
                <span className="text-xs font-bold">{company.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
