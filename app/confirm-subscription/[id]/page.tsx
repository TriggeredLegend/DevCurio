'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ConfirmSubscription() {
  const router = useRouter()
  const [id, setId] = useState<string | null>(null)
  const [message, setMessage] = useState('Verifying your subscription...')

  useEffect(() => {
    // The client-side code can't read params directly,
    // so we get the id from the URL manually:
    const url = new URL(window.location.href)
    const segments = url.pathname.split('/')
    const confirmationId = segments[segments.length - 1]
    setId(confirmationId)

    if (confirmationId) {
      setMessage('🎉 Your subscription has been confirmed! Thank you for subscribing.')
    }
  }, [])

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{message}</h1>
    </main>
  )
}
