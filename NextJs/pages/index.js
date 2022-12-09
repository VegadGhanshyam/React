import MeetupList from "../Components/Meetup/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://imvoyager.com/wp-content/uploads/2021/03/Shivrajpur-Beach-1.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/04/Dwarkadhish-temple.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export async function getstaticprops() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revaildate:1,
  };
}

export default HomePage;
