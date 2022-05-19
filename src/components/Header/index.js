import {
  Typography,
  Toolbar,
  Switch,
  FormGroup,
  FormControlLabel,
  Box,
  AppBar,
} from "@mui/material";
import * as React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clima App
            </Typography>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={props.check}
                      onChange={props.handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={props.check ? <LightModeIcon /> : <DarkModeIcon />}
                />
              </FormGroup>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
