export default function Button({ children, ...otherProps }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md 
      bg-stone-700 text-stone-300 hover:bg-stone-500 hover:text-stone-100"
      {...otherProps}
    >
      {children}
    </button>
  );
}