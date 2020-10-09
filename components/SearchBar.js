import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SearchInput from "../components/SearchInput";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2), display: "flex" },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchButton: {
    color: "#fff",
    margin: theme.spacing(1),
  },
  selectInput: {
    backgroundColor: "#F3F3F3",
  },
  selectIcon: {
    color: theme.palette.secondary.main,
  },
}));

export default function SearchBar({ onTop = false }) {
  const classes = useStyles();
  const [year, setYear] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [title, setTitle] = React.useState("");

  const handleSearch = () => {
    //TODO redirect to search page
  };

  return (
    <Container maxWidth="md">
      <Paper className={classes.root} style={onTop ? { marginTop: -90 } : null}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            label="Year"
            classes={{
              root: classes.selectInput,
              icon: classes.selectIcon,
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
            label="Type"
            classes={{
              root: classes.selectInput,
              icon: classes.selectIcon,
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <SearchInput
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></SearchInput>
        <Link href={`/search?title=${title}`}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.searchButton}
            onClick={handleSearch}
            onKeyDown={handleSearch}
          >
            Search
            <ArrowForward></ArrowForward>
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
