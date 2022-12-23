import './style.css';
import vercel from './vercel.svg';

const VercelBtn = ({ link }) => {
  return (
    <>
      <a href={ link } target='_blank' className="btn-outline vercelBtn" rel="noreferrer" >
        <img className='verselImg' src={ vercel } alt="" /> Versel preview
      </a>
    </>
   );
}

export default VercelBtn ;