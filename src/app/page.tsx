import Image from "next/image";
export default function Home() {
  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <Image
        className="relative"
        src="/logo.svg"
        alt="Mehdi Vaezi Logo"
        width={180}
        height={180}
        priority
      />
      <h1 className="mt-8 font-bold text-2xl">Mehdi Vaezi</h1>
      <h2>Senior Front-End Developer</h2>
      <p>Javascript Engineer | Vue/Nuxt | React/Next | React-Native</p>

      <span className="mt-8">It is developing...</span>
    </div>
  );
}
