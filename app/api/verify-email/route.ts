import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  // Here, call Buttondown API to verify token if needed
  // For demo, just return success:
  return NextResponse.json({ message: 'Token verified' })
}
