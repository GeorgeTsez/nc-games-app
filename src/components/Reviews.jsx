import { useEffect, useState } from "react";
import { getAllReviews } from "../api";
import { useNavigate } from "react-router-dom";
function Reviews() {
  const navigate = useNavigate()
    const [reviews,setReviews] = useState([])
  useEffect(() => {
    getAllReviews().then((reviews) => {
        setReviews(reviews)
    });
  }, []);
  return reviews.map((review)=>{
    return <div key={review.review_id}>
      <p className="game-title"> {review.title} </p>
      <button className="button" onClick={(()=>{navigate(`/reviews/${review.review_id}`)})}>Read about the game</button>
      <p className="game-designer">{review.designer}</p>
       <img src = {review.review_img_url} className = "game-img" alt="people-gaming"></img>
       <p className="game-date"> {review.created_at}</p>
    </div>

  })
}
export default Reviews;
