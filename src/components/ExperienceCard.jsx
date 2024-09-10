import {PencilSquare} from 'react-bootstrap-icons';
import '../styles/CardProfile.css';
import {ArrowRight} from  'react-bootstrap-icons';
import {Plus} from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';



const ExperienceCard = ({showButton=true}) => {
     const [addExperience, setaddExperience] = useState()

     const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences";
    
        useEffect(()=> {
            getExperience()
        },[])


     const getExperience = async () => {
        try {
          const response = await fetch(baseEndpoint);
          if (response.ok) {
            const { data } = await response.json();
            setaddExperience(data);
          } else {
            alert("Error fetching results");
          }
        } catch (error) {
          console.log(error);
        }
      };
      console.log('console di getexperience', getExperience)

    function handleClick() {
        return console.log('ciao')
    }

    return (
      <div className="card-profile-wrapper bg-light">
        <div className="card-header">
          <div className="left-section">
            <div className="title">Esperienza</div>
          </div>
          <div className="right-section">
          {showButton !== true ? <button type="button" className="btn btn-outline-primary card-button">Crea un post</button>:<Plus className='plus-button' onClick={()=>handleClick()}/> }  
          <PencilSquare size={25}/>
          </div>
        </div>
        <div className='card-content'>
          <div className='content-title'>Non hai ancora pubblicato nulla</div>
          <div className='content-subtitle'>I post che condividi appariranno qui</div>
        </div>
        {showButton !== true ? <div className='card-footer'>
          <div className='footer-content'>Mostra tutte le attività</div>
          <ArrowRight/>
        </div>:null}
      </div>
    );
  };
  export default ExperienceCard;