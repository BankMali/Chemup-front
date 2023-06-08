export default function ButtonYellowXs({ children }) {
  return (
    <button className="text-xs flex  text-C-gray3 font-bold tracking-wider bg-C-yellow2  w-fit rounded-[20px] px-5 py-2 hover:bg-C-yellow1 transition duration-300 active:scale-90">
      {children}
    </button>
  );
}
