export async function POST() {
  console.log('Server-side error API called - about to throw error...')
  
  // Create some nested server-side function calls for a better stack trace
  const serverOperation = () => {
    const databaseQuery = () => {
      const processData = () => {
        // Simulate a real server error - trying to access property of undefined
        const serverData: any = undefined
        return serverData.user.profile.settings.preferences
      }
      return processData()
    }
    return databaseQuery()
  }
  
  try {
    // This will throw a real server-side TypeError
    const result = serverOperation()
    
    return Response.json({ 
      success: true, 
      data: result 
    })
  } catch (error) {
    // Re-throw to ensure Vercel catches it as an unhandled server error
    console.error('Server error occurred:', error)
    throw new Error(`Server-side test error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export async function GET() {
  console.log('Server-side error API called via GET - about to throw error...')
  
  // Alternative server error - accessing non-existent module
  const fakeModule: any = null
  return fakeModule.someMethod.thatDoesNotExist()
}
