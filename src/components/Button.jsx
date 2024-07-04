export default function Button({ children, ...otherProps }) {
  return (
    <button
      className="px-6 py-4 text-xs md:text-base rounded-md 
      bg-stone-800 text-stone-500 hover:bg-stone-600 hover:text-stone-200"
      {...otherProps}
    >
      {children}
    </button>
  );
}