import NextAuth from 'next-auth'

declare module NextAuth {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }
}
