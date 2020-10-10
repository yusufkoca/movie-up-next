import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
}));

export default function SearchBar({ onTop = false }) {
  const classes = useStyles();
  const router = useRouter();
  const [year, setYear] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [title, setTitle] = React.useState("");

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} style={onTop ? { marginTop: -90 } : null}>
        <TextField
          id="year-input"
          variant="outlined"
          onChange={(event) => setYear(event.target.value)}
          value={year}
          label="Year"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
            label="Type"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"movie"}>Movie</MenuItem>
            <MenuItem value={"series"}>Series</MenuItem>
            <MenuItem value={"episode"}>Episode</MenuItem>
          </Select>
        </FormControl>
        <SearchInput
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              router.push(`/search?title=${title}&year=${year}&type=${type}`);
            }
          }}
        ></SearchInput>
        <Link href={`/search?title=${title}&year=${year}&type=${type}`}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.searchButton}
          >
            Search
            <ArrowForward></ArrowForward>
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
