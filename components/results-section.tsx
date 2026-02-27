'use client'

import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export function ResultsSection() {
  const keyFindings = [
    {
      icon: Zap,
      title: 'Model Performance',
      metric: '97%',
      description: 'Average accuracy across models',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: TrendingUp,
      title: 'Data Insights',
      metric: '16',
      description: 'Lifestyle factors analyzed for prediction',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Feature Importance',
      metric: '12',
      description: 'Critical features identified through ML analysis',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: PieChartIcon,
      title: 'Dataset Size',
      metric: '1000+',
      description: 'Students surveyed and analyzed',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const modelMetrics = [
    {
      name: 'Extra Trees',
      accuracy: '95.96%',
      depression: '96.46%',
      anxiety: '97.47%',
      stress: '97.47%',
    },
    {
      name: 'XGBoost',
      accuracy: '97.00%',
      depression: '97.00%',
      anxiety: '99.00%',
      stress: '99.00%',
    },
    {
      name: 'Random Forest',
      accuracy: '77.78%',
      depression: '89.90%',
      anxiety: '90.91%',
      stress: '85.35%',
    },
    {
      name: 'LightGBM',
      accuracy: '97.00%',
      depression: '97.00%',
      anxiety: '99.50%',
      stress: '99.00%',
    },
  ]

  // ── Mental Health Prevalence Data ──
  const prevalenceData = {
    labels: ['Normal', 'Mild', 'Moderate', 'Severe', 'Extremely Severe'],
    datasets: [
      {
        label: 'Depression',
        data: [25, 16, 36, 15, 8],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
      },
      {
        label: 'Anxiety',
        data: [12, 4, 19, 18, 47],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      },
      {
        label: 'Stress',
        data: [16, 34, 35, 13, 2],
        backgroundColor: 'rgba(234, 179, 8, 0.7)',
      },
    ],
  }

  const prevalenceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Mental Health Prevalence (%)' },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Percentage of Students' },
      },
      x: {
        title: { display: true, text: 'Severity Level' },
      },
    },
  }

  // ── Feature Importance Data ──
  const featureData = {
    labels: [
      'Sleep Quality',
      'Academic Pressure',
      'Physical Activity',
      'Screen Time',
      'Social Support',
      'Diet Quality',
      'Study Hours',
      'Financial Stress',
    ],
    datasets: [
      {
        label: 'Importance Score',
        data: [0.28, 0.22, 0.15, 0.12, 0.09, 0.07, 0.05, 0.02],
        backgroundColor: 'rgba(34, 197, 94, 0.75)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  }

  const featureOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Top Lifestyle & Academic Factors' },
    },
    scales: {
      x: { beginAtZero: true, title: { display: true, text: 'Relative Importance' } },
      y: { ticks: { font: { size: 14 } } },
    },
  }

  return (
    <section className="relative bg-gradient-to-b from-background via-background to-accent/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="inline-flex mb-4">
            <div className="rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-medium text-primary">Performance Metrics</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Evaluation Results
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Comprehensive analysis of AI model performance and system effectiveness
          </p>
        </motion.div>

        {/* Key Findings Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          {keyFindings.map((finding, index) => {
            const Icon = finding.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden border-border/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/70 hover:shadow-lg">
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${finding.color} p-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="mb-2 text-3xl font-bold text-foreground">
                      {finding.metric}
                    </h3>
                    <p className="mb-1 font-semibold text-foreground text-sm">{finding.title}</p>
                    <p className="text-xs text-muted-foreground">{finding.description}</p>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="mt-4 h-1 w-8 bg-gradient-to-r from-primary to-accent origin-left"
                    />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Model Performance Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="border-border/50 bg-white/50 p-8 backdrop-blur-sm overflow-x-auto rounded-2xl shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-foreground text-center">
              Model Performance Comparison
            </h3>

            <div className="inline-block min-w-full">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Model</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-accent">Overall Accuracy</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-primary">Depression</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-accent">Anxiety</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-primary">Stress</th>
                  </tr>
                </thead>

                <tbody>
                  {modelMetrics.map((model, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="border-b border-border/10 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-foreground">{model.name}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-bold text-accent">{model.accuracy}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-bold text-primary">{model.depression}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-bold text-accent">{model.anxiety}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-bold text-primary">{model.stress}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        
      </div>
    </section>
  )
}