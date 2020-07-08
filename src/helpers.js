import htmlToImage from 'html-to-image';
import { createBrowserHistory } from 'history';

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

function createLink(params) {
  const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
  history.push({ search: `?${queryString}` });
}

export default {
  handleSave,
  createLink,
};
