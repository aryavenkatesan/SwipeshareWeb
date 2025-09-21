import * as React from "react"

export type ToastProps = {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    duration?: number
    className?: string
    variant?: "default" | "destructive"
}

export type ToastActionElement = React.ReactElement<{
    altText: string
    onClick?: (event: React.MouseEvent) => void
}>