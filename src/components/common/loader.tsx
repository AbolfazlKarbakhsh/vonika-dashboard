import type { ComponentProps } from "react";

import { IconLoader2 } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export function Loader({
  className,
  ...props
}: ComponentProps<typeof IconLoader2>) {
  return (
    <IconLoader2
      className={cn("animation-duration-500 animate-spin", className)}
      {...props}
    />
  );
}
