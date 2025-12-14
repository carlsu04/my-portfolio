import Link from "next/link";

export default function Navbar() {
  return (
    <div data-layer="Frame 38" className="w-full max-w-[922px] mx-auto flex justify-between items-end px-6 py-6">
      <Link href="/" data-layer="carl." className="text-stone-900 text-4xl font-extrabold font-['MADE_TOMMY']">carl.</Link>
      <div data-layer="Frame 37" className="flex items-center gap-20">
        <Link href="/#about" className="text-black text-sm font-medium hover:text-gray-600 transition-colors font-[Montserrat-MediumItalic]">About Me</Link>
        <Link href="/#projects" className="text-black text-sm font-medium hover:text-gray-600 transition-colors font-[Montserrat-MediumItalic]">Projects</Link>
        <Link href="/contact" className="text-black text-sm font-medium hover:text-gray-600 transition-colors font-[Montserrat-MediumItalic]">Contact</Link>
      </div>
    </div>
  );
}
