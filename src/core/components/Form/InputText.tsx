interface Props {
  children?: React.ReactNode;
  name: string;
  label: string;
  placeholder: string;
}

export const InputText: React.FC<Props> = ({ name, placeholder, label }) => {
  return (
    <>
      <div className="mx-52 flex justify-between">
        <label>{label}</label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          autoComplete="given-name"
          className="text-center w-2/4 m-1 rounded-md font-medium placeholder:italic placeholder:font-normal border-2"
        />
      </div>
    </>
  );
};
