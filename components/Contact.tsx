"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="mt-8">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        {/* Contact/Get In Touch header container */}
        <div className="w-full h-40 py-8 relative inline-flex flex-col justify-start items-start gap-2.5">
          <div className="w-full left-0 top-0 absolute h-full flex flex-col justify-between items-start">
            {/* full-viewport lines */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-0 outline outline-1 outline-offset-[-0.5px] outline-[#d3d3d3]"></div>
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-0 outline outline-1 outline-offset-[-0.5px] outline-[#d3d3d3]"></div>
          </div>
          <div className="w-44 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-black text-5xl font-semibold">Contact</div>
            <div className="self-stretch justify-start text-black text-sm font-normal">Get In Touch </div>
          </div>
        </div>

    {/* Content */}
  <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
          {/* Left: Contact details */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Image src="/assets/images/telephone.png" alt="Phone" width={24} height={24}/>
              <div className="flex flex-col">
                <span className="text-sm text-black">(+63) 9212543325</span>
                <span className="text-xs text-black/70">Reach out to me during business hours.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/assets/images/location.png" alt="address" width={24} height={24}/>
              <div className="flex flex-col">
                <span className="text-sm text-black">Laguna, Philippines</span>
                <span className="text-xs text-black/70">Malinta, Los Baños, Laguna, 4030</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/assets/images/email.png" alt="email" width={24} height={24}/>      
              <div className="flex flex-col">
                <span className="text-xs text-black/70">Send me an email.</span>
                <span className="text-sm text-black">carlgarcia.pro1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right: Title + Contact form */}
          <div className="flex flex-col gap-4 items-start md:-mt-2">
            <div>
              <h3 className="text-xl text-black font-semibold">How Can I Help You?</h3>
              <div className="w-37 h-0 rounded-lg outline outline-2 outline-offset-[-1px] outline-[#d3d3d3]" />
            </div>
            <form
              className="w-full flex flex-col gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const message = (document.getElementById("contact-message") as HTMLTextAreaElement | null)?.value || "";
                const payload = {
                  name: data.get("name"),
                  email: data.get("email"),
                  subject: data.get("subject"),
                  message,
                  honeypot: data.get("company") || "",
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  if (!res.ok) throw new Error("Failed to send");
                  alert("Thanks! Your message has been sent.");
                  form.reset();
                  const ta = document.getElementById("contact-message") as HTMLTextAreaElement | null;
                  if (ta) ta.value = "";
                } catch (err) {
                  alert("Sorry, something went wrong. Please try again later.");
                }
              }}
            >
              {/* Honeypot to deter bots */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              {/* Left column: inputs + button */}
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="w-80 h-10 px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#666666]/40 text-sm"
                  placeholder="Full name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                />

                <input
                  type="email"
                  className="w-80 h-10 px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#666666]/40 text-sm"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                />
                <input
                  type="text"
                  className="w-80 h-10 px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#666666]/40 text-sm"
                  placeholder="Subject"
                  name="subject"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="mt-1 w-32 h-8 px-2 bg-white/90 rounded-2xl outline outline-1 outline-black/60 flex justify-center items-center gap-1 hover:bg-gray-100 transition"
                >
                  <span className="text-black text-xs font-normal font-['Montserrat-Regular']">Send Message</span>
                </button>
              </div>
            </form>
          </div>

          {/* Rightmost: Message textarea */}
          <div className="flex items-start md:justify-start mt-[34px] ml-[10px] md:ml-50 lg:ml-10">
            <textarea
              id="contact-message"
              className="h-35 w-[280px] max-w-[280px] bg-white rounded-lg border border-[#666666]/40 p-3 text-sm resize-none"
              placeholder="Message"
              name="message"
              required
              aria-required="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
