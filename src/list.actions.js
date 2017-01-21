import axios from 'axios';
import { FETCH_CATS, VOTE_CAT } from './list.reducer';

const API_URL = 'http://192.168.1.130:3000';

export const onVoteCat = cat => (dispatch) => {
  axios
    .post(`${API_URL}/cats/${cat.id}/votes`)
    .then(({ data }) => {
      dispatch({
        type: VOTE_CAT,
        cat: data
      });
    });
  dispatch({
    type: VOTE_CAT,
    cat: {
      ...cat,
      votes: cat.votes + 1
    }
  });
};

export const fetchCats = () => (dispatch) => {
  axios
    .get(`${API_URL}/cats`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_CATS,
        cats: data
      });
    });
};

export default {
  onVoteCat
};
