function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=uft-8');
    // eslint-disable-next-line func-names
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status <= 299 && xhr.status >= 200) {
        resolve(xhr.responseText);
      }
    };

    xhr.onerror = () => {
      reject(xhr);
    };

    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
