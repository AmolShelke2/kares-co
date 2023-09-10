import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center min-h-screen lg:max-w-[1440px] lg:mx-auto">
      <main className={`flex w-full flex-col lg:w-[1150px] px-4`}>
        <Navbar />
      </main>
    </div>
  );
}
