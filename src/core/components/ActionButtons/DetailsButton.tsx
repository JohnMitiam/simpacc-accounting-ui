export const DetailsButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-blue-400 px-4 py-2 rounded-md hover:shadow-md"
      >
        Details
      </button>
    </>
  );
};
