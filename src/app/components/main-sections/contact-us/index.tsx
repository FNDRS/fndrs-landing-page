import ContactUsForm from "@/app/components/contact-us-form"
import { SplineViewer } from "@/app/components/spline-viewer"
import { sunAndMountains } from "@/app/utils/spline-scenes"

export default function ContactUs() {
  return (
    <section className="h-screen flex justify-center" id="contact-us">
      <SplineViewer scene={sunAndMountains} className="absolute -z-10" />
      <div className="flex md:flex-row sm:justify-between items-center w-full h-full flex-col sm:py-8 md:w-[900px]">
        <div className="flex flex-col sm:w-1/2 md:border-r-2 border-[#bcbcbca9] justify-center items-center sm:h-3/4 sm:items-start">
          <div className="flex flex-col md:gap-8 max-w-[440px] justify-evenly px-12 mb-4">
            <h2 className="text-2xl sm:text-7xl font-bold xl:text-start">Tell us your new challenge</h2>
            <p className="text-md sm:text-xl xl:text-start text-[#bcbcbca9]">
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
