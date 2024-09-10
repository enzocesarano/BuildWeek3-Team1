import {PencilSquare} from 'react-bootstrap-icons';
import '../styles/CardProfile.css';
import {ArrowRight} from  'react-bootstrap-icons';
import {Plus} from 'react-bootstrap-icons';


const ActivityProfile = ({showButton=true}) => {


  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Attività</div>
          <div className="caption text-primary">0 follower</div>
        </div>
        <div className="right-section">
        {showButton === true ? <button type="button" className="btn btn-outline-primary card-button">Crea un post</button>:<Plus/> }  
        <PencilSquare size={25}/>
        </div>
      </div>
      <div className='card-content'>
        <div className='content-title'>Non hai ancora pubblicato nulla</div>
        <div className='content-subtitle'>I post che condividi appariranno qui</div>
      </div>
      {showButton === true ? <div className='card-footer'>
        <div className='footer-content'>Mostra tutte le attività</div>
        <ArrowRight/>
      </div>:null}
    </div>
  );
};
export default ActivityProfile;


