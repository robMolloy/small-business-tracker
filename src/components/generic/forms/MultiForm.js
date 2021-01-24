import React from "react";

import GridItem from "../grids/GridItem";
import DeleteIcon from "../icons/DeleteIcon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const MultiForm = (props = {}) => {
  let setMultiFormValues,
    multiFormValues,
    Component,
    width,
    remove,
    multiFormControls;

  ({
    multiFormValues,
    setMultiFormValues,
    multiFormControls = {},
    Component,
    width = 12,
    remove = false,
  } = props);

  if (remove) width -= 1;

  const removeItem = (id) => {
    delete multiFormValues[id];
    setMultiFormValues({ ...multiFormValues });
  };

  const classes = useStyles();

  return (
    <>
      {Object.entries(multiFormValues).map(([id, values]) => {
        multiFormControls[id] = {};
        let formControls = multiFormControls[id];

        return (
          <React.Fragment key={id}>
            <Component {...{ values, formControls, width }} />
            {remove && (
              <GridItem
                xs={1}
                onClick={() => removeItem(id)}
                className={classes.icon}
              >
                <DeleteIcon />
              </GridItem>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MultiForm;
