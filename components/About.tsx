export default function About() {
  return (
    <section id="about" className="mt-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="inline-flex flex-col justify-start items-start gap-0.5">
            <h2 className="text-xl text-black font-['Poppins-SemiBold']">Welcome To My Portfolio!</h2>
            <div className="w-65 h-0 rounded-lg outline outline-2 outline-offset-[-1px] outline-[#d3d3d3]" />
          </div>
          <p className="mt-4 text-xs text-black font-['Montserrat-Regular'] leading-relaxed">
            Driven by a knack in creativity since childhood, I have a lifelong passion for design and visual crafting. I transform complex ideas into polished, scalable and responsive applications, exploring my vast imagination and turning it into reality by editing and building. While deeply committed to the world of designing, I also combine my creativity with my logical thinking so my work can serve a purpose to the people in need.
          </p>
        </div>

        {/* What Can I Do Section */}
        <div className="mt-8">
          <div className="inline-flex flex-col justify-start items-start gap-0.5">
            <h3 className="text-xl text-black font-semibold">What Can I Do</h3>
            <div className="w-37 h-0 rounded-lg outline outline-2 outline-offset-[-1px] outline-[#d3d3d3]" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="flex gap-4">
              <img src="/assets/images/devops.png" alt="icon" className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="text-lg font-medium text-black">Software Developer</div>
                <p className="text-xs text-black font-['Montserrat-Regular'] leading-relaxed mt-2">
                  I specialize mainly in frontend developing and design positions but I can also integrate backends to them. I am skilled in information architecture, visual designs, and code optimizations by using a variety of tools and programming languages to transform ideas into scalable, consistent, and intuitive applications. I am trying to build myself to exploring new styles and discovering innovative user experiences.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex gap-4">
              <img src="/assets/images/web.png" alt="icon" className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="text-lg font-medium text-black">Competitions and Development Team</div>
                <p className="text-xs text-black font-['Montserrat-Regular'] leading-relaxed mt-2">
                  At CO-Lab, a student organization, I am a member of the competitions team focused on delivering innovative projects and products in areas such as mobile, web applications, and internet of things. We are centered on making systems and projects with the purpose of helping the Philippine community to be finer and more convenient, transitioning to the tech world.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
