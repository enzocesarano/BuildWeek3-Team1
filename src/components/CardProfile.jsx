import {PencilSquare} from 'react-bootstrap-icons';
import '../styles/CardProfile.css';
import {ArrowRight} from  'react-bootstrap-icons';


const CardProfile = () => {
  return (
    <div className="card-profile-wrapper">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Attività</div>
          <div className="caption text-primary">0 follower</div>
        </div>
        <div className="right-section">
        <button type="button" class="btn btn-outline-primary card-button">Crea un post</button>
        <PencilSquare size={25}/>
        </div>
      </div>
      <div className='card-content'>
        <div className='content-title'>Non hai ancora pubblicato nulla</div>
        <div className='content-subtitle'>I post che condividi appariranno qui</div>
      </div>
      <div className='card-footer'>
        <div className='footer-content'>Mostra tutte le attività</div>
        <ArrowRight/>
      </div>
    </div>
  );
};
export default CardProfile;
