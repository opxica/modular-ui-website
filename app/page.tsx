import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5">
      <Image
        src="/logo.webp"
        alt="Vercel Logo"
        width={100}
        height={16}
        className="rounded-lg"
      />
      <h1 className="text-5xl font-semibold">Hello, Modular UI</h1>
    </div>
  );
}
