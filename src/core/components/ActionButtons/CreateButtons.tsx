// import { Link } from 'react-router-dom';

export const CreateButton = ({ onClick }) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="bg-gray-500 px-4 mt-2 py-2 rounded-md hover:shadow-md
          font-semibold text-white"
        >
          + Create
        </button>
      </div>
    </>
  );
};
