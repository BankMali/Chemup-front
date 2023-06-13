export default function InputErrorMessage({ message }) {
  return (
    // <div className="h-[1rem] items-start w-full ">
    // </div>
    <span className="text-red-500 h-5 text-[8pt] items-start w-full pl-5 visible">
      {message}
    </span>
  );
}
