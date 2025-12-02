'use client'

import { useState } from 'react'

export function ErrorTestButton() {
  const [clickCount, setClickCount] = useState(0)

  const triggerError = async () => {
    setClickCount(prev => prev + 1)
    console.log('Triggering server-side error for Vercel testing...')
    
    try {
      // Call the server API that will throw an error
      const response = await fetch('/api/test-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        console.log('Server responded with error status:', response.status)
      }
      
      const data = await response.json()
      console.log('Server response:', data)
    } catch (error) {
      // This catch will handle network errors, but the server error 
      // should be caught by Vercel's monitoring before reaching here
      console.log('Network or client error while calling server:', error)
    }
  }

  return (
    <div className="fixed bottom-0 left-0">
      <button
        onClick={triggerError}
        className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-red-600 text-white px-2 py-1 text-xs"
        title="Hidden error test button (Ctrl+Shift+E to reveal)"
        style={{
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          zIndex: 9999,
        }}
      >
        🐛 Test Error ({clickCount})
      </button>
    </div>
  )
}
