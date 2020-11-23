export default (data) => {

    const shippingAddress = JSON.stringify(data);
    localStorage.setItem('shippingAddress', shippingAddress);
}