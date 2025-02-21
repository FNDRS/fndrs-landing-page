import React from "react"
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

interface TextAreaFieldProps<T extends FieldValues> {
  label: string
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  id: Path<T>
  required?: boolean
  pattern?: { value: RegExp; message: string }
  labelError?: string
}

export default function TextAreaField<T extends FieldValues>({
  label,
  errors,
  id,
  register,
  required,
  pattern,
  labelError
}: TextAreaFieldProps<T>) {
  return (
    <div className="w-full flex flex-col">
      <label className="text-xl mb-2" htmlFor="message">
        {label}
      </label>
      <textarea
        className={`w-full border rounded-md p-2 bg-transparent resize-none h-32 sm:h-40 autofill:bg-transparent ${errors[id] ? "border-red-500" : "border-[#bcbcbca9]"} w-full focus-visible:border-white focus-visible:outline-none focus-visible:ring-white"}`}
        {...register(id, { required: required && `${labelError || "Field"} is required`, pattern })}
      />
      <p
        className={`text-red-500 m-0
                ${errors[id] ? "opacity-1" : "opacity-0"}`}>
        {errors[id]?.message?.toString() || "Error"}
      </p>
    </div>
  )
}
