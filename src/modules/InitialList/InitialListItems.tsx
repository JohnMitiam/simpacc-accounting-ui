import React from 'react';

import { TdClass } from '@components/TableContainers/TdClass';

interface InitialListProps {
  item: {
    id: string;
    namaewa: string;
    description: string;
    created: string;
    status: string;
  };
}

export const InitialListItems: React.FC<InitialListProps> = ({ item }) => {
  return (
    <tr key={item.id}>
      <TdClass>
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{item.namaewa}</p>
          </div>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">{item.created}</p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">{item.status}</p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex items-center space-x-2">
          <button className="bg-green-500 px-4 py-2 rounded-md hover:shadow-md">
            Edit
          </button>
          <button className="bg-red-500 px-4 py-2 rounded-md hover:shadow-md">
            Delete
          </button>
        </div>
      </TdClass>
    </tr>
  );
};
