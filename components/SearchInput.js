import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    flexGrow: 1,
  },
}));

export default function SearchInput({ onChange, value }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.search}
      id="search-input"
      placeholder="Enter movie name here"
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      onChange={onChange}
      value={value}
      label="Keyword"
    />
  );
}
