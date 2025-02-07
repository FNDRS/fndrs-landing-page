import React from "react"
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

interface PhoneFieldProps<T extends FieldValues> {
  label: string
  id: Path<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  required?: boolean
  pattern?: { value: RegExp; message: string }
}

export default function PhoneField<T extends FieldValues>({
  label,
  id,
  register,
  errors,
  required,
  pattern
}: PhoneFieldProps<T>) {
  return (
    <div className="w-full flex flex-col">
      <label className="text-xl mb-2">{label}</label>
      <div className="flex flex-row gap-6 items-center flex-nowrap">
        <div className="text-xl">HN +504</div>
        <input
          type="text"
          className={`border rounded-md p-2 bg-transparent flex-1 min-w-0 autofill:bg-transparent ${errors[id] ? "border-red-500" : "border-[#bcbcbca9]"} w-full focus-visible:border-white focus-visible:outline-none focus-visible:ring-white"}`}
          {...register(id, { required: required && `${label} is required`, pattern })}
        />
      </div>
      <p
        className={`text-red-500 m-0
                ${errors[id] ? "opacity-1" : "opacity-0"}`}>
        {errors[id]?.message?.toString() || "Error"}
      </p>
    </div>
  )
}
