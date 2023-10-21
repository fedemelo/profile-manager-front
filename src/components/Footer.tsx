import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'

export default function Footer() {
    return <Container>
        <p id="footer" className="text-center"><FormattedMessage id="contactUs" />: <FormattedMessage id="email" /> - <FormattedMessage id="phoneNum" /></p>
    </Container>
}