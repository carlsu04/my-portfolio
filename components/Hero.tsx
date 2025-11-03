import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex justify-center mt-24 mb-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-5xl">
        {/* Profile and Socials */}
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/assets/images/semi-formal-removebg.png"
            alt="Profile photo"
            width={332}
            height={293}
            className="rounded-lg object-cover"
          />

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6 mt-2">
            <a href="https://www.instagram.com/_carlsu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image
                src="/assets/images/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
                className="hover:opacity-70 transition"
              />
            </a>
            <a href="https://github.com/carlsu04?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Image
                src="/assets/images/github.png"
                alt="GitHub"
                width={20}
                height={20}
                className="hover:opacity-70 transition"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/assets/images/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="hover:opacity-70 transition"
              />
            </a>
            <a href="https://www.facebook.com/carlaaron17" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image
                src="/assets/images/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
                className="hover:opacity-70 transition"
              />
            </a>
          </div>
        </div>

        {/* Text and Buttons */}
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="text-black text-sm font-normal font-['Montserrat-Regular']">Software Developer</p>
          <h1 className="text-black text-2xl font-extrabold font-['Montserrat-ExtraBold']">Garcia Carl Aaron</h1>

          <div className="flex items-center gap-2 mt-1">
            {/* Contact Me Button */}
            <Link
              href="/contact"
              className="w-28 h-7 px-[5px] py-1 bg-white rounded-2xl outline outline-1 outline-[#d3d3d3] flex justify-center items-center gap-[5px] hover:bg-gray-50 transition"
            >
              <span className="text-black text-xs font-medium font-['Montserrat-MediumItalic']">Contact Me</span>
              <div className="relative flex items-center">
                <Image
                  src="/assets/images/telephone.png"
                  alt="Telephone"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Download CV Button */}
            <a
              href="/assets/CV.pdf"
              download
              className="w-28 h-7 px-[5px] py-1 bg-white/90 rounded-2xl outline outline-1 outline-black/60 flex justify-center items-center gap-[5px] hover:bg-gray-100 transition"
            >
              <span className="text-black text-xs font-medium font-['Montserrat-MediumItalic']">Download CV</span>
              <div className="relative flex items-center">
                <Image
                  src="/assets/images/file.png"
                  alt="File"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
