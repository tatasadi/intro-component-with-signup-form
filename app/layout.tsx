import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Intro component with sign up form",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${poppins.className} bg-primary-red flex min-h-screen flex-col items-center justify-center bg-[url('../public/images/bg-intro-mobile.png')] bg-cover bg-center bg-no-repeat text-white sm:bg-[url('../public/images/bg-intro-desktop.png')]`}
      >
        {children}
      </body>
    </html>
  )
}
