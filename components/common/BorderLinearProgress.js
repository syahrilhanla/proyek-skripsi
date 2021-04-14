import { LinearProgress, withStyles, makeStyles } from '@material-ui/core';

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function BorderLinearProgress({ value }) {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <CustomLinearProgress variant="determinate" value={value} />
    </span>
  );
}