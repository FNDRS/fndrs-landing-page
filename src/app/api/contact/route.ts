import { handleContactSubmission } from "@/app/controllers/contact-controller"

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json()

    const result = await handleContactSubmission(body)

    return new Response(JSON.stringify(result), { status: result.status })
  } catch (error) {
    console.error("Error handling form submission:", error)
    return new Response(JSON.stringify({ error: "Something went wrong." }), { status: 500 })
  }
}
