import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Field, reduxForm } from "redux-form";

import { Button, Divider, Form, Header, Segment } from "semantic-ui-react";

import RadioInput from "../../utils/form/RadioInput";
import TextInput from "../../utils/form/TextInput";
import TextArea from "../../utils/form/TextArea";
import PlaceInput from "../../utils/form/PlaceInput";
import SelectInput from "../../utils/form/SelectInput";
import { updateProfile } from "../../redux/actions/userActions";

const interests = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];

const AboutPage = ({ pristine, submitting, handleSubmit }) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const handleUpdateProfile = useCallback(
    (user) => {
      return dispatch(updateProfile({ firebase }, user));
    },
    [firebase, dispatch]
  );

  return (
    <Segment>
      <Header dividing size="large" textAlign="center" content="About Me" />

      <p>Complete your profile to get the most out of this site</p>

      <Form onSubmit={handleSubmit(handleUpdateProfile)}>
        <Form.Group inline>
          <label>Tell us your status: </label>

          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="single"
            label="Single"
          />

          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="relationship"
            label="Relationship"
          />

          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Married"
          />
        </Form.Group>
        <Divider />

        <label>Tell us about yourself</label>
        <Field name="about" component={TextArea} placeholder="About Me" />

        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />

        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />

        <Field
          width={8}
          name="origin"
          options={{ types: ["(regions)"] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />

        <Button
          disabled={pristine || submitting}
          size="large"
          positive
          content="Update Profile"
          icon="edit"
        />
      </Form>
    </Segment>
  );
};

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(AboutPage);
