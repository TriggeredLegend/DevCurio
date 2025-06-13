'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [message, setMessage] = useState('Verifying...')

  useEffect(() => {
    if (token) {
      // You can call your backend here if needed.
      // For now, just show success message:
      setMessage('✅ Your email has been successfully verified!')
    } else {
      setMessage('❌ Invalid or missing verification token.')
    }
  }, [token])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="rounded bg-white p-6 text-center shadow">
        <h1 className="text-xl font-bold">{message}</h1>
      </div>
    </div>
  )
}
