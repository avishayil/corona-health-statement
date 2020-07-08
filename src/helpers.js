import htmlToImage from 'html-to-image';

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

export default {
  handleSave,
};
