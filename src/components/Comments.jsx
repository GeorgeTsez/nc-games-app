import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams, useNavigate } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();
  useEffect(() => {
    getComments(review_id).then((comments) => {
      setComments(comments);
      console.log(comments)
    });
  }, []);
  return comments.map((comment)=>{
    return <div key={comment.comment_id}>
        <p>People Also said:</p>
    <p className="comment">{comment.body}</p>
    </div>
  })
   
  
}

export default Comments;
