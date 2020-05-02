import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Field, reduxForm } from "redux-form";
import { addYears } from "date-fns";

import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";

import DateInput from "../../utils/form/DateInput";
import PlaceInput from "../../utils/form/PlaceInput";
import TextInput from "../../utils/form/TextInput";
import RadioInput from "../../utils/form/RadioInput";
import { updateProfile } from "../../redux/actions/userActions";

const MainPage = ({ pristine, submitting, handleSubmit }) => {
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
      <Header dividing size="large" textAlign="center" content="Main" />

      <Form onSubmit={handleSubmit(handleUpdateProfile)}>
        <Field
          width={8}
          name="displayName"
          type="text"
          component={TextInput}
          placeholder="Known As"
        />

        <Form.Group inline>
          <label>Gender: </label>
          <Field
            name="gender"
            type="radio"
            value="male"
            label="Male"
            component={RadioInput}
          />

          <Field
            name="gender"
            type="radio"
            value="female"
            label="Female"
            component={RadioInput}
          />
        </Form.Group>

        <Field
          width={8}
          name="dateOfBirth"
          component={DateInput}
          placeholder="Date of Birth"
          dateFormat="dd LLL yyyy"
          showYearDropdown={true}
          showMonthDropdown={true}
          dropdownMode="select"
          maxDate={addYears(new Date(), -18)}
        />

        <Field
          name="city"
          placeholder="Home Town"
          options={{ types: ["(cities)"] }}
          component={PlaceInput}
          width={8}
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
})(MainPage);
