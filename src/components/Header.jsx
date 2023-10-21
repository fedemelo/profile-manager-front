import { useIntl, FormattedMessage } from 'react-intl';
import {
    AppBar,
    Toolbar,
    Box
} from '@mui/material';
import SignInButton from './SignInButton';
import '../styles/Header.css';


export default function Header() {
    const intl = useIntl();

    return (
        <Box id="headerContainer">
            <AppBar position="static" sx={{ backgroundColor: "gray" }}>
                <Toolbar >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <h1 id="headerText"><strong><FormattedMessage id="appName" /></strong></h1>
                        <SignInButton text={intl.formatMessage({ id: 'SignIn' })} />
                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    );
}


