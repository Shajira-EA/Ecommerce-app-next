export default function Loading() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse border p-4 rounded space-y-4"
        >
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
          <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
        </div>
      ))}
    </div>
  );
}
