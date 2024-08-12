import React, { useState } from 'react'
import { useAuthActions } from "@convex-dev/auth/react";
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useConvexAuth } from 'convex/react';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';

const LoginForm = () => {
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()
    const { isAuthenticated } = useConvexAuth();
    const { signIn } = useAuthActions();
    const [step, setStep] = useState<"signUp" | "signIn">("signIn");
    // const createUserProfile = useMutation(api.users.createUserProfile);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const name = formData.get('name') as string;

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        try {
            if (step === "signUp") {
                await signIn("password", { email, password, flow: "signUp" });
                // After successful sign-up, create the user profile
                // await createUserProfile({ name });
            } else {
                await signIn("password", { email, password, flow: "signIn" });
            }
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                router.push('/chat')
            }, 7000)
        } catch (error) {
            console.error('Authentication failed:', error)
            setError('Authentication failed. Please check your credentials and try again.')
        }
    }

    return (
        <div className="max-w-md w-full mx-auto">
            <form onSubmit={handleSubmit} className="border-2 border-[#774424] shadow-md rounded-xl text-neutral-200 px-8 py-9 mb-4">
                {step === "signUp" && (
                    <div className="mb-4">
                        <label className="block text-[#d38351] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <Input
                            className="shadow-2xl py-6 appearance-none border border-[#774424] rounded-md w-full text-[#ffa56d] leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                )}
                <div className="mb-6">
                    <label className="block text-[#d38351] text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <Input
                        className="shadow appearance-none border border-[#774424] rounded-md w-full  py-6 text-[#ffa56d] leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-[#d38351] text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <Input
                        className="shadow appearance-none border border-[#774424] rounded-md w-full  py-6 text-[#ffa56d] leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        minLength={8}
                    />
                </div>
                {error && (
                    <div className="mb-4 text-red-500">{error}</div>
                )}
                <div className="flex flex-col items-center justify-between">
                    <button
                        type="submit"
                        className="shadow appearance-none rounded-md w-full py-4 bg-[#633f28] text-gray-100 hover:bg-[#4c3323] transition-opacity leading-tight focus:outline-none focus:shadow-outline mb-4"
                    >
                        {step === "signIn" ? "Sign In" : "Sign Up"}
                    </button>
                    <button
                        type="button"
                        className="text-[#d38351] hover:underline mb-4"
                        onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
                    >
                        {step === "signIn" ? "Need an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                    <span className="mb-4">or</span>
                    <button 
                        type="button"
                        onClick={() => void signIn("google", { flow: "signIn" })} 
                        className="shadow appearance-none rounded-md w-full py-4 bg-[#633f28] text-gray-100 hover:bg-[#4c3323] transition-opacity leading-tight focus:outline-none focus:shadow-outline"
                    >
                        Sign in with Google
                    </button>
                </div>
            </form>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-white p-6 rounded-lg shadow-xl"
                        >
                            <h2 className="text-xl font-bold mb-4">Success!</h2>
                            <p>You have successfully {step === "signIn" ? "signed in" : "signed up"}. Redirecting...</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LoginForm