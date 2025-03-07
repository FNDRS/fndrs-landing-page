import ContactUsForm from "@/app/components/contact-us-form"
import { SplineViewer } from "@/app/components/spline-viewer"
import { sunAndMountains } from "@/app/utils/spline-scenes"

export default function ContactUs() {
  return (
    <section className="h-screen flex justify-center" id="contact-us">
      <SplineViewer scene={sunAndMountains} className="absolute -z-10" />
      <div className="flex md:flex-row justify-evenly sm:justify-between items-center w-full h-full flex-col sm:py-8 md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
        <div className="flex flex-col sm:w-1/2 md:border-r-2 border-[#bcbcbca9] justify-center items-center sm:h-3/4 sm:items-start">
          <div className="flex flex-col gap-8 max-w-[340px] justify-evenly">
            <h2 className="text-2xl sm:text-7xl font-bold text-center xl:text-start">Tell us your new challenge</h2>
            <p className="text-md sm:text-xl text-center xl:text-start text-[#bcbcbca9]">
              We will contact you to discover your incredible project.
            </p>
          </div>
        </div>
        <div className="min-w-[300px] max-w-[800px]">
          <ContactUsForm />
        </div>
      </div>
    </section>
  )
}
