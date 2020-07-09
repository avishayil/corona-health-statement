import htmlToImage from 'html-to-image';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

const history = createBrowserHistory();

function notifyInfo(text) {
  toast.info(text, {
    autoClose: 10000, hideProgressBar: true, closeOnClick: true, rtl: true, position: 'top-center',
  });
}

function notifySuccess(text) {
  toast.success(text, {
    autoClose: 10000, hideProgressBar: true, closeOnClick: true, rtl: true, position: 'top-center',
  });
}

function notifyError(text) {
  toast.error(text, {
    autoClose: 10000, hideProgressBar: true, closeOnClick: true, rtl: true, position: 'top-center',
  });
}

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
      notifyError('משהו השתבש, אנא נסו שנית לשמור את התמונה');
      console.log('oops, something went wrong!', error); // eslint-disable-line no-console
    });
}

function createLink(params) {
  const isEmpty = !Object.values(params).every((x) => (x !== undefined && x !== '' && x !== 'undefined'));
  if (!isEmpty) {
    const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
    history.push({ search: `?${queryString}` });
    navigator.clipboard.writeText(window.location.href);
    notifyInfo('הקישור הועתק ללוח, מומלץ להוסיף את הקישור למועדפים או לשתף אותו עם מי שצריך לשימוש חוזר');
  } else {
    notifyError('אחד מהפרטים ריק. ניתן ליצור קישור לשימוש חוזר רק כאשר כל פרטי הטופס, פרט לתאריך ולחתימה, מלאים');
  }
}

export default {
  handleSave,
  createLink,
  notifyInfo,
  notifySuccess,
  notifyError,
};
