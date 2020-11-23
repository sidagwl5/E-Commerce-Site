export default () => {

    const data = localStorage.getItem("cart");
    return JSON.parse(data);

}