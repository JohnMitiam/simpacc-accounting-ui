export const DeleteButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-red-500 px-4 py-2 rounded-md hover:shadow-md"
      >
        Delete
      </button>
    </>
  );
};
