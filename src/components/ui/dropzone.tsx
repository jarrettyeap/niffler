import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface DropzoneProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="file"
      className={cn(
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Dropzone.displayName = "Dropzone"

export { Dropzone }