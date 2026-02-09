// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Custom logic goes here
  console.log('Request URL:', request.url);

  // Continue to the next step in the request lifecycle
  return NextResponse.next();
}
