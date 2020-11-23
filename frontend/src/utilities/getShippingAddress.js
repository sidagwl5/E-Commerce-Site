export default () => {

    const shippingAddress = localStorage.getItem('shippingAddress');
    return JSON.parse(shippingAddress);
}