import { PencilSquare } from "react-bootstrap-icons";
import "../styles/CardProfile.css";
import { ArrowRight } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ExperienceCard = ({ showButton = true }) => {
  const location = useLocation();
 

  const [addExperience, setaddExperience] = useState([]);
  const [id, setId] = useState('66deab4f4d0def0015cef0f9');

  useEffect(() => {
      setId(location.pathname.split('/').pop());
  }, [location]);

  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

  useEffect(() => {
    getExperience(id);
  }, [id]);

  const getExperience = async (id) => {
    try {
      const response = await fetch(baseEndpoint + id + "/experiences", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setaddExperience(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick() {
    return console.log("ciao");
  }

  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Esperienza</div>
        </div>
        <div className="right-section">
          {showButton !== true ? (
            <button
              type="button"
              className="btn btn-outline-primary card-button"
            >
              Crea un post
            </button>
          ) : (
            <Plus className="plus-button" onClick={() => handleClick()} />
          )}
          <PencilSquare size={25} />
        </div>
      </div>
      <div className="card-content">
        {addExperience?.description && addExperience.map((element) => {
          <div key={element._id}>
            <h2>{element.description}</h2>
          </div>

        })}
      </div>
      {showButton !== true ? (
        <div className="card-footer">
          <div className="footer-content">Mostra tutte le attività</div>
          <ArrowRight />
        </div>
      ) : null}
    </div>
  );
};
export default ExperienceCard;
