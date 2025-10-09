import React, { useEffect, useRef } from "react";

const TrafficLight: React.FC = () => {
  const [signal, setSignal] = React.useState<"Stop" | "Wait" | "Go">("Stop");
  const intervalRef = useRef<number | null>(null);
  // Static data for lights
  const lights = [
    { id: 1, color: "red", label: "Stop" },
    { id: 2, color: "yellow", label: "Wait" },
    { id: 3, color: "green", label: "Go" },
  ];

  const startCycle = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setSignal((prev) =>
        prev === "Stop" ? "Go" : prev === "Go" ? "Wait" : "Stop"
      );
    }, 3000);
  };

  const stopCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCycle = () => {
    stopCycle();
    setSignal("Stop");
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSignal((prevSignal) =>
  //         prevSignal === "Stop" ? "Go" : prevSignal === "Go" ? "Wait" : "Stop"
  //       );
  //     }, 3000); // Change light every 3 seconds

  //     return () => clearInterval(interval);
  //     },[])

  const getBgColor = (label: string) => {
    switch (label) {
      case "Stop":
        return "bg-red-400";
      case "Wait":
        return "bg-yellow-400";
      case "Go":
        return "bg-green-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center space-y-4 shadow-xl">
        {lights.map((light) => (
          <div
            key={light.id}
            className={`w-16 h-16 rounded-full border-4 border-gray-700 ${
              light.label === signal ? getBgColor(light.label) : "bg-gray-800"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={startCycle}
          className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Start
        </button>
        <button
          onClick={stopCycle}
          className="bg-gray-500 text-white cursor-pointer px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Stop
        </button>
        <button
          onClick={resetCycle}
          className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
