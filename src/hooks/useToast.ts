import { useEffect, useState } from 'react';

const useToast = () => {
  const [toast, isToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleFloatingToast = (value?: string) => {
    isToast(true);

    if (value) {
      setToastMsg(value);
    }
  };

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        isToast(false);
        setToastMsg('');
      }, 2000);
    }
  }, [toast]);

  return { toast, toastMsg, handleFloatingToast };
};

export default useToast;
