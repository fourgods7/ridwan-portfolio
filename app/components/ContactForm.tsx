"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message sent successfully! Thanks for reaching out.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm text-gray-300">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm text-gray-300">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm text-gray-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          minLength={10}
          maxLength={5000}
          required
          className="w-full resize-y rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={status === "success" ? "text-sm text-green-400" : "text-sm text-red-400"}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
