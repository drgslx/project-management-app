/**
 * A functional component for rendering an input or textarea with a label
 * @param {string} label - The label for the input
 * @param {boolean} textarea - A flag indicating whether to render a textarea instead of an input
 * @param {object} props - Additional props to be spread on the input or textarea element
 * @returns {JSX.Element} - The rendered input or textarea element with its label
 */
export default function Input({ label, textarea, ...props }) {
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
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}