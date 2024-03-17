import { createTheme } from '@mui/material';

const theme = createTheme()
const classes = {
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(20, 0, 6),
    },
    icon: {
        marginRight: '20px',
    },
    button: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}

export default classes;
