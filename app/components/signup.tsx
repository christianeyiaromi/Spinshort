"use client";
import { useState, FormEvent } from "react";
import { createUserWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const Router = useRouter();
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);
      if (res?.user) {
        Router.push("/dashboard");
        console.log(res);
      }
      console.log("User Created Successfully");
    } catch (error) {
      console.log("Error during sign up:", error);
      const authError = error as AuthError;
      let errorMessage = "An error occurred while signing up";
      if (authError.code === "auth/email-already-in-use") {
        errorMessage = "User with provided email already exist.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              value={form.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              value={form.password}
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSignUp}
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-2 text-center">
          <p>
            Already have an account, <Link href="/login">sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
