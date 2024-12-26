import React, { useState } from 'react';

import { Box, Typography, Badge, Menu, MenuItem, styled } from '@mui/material';
import { ShoppingCart, Person, Store, Language } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import LoginDialog from '../Login/LoginDialog';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    marginLeft: 'auto', // Ensures alignment to the right without affecting search bar
    '& > *': {
        marginLeft: 20,
        textDecoration: 'none',
        color: '#000000',
        fontSize: '16px', // Ensures consistent font size across all items
        display: 'flex',
        alignItems: 'center',
    },
    '& > *:last-child': {
        marginRight: 10, // Minimal right margin for "Change Language"
    },
}));

const LoginButton = styled(Box)(({ theme }) => ({
    color: '#000000',
    textTransform: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px', // Matches font size with other buttons
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: '#1976d2',
        color: '#ffffff',
    },
}));

const LanguageButton = styled(Box)(({ theme }) => ({
    color: '#000000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    padding: '5px 10px',
    borderRadius: '4px',
    width: '100px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: '#1976d2',
        color: '#ffffff',
    },
}));

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const openDialog = () => {
        setOpen(true);
    };

    const handleLanguageClick = (event) => {
        setLanguageMenuAnchor(event.currentTarget);
    };

    const handleLanguageClose = () => {
        setLanguageMenuAnchor(null);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        handleLanguageClose();
    };

    return (
        <Wrapper>
            <LoginButton onClick={openDialog}>
                <Person style={{ marginRight: 8, fontSize: '20px' }} /> Login
            </LoginButton>

            <Link to="/cart">
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart style={{ color: '#000000', fontSize: '20px' }} />
                </Badge>
                <Typography style={{ marginLeft: 10, color: '#000000', fontSize: '16px' }}>Cart</Typography>
            </Link>

            <Link to="/BecomeASellerHome">
                <Typography style={{ color: '#000000', whiteSpace: 'nowrap', fontSize: '16px' }}>
                    <Store style={{ marginRight: 8, fontSize: '20px' }} /> Become a Seller
                </Typography>
            </Link>

            <LanguageButton onClick={handleLanguageClick}>
                <Language style={{ marginRight: 8, fontSize: '20px' }} /> {selectedLanguage}
            </LanguageButton>

            <Menu
                anchorEl={languageMenuAnchor}
                open={Boolean(languageMenuAnchor)}
                onClose={handleLanguageClose}
            >
                {['English', 'Hindi', 'Spanish', 'French', 'German'].map((language) => (
                    <MenuItem key={language} onClick={() => changeLanguage(language)}>
                        {language}
                    </MenuItem>
                ))}
            </Menu>

            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    );
};

export default CustomButtons;
