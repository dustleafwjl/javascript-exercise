function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求

  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=uft-8');
  // eslint-disable-next-line func-names
  xhr.onReadyStateChange = function() {
    if (xhr.readyState === 4 && xhr.status <= 299 && xhr >= 200) {
      successCallback(xhr);
    } else {
      errorCallback(xhr);
    }
  };
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
