import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, TextField, Dialog, Button, styled } from '@mui/material';
import { Menu, LocationOn } from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: rgb(255, 255, 255);
    height: 70px;
`;

const LocationBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
    color: #000000;
    cursor: pointer;
    line-height: 1.2;
    align-items: flex-start;
`;

const LocationUpdateBox = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const Component = styled(Link)`
    margin-left: 10px;
    line-height: 0;
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 auto 0%',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginLeft: 20,
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const Logo = styled('img')({
    width: 100,
});

const Header = () => {
    const logo = '/MitKart.png';

    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState('Mumbai 400001');
    const [openDialog, setOpenDialog] = useState(false);
    const [newLocation, setNewLocation] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

    const updateLocation = () => {
        if (newLocation.trim()) setLocation(newLocation);
        handleDialogClose();
    };

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <Component to="/">
                    <Logo src={logo} alt="logo" />
                </Component>

                <LocationBox onClick={handleDialogOpen}>
                    <Typography style={{ fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        Delivering to Mumbai 400001
                    </Typography>
                    <LocationUpdateBox>
                        <LocationOn style={{ marginRight: 4, color: '#000000' }} />
                        <Typography style={{ fontSize: '16px', fontWeight: 700, color: '#000000' }}>
                            Update location
                        </Typography>
                    </LocationUpdateBox>
                </LocationBox>

                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu style={{ color: '#000000' }} />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Search />

                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>

            <Dialog open={openDialog} onClose={handleDialogClose}>
                <Box style={{ padding: 20, width: 300 }}>
                    <Typography variant="h6" style={{ marginBottom: 10, color: '#000000' }}>
                        Update Location
                    </Typography>
                    <TextField
                        fullWidth
                        label="Enter new location"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                    />
                    <Box style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            onClick={updateLocation}
                            style={{ backgroundColor: '#fc6f03', color: '#FFFFFF' }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </StyledHeader>
    );
};

export default Header;
