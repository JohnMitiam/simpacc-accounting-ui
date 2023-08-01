export const EditButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-green-500 px-4 py-2 rounded-md hover:shadow-md"
      >
        Edit
      </button>
    </>
  );
};
