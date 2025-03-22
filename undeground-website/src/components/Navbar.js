import { Box, Grid, Typography } from "@mui/material"
const Navbar = () => {
    return (
        <Grid item xs={12} sx={{
            height: "55px",
            background: "#7BA098",
            display: "flex",
            justifyContent: "space-between",

        }}> 
            <Box>
                <Typography>
                    Logo 
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Home
                </Typography>
            </Box>
        </Grid>
    )
}

export default Navbar;
