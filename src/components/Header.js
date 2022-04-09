import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clima App
            </Typography>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={auth}
                      onChange={handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={auth ? "Logout" : "Login"}
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
