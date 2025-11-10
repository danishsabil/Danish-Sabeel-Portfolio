import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Danish Sabeel - Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://danish-sabeel-portfolio.vercel.app'
  const imageUrl = `${baseUrl}/images/professional%20headshot.png`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image with face-centered cropping */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
            <img
              src={imageUrl}
              alt="Danish Sabeel"
              style={{
                width: 'auto',
                height: '140%', // Make it taller to allow more cropping flexibility
                objectFit: 'cover',
                objectPosition: 'center 10%', // Focus on the face (upper 10% of image)
              }}
            />
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
        
        {/* Text overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            right: 60,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Danish Sabeel
          </h1>
          <p
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Assistant PM • Facades & Curtain Walls
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

