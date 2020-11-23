export default props => {

    const data = localStorage.getItem('userData');
    return JSON.parse(data);
}