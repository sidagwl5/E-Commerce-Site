export default (data) => {
  const userData = JSON.stringify(data);
  window.localStorage.setItem('userData', userData);
};
