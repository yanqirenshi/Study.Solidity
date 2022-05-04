import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Home () {
    const sx_root = {
	width:'100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
        flexDirection: 'column',
    };

    const sx_box = { 
	p: 2,
	bgcolor: 'none',
	display: 'grid',
	gridTemplateColumns: { md: '1fr 1fr' },
	gap: 2,
	width: 500,
    };

    return (
	<div style={sx_root}>
	    <div>
		<p>study</p>
		<Typography variant="h1" component="div" gutterBottom>
		    Solidity
		</Typography>
	    </div>

	    <Box sx={sx_box}>
		{links.map((d,i)=> (
		    <Link to={d.href}>
			<Item elevation={2}>
			    {d.label}
			</Item>
		    </Link>
		))}
	    </Box>
	</div>
    );
}

const links = [
    { label: 'Ethereum',	        href: '/ethereum' },
    { label: 'Environment of Develop',	href: '/environment' },
    { label: 'Value Types',		href: '/types' },
    { label: 'Contract',	        href: '/contract' },
    { label: 'Function',		href: '/function' },
    { label: 'Dictionary',		href: '/dictionary' },
];
