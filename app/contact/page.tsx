"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Page = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sanitize input to prevent XSS attacks
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>"'&]/g, '') // Remove potentially dangerous characters
      .trim()
      .substring(0, 500); // Limit length
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (isSubmitting) {
      alert('Please wait while the message is being sent.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const firstName = sanitizeInput(formData.get('firstName') as string);
    const lastName = sanitizeInput(formData.get('lastName') as string);
    const email = sanitizeInput(formData.get('email') as string);
    const phone = sanitizeInput(formData.get('phone') as string);
    const message = sanitizeInput(formData.get('message') as string);

    // Validate first name - only letters and at least 5 characters
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName) || firstName.length < 5) {
      alert('First name must contain only letters and be at least 5 characters.');
      setIsSubmitting(false);
      return;
    }

    // Validate last name - only letters and at least 5 characters
    if (!lastName || !/^[a-zA-Z]+$/.test(lastName) || lastName.length < 5) {
      alert('Last name must contain only letters and be at least 5 characters.');
      setIsSubmitting(false);
      return;
    }

    // Validate email format - must be @gmail.com
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid @gmail.com email address.');
      setIsSubmitting(false);
      return;
    }

    // Validate phone - Cameroon formats: 9 digits or +237 followed by 9 digits
    const phoneRegex = /^(\+237)?[0-9]{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      alert('Phone number must be 9 digits or +237 followed by 9 digits (Cameroon format).');
      setIsSubmitting(false);
      return;
    }

    // Validate message - not empty and reasonable length
    if (!message || message.length < 10) {
      alert('Please enter a message with at least 10 characters.');
      setIsSubmitting(false);
      return;
    }

    if (message.length > 500) {
      alert('Message is too long. Please keep it under 500 characters.');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1ecldhf",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_47btqz9",
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "N2zpaB5SDcOpZQu8u",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          console.log("SUCCESS!");
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("FAILED to send message. Please try again later.");
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        },
      );
  };
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-100 px-4 py-6 sm:py-10">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="relative p-6 sm:p-8 text-white bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 flex flex-col justify-between">
          
          {/* Glow effects */}
          <div className="absolute w-32 sm:w-40 h-32 sm:h-40 bg-purple-400 opacity-30 rounded-full top-5 right-5 blur-2xl"></div>
          <div className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-gray-700 opacity-30 rounded-full bottom-5 left-5 blur-2xl"></div>

          {/* TOP SECTION */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Reach Out
              </h2>

              <p className="text-sm opacity-90 max-w-xs">
                We provide solutions to your problems. Don’t worry, we won’t spam.
              </p>
            </div>

            {/* POKEMON IMAGE */}
            <div className="w-full sm:w-auto flex justify-center sm:block">
              <Image
                src="/pokemon.png"
                alt="pokemon"
                width={180}
                height={180}
                className="object-contain absolute right-[20px] sm:mt-4 md:mt-0 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]"
              />
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4 sm:space-y-6 relative z-10 mt-4">
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FiMapPin />
              <p>Douala, Cameroon</p>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FiMail />
              <p>pokemon@yahoo.com</p>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FiPhone />
              <p>(+237) 670 167 299</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 bg-gray-200">
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
            Send us a message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="p-3 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="p-3 bg-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-3 bg-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />

            <input
              type="tel"
              placeholder="Phone (+237 670 167 299)"
              name="phone"
              className="p-3 bg-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />

            <textarea
              placeholder="Write your message here..."
              name="message"
              className="p-3 bg-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 sm:col-span-2 h-28 sm:h-32 resize-none text-sm sm:text-base"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`sm:col-span-2 text-white py-3 rounded-lg font-semibold transition text-sm sm:text-base ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gray-800 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Page;