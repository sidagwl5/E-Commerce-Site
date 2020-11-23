export default (data) => {

        const cartData = JSON.stringify(data);
        window.localStorage.setItem('cart', cartData);
}