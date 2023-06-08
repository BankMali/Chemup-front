export default function ButtonBlueXs({ children }) {
  return (
    <button className="flex text-xs text-C-white font-bold tracking-wider bg-C-blue1  w-fit rounded-[20px] px-5 py-2 hover:bg-C-blue2 transition duration-300 active:scale-90">
      {children}
    </button>
  );
}
