import { useEffect, useState } from "react";
import { getAllReviews } from "../api";

function Reviews() {
    const [reviews,setReviews] = useState([])
  useEffect(() => {
    getAllReviews().then((reviews) => {
        setReviews(reviews)
    });
  }, []);
  return reviews.map((review)=>{
    return <div key={review.review_id}>
      <p className="game-title"> {review.title} </p>
       <img src = {review.review_img_url} className = "game-img"></img>
    </div>

  })
}
export default Reviews;
