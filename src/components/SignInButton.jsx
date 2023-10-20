import { Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';


export default function SignInButton({ text }) {

    return (
        <Nav.Link href='/signin'>
            <Button variant="contained">
                {text}
            </Button>
        </Nav.Link>
    )
}