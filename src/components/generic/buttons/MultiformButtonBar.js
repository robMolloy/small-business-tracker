import React from "react";
import GridItem from "../grids/GridItem";
import IconButton from "./IconButton";
import AddToListIcon from "../icons/AddToListIcon";
import ButtonPrimary from "./ButtonPrimary";
import GridContainer from "../grids/GridContainer";
import { Grid } from "@material-ui/core";

const MultiformButtonBar = (props) => {
  let add, addProps, AddAltComponent, submitProps, submitText, middle, justify;
  ({
    add = true,
    addProps = {},

    AddAltComponent = false,
    submitProps = {},
    submitText = "Submit",
    // middle = <GridItem xs={8}></GridItem>,
    middle,
    justify = "space-between",
  } = props);

  return (
    <>
      <GridItem>
        <GridContainer justify={justify}>
          <GridItem xs={2}>
            {add && (
              <IconButton fullWidth {...addProps}>
                <AddToListIcon />
              </IconButton>
            )}
            {!!AddAltComponent && AddAltComponent}
          </GridItem>
          {middle}
          <Grid item>
            <ButtonPrimary type="submit" {...submitProps}>
              {submitText}
            </ButtonPrimary>
          </Grid>
        </GridContainer>
      </GridItem>
    </>
  );
};

export default MultiformButtonBar;
