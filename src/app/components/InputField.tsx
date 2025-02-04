import React from "react"

import { InputData } from "./ContactUsForm"

interface InputFieldProps {
  label: string
  type: string
  id: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  inputData: InputData
}

export default function InputField(props: InputFieldProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className="block text-xl" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        className={`w-full border rounded-md p-2 bg-transparent focus:outline-amber-100 ${props.inputData.error ? "border-red-500" : "border-white"}`}
        id={props.id}
        name={props.id}
        onChange={props.handleChange}
        value={props.inputData.value}
      />
    </div>
  )
}
