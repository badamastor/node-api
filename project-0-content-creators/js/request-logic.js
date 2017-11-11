function getContentType(filename) {
  let extension = filename.match(/.*\.([^\.]*)$/)[1];
//  let fileType = '';
  if (extension === 'html') {
    return 'text/html';
  } else if (extension === 'css') {
    return 'text/css';
  } else if (extension === 'jpeg' || extension === 'jpg') {
    return 'image/jpeg';
  }
  return 'text/plain';
}
