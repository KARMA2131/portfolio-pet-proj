import './style.css';
import gitIcon from './gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <>
      <a href={ link } target='_blank' className="btn-outline" rel="noreferrer" >
      <img src={ gitIcon } alt="" /> GitHub repo
      </a>
    </>
   );
}

export default BtnGitHub ;