# Next.js 15 localStorage Error

This repository demonstrates a common error encountered when working with localStorage in Next.js 15 client components and provides a solution to handle this issue gracefully.

## Problem

Accessing localStorage directly within a client component during SSR (Server-Side Rendering) in Next.js 15 will throw an error because localStorage is not available in the server environment. This is because SSR happens on the server before the page is loaded in the browser, where localStorage resides.

## Solution

The solution involves checking the existence of `typeof window` before attempting to access `localStorage`.  This ensures that the code only tries to interact with localStorage after the component has been rendered on the client-side where the `window` object is available.