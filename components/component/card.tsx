/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yIYOrlQjfpQ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function card() {
  return (
    <Card className="w-full max-w-sm">
      <img
        alt="Solar Panel"
        className="aspect-[2/1] w-full rounded-t-lg object-cover"
        height="200"
        src="/placeholder.svg"
        width="400"
      />
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <CardTitle>Acme Solar Solutions</CardTitle>
          <CardDescription>
            Providing top-of-the-line solar panel installation and maintenance services for homes and businesses.
          </CardDescription>
        </div>
        <Button>Get a Quote</Button>
      </CardContent>
    </Card>
  )
}