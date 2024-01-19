"use client"
import { useState } from "react"
import Reference from "./components/Reference"
import Textbox from "./components/Textbox"
import { z } from "zod"

const formSchema = z.object({
  firstName: z.string().min(1, "First Name cannot be empty"),
  lastName: z.string().min(1, "Last Name cannot be empty"),
  email: z
    .string()
    .min(1, "Email Adress cannot be empty")
    .email("Looks like this is not an email"),
  password: z
    .string()
    .min(1, "Password cannot be empty")
    .min(6, "Password must be at least 6 characters long"),
})

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export default function Home() {
  const [formData, setFormData] = useState(initState)

  const [errors, setErrors] = useState({
    firstName: [] as string[],
    lastName: [] as string[],
    email: [] as string[],
    password: [] as string[],
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSuccess(false)
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const result = formSchema.safeParse(formData)
    if (result.success) {
      setSuccess(true)
      setFormData(initState)
    } else {
      const newErrors = result.error.flatten().fieldErrors
      setErrors({
        firstName: newErrors.firstName || [],
        lastName: newErrors.lastName || [],
        email: newErrors.email || [],
        password: newErrors.password || [],
      })
      setSuccess(false)
    }
  }

  return (
    <main className="flex h-full min-h-screen w-full max-w-6xl flex-col items-center px-6 pt-[5.5rem] md:min-h-0">
      <div className="flex flex-col items-center gap-12 pb-12 md:flex-row lg:gap-16">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-[1.75rem] font-bold leading-9 tracking-[-0.01825rem] lg:text-[3.125rem] lg:leading-[3.4375rem] lg:tracking-[-0.03256rem]">
            Learn to code by watching others
          </h1>
          <p className="font-medium leading-[1.625rem]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="bg-accent-blue mb-6 rounded-[0.625rem] px-16 py-4 text-center text-[0.9375rem] leading-[1.625rem] tracking-[0.01675rem] shadow-[0_8px_0_0_rgba(0,0,0,0.15)]">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
          <form
            className="rounded-[0.625rem] bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.15)]"
            onSubmit={handleSubmit}
          >
            <Textbox
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              errors={errors.firstName}
            />
            <Textbox
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              errors={errors.lastName}
            />
            <Textbox
              name="email"
              type="text"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              errors={errors.email}
            />
            <Textbox
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              errors={errors.password}
            />
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
            {success && (
              <p className="mt-4 text-center leading-normal text-green-600">
                Thank you for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>
      <Reference />
    </main>
  )
}
