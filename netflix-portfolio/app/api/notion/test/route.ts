import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

export async function GET() {
  try {
    const notionApiKey = process.env.NOTION_API_KEY
    
    if (!notionApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'NOTION_API_KEY environment variable is not set',
          message: 'Please set NOTION_API_KEY in your .env.local file'
        },
        { status: 400 }
      )
    }

    // Initialize Notion client
    const notion = new Client({
      auth: notionApiKey,
    })

    // Test the API connection by fetching the current user
    const userResponse = await notion.users.me({})

    return NextResponse.json({
      success: true,
      message: 'Notion API is working properly!',
      data: {
        userId: userResponse.id,
        name: userResponse.name,
        avatar: userResponse.avatar_url,
        type: userResponse.type,
        botId: userResponse.type === 'bot' ? (userResponse as any).bot?.id : null,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error('Notion API test error:', error)
    
    let errorMessage = 'Unknown error occurred'
    let statusCode = 500

    if (error.code === 'unauthorized') {
      errorMessage = 'Invalid or expired Notion API key'
      statusCode = 401
    } else if (error.code === 'restricted_resource') {
      errorMessage = 'Notion API key does not have access to the requested resource'
      statusCode = 403
    } else if (error.message) {
      errorMessage = error.message
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        code: error.code || 'unknown_error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: statusCode }
    )
  }
}



