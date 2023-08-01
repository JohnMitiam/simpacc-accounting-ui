import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CreateButton } from '@components/ActionButtons/CreateButtons';
import { UpdateButtonCreate } from '@components/ActionButtons/UpdateButtonCreate';
import { InputText } from '@components/Form/InputText';

export const Create = () => {
  const create = () => {
    toast.success('Created SuccessFully', {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
      autoClose: 500,
    });
  };

  const handleCreateClick = () => {
    create();
  };

  return (
    <>
      <div className="container max-w-7xl px-4 m-8 mx-auto sm:px-8">
        {/* <div className="bg-white py-8 inline-block min-w-full overflow-hidden rounded-lg shadow"> */}
        <div className="bg-white py-6 rounded-lg shadow">
          <div>
            <h1 className=" py-8 text-3xl font-bold text-center">
              Create Information
            </h1>
          </div>
          <InputText name="name" placeholder="First Name" label="First Name" />
          <InputText name="name" placeholder="Last Name" label="Last Name" />
          <InputText name="email" placeholder="Email" label="Email" />
          <InputText
            name="name"
            placeholder="Description"
            label="Description"
          />
          <InputText name="name" placeholder="Birthday" label="Birthday" />
          <div className="flex space-x-4 justify-center">
            <UpdateButtonCreate onClick={'#'} />
            <CreateButton onClick={handleCreateClick} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
