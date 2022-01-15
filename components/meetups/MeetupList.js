import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            title={meetup.title}
            id={meetup.id}
            description={meetup.description}
            address={meetup.address}
            img={meetup.image}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
