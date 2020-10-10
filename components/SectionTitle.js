import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { marginBottom: theme.spacing(3) },
  subtitle: {
    color: theme.palette.secondary.main,
  },
}));

export default function SectionTitle({ title = "", subtitle = "" }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        {title}
        <span className={classes.subtitle}>{subtitle}</span>
      </Typography>
    </div>
  );
}
