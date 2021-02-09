import React from "react";
import createAccount from "../../../firebase/auth/generic/createAccount";

import Paper from "../../generic/layouts/Paper";

import CreateAccountFormContents from "../form-contents/CreateAccountFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";

import blankItems from "../../../data/blankItems";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";
import Title from "../../generic/text/Title";
import GridItem from "../../generic/grids/GridItem";
import { useHistory } from "react-router-dom";

const CreateAccountForm = (props = {}) => {
  const createAccountFormControls = {};
  const history = useHistory();

  const initCreateAccount = () => blankItems.createAccount();

  const [createAccountFormValues, setCreateAccountFormValues] = React.useState(
    initCreateAccount()
  );

  let createAccountFormHelper = createMultiFormHelper({
    controls: createAccountFormControls,
    values: createAccountFormValues,
    setValues: setCreateAccountFormValues,
    newItem: initCreateAccount,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(1);

    let valid = true;
    if (!(await createAccountFormHelper.isValid())) valid = false;

    if (valid) {
      let formValues = Object.values(createAccountFormHelper.getItems())[0];

      let [success, rtn] = await createAccount(
        formValues.crac_email,
        formValues.crac_password
      );

      // let message = rtn?.[1]?.message;
      console.log(JSON.stringify(rtn));

      if (success) history.push("/customers");
    }
  };

  return (
    <Paper>
      <Form onSubmit={onSubmit}>
        <GridContainer>
          <GridItem>
            <Title align="center">Create Account</Title>
          </GridItem>

          <MultiForm
            {...{
              overline: false,
              multiFormControls: createAccountFormControls,
              multiFormValues: createAccountFormValues,
              setMultiFormValues: setCreateAccountFormValues,
              Component: CreateAccountFormContents,
            }}
          />

          <MultiformButtonBar add={false} />
        </GridContainer>
      </Form>
    </Paper>
  );
};

export default CreateAccountForm;
