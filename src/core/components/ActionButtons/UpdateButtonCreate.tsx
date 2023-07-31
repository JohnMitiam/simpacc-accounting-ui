export const UpdateButtonCreate = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-green-500 px-4 py-2 rounded-md hover:shadow-md font-semibold text-white"
      >
        Update
      </button>
    </>
  );
};
