interface BurgerProps {
  burgers?: {
    id: number;
    title: string;
    category: string;
    price: string;
    src: string;
    bgcolor: string;
  }[];
}

const Burger: React.FC<BurgerProps> = ({ burgers = [] }) => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {burgers.map((burger) => (
        <div
          key={burger.id}
          className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${burger.bgcolor} p-6 rounded-lg shadow-lg group max-w-xs`}
        >
          <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
            <div
              className="absolute w-48 h-48 bottom-0 left-0 mb-24 ml-3 rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            />
            <img
              src={burger.src}
              alt={burger.title}
              className="w-24 h-24 object-cover relative z-10"
            />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{burger.title}</h3>
          <p className="text-sm text-white opacity-90">{burger.category}</p>
          <p className="text-md font-semibold text-white mt-2">${burger.price}</p>
          <button className="mt-4 px-4 py-2 text-sm bg-white text-gray-800 font-bold rounded-full hover:bg-gray-200 transition-all">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Burger;
