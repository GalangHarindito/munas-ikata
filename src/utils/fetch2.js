import { useContext } from 'react';
import axios from 'axios';
import { Context } from '../store';



  const GetdataCandidate = () => {
  const BASIC_URL = 'https://ikata.semoga.online/api/';
  const [state, dispatch] = useContext(Context);

  const options = {
    method: 'GET',
    url: `${BASIC_URL}candidate`,
    headers: {  
      Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YmY1NTY3OS0yZWQ1LTRmYTgtYjFjNS1jNjg4YjBiYmRlMGEiLCJpYXQiOjE2MzI5NzExNTIsImV4cCI6MTYzMzE0Mzk1Mn0.g_e6cg7P_hCT9YiBNmadzlZJaaUKD1NH-cs-MiIs25Y'
    }
  };

  axios(options)
  .then((res) => {
    const { status, data } = res.data;

    dispatch({type:'CANDIDATE', payload:data})

  })
  .catch(err => {
    const { status, message } = err.response.data
    //if(status === 401){
    //  window.location.href = '/login'
    //}
    //const messageStatus = status > 401 && status <= 500 ? 'Sedang ada masalah, silahkan refresh halaman' : message;
  });


}
export default GetdataCandidate

