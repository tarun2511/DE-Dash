'use server';

import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { createClient } from "@/utils/supabase/client"; // Notice we use the client here!

export async function loginAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const supabase = await createClient();

    const { data: user, error } = await supabase
    .from('custom_users')
    .select('*')
    .eq('email', email)
    .single(); 

    if (error || !user) {
    return { error: 'Invalid email or password' }
    };

    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
    return { error: 'Invalid email or password' }
    };

    const cookieStore = await cookies();
    cookieStore.set('admin_session', user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}