
import React, { Fragment } from "react";
import NewMeetupForm from "../../Components/Meetup/NewMeetupForm";

const NewMeetup = () => {
  const MeettupHandler = (abc) => {
    console.log(abc);
  };

  return <NewMeetupForm onAddMeetup={MeettupHandler} />;
};
export default NewMeetup;
