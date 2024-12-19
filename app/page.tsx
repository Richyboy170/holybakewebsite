import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingTitle from "@/components/MainPage/LandingTitle";
import HistoryPage from "@/components/MainPage/HistoryPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      {/* Full-Screen Landing Section */}
      <div className=" h-screen w-full">
        <LandingTitle />
      </div>
      {/* History Section */}
      <div className="w-full bg-white">
        <HistoryPage />
      </div>
    </main>
  );
}
