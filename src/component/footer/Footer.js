import './style.css';

import linkedIn from './icons/linkedIn.svg';
import telegram from './icons/telegram.png';
import gitHub from './icons/gitHub.svg';


export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.linkedin.com/in/oleg-karmazin-a83853241"><img src={linkedIn} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/KARMA2131"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://telegram.me/okarmazin"><img src={telegram} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                </div>
            </div>
        </div>
    </footer>
  )
}
