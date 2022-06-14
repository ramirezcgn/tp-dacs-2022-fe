export const downloadFile = (response: any) => {
  const link = document.createElement('a');
  let filename = 'file.xls';
  if (response.headers['content-disposition']) {
    const match =
      response.headers['content-disposition'].match(/filename="(.*)"/);
    if (match && match[1]) {
      // eslint-disable-next-line prefer-destructuring
      filename = match[1];
    }
  }
  link.href = window.URL.createObjectURL(new Blob([response.data]));
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
};
