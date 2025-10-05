"use client"

import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SkillBadgesProps {
  skills: string[]
}

export default function SkillBadges({ skills }: SkillBadgesProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Badge
                variant="secondary"
                className="bg-rose-600/20 text-rose-400 border-rose-500/30 hover:bg-rose-600/30 transition-colors cursor-help"
              >
                {skill}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Proficiency: Advanced</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
