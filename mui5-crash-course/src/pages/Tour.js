import { Box, Container, Typography } from "@mui/material";
import CustomizedAccordions from "../component/Accordian";
import Imagecollage from "../component/Imagecollage";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import BasicModal from "../component/Modal";

const Tour = () => {
    return (
        <Container sx={{ width: 900, marginBottom: 20 }} >
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the world in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img height={325} src='https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80' alt='' />
                <Imagecollage></Imagecollage>
            </Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae illo fugiat nam non debitis, sunt minima numquam possimus vel ipsa, consequuntur consequatur tenetur corrupti? Animi atque ipsa mollitia voluptates, ipsam voluptatum fuga, natus alias fugit minus, sint aliquam nihil.
            </Typography>
            <Typography variant='h6' component='h4' marginTop={3} marginBottom={5}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>

        </Container>
    )
}

export default Tour;