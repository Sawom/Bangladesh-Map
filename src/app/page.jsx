import BangladeshMap from "@/components/BangladeshMap/BangladeshMap";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl pt-4 md:text-6xl  font-black text-teal-900 mb-4 tracking-tighter ">
          BANGLADESH
          <span className="text-teal-500 not-italic mx-4">EXPLORER</span>
        </h1>
        <p className="text-2xl text-gray-600 mb-8 font-medium">
          আপনার জেলার ইতিহাস ও ঐতিহ্য এখন এক ক্লিকেই।
        </p>
      </div>

      <BangladeshMap/>
    </div>
  );
}
