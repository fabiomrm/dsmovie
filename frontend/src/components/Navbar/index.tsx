import {ReactComponent as GithubIcon} from 'assets/images/github.svg';
import './styles.css';

export const Navbar = () => {
    return (
        <header >
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/fabiomrm">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/fabiomrm</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}