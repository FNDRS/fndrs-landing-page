import React from "react"
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

interface InputFieldProps<T extends FieldValues> {
  label?: string
  type: string
  id: Path<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  required?: boolean
  pattern?: { value: RegExp; message: string }
  inputClassName?: string
}

export default function InputField<T extends FieldValues>({
  label,
  type,
  id,
  register,
  errors,
  required,
  pattern,
  inputClassName = "border rounded-md p-1 sm:p-2 bg-transparent flex-1 min-w-0 autofill:bg-transparent"
}: InputFieldProps<T>) {
  return (
    <div className="w-full flex flex-col my-1">
      {label && (
        <label className="text-lg sm:text-xl mb-2" htmlFor={id.toString()}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${inputClassName} ${errors[id] ? "border-red-500" : "border-[#bcbcbca9]"} w-full focus-visible:border-white focus-visible:outline-none focus-visible:ring-white`}
        {...register(id, { required: required && `${label} is required`, pattern })}
      />
      <p
        className={`text-red-500 text-sm min-h-[1rem] transition-opacity duration-300 ${
          errors[id] ? "opacity-100" : "opacity-0"
        }`}>
        {errors[id]?.message?.toString() || "Error"}
      </p>
    </div>
  )
}
