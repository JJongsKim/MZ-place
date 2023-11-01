import { useEffect, useState } from 'react';

const useToast = () => {
  const [toast, isToast] = useState(false);

  const handleFloatingToast = () => {
    isToast(true);
  };

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        isToast(false);
      }, 2000);
    }
  }, [toast]);

  return { toast, handleFloatingToast };
};

export default useToast;
