import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef()
  return (
    <section className="c-space section-spacing scroll-mt-24
" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="code"
            className="
            absolute scale-[1.75]
            -right-[5rem] -top-[1rem] md:scale-[3]
            md:left-50 md:inset-y-10 lg:scale-[2.5]
            "
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Arsalan Shaikh</p>
            <p className="subtext">
              As a passionate front-end developer, I’ve been building
              interactive and responsive web applications through personal
              projects and continuous learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="UI/UX THINKING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "40%" }}
              text="Responsive Design"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "30%", left: "70%" }}
              text="State Management"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="TAILWIND CSS"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="JSX + HOOKS"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "20%", left: "10%" }}
              image="assets/logos/vitejs.svg"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "50%", left: "45%" }}
              image="assets/logos/github.svg"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "10%", left: "80%" }}
              image="assets/logos/tailwindcss.svg"containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "80%", left: "85%" }}
              image="assets/logos/threejs.svg"containerRef={grid2Container}
            />
          </div>
        </div>
        {/* grid 3 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%] ">
                <p className="headtext">Time Zone</p>
                <p className="subtext ">Based in Navi Mumbai, open to both onsite opportunities and remote roles globally.</p>
                <figure className="absolute left-[30%] top-[10%]">
                <Globe />
                </figure>
            </div>
        </div>
        {/* grid 4 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">Do you want to start a project together?</p>
                <CopyEmailButton />
            </div>
        </div>
        {/* grid 5 */}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
