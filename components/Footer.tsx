export default function Footer() {
  return (
    <footer className="py-4">
      <div className="mx-auto w-full max-w-[1140px] inline-flex flex-col items-center gap-[14px]">
        {/* Divider line */}
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.5px] outline-[#D3D3D3]"></div>

        {/* Row: links + title */}
        <div className="w-full max-w-[1140px] inline-flex items-center justify-between">
          <div className="flex items-center gap-[20px] ml-[35px]">
            <a href="https://www.facebook.com/carlaaron17" target="_blank" rel="noopener noreferrer" className="text-black text-[13px] italic font-medium">Facebook</a>
            <a href="" className="text-black text-[13px] italic font-medium">LinkedIn</a>
          </div>
          <div className="text-black text-[13px] font-medium text-center mr-[30px]">
            Garcia Carl Aaron - Software Dev
          </div>
        </div>
      </div>
    </footer>
  );
}
