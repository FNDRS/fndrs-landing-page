"use client"

import InputField from "@/app/components/input-field"
import TextAreaField from "@/app/components/text-area-field"

import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

interface ContactFormData {
  name: string
  email: string
  phoneNumber: string
  message: string
  subject: string
}

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true)
      toast.loading("Sending message...")

      const response = await axios.post("/api/contact", data)
      if (response.status === 200) {
        toast.dismiss()
        toast.success("Message sent successfully!")
        reset()
      } else {
        toast.dismiss()
        toast.error("There was an error sending your message. Please try again late.")
      }
    } catch (e) {
      toast.dismiss()
      toast.error("There was an error sending your message. Please try again late.")
      console.error("Error sending form", e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Name" type="text" id="name" register={register} errors={errors} required />

      <InputField
        label="Email"
        type="email"
        id="email"
        register={register}
        errors={errors}
        required
        pattern={{ value: /\S+@\S+\.\S+/, message: "Invalid email format" }}
      />

      <InputField label={"Phone"} type="text" id={"phoneNumber"} register={register} errors={errors} required />

      <TextAreaField label={"Tell us about your idea"} register={register} errors={errors} id={"message"} required />

      <button className="text-black font-bold bg-white w-fit text-lg px-7 py-1 border rounded-xl" disabled={isLoading}>
        Send
      </button>
    </form>
  )
}
