import './style.css';

import instagram from './icons/instagram.svg';
import linkedIn from './icons/linkedIn.svg';
import telegram from './icons/telegram.png';
import gitHub from './icons/gitHub.svg';


export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={telegram} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                </div>
            </div>
        </div>
    </footer>
  )
}
