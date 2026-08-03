'use server'

import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { createClient } from "@/utils/supabase/client";
export async function signupAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // 1. Basic validation
  if (!email || !password) {
    return { error: 'Email and password are required.' }
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters long.' }
  }

  const supabase = await createClient()

  // 2. Check if user already exists
  const { data: existingUser } = await supabase
    .from('users') // or "user" depending on your table naming
    .select('id')
    .eq('email', email)
    .single()

  if (existingUser) {
    return { error: 'An account with this email already exists.' }
  }

  // 3. Hash password using bcrypt (10 salt rounds is standard)
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  // 4. Insert new user into DB
  const { data: newUser, error: createUserError } = await supabase
    .from('users')
    .insert({
      email,
      password_hash: passwordHash,
    })
    .select('id')
    .single()

  if (createUserError || !newUser) {
    return { error: 'Failed to create account. Please try again.' }
  }

  // 5. Auto-login: Create initial session & set HttpOnly cookie
  const sessionId = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days

  const { error: sessionError } = await supabase.from('sessions').insert({
    id: sessionId,
    user_id: newUser.id,
    expires_at: expiresAt,
  })

  if (sessionError) {
    return { error: 'Account created, but session creation failed. Please log in.' }
  }

  // 6. Set the cookie on the response
  const cookieStore = await cookies()
  cookieStore.set('session_id', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })

  return { success: true }
}