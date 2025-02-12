import ContactUsForm from "@/app/components/contact-us-form"
import { SplineViewer } from "@/app/components/spline-viewer"
import { sunAndMountains } from "@/app/utils/spline-scenes"

export default function ContactUs() {
  return (
    <section className="h-full">
      <SplineViewer scene={sunAndMountains} className="absolute -z-10" />
      <div className="flex md:flex-row justify-center items-center w-full flex-col py-8">
        <div className="flex flex-col w-1/2 md:border-r-2 border-[#bcbcbca9] justify-center items-center border-2a h-full">
          <div className="flex flex-col gap-8 max-w-[340px]">
            <h1 className="text-7xl text-center xl:text-start">Tell us your new challenge</h1>
            <p className="text-xl text-center xl:text-start text-[#bcbcbca9]">
              We will contact you to discover your incredible project.
            </p>
          </div>
        </div>
        <div className="mx-auto min-w-[300px]  max-w-[400px] border-2a">
          <ContactUsForm />
        </div>
      </div>
    </section>
  )
}
