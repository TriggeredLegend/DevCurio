// app/confirm-subscription/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'

export default function ConfirmSubscriptionPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch('https://api.buttondown.email/v1/subscribers/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_API_KEY}`, // Expose via env
          },
          body: JSON.stringify({ confirmation_token: params.id }),
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

    verifyEmail()
  }, [params.id])

  return (
    <div className="p-8 text-center">
      {status === 'loading' && <p>Verifying your email...</p>}
      {status === 'success' && (
        <p className="text-green-500">✅ Subscription confirmed! Thank you.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">❌ Verification failed. Please try again or contact support.</p>
      )}
    </div>
  )
}
