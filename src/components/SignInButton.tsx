import { Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';

interface SignInButtonProps {
    text: string;
}

export default function SignInButton({ text }: SignInButtonProps) {
    return (
        <Nav.Link href='/signin'>
            <Button variant="contained">
                {text}
            </Button>
        </Nav.Link>
    )
}