import { useIntl, FormattedMessage } from 'react-intl';
import { AppBar, Toolbar, Box } from '@mui/material';
import SignInButton from './SignInButton';
import '../styles/Header.css';


export default function Header() {
    const intl = useIntl();

    return (
        <Box id="headerContainer">
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar >
                    <h1 id="headerText"><strong><FormattedMessage id="appName" /></strong></h1>
                    <SignInButton text={intl.formatMessage({ id: 'SignIn' })} />
                </Toolbar>
            </AppBar>
        </Box >
    );
}


