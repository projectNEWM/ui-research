import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@material-ui/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 240,
      
    }

  },
};
const useStyles = makeStyles(() => ({
    input:{
        width: "240px",
        border: "1px solid #1D1D1D !important",
        borderRadius: 4,
        right: "8px",
        backgroundColor: "#121212"

    }

}));

const names = [
  'Rock',
  'Hip Hop',
  'Pop',
  'Jazz',
  'Country',
  'Lofi',
  'Classical',
  'Alternative'
];

function getStyles(name, genreName, theme) {
  return {
    fontWeight:
      genreName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const c = useStyles()
  const [genreName, setGenreName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return ( <div>
      <FormControl sx={{ m: 1, width: 320 }} size="small">
        <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          align="left"
          className={c.input}
          value={genreName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Genre" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip sx={{ backgroundColor: "#333E4C"}} key={value} label={value}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, genreName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
