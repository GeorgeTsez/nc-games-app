import { useEffect, useState } from "react";
import { getSingleReview } from "../api";
import { useParams, useNavigate } from "react-router-dom";

function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
    });
  }, [review_id]);
  console.log(singleReview);
  return (
    <div>
     <p className="game-title">{singleReview.title}</p>
     <p className="game-designer">{singleReview.designer}</p>
     <p>votes:{singleReview.votes}</p>
     <img src ={singleReview.review_img_url} alt="people-gaming"></img>
     <button className="button" onClick={(()=>{navigate(`/reviews/${review_id}/comments`)})}>Get to the comments</button>
     <p className="game-date">{singleReview.created_at}</p>
     <p>{singleReview.owner}</p>
     <p>{singleReview.review_body}</p>
    </div>
  );
}
export default SingleReview;

// be a ble to click on article card to link on article useNavigate()
// return the single review
