import { Grid } from "@mui/material"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
const Homepage = () => {
    return (
        <Grid container>
             <Navbar />
             <Hero />
             <OurMission />
        </Grid>
    )
}

export default Homepage;
