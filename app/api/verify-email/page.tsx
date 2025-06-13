// app/verify-email/page.tsx OR pages/verify-email.tsx

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [message, setMessage] = useState('Verifying...')

  useEffect(() => {
    if (token) {
      // Buttondown already verifies the token on their end,
      // so we can just show a success message.
      setMessage('Your email has been successfully verified!')
    } else {
      setMessage('Invalid or missing verification token.')
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
