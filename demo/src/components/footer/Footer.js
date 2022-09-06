import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './footer.css'

export default function Header() {
    return (
        <div className='footer'>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            this is footer

                            Copyright © HAIMOUR website 2022.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
}


