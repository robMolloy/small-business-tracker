import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const MultiForm = (props = {}) => {
  let listValues, Component, schema, width, listFormControls;
  ({
    listValues = {},
    Component,
    schema = yup.object().shape({}),
    width = 12,
    listFormControls = {},
  } = props);

  const resolver = yupResolver(schema);
  const formControls = useForm({ resolver, mode: "onChange" });

  return Object.entries(listValues).map(([id, values]) => {
    listFormControls[id] = { ...formControls };

    return <Component {...{ values, formControls, width }} />;
  });
};

export default MultiForm;
