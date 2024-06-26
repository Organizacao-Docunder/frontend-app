const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black bg-opacity-60 absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center" onClick={onClose}>
      <div className="bg-white p-5 w-full max-w-4xl rounded-lg shadow-md flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
