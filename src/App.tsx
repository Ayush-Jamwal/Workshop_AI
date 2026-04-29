/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Signal, Network, Battery, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  const metrics = [
    {
      title: "Network Communication",
      icon: <Signal className="w-12 h-12 stroke-[1.25]" />,
      description: "Low-latency packet distribution across global edge nodes with optimized TCP/UDP handshake protocols.",
      stat: "12ms Avg Latency",
    },
    {
      title: "Scalability & Robustness",
      icon: <Network className="w-12 h-12 stroke-[1.25]" />,
      description: "Horizontal scaling architecture ensuring 99.999% uptime during peak traffic and automated failover sequences.",
      stat: "Linear Elasticity",
    },
    {
      title: "System Resources",
      icon: (
        <div className="flex gap-2">
          <Battery className="w-12 h-12 stroke-[1.25]" />
          <Cpu className="w-12 h-12 stroke-[1.25]" />
        </div>
      ),
      description: "Efficient silicon utilization through predictive CPU cycling and asynchronous memory allocation models.",
      stat: "84% Core Efficiency",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-20 select-none overflow-x-hidden">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-24"
      >
        <h1 className="text-[42px] font-semibold tracking-[-0.02em] text-apple-text mb-3">
          Performance Evaluation Metrics
        </h1>
        <p className="text-[19px] font-normal text-apple-sub tracking-[-0.01em]">
          Core analysis framework for high-concurrency architecture
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1024px]"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            {/* The Card */}
            <div className="apple-card rounded-apple h-[420px] p-12 flex flex-col items-center text-center relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="squircle-shadow" />
              
              {/* Icon Container */}
              <div className="h-15 mb-10 flex items-center justify-center text-apple-text">
                {metric.icon}
              </div>

              {/* Card Header */}
              <h2 className="text-xl font-semibold text-apple-text mb-4 tracking-[-0.01em]">
                {metric.title}
              </h2>

              {/* Card Text */}
              <p className="text-[15px] leading-relaxed text-apple-sub px-2">
                {metric.description}
              </p>

              {/* Metric Stat */}
              <div className="mt-auto text-[13px] font-semibold text-apple-text uppercase tracking-[0.05em]">
                {metric.stat}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="mt-32 text-[11px] uppercase tracking-[0.2em] font-medium text-apple-sub opacity-40"
      >
        Standard System Architecture v2.0
      </motion.div>
    </main>
  );
}
