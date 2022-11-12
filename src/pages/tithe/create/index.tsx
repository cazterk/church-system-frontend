import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import TitheService from "src/services/titthe.service";
import TitheForm from "src/components/forms/TitheForm";

const CreateTithe = () => {
  const initialValues = {
    meetingType: null,
    collectedAmount: 0,
    date: new Date().toISOString(),
  };

  const { mutate } = useMutation(TitheService.createTithe);

  const handleSubmit = useCallback((values, { resetForm }) => {
    mutate({ ...values });
    resetForm({});
  }, []);

  return (
    <>
      <TitheForm
        initialValues={initialValues}
        submit={handleSubmit}
        title={`Tithe`}
      />
    </>
  );
};

export default CreateTithe;
