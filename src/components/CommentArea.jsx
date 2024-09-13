import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const CommentArea = ({ commenti }) => {
    const arrayAllProfiles2 = useSelector(
        (state) => state.arrayAllProfiles.arrayAllProfiles
      );


  return (
    <div className="d-flex justify-content-between mb-2">
        {arrayAllProfiles2.map((element) => {
            if(element.email === commenti.author){
                return <Image src={element.image}></Image>
            }
        })}
      <h6>{commenti.comment}</h6>
      <h6>Rate: {commenti.rate}</h6>
    </div>
  );
};

export default CommentArea;
