// app/confirm-subscription/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ConfirmSubscription() {
  const { id } = useParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch(`/api/verify-email?id=${id}`)
        const data = await res.json()
        if (data.success) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    }
    if (id) verify()
  }, [id])

  return (
    <div className="p-10 text-center">
      {status === 'loading' && <p>Verifying your email...</p>}
      {status === 'success' && <p className="text-green-500">Your email has been verified!</p>}
      {status === 'error' && <p className="text-red-500">Verification failed. Please try again.</p>}
    </div>
  )
}
