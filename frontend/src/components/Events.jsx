const Events = () => {
  const events = [
    {
      date: "June 3",
      title: "BINiverse World Tour USA 2025",
      venue: "The Theater at MGM National Harbor, Washington, DC",
    },
    {
      date: "June 4",
      title: "BINiverse World Tour USA 2025",
      venue: "MGM at Fenway, Boston, MA",
    },
    {
      date: "June 6",
      title: "BINiverse World Tour USA 2025",
      venue: "Rosemont, Illinois",
    },
    {
      date: "June 9",
      title: "BINiverse World Tour USA 2025",
      venue: "713 Music Hall, Houston, Texas",
    },
    {
      date: "June 10",
      title: "BINiverse World Tour USA 2025",
      venue: "Toyota Music Factory, Dallas, Texas",
    },
    {
      date: "June 13",
      title: "BINiverse World Tour USA 2025",
      venue: "The Theater at Las Vegas Virgin Hotels, Las Vegas, NV",
    },
    {
      date: "June 14",
      title: "BINiverse World Tour USA 2025",
      venue: "Peacock, Los Angeles, CA",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-medium text-center mb-8 text-gray-700">
          Events
        </h1>
        <div className="space-y-0">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-6 border-b border-gray-200"
            >
              <div className="w-24 text-gray-700">{event.date}</div>
              <div className="flex-1 px-4">
                <div className="text-gray-700 font-medium mb-1">
                  {event.title}
                </div>
                <div className="text-gray-600">{event.venue}</div>
              </div>
              <button className="text-[#94b0b3] hover:underline text-sm">
                See Details
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button className="p-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-gray-600 text-sm">Page 2 of 3</span>
          <button className="p-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
