import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Link, Typography} from "@mui/material";


function ResponsiveFooter() {
  const currentYear = new Date().getFullYear();
    return (
    <AppBar position="sticky" style={{ background: '#747C87'}} >
      <Toolbar disableGutters>
      <Typography variant="body2">
        <div>
        <Link style={{color:"white"}} href={"/contact"}>
          Contact
        </Link>
      </div>
          <div>
        <Link style={{color:"white"}} href={"/about"}>
          About Us
        </Link>
 </div>
      </Typography>
      <Typography variant="caption">
         ConsciousCarbonFit © {currentYear}
      </Typography>
      </Toolbar>
    </AppBar>
    );
}
export default ResponsiveFooter;