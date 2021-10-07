import axios from 'axios';

export function getData() {
  
  return dispatch => {


      const options = {
        method: 'DELETE',
        url: `${BASIC_URL}candidate/${id}`,
        headers: {  
          Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YmY1NTY3OS0yZWQ1LTRmYTgtYjFjNS1jNjg4YjBiYmRlMGEiLCJpYXQiOjE2MzI5NzExNTIsImV4cCI6MTYzMzE0Mzk1Mn0.g_e6cg7P_hCT9YiBNmadzlZJaaUKD1NH-cs-MiIs25Y'
        }
      };
  
      axios(options)
      .then((res) => {
        const { status } = res.data;

      })
      .catch(err => {
        const { status, message } = err.response.data
        //if(status === 401){
        //  window.location.href = '/login'
        //}
        //const messageStatus = status > 401 && status <= 500 ? 'Sedang ada masalah, silahkan refresh halaman' : message;
      });

}
}
