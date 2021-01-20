import { makeStyles } from "@material-ui/core/styles";

const Br = () => {
  const classes = makeStyles((theme) => ({
    root: { height: theme.spacing(1), margin: 0, padding: 0 },
  }))();

  return <br className={classes.root} />;
};

export default Br;
