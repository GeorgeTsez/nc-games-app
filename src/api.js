import axios from "axios"

export const getAllReviews = () => {
   return axios.get('https://nc-games-app.onrender.com/api/reviews')
  .then(function (response) {
    return response.data.reviews
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
export const getSingleReview = (review_id) => {
  return axios.get(`https://nc-games-app.onrender.com/api/reviews/${review_id}`) 
  .then(function ({data}) { 
    return data.review
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}
export const getComments = (review_id) => {
  return axios.get(`https://nc-games-app.onrender.com/api/reviews/${review_id}/comments`) 
  .then(function (response) { 
    console.log(response.data.comments)
    return response.data.comments
  })
  .catch(function (error) {
    console.log(error);
  })

}
