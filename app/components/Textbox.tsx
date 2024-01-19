import React from "react"
import Image from "next/image"
import iconError from "../../public/images/icon-error.svg"

export default function Textbox({
  name,
  placeholder,
  type,
  value,
  onChange,
  errors,
}: {
  name: string
  placeholder: string
  type: string
  value: string
  onChange: any
  errors?: string[]
}) {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-[0.3125rem] border px-[1.21rem] py-[0.94rem] text-[0.875rem] font-semibold leading-[1.625rem] tracking-[0.01563rem] placeholder:opacity-75 ${
            (errors?.length ?? 0) > 0
              ? "border-primary-red text-primary-red border-2"
              : "border-neutral-gray text-neutral-darkblue border"
          }`}
          value={value}
          onChange={onChange}
        />
        {(errors?.length ?? 0) > 0 && (
          <Image
            src={iconError}
            alt="error icon"
            className="absolute right-6 top-4"
          />
        )}
      </div>
      {(errors?.length ?? 0) > 0 && (
        <p className="text-primary-red mt-[0.38rem] text-right text-[0.6875rem] font-medium italic leading-normal">
          {errors?.[0] ?? ""}
        </p>
      )}
    </div>
  )
}
