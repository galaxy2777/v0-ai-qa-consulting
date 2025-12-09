"use client"

import { useEffect, useState } from "react"
import { Bug, Code2, Target, Cog, BarChart3, Clock, Zap, TrendingUp } from "lucide-react"

const pipelineSteps = [
  {
    id: 1,
    title: "Defect Prediction",
    subtitle: "ML Analysis",
    icon: Bug,
    metric: "98.2%",
    metricLabel: "Accuracy",
    hasProgress: true,
    progressValue: 98.2,
  },
  {
    id: 2,
    title: "Code Analysis",
    subtitle: "Static & Dynamic",
    icon: Code2,
    metric: "47K",
    metricLabel: "Lines Scanned",
  },
  {
    id: 3,
    title: "Test Scoring",
    subtitle: "Risk Assessment",
    icon: Target,
    metric: "A+",
    metricLabel: "Quality Score",
  },
  {
    id: 4,
    title: "Execution & Automation",
    subtitle: "Parallel Testing",
    icon: Cog,
    metric: "12x",
    metricLabel: "Faster",
  },
  {
    id: 5,
    title: "Reporting & Insights",
    subtitle: "Real-time Analytics",
    icon: BarChart3,
    metric: "2,847",
    metricLabel: "Insights",
  },
]

export function AnalysisPipeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [dataFlowProgress, setDataFlowProgress] = useState(0)

  // Animate through steps
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length)
    }, 3000)
    return () => clearInterval(stepInterval)
  }, [])

  // Animate data flow
  useEffect(() => {
    const flowInterval = setInterval(() => {
      setDataFlowProgress((prev) => (prev + 2) % 100)
    }, 50)
    return () => clearInterval(flowInterval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h40M60 50h40M50 0v40M50 60v40"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-cyan-500/30"
              />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-cyan-500/20" />
              <circle cx="0" cy="50" r="2" fill="currentColor" className="text-cyan-500/20" />
              <circle cx="100" cy="50" r="2" fill="currentColor" className="text-cyan-500/20" />
              <circle cx="50" cy="0" r="2" fill="currentColor" className="text-cyan-500/20" />
              <circle cx="50" cy="100" r="2" fill="currentColor" className="text-cyan-500/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative border-b border-cyan-500/10 bg-slate-900/80 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
              <Zap className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">AI-Powered Analysis Pipeline</h3>
              <p className="text-xs text-slate-400">Real-time processing active</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span className="text-lg font-bold text-white">340h</span>
              <span className="text-xs text-slate-400">saved</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <span className="text-lg font-bold text-white">2,847</span>
              <span className="text-xs text-slate-400">insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="relative p-8">
        <div className="flex items-center justify-between gap-2">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep
            const isPassed = index < activeStep

            return (
              <div key={step.id} className="flex flex-1 items-center">
                {/* Step Card */}
                <div
                  className={`relative flex flex-col items-center transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 text-slate-900"
                        : isPassed
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Main Card */}
                  <div
                    className={`relative flex flex-col items-center rounded-xl border p-4 transition-all duration-300 ${
                      isActive
                        ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                        : isPassed
                          ? "border-emerald-500/30 bg-emerald-500/5"
                          : "border-slate-700 bg-slate-800/50"
                    }`}
                  >
                    {/* Pulsing Ring for Active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl">
                        <div
                          className="absolute inset-0 animate-ping rounded-xl border border-cyan-500/30"
                          style={{ animationDuration: "2s" }}
                        />
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500 text-slate-900"
                          : isPassed
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <p
                      className={`mt-3 text-center text-xs font-semibold transition-colors ${
                        isActive ? "text-cyan-400" : isPassed ? "text-emerald-400" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-center text-xs text-slate-500">{step.subtitle}</p>

                    {/* Metric */}
                    <div className="mt-3 text-center">
                      <p
                        className={`text-lg font-bold ${
                          isActive ? "text-cyan-400" : isPassed ? "text-emerald-400" : "text-white"
                        }`}
                      >
                        {step.metric}
                      </p>
                      <p className="text-xs text-slate-500">{step.metricLabel}</p>
                    </div>

                    {/* Progress Bar for Defect Prediction */}
                    {step.hasProgress && (
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-1000"
                          style={{ width: `${step.progressValue}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector Line */}
                {index < pipelineSteps.length - 1 && (
                  <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded-full bg-slate-700">
                    {/* Animated Data Flow */}
                    <div
                      className={`absolute top-0 h-full w-8 rounded-full transition-all duration-300 ${
                        isPassed || isActive
                          ? "bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                          : "bg-transparent"
                      }`}
                      style={{
                        left: `${dataFlowProgress}%`,
                        transform: "translateX(-50%)",
                        opacity: isPassed || isActive ? 1 : 0,
                      }}
                    />
                    {/* Static Progress */}
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                        isPassed ? "bg-emerald-500/50" : isActive ? "bg-cyan-500/30" : ""
                      }`}
                      style={{ width: isPassed ? "100%" : isActive ? "50%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-8 flex items-center justify-center gap-8 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-400">AI analysis active</span>
          </div>
          <div className="text-xs text-slate-500">
            Processing <span className="text-cyan-400 font-medium">47,382</span> data points in real-time
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Latency:</span>
            <span className="text-xs font-medium text-emerald-400">12ms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
