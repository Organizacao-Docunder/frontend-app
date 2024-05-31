export default function Input({ placeholder, type, name }) {
  return (
    <input
      placeholder={placeholder}
      required
      type={type}
      name={name}
      className="w-full p-3 border border-solid border-primary-1 rounded text-p"
    />
  );
}