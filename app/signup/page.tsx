'use client';

import NavBar from '@/components/ui/navBar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupAction } from './actions';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const result = await signupAction(formData);

            if (result?.error) {
                setError(result.error);
                setLoading(false);
            } else {
                // Refresh server components and redirect straight to onboarding/admin
                router.refresh();
                router.push('/admin');
            }
        } catch (err) {
            setError('Something went wrong during sign up. Please try again.');
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
                <form onSubmit={handleSubmit} className="p-6 rounded-2xl shadow-xl w-full max-w-sm bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900">
                    <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-100 dark:bg-zinc-900 focus:outline-none focus:border-[#ff7614]"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-100 dark:bg-zinc-900 focus:outline-none focus:border-[#ff7614]"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#ff7614] hover:bg-[#e0630b] text-white py-2.5 rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </>
    );
}