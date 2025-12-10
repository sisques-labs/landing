import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon?: React.ElementType
  emoji?: string
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  emoji,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <a
    key={name}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      // cursor and hover effects
      "cursor-pointer transition-all duration-300 hover:scale-[1.02]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
      <div className="p-4">
        <div className="z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
          {emoji ? (
            <span className="text-5xl origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75">
              {emoji}
            </span>
          ) : Icon ? (
            <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-900 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
          ) : null}
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-neutral-700 dark:text-neutral-400">{description}</p>
        </div>

      <div
        className={cn(
          "flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <span className="text-sm font-medium text-primary flex items-center gap-2">
          {cta}
          <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
        </span>
      </div>
    </div>

    <div
      className={cn(
        "absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <span className="text-sm font-medium text-primary flex items-center gap-2">
        {cta}
        <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
      </span>
    </div>

    <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </a>
)

export { BentoCard, BentoGrid }
