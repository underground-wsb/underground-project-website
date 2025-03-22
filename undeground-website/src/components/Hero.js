import { Box, Button, Grid, Typography } from "@mui/material"
import background from "../assets/cemetery.jpg"
const Hero = () => {
    return (
        <Grid item xs={12} sx={{
            height: "calc(100vh - 55px)",
            background: `url(${background}) center/cover`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }}> 
          <Button variant="contained"> 
            Download
          </Button>
        </Grid>
    )
}

export default Hero;
