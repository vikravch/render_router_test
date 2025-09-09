import React from 'react';
import { useParams } from 'react-router-dom';

export const TabContentPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="block" data-cy="TabContent">
      {id ? 'Tab ' + id : 'Please select a tab'}
    </div>
  );
};
