import { handleContactSubmission } from "@/app/controllers/contact-controller"

import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json()

    const result = await handleContactSubmission(body)

    return new Response(JSON.stringify(result), { status: result.status })
  } catch (error) {
    console.error({ error })

    const status = axios.isAxiosError(error) && error.response ? error.response.status : 500
    return NextResponse.json(
      {
        message: "Error fetching balance info",
        error: (error as Error).message
      },
      { status }
    )
  }
}
