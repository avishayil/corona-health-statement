import htmlToImage from 'html-to-image';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

const history = createBrowserHistory();

function handleSave() {
  const node = document.getElementById('toSave');
  htmlToImage.toPng(node)
    .then((dataUrl) => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'Statement.png';
      a.click();
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error); // eslint-disable-line no-console
    });
}

function notify(text) {
  toast.info(text, {
    autoClose: false, hideProgressBar: true, closeOnClick: true, rtl: true, position: 'top-center',
  });
}

function createLink(params) {
  const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
  history.push({ search: `?${queryString}` });
  navigator.clipboard.writeText(window.location.href);
  notify('הקישור הועתק ללוח, מומלץ להוסיף את הקישור למועדפים או לשתף אותו עם מי שצריך לשימוש חוזר');
}

export default {
  handleSave,
  createLink,
  notify,
};
