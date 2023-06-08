export default function BoxSm({ children }) {
  return (
    <p className=" h-[90px] w-[100px] rounded-2xl border-2 border-C-blue1 text-C-blue1 font-bold text-center flex items-center px-4 text-sm flex-wrap">
      {children}
    </p>
  );
}
