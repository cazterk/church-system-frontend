import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import TitheService from "src/services/titthe.service";
import TitheForm from "src/components/forms/TitheForm";

const UpdateTithe = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["tithe", { id }],
    queryFn: TitheService.getOneTitheEntry,
  });
  const { mutate } = useMutation(TitheService.updateTithe);

  const handleSubmit = useCallback((values) => {
    mutate({ ...values, id });
  }, []);

  return (
    <>
      <TitheForm initialValues={data} submit={handleSubmit} title={`Update`} />
    </>
  );
};

export default UpdateTithe;
