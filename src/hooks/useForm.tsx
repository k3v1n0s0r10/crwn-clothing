import { ChangeEvent, useState } from "react";

const useForm = (initialState: any) => {
  const [data, setData] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((oldData: any) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const clearData = () => {
    setData(initialState);
  };

  return [data, handleChange, clearData];
};

export default useForm;
