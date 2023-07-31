interface Props {
  children?: React.ReactNode;
  name: string;
  placeholder: string;
}

export const InputText: React.FC<Props> = ({ name, placeholder }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete="given-name"
        className="text-center w-2/4 m-1 rounded-md font-medium placeholder:italic placeholder:font-normal border-2"
      />
    </>
  );
};
