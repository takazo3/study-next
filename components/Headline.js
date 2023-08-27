import classes from "./styles/Headline.module.css";

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>Get started by editing {props.children}</p>
    </>
  );
}
