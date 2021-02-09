import React from "react";

import Paper from "../../generic/layouts/Paper";

import CreateAccountFormContents from "../form-contents/CreateAccountFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";

import blankItems from "../../../data/blankItems";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import GridItem from "../../generic/grids/GridItem";

import { firebase } from "../../../alt-config/firebase";

import { useHistory } from "react-router-dom";

const CreateAccountForm = (props = {}) => {
  const createAccountFormControls = {};

  const [errorMessage, setErrorMessage] = React.useState("");
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

    let valid = true;
    if (!(await createAccountFormHelper.isValid())) valid = false;

    if (valid) {
      let formValues = Object.values(createAccountFormHelper.getItems())[0];
      const { crac_email, crac_password } = formValues;

      firebase
        .auth()
        .createUserWithEmailAndPassword(crac_email, crac_password)
        .then((userCredential) => {
          userCredential.user
            .sendEmailVerification()
            .then(() => history.push("/customers"))
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) => setErrorMessage(error.message));
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
          {!!errorMessage && (
            <GridItem>
              <Text align="center" error={true}>
                {errorMessage}
              </Text>
            </GridItem>
          )}

          <MultiformButtonBar add={false} />
        </GridContainer>
      </Form>
    </Paper>
  );
};

export default CreateAccountForm;
