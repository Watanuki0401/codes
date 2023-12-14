import { Metadata } from "next"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { DemoCreateAccount } from "@/components/create-account"
import { propagateServerField } from "next/dist/server/lib/render-server"

export const metadata: Metadata = {
    title: "Demo Form",
    description: "Example of cards built by form"
}

function DemoContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          "flex items-center justify-center [&>div]:w-full",
          className
        )}
        {...props}
      />
    )
  }

  export default function Formdemo() {
    return(
        <>
        <div>
            <DemoContainer>
                <DemoCreateAccount />
            </DemoContainer>
        </div>
        </>
    )
  }