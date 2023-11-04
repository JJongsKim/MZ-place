import { useState } from 'react';

const useModal = () => {
  const [modal, isModal] = useState(false);

  const handleViewModal = () => {
    isModal(true);
  };

  const handleCloseModal = () => {
    isModal(false);
  };

  return { modal, handleViewModal, handleCloseModal };
};

export default useModal;
