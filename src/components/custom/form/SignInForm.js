import React from "react";
import { firebase } from "../../../alt-config/firebase";
import Paper from "../../generic/layouts/Paper";

import SignInFormContents from "../form-contents/SignInFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";

import blankItems from "../../../data/blankItems";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";
import Title from "../../generic/text/Title";
import GridItem from "../../generic/grids/GridItem";
import { useHistory } from "react-router-dom";
import useSession from "../../../firebase/auth/generic/useSession";
import Text from "../../generic/text/Text";

const SignInForm = (props = {}) => {
  const signInFormControls = {};

  const [errorMessage, setErrorMessage] = React.useState("");
  const { isSignedIn } = useSession();
  const history = useHistory();

  const initSignIn = () => blankItems.signIn();

  const [signInFormValues, setSignInFormValues] = React.useState(initSignIn());

  let signInFormHelper = createMultiFormHelper({
    controls: signInFormControls,
    values: signInFormValues,
    setValues: setSignInFormValues,
    newItem: initSignIn,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!(await signInFormHelper.isValid())) valid = false;

    if (valid) {
      let formValues = Object.values(signInFormHelper.getItems())[0];
      let { sgn_email, sgn_password } = formValues;

      firebase
        .auth()
        .signInWithEmailAndPassword(sgn_email, sgn_password)
        .then((userCredential) => history.push("/customers"))
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <Paper>
      <Form onSubmit={onSubmit}>
        <GridContainer>
          <GridItem>
            <Title align="center">
              {isSignedIn ? "Sign In Successful" : "Sign In"}
            </Title>
          </GridItem>
          {!isSignedIn && (
            <>
              <MultiForm
                {...{
                  overline: false,
                  multiFormControls: signInFormControls,
                  multiFormValues: signInFormValues,
                  setMultiFormValues: setSignInFormValues,
                  Component: SignInFormContents,
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
            </>
          )}
        </GridContainer>
      </Form>
    </Paper>
  );
};

export default SignInForm;
