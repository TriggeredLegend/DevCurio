// app/confirm-subscription/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ConfirmSubscriptionPage() {
  const params = useParams()
  const token = params?.id as string
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch('https://api.buttondown.email/v1/subscribers/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_API_KEY}`,
          },
          body: JSON.stringify({ confirmation_token: token }),
        })

        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch (error) {
        console.error(error)
        setStatus('error')
      }
    }

    if (token) {
      verifyEmail()
    }
  }, [token])

  return (
    <div className="p-10 text-center">
      {status === 'loading' && <p>Verifying your subscription...</p>}
      {status === 'success' && (
        <p className="text-green-500">✅ Subscription confirmed! Thank you.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">❌ Verification failed. Please try again or contact support.</p>
      )}
    </div>
  )
}
