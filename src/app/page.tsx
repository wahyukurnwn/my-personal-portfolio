import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hero } from "./(mainapp)/_components/hero";
import { About } from "./(mainapp)/_components/about";
import { MyProject } from "./(mainapp)/_components/project";
import { navItems } from "@/data";
import { MySkill } from "./(mainapp)/_components/skill";
import { Footer } from "./(mainapp)/_components/footer";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center mx-auto overflow-clip px-5 sm:px-10 dark:bg-black">
      <section className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <MyProject />
        <MySkill />
        <Footer />
      </section>
    </main>
  );
}
