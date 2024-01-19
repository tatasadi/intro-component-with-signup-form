"use client"
import Image from "next/image"
import Reference from "./components/Reference"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-5xl flex-col items-center md:min-h-0">
      <h1>Hello World</h1>
      <Reference />
    </main>
  )
}
