interface Props {
  children?: React.ReactNode;
}

export const TdClass: React.FC<Props> = ({ children }) => {
  return (
    <>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        {children}
      </td>
    </>
  );
};
