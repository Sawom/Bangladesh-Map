import BangladeshMap from "@/components/BangladeshMap/BangladeshMap";
import Information from "@/components/BangladeshMap/Information";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Information></Information>
      <BangladeshMap></BangladeshMap>
    </div>
  );
}
