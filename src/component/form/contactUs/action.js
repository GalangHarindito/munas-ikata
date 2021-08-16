import { sentEmail } from "../../../utils/fetch";
import { toast } from 'react-toastify';

toast.configure();
export function fetchSentEmail(data) {
    const notify = () => toast.success("Pesan berhasil dikirim!", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
    sentEmail(data).then((res) => {
      notify()
    }).catch(error => {
      const message = error.message ? 'Ups, Sepertinya ada masalah. Silahkan coba lagi' : '';
      console.log(error)
    });

  
}
