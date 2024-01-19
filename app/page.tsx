"use client"
import Image from "next/image"
import Reference from "./components/Reference"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-6xl flex-col items-center px-6 pt-[5.5rem] md:min-h-0">
      <div className="flex flex-col items-center gap-12 pb-12 md:flex-row lg:gap-16">
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-[1.75rem] font-bold leading-9 tracking-[-0.01825rem] lg:text-[3.125rem] lg:leading-[3.4375rem] lg:tracking-[-0.03256rem]">
            Learn to code by watching others
          </h1>
          <p className="font-medium leading-[1.625rem]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <p className="bg-accent-blue mb-6 rounded-[0.625rem] px-16 py-4 text-center text-[0.9375rem] leading-[1.625rem] tracking-[0.01675rem] shadow-[0_8px_0_0_rgba(0,0,0,0.15)]">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
          <form className="rounded-[0.625rem] bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.15)]">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button className="bg-primary-green mb-2 w-full cursor-pointer rounded-[0.3125rem] px-7 py-4 text-[0.9375rem] font-semibold uppercase leading-[0.625rem] shadow-[0_-4px_0_0_rgba(0,0,0,0.09)_inset] hover:bg-opacity-60">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-neutral-grayishblue text-center text-[0.6875rem] font-medium leading-[1.3125rem]">
              By clicking the button, you are agreeing to our{" "}
              <a
                href="#"
                aria-label="term and services"
                className="text-primary-red font-bold"
              >
                Terms and Services
              </a>
            </p>
          </form>
        </div>
      </div>
      <Reference />
    </main>
  )
}
