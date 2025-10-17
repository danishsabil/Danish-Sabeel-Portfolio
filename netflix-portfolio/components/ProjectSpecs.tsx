"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectSpecifications } from "@/lib/types"

interface ProjectSpecsProps {
  specifications?: ProjectSpecifications
}

export default function ProjectSpecs({ specifications }: ProjectSpecsProps) {
  if (!specifications || Object.keys(specifications).length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-gray-900/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Technical Specifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {specifications.systemType && (
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                System Type
              </h4>
              <p className="text-white text-lg">{specifications.systemType}</p>
            </div>
          )}
          
          {specifications.squareFootage && (
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Square Footage
              </h4>
              <p className="text-white text-lg">{specifications.squareFootage}</p>
            </div>
          )}
          
          {specifications.materials && specifications.materials.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Materials
              </h4>
              <div className="flex flex-wrap gap-2">
                {specifications.materials.map((material, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-rose-600/20 text-rose-400 border-rose-500/30"
                  >
                    {material}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Render any additional custom specifications */}
          {Object.entries(specifications)
            .filter(([key]) => !['systemType', 'squareFootage', 'materials'].includes(key))
            .map(([key, value]) => (
              <div key={key}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-white text-lg">
                  {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

