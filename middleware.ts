// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, _response: NextResponse) {
  // Custom logic goes here
  console.log('Request URL:', request.url);

  // Example: Redirect all requests from the '/about' path to '/home'
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.redirect(new URL('/page', request.url));
  // }

  // Continue to the next step in the request lifecycle
  return NextResponse.next();
}
