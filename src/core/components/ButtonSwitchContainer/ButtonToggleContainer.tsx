interface Props {
  children?: React.ReactNode;
}

export const ToggleButtonContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-end pr-4 bg-sky-900">
      <div className="flex justify-center m-2 space-x-1 rounded-2xl bg-blue-500 ">
        {children}
      </div>
    </div>
  );
};
