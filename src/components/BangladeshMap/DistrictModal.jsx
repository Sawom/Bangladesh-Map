"use client";

const DistrictModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in duration-200">
        {/* modal header */}
        <div className="bg-teal-600 p-4 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">{data.name} জেলা</h2>
          {/* close button */}
          <button
            onClick={onClose}
            className="text-2xl font-bold leading-none hover:text-gray-200"
          >
            &times;
          </button>
        </div>

        {/* content body */}
        <div className="p-6 max-h-[50vh] overflow-y-auto custom-scrollbar space-y-4">
          <p className="text-gray-700 italic border-l-4 border-teal-500 pl-3">
            {data.info}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-3 rounded-lg">
            <p>
              <strong>বিভাগ:</strong> {data.division}
            </p>
            <p>
              <strong>স্থাপিত:</strong> {data.established}
            </p>
            <p>
              <strong>আয়তন:</strong> {data.area}
            </p>
            <p>
              <strong>বিখ্যাত:</strong> {data.famous_for}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-teal-700 mb-1">
              উপজেলা ({data.upazilas.count}টি):
            </h3>
            <p className="text-sm text-gray-600">
              {data.upazilas.list.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-teal-700 mb-1">দর্শনীয় স্থান:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {data.tourist_spots.map((spot, i) => (
                <li key={i}>{spot}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-teal-700 mb-1">
              বিখ্যাত ব্যক্তিত্ব:
            </h3>
            <p className="text-sm text-gray-600">
              {data.notable_people.join(", ")}
            </p>
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50 text-right">
          <button
            onClick={onClose}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DistrictModal;
