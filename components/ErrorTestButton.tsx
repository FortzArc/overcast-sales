'use client'

import { useState } from 'react'

export function ErrorTestButton() {
  const [clickCount, setClickCount] = useState(0)

  const triggerError = () => {
    setClickCount(prev => prev + 1)
    console.log('Triggering real runtime error for Vercel testing...')
    
    // Create actual runtime errors through nested functions
    const createNestedError = () => {
      const nestedFunction = () => {
        const deeperFunction = () => {
          // This will cause a real TypeError: Cannot read properties of undefined
          const undefinedObj: any = undefined
          return undefinedObj.nonExistentProperty.anotherProperty.someMethod()
        }
        return deeperFunction()
      }
      return nestedFunction()
    }
    
    // This will trigger an actual runtime error
    createNestedError()
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
