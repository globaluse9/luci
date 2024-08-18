import Lucifer from "@/Components/Lucifer";

export default function Home() {
  return (
  <main className="h-screen w-screen bg-slate-900 flex-1 flex justify-center items-center">
      <div className="w-[80%] h-[80%] lg:w-[40%] bg-slate-800 border border-gray-100/30 rounded-md">
          <Lucifer />
      </div>
  </main>  
  );
}
