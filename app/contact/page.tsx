"use client";
import { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        `https://getform.io/f/agdymzvb`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center mb-12 mt-24"
    >
      <h1 className="hover:text-light-black w-fit text-2xl md:text-4xl underline">
        Contact
      </h1>
      <div className="mt-12 w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-5/6">
          <input name="_input" type="hidden" className="hidden" />
          <div className="w-full">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="placeholder:text-gray-500 h-12 w-full rounded-lg pl-2 text-black2 shadow-inner"
              placeholder="Enter Name"
            />
          </div>
          <div className="mt-6 w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-gray-500 h-12 w-full rounded-lg pl-2 text-black2 shadow-inner"
              placeholder="Enter Email"
            />
          </div>
          <div className="mt-6 w-full">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-40 w-full resize-y rounded-lg bg-white pl-2 pt-2 text-black2 shadow-inner placeholder:text-gray-500"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="flex justify-center">
            <button
              className={`relative mt-6 w-1/4 rounded-full bg-primary p-2 text-light-black hover:text-red ${
                isLoading ? "flex items-center justify-center" : ""
              }`}
            >
              {isLoading ? (
                <div className="flex h-12 w-10 items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-red border-transparent"></div>
                </div>
              ) : (
                "Submit!"
              )}
            </button>
          </div>
          {isSent && (
            <p className="mt-2 text-center text-light-black tracking-wide">
              Message Sent!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
