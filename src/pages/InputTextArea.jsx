import createClasses from "../utils/create-classes";

export default function InputTextArea({
  placeholder,
  onChange,
  value,
  error,
  name,
}) {
  const defaultClassName =
    "text-C-gray3 outline outline-C-gray1 rounded-xl py-2 px-4 w-full bg-white outline-2 border";
  const className = createClasses(
    defaultClassName,
    error
      ? "border-red-500 hover:outline-red-200 focus:ring-red-300"
      : "border-C-gray1 hover:outline-C-gray1 hover:border-C-blue1 focus:ring-blue-300 focus:border-blue-500"
  );

  return (
    <textarea
      value={value}
      error={error}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      name={name}
    />
  );
}
