export default function Input({ placeholder, type, name, border }) {
  return (
    <input
      placeholder={placeholder}
      required
      type={type}
      name={name}
      className={`w-full px-3 h-10 border border-solid rounded text-p text-neutral-2 ${border? 'border-red-500' : 'border-primary-1'}`}
    />
  );
}