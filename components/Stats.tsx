const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies Used", value: "8+" },
  { label: "Backend APIs Built", value: "10+" },
  { label: "Years of Experience", value: "2+" },
];

export default function Stats() {
  return (
    <div className="border-y border-[#1f2430] bg-[#0b0e14]">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-[#d4af37]">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-[#94a3b8]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}