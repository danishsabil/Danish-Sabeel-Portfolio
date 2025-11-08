# Notion API Test Guide

This guide explains how to test if your Notion API is working properly.

## Setup

The Notion API client has been installed and two test methods are available:

1. **API Route Test** (`/api/notion/test`) - Test via Next.js API endpoint
2. **Standalone Script** (`scripts/test-notion-api.js`) - Test via command line

## Prerequisites

1. **Notion API Key**: You need a Notion API key from https://www.notion.so/my-integrations
2. **Environment Variable**: Set `NOTION_API_KEY` in your `.env.local` file

## Method 1: API Route Test (Recommended)

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the `netflix-portfolio` directory:

```bash
NOTION_API_KEY=your_notion_api_key_here
```

### Step 2: Start the development server

```bash
npm run dev
```

### Step 3: Test the endpoint

Open your browser or use curl:

```bash
# Browser
http://localhost:3000/api/notion/test

# Or using curl
curl http://localhost:3000/api/notion/test
```

### Expected Response (Success)

```json
{
  "success": true,
  "message": "Notion API is working properly!",
  "data": {
    "userId": "...",
    "name": "...",
    "avatar": "...",
    "type": "bot"
  },
  "timestamp": "2024-..."
}
```

### Error Responses

- **401 Unauthorized**: Invalid or expired API key
- **403 Forbidden**: API key doesn't have proper permissions
- **400 Bad Request**: API key not set in environment variables

## Method 2: Standalone Script Test

### Run the test script

```bash
# Option 1: Use .env.local file (if NOTION_API_KEY is set there)
node scripts/test-notion-api.js

# Option 2: Pass API key as argument
node scripts/test-notion-api.js your_notion_api_key

# Option 3: Use environment variable
NOTION_API_KEY=your_key node scripts/test-notion-api.js
```

### Expected Output (Success)

```
🔍 Testing Notion API connection...

✅ API Key found: ntn_462906...
🔄 Connecting to Notion API...

Test 1: Fetching current user information...
✅ Success!
   User ID: ...
   Name: ...
   Type: bot

Test 2: Checking database access...
✅ Success! Found X databases
   Sample databases:
   1. Database Name

==================================================
✅ All tests passed! Notion API is working properly.
==================================================
```

## Troubleshooting

### Error: API Key Not Set

**Solution**: Create `.env.local` file with:
```
NOTION_API_KEY=your_api_key
```

### Error: Unauthorized (401)

**Possible causes**:
- Invalid API key
- API key has been revoked
- Integration has been deleted

**Solution**:
1. Go to https://www.notion.so/my-integrations
2. Verify your integration is active
3. Copy the "Internal Integration Token"
4. Update your `.env.local` file

### Error: Restricted Resource (403)

**Possible causes**:
- Integration doesn't have access to the requested resource
- You need to share pages/databases with your integration

**Solution**:
1. Open the Notion page/database you want to access
2. Click the "..." menu (top right)
3. Go to "Connections"
4. Select your integration to grant access

## Files Created

- `app/api/notion/test/route.ts` - API route for testing
- `scripts/test-notion-api.js` - Standalone test script

## Next Steps

Once the API is working, you can:
1. Create Notion database integrations
2. Fetch data from Notion pages/databases
3. Sync content from Notion to your portfolio

## Resources

- [Notion API Documentation](https://developers.notion.com/)
- [Notion Integrations](https://www.notion.so/my-integrations)
- [@notionhq/client on npm](https://www.npmjs.com/package/@notionhq/client)



