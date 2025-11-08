/**
 * Test script to check if Notion API is working properly
 * 
 * Usage:
 *   NOTION_API_KEY=your_key node scripts/test-notion-api.js
 *   or set NOTION_API_KEY in .env.local
 *   or pass as argument: node scripts/test-notion-api.js your_key
 */

require('dotenv').config({ path: '.env.local' })
const { Client } = require('@notionhq/client')

async function testNotionAPI() {
  console.log('🔍 Testing Notion API connection...\n')

  // Get API key from command line argument, environment variable, or .env.local
  const notionApiKey = process.argv[2] || process.env.NOTION_API_KEY

  if (!notionApiKey) {
    console.error('❌ ERROR: NOTION_API_KEY is not set!')
    console.log('\n📝 To fix this:')
    console.log('   1. Create a .env.local file in the netflix-portfolio directory')
    console.log('   2. Add: NOTION_API_KEY=your_notion_api_key')
    console.log('   3. Get your API key from: https://www.notion.so/my-integrations')
    process.exit(1)
  }

  try {
    console.log('✅ API Key found:', notionApiKey.substring(0, 10) + '...')
    console.log('🔄 Connecting to Notion API...\n')

    const notion = new Client({
      auth: notionApiKey,
    })

    // Test 1: Get current user
    console.log('Test 1: Fetching current user information...')
    const user = await notion.users.me()
    
    console.log('✅ Success!')
    console.log('   User ID:', user.id)
    console.log('   Name:', user.name || 'N/A')
    console.log('   Type:', user.type)
    if (user.avatar_url) {
      console.log('   Avatar:', user.avatar_url)
    }
    console.log()

    // Test 2: List accessible resources (optional, to verify broader access)
    console.log('Test 2: Checking accessible resources...')
    try {
      const searchResults = await notion.search({
        page_size: 10,
      })
      
      const databases = searchResults.results.filter(item => item.object === 'database')
      const pages = searchResults.results.filter(item => item.object === 'page')
      
      console.log(`✅ Success! Found ${searchResults.results.length} accessible resources`)
      if (databases.length > 0) {
        console.log(`   Databases: ${databases.length}`)
        databases.forEach((db, i) => {
          const title = db.title && Array.isArray(db.title) && db.title[0] 
            ? db.title[0].plain_text 
            : (db.title || 'Untitled')
          console.log(`     ${i + 1}. ${title}`)
        })
      }
      if (pages.length > 0) {
        console.log(`   Pages: ${pages.length}`)
      }
      if (databases.length === 0 && pages.length === 0) {
        console.log('   ⚠️  No accessible resources found (this is normal if integration has limited access)')
      }
    } catch (dbError) {
      if (dbError.code === 'restricted_resource') {
        console.log('⚠️  Warning: API key has limited access (this is normal for new integrations)')
      } else {
        console.log('⚠️  Warning: Could not check resources -', dbError.message)
      }
    }

    console.log('\n' + '='.repeat(50))
    console.log('✅ All tests passed! Notion API is working properly.')
    console.log('='.repeat(50))

  } catch (error) {
    console.error('\n❌ ERROR: Notion API test failed!')
    console.error('\nError details:')
    console.error('  Code:', error.code || 'N/A')
    console.error('  Message:', error.message)

    if (error.code === 'unauthorized') {
      console.error('\n💡 Possible solutions:')
      console.error('   1. Verify your API key is correct')
      console.error('   2. Make sure the integration is active')
      console.error('   3. Check: https://www.notion.so/my-integrations')
    } else if (error.code === 'restricted_resource') {
      console.error('\n💡 This error usually means:')
      console.error('   - The API key doesn\'t have access to the requested resource')
      console.error('   - You need to share pages/databases with your integration')
    }

    process.exit(1)
  }
}

// Check if dotenv is available
try {
  require('dotenv')
  testNotionAPI()
} catch (e) {
  console.log('Note: dotenv not installed, using environment variables directly')
  testNotionAPI()
}

