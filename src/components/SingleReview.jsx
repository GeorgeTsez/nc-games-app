import { useEffect, useState } from "react";
import { getSingleReview, patchVotes } from "../api";
import { useParams, useNavigate } from "react-router-dom";

function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const navigate = useNavigate();
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState(0);
// increase Votes by click
  const increaseVotes = () => {
    setVoted(true);
    setVotes((votes) => {
      return votes + 1;
    });
    patchVotes(review_id, 1).catch((error) => {
      setVotes((votes) => {
        return votes - 1;
      });
    });
  };
  // Decrease Votes by click
  const decreaseVotes = () => {
    setVoted(true);
    setVotes((votes) => {
      return votes - 1;
    });
    patchVotes(review_id, -1).catch((error) => {
      setVotes((votes) => {
        return votes + 1;
      });
    });
  };
  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
    });
  }, [review_id]);

  return (
    <div>

      <p className="game-title">{singleReview.title}</p>
      <p className="game-designer">{singleReview.designer}</p>
      <p>votes:{singleReview.votes + votes}</p>
      <button className="button" onClick={increaseVotes} disabled={voted}>
        Upvote
      </button>
      <button className="button" onClick={decreaseVotes} disabled={voted}>
        Downvote
      </button>
      <img src={singleReview.review_img_url} alt="people-gaming"></img>
      <button
        className="button"
        onClick={() => {
          navigate(`/reviews/${review_id}/comments`);
        }}
      >
        Get to the comments
      </button>
      <p className="game-date">{singleReview.created_at}</p>
      <p>{singleReview.owner}</p>
      <p>{singleReview.review_body}</p>

     
    </div>
  );
}
export default SingleReview;

// be a ble to click on article card to link on article useNavigate()
// return the single review
