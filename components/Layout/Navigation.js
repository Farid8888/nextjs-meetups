import Link from "next/link";
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={classes.navigation}>
      <h1>React Meetups</h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link href="/">All Mettups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
