import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import router from 'next/router'


const MeetupItem = (props) => {

const detailHandler =()=>{
router.push(`${props.id}`)
}
    return (
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={props.img} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
            </div>
            <div className={classes.actions}>
              <button onClick={detailHandler}>Show Details</button>
            </div>
          </Card>
        </li>
      );
    }

export default MeetupItem;
