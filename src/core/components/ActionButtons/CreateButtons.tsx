export const CreateButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-gray-500 px-4 py-2 rounded-md hover:shadow-md font-semibold text-white"
      >
        + Create
      </button>
    </>
  );
};
