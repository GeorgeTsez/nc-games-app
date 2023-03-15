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
