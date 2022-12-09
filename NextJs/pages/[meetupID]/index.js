import MeetupDetail from "../../Components/Meetup/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://imvoyager.com/wp-content/uploads/2021/03/Shivrajpur-Beach-1.jpg"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
};

export async function getstaticpath() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupID: "m1",
        },
      },
      {
        params: {
          meetupID: "m2",
        },
      },
    ],
  };
}

export async function getstaticprops(context) {
  const meetupID = context.params.meetupID;
  return {
    props: {
      meetupData: {
        image:
          "https://imvoyager.com/wp-content/uploads/2021/03/Shivrajpur-Beach-1.jpg",
        id: meetupID,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
    revaildate: 10,
  };
}
export default MeetupDetails;
