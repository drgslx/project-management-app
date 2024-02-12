import { forwardRef } from "react";

 const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // Define the classes for the input or textarea element
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  // Render the label and either an input or textarea element based on the textarea flag
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
})

export default Input