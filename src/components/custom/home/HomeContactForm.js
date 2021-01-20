import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import Input from "../../generic/fields/Input";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import { makeStyles } from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";

const Schema = yup.object().shape({
  Name: yup.string().required(),
  Email: yup.string().required().email(),
  Phone: yup.string().required().phone(),
  Message: yup.string().required(),
});

const getDefaultFieldProps = ({ formControls, name }) => {
  return {
    helperText: formControls.errors?.[name]?.message,
    name,
    error: !!formControls.errors?.[name],
    ref: formControls.register,
  };
};

const HomeContactForm = (props = {}) => {
  // let id, values, formControls, setFormControls;
  // ({ id, values, formControls, setFormControls } = props);
  let color;
  ({ color = "mono" } = props);

  const formControls = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  const [state, setState] = React.useState({ status: "" });

  const classes = makeStyles((theme) => ({
    a: {
      color: theme.palette[color].contrastText,
      borderBottom: `solid 1px ${theme.palette[color].contrastText}`,
      cursor: "pointer",
    },
  }))();

  const onSubmit = (data, e) => {
    const f = new FormData();
    Object.entries(data).forEach(([key, value]) => f.append(key, value));

    const xhr = new XMLHttpRequest();
    xhr.open("post", "https://formspree.io/f/mgepdvrr");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      let error = false;

      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (!xhr.response) error = true;

      if (xhr.status === 200) formControls.reset();
      else error = true;

      setState({ status: error ? "ERROR" : "SUCCESS" });
    };

    xhr.send(f);
  };

  return (
    <Section color={color} withContainer>
      <Title underline gutterBottom>
        Contact Me
      </Title>
      <Text>
        Get in touch with me using this form or email me at{" "}
        <a className={classes.a} href="mailto:robmolloy@hotmail.co.uk">
          robmolloy@hotmail.co.uk
        </a>
        .
      </Text>
      <br />
      <form onSubmit={formControls.handleSubmit(onSubmit)}>
        <Input
          label="Name"
          {...getDefaultFieldProps({ formControls, name: "Name" })}
        />
        <br />
        <br />
        <Input
          label="Email"
          {...getDefaultFieldProps({ formControls, name: "Email" })}
        />
        <br />
        <br />
        <Input
          label="Phone"
          {...getDefaultFieldProps({ formControls, name: "Phone" })}
        />
        <br />
        <br />
        <Input
          label="Message"
          multiline
          rows={4}
          {...getDefaultFieldProps({ formControls, name: "Message" })}
        />
        <br />
        <br />
        <Title align="center" size={0}>
          {state.status === "ERROR" && "Ooops! There was an error."}
          {state.status === "SUCCESS" && "Thanks!"}
        </Title>
        {state.status === "" && (
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
        )}
      </form>
    </Section>
  );
};

export default HomeContactForm;
