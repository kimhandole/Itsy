import React from 'react';
import { withRouter } from 'react-router-dom';


class ShopShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    componentDidMount() {
        this.props.fetchShop(this.props.shop.id);
    }

    handleAddProduct() {
        this.props.history.push(`${this.props.shopId}/products/new`);
    }

    shopInfo() {
        return (
            <div className="shop-show-info">
                <div className="shop-show-img">
                    <img srcSet="https://www.etsy.com/images/avatars/default_shop_icon_500x500.png 500w,
                             https://www.etsy.com/images/avatars/default_shop_icon_280x280.png 280w,
                             https://www.etsy.com/images/avatars/default_shop_icon_180x180.png 180w,
                             https://www.etsy.com/images/avatars/default_shop_icon_75x75.png 75w" 
                             src="https://www.etsy.com/images/avatars/default_shop_icon_180x180.png" 
                             sizes="(min-width: 900px) 18vw, 30vw" 
                             alt="">
                    </img>
                </div>
                <div className="shop-show-title-buttons">
                    <div className="shop-show-title">
                        {this.props.shop.title}
                    </div>
                    <div className="shop-show-buttons">
                        <button className="shop-show-add-product" onClick={this.handleAddProduct}>Add product</button>
                    </div>
                </div>
            </div>
        );
    }

    ownerInfo() {
        return (
            <div className="shop-show-owner-info">
                <span>SHOP OWNER</span>
                <div className="shop-show-owner-icon-firstname">
                    <img id="shop-show-owner-img" src="https://www.etsy.com/images/avatars/default_avatar_75x75.png" alt=""></img>
                    <span id="shop-show-owner-firstname">{this.props.entities.users[this.props.currentUser].first_name}</span>
                </div>
            </div>
        );
    }

    shopAndOwnerInfo() {
        return (
            <div className="shop-show-and-owner-info">
                {this.shopInfo()}
                {this.ownerInfo()}
            </div>
        );
    }

    shopProducts() {
        return (
            <div className="shop-show-products-container">
                <p>Products</p>
                <div className="shop-show-products">

                </div>
            </div>
        );
    }

    shopPolicesIcons() {
        return (
            <div className="shop-show-policies-icons-container">
                <div className="shop-show-policies-icons">
                    <span aria-label="Paypal">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" aria-hidden="true" focusable="false">
                            <g fill="none" fillRule="evenodd">
                                <path d="M22.544 26.548c-.14.93-.844.93-1.524.93h-.387l.272-1.738c.016-.105.106-.183.21-.183h.178c.463 0 .9 0 1.126.266.133.16.174.396.123.723zm-.296-2.43h-2.565c-.175 0-.325.13-.352.305l-1.035 6.648c-.02.13.08.25.21.25h1.317c.124 0 .228-.09.247-.212l.293-1.885c.03-.175.178-.304.353-.304h.812c1.69 0 2.664-.827 2.92-2.465.114-.716.003-1.28-.328-1.673-.368-.434-1.015-.664-1.873-.664z" fill="#238EC2"></path>
                                <path d="M4.252 26.548c-.14.93-.843.93-1.523.93h-.39l.27-1.738c.018-.105.107-.183.213-.183H3c.463 0 .9 0 1.126.266.134.16.175.396.124.723zm-.296-2.43H1.392c-.176 0-.325.13-.352.305L.003 31.07c-.02.13.08.25.21.25H1.44c.176 0 .325-.13.352-.304l.28-1.793c.027-.175.177-.304.352-.304h.812c1.69 0 2.664-.827 2.92-2.465.113-.716.003-1.28-.33-1.673-.364-.434-1.01-.664-1.87-.664z" fill="#253667"></path>
                                <path d="M9.91 28.933c-.12.71-.676 1.185-1.386 1.185-.356 0-.64-.115-.825-.335-.183-.217-.25-.527-.194-.872.11-.7.676-1.192 1.376-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.71-2.417h-1.227c-.105 0-.194.078-.21.183l-.055.345-.086-.126c-.266-.39-.858-.52-1.45-.52-1.357 0-2.516 1.04-2.74 2.496-.12.727.048 1.422.456 1.907.375.446.91.63 1.546.63 1.094 0 1.7-.71 1.7-.71l-.054.346c-.02.13.08.25.21.25h1.107c.175 0 .324-.13.352-.305l.662-4.25c.02-.13-.08-.25-.212-.25z" fill="#253667"></path>
                                <path d="M28.2 28.933c-.117.71-.674 1.185-1.385 1.185-.356 0-.64-.115-.824-.335-.18-.217-.25-.527-.19-.872.11-.7.676-1.192 1.375-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.713-2.417h-1.228c-.105 0-.195.078-.21.183l-.055.345-.086-.126c-.266-.39-.86-.52-1.45-.52-1.357 0-2.516 1.04-2.742 2.496-.117.727.05 1.422.457 1.907.373.446.91.63 1.545.63 1.093 0 1.7-.71 1.7-.71l-.055.346c-.02.13.08.25.212.25h1.106c.175 0 .325-.13.352-.305l.664-4.25c.02-.13-.08-.25-.21-.25z" fill="#238EC2"></path>
                                <path d="M18.162 26.518h-1.234c-.118 0-.23.058-.295.157L14.93 29.21l-.72-2.436c-.046-.153-.185-.257-.343-.257h-1.213c-.147 0-.25.145-.202.285l1.36 4.033-1.282 1.823c-.1.144 0 .342.175.342h1.235c.117 0 .226-.058.293-.155l4.105-5.99c.098-.142-.003-.338-.176-.338" fill="#253667"></path>
                                <path d="M31.36 24.3l-1.052 6.77c-.02.13.08.25.21.25h1.06c.175 0 .324-.13.35-.304l1.042-6.648c.02-.13-.08-.25-.212-.25H31.57c-.104 0-.193.078-.21.183" fill="#238EC2"></path>
                                <path d="M15.008 5.497c.044-.28.22-.51.46-.625.11-.053.23-.082.358-.082h5.184c.614 0 1.186.04 1.71.126.15.024.295.052.437.084.14.032.278.067.41.107l.197.06c.257.088.497.19.717.307.26-1.673 0-2.812-.895-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084L15.01 5.497" fill="#253667"></path>
                                <path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l-.28 1.806c-.048.305.184.58.49.58h3.44c.408 0 .755-.3.82-.706l.032-.177.65-4.156.04-.227c.064-.407.41-.707.818-.707h.515c3.334 0 5.944-1.37 6.707-5.33.32-1.654.154-3.035-.69-4.006-.254-.295-.57-.538-.94-.736" fill="#238EC2"></path>
                                <path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l1.026-6.575-.03.204c.07-.465.464-.807.93-.807h1.94c3.81 0 6.795-1.565 7.667-6.092.026-.134.048-.264.068-.392" fill="#20274F"></path>
                            </g>
                        </svg>
                    </span>
                    <span aria-label="Mastercard">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.39 86.9" width="100%" height="100%" aria-hidden="true" focusable="false">
                            <title>Mastercard</title>
                            <g className="a">
                                <rect className="b" width="131.39" height="86.9"></rect>
                            </g>
                            <rect className="c" x="48.37" y="15.14" width="34.66" height="56.61"></rect>
                            <path className="d" d="M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z"></path>
                            <path className="e" d="M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z"></path>
                            <path className="e" d="M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z"></path>
                        </svg>
                    </span>

                    <span aria-label="Visa">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 54 18" version="1.1" aria-hidden="true" focusable="false">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <path d="M20.4888889,0.322218392 L13.4222222,17.7675946 L8.8,17.7675946 L5.33333333,3.82049964 C5.11111111,2.94592933 4.93333333,2.66974923 4.31111111,2.3015091 C2.94183443,1.61896514 1.49263492,1.1238228 0,0.828548573 L0.0888888889,0.322218392 L7.51111111,0.322218392 C8.51437428,0.32690813 9.36403311,1.08954942 9.51111111,2.11738903 L11.3333333,12.1979626 L15.8666667,0.322218392 L20.4888889,0.322218392 Z M38.5777778,12.0598726 C38.5777778,7.45687094 32.4444444,7.18069084 32.4888889,5.15537012 C32.4888889,4.51094989 33.0666667,3.86652966 34.3555556,3.68240959 C35.8342967,3.5394088 37.3230136,3.80962598 38.6666667,4.46491987 L39.4222222,0.782518556 C38.1172974,0.263564533 36.7311549,-0.00170820448 35.3333333,8.27692349e-06 C31.0222222,8.27692349e-06 28,2.39356913 27.9555556,5.75376033 C27.9111111,8.28541123 30.1333333,9.66631173 31.7777778,10.494852 C33.4222222,11.3233923 34.0444444,11.9217825 34.0444444,12.6582628 C34.0444444,13.8090132 32.6666667,14.3613734 31.4222222,14.3613734 C29.8583806,14.4061465 28.3105619,14.0252266 26.9333333,13.256653 L26.1333333,17.0771444 C27.6723314,17.7168939 29.3197317,18.029953 30.9777778,17.9977447 C35.5555556,18.0437747 38.5333333,15.6962439 38.5777778,12.0598726 L38.5777778,12.0598726 Z M49.9555556,17.7675946 L54,17.7675946 L50.4888889,0.322218392 L46.7555556,0.322218392 C45.9362429,0.312052784 45.1949487,0.823879561 44.8888889,1.61105885 L38.3111111,17.7675946 L42.8888889,17.7675946 L43.7777778,15.1438837 L49.3777778,15.1438837 L49.9555556,17.7675946 Z M45.0666667,11.5995724 L47.3777778,5.06331008 L48.7111111,11.5995724 L45.0666667,11.5995724 Z M26.7111111,0.322218392 L23.1111111,17.7675946 L18.7555556,17.7675946 L22.3555556,0.322218392 L26.7111111,0.322218392 Z" fill="#1A1F71" fillRule="nonzero"></path>
                            </g>
                        </svg>
                    </span>

                    <span aria-label="American Express">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 15 70 40" aria-hidden="true" focusable="false">
                            <g fill="#006FCF">
                                <path d="M55.6,40.3v-3.4h1.1V13.6H14V30l1.1-1.4v5.6H14v22h42.7V43.9c-0.1,0-1,0.1-1.1,0.1v-1.8V40.3L55.6,40.3z"></path>
                                <path fill="#FFFFFF" d="M56.7,43.9v-7h-0.4H30.2l-0.7,1l-0.7-1h-7.6v7.5h7.6l0.7-1l0.7,1H35v-1.6h-0.1c0.6,0,1.1-0.1,1.6-0.3v1.9h3.3     v-1.1l0.8,1.1H55c0.4,0,0.8-0.1,1.1-0.2C56.4,44.1,56.6,44,56.7,43.9L56.7,43.9z M51.5,34.3h3.2v-7.5h-3.4v1.2l-0.8-1.2h-3v1.5     l-0.7-1.5h-4.9c-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.2-0.4,0.2v-0.3v-0.3H23.8     l-0.4,1.3l-0.4-1.3h-3.7v1.5l-0.7-1.5h-3.1L14,30.1v3.6v0.7h2.2l0.4-1.1h0.8l0.4,1.1h16.6v-1.1l0.8,1.1h4.6v-0.2v-0.3     c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5,0.1,0.8,0.1h2.8l0.4-1.1h0.8l0.4,1.1h4.6     v-1.1L51.5,34.3L51.5,34.3z"></path>
                                <path d="M26.5,39.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H26.5L26.5,39.1z M30.7,43.1h1.5l-2-2.5l2-2.5h-1.5l-1.2,1.6     l-1.2-1.6h-1.5l2,2.5l-2,2.5h1.5l1.2-1.6L30.7,43.1L30.7,43.1z M32.4,38.1v5h1.2v-1.7h1.5c1.1,0,1.8-0.7,1.8-1.7     c0-1-0.7-1.7-1.7-1.7H32.4L32.4,38.1z M35.7,39.8c0,0.3-0.2,0.6-0.6,0.6h-1.4v-1.2h1.4C35.5,39.2,35.7,39.4,35.7,39.8L35.7,39.8z      M38.8,41.3h0.6l1.5,1.8h1.5l-1.7-1.9c0.9-0.2,1.4-0.8,1.4-1.6c0-0.9-0.7-1.6-1.7-1.6h-2.7v5h1.2V41.3L38.8,41.3z M40.2,39.1     c0.4,0,0.7,0.3,0.7,0.6c0,0.3-0.2,0.6-0.7,0.6h-1.4v-1.2H40.2L40.2,39.1z M47,39.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H47L47,39.1     z M50.3,42.1h-2.6v1h2.5c1.1,0,1.7-0.7,1.7-1.6c0-0.9-0.6-1.4-1.6-1.4h-1.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.2     l0.4-1h-2.6c-1.1,0-1.7,0.7-1.7,1.6c0,0.9,0.6,1.5,1.6,1.5h1.2c0.3,0,0.5,0.2,0.5,0.5C50.8,41.9,50.6,42.1,50.3,42.1L50.3,42.1z      M55.1,42.1h-2.6v1H55c1.1,0,1.7-0.7,1.7-1.6c0-0.9-0.6-1.4-1.6-1.4H54c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.2l0.4-1     h-2.6c-1.1,0-1.7,0.7-1.7,1.6c0,0.9,0.6,1.5,1.6,1.5h1.2c0.3,0,0.5,0.2,0.5,0.5C55.6,41.9,55.3,42.1,55.1,42.1L55.1,42.1z"></path>
                                <path d="M18.6,33.1h1.4l-2.1-5h-1.6l-2.2,5h1.3l0.4-1.1h2.4L18.6,33.1L18.6,33.1z M16.6,30L17,29l0.4,0.9l0.4,1.1h-1.6     L16.6,30L16.6,30z M21.4,29.7l0-1.4l1.4,4.8h1.1l1.4-4.8l0,1.3v3.4h1.2v-5h-2.1l-1,3.6l-1-3.6h-2.1v5h1.2V29.7L21.4,29.7z      M31.4,29.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H31.4L31.4,29.1z M33.5,31.3h0.6l1.5,1.8h1.5l-1.7-1.9c0.9-0.2,1.4-0.8,1.4-1.6     c0-0.9-0.7-1.6-1.7-1.6h-2.7v5h1.2V31.3L33.5,31.3z M34.9,29.1c0.4,0,0.7,0.3,0.7,0.6c0,0.3-0.2,0.6-0.7,0.6h-1.4v-1.2H34.9     L34.9,29.1z M37.4,33.1h1.2v-2.2v-2.8h-1.2v2.8V33.1L37.4,33.1z M41.7,33.1L41.7,33.1l0.6-1.1h-0.4c-0.8,0-1.3-0.5-1.3-1.4v-0.1     c0-0.8,0.4-1.4,1.3-1.4h1.3v-1.1h-1.4c-1.6,0-2.4,1-2.4,2.5v0.1C39.4,32.1,40.3,33.1,41.7,33.1L41.7,33.1z M47,33.1h1.4l-2.1-5     h-1.6l-2.2,5h1.3l0.4-1.1h2.4L47,33.1L47,33.1z M45,30l0.4-0.9l0.4,0.9l0.4,1.1h-1.6L45,30L45,30z M49.8,30.1l0-0.4l0.3,0.4l1.9,3     h1.4v-5h-1.2V31l0,0.4L52,31l-1.9-2.9h-1.5v5h1.2V30.1L49.8,30.1z"></path>
                            </g>
                        </svg>
                    </span>

                    <span aria-label="Discover">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 74 16" version="1.1" aria-hidden="true" focusable="false">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(0.000000, -1.000000)" fillRule="nonzero">
                                    <path d="M0.405,34.334 L73.758,34.334 C75.711,34.334 77.292,32.77 77.292,30.844 L77.292,6.355 C70.252,10.757 43.71,25.944 0.405,34.334" fill="#E6792B"></path>
                                    <path d="M13.18,7.61 C12.646,8.087 11.96,8.29 10.863,8.29 L10.409,8.292 L10.409,2.625 L10.861,2.625 C11.957,2.625 12.618,2.819 13.179,3.318 C13.767,3.832 14.115,4.628 14.115,5.448 C14.115,6.273 13.767,7.098 13.18,7.608 L13.18,7.61 Z M11.2,1.176 L8.715,1.176 L8.715,9.746 L11.192,9.746 C12.505,9.746 13.455,9.436 14.288,8.756 C15.278,7.946 15.864,6.726 15.864,5.466 C15.864,2.936 13.948,1.176 11.204,1.176 L11.2,1.176 Z" fill="#0D1619"></path>
                                    <polygon fill="#0D1619" points="16.642 9.743 18.332 9.743 18.332 1.173 16.642 1.173"></polygon>
                                    <path d="M22.474,4.46 C21.459,4.09 21.16,3.845 21.16,3.382 C21.16,2.842 21.69,2.432 22.42,2.432 C22.93,2.432 23.346,2.639 23.79,3.124 L24.673,1.984 C23.943,1.352 23.073,1.034 22.123,1.034 C20.587,1.034 19.416,2.084 19.416,3.484 C19.416,4.669 19.962,5.271 21.549,5.834 C22.212,6.068 22.549,6.221 22.719,6.324 C23.059,6.544 23.227,6.851 23.227,7.211 C23.227,7.908 22.667,8.419 21.91,8.419 C21.105,8.419 20.454,8.023 20.063,7.279 L18.973,8.319 C19.753,9.449 20.689,9.951 21.979,9.951 C23.735,9.951 24.971,8.791 24.971,7.135 C24.971,5.775 24.401,5.157 22.471,4.46" fill="#0D1619"></path>
                                    <path d="M25.506,5.463 C25.506,7.983 27.512,9.935 30.089,9.935 C30.816,9.935 31.439,9.793 32.209,9.435 L32.209,7.467 C31.529,8.135 30.932,8.404 30.165,8.404 C28.46,8.404 27.248,7.184 27.248,5.448 C27.248,3.805 28.495,2.508 30.088,2.508 C30.89,2.508 31.504,2.79 32.208,3.468 L32.208,1.506 C31.466,1.136 30.854,0.983 30.125,0.983 C27.56,0.983 25.503,2.975 25.503,5.463" fill="#0D1619"></path>
                                    <polyline fill="#0D1619" points="45.93 6.93 43.61 1.174 41.763 1.174 45.448 9.961 46.358 9.961 50.11 1.176 48.274 1.176 45.93 6.93"></polyline>
                                    <polyline fill="#0D1619" points="50.876 9.743 55.68 9.743 55.68 8.29 52.57 8.29 52.57 5.977 55.562 5.977 55.562 4.527 52.57 4.527 52.57 2.627 55.68 2.627 55.68 1.174 50.876 1.174 50.876 9.742"></polyline>
                                    <path d="M58.982,5.118 L58.492,5.118 L58.492,2.522 L59.012,2.522 C60.067,2.522 60.64,2.96 60.64,3.792 C60.64,4.652 60.067,5.118 58.982,5.118 Z M62.38,3.704 C62.38,2.097 61.263,1.174 59.31,1.174 L56.798,1.174 L56.798,9.744 L58.491,9.744 L58.491,6.3 L58.714,6.3 L61.056,9.743 L63.138,9.743 L60.4,6.133 C61.678,5.876 62.38,5.015 62.38,3.703 L62.38,3.704 Z" fill="#0D1619"></path>
                                    <path d="M63.256,1.916 L63.222,1.916 L63.222,1.72 L63.258,1.72 C63.346,1.72 63.393,1.752 63.393,1.817 C63.393,1.881 63.343,1.917 63.256,1.917 L63.256,1.916 Z M63.576,1.813 C63.576,1.663 63.473,1.58 63.286,1.58 L63.042,1.58 L63.042,2.336 L63.222,2.336 L63.222,2.043 L63.437,2.336 L63.664,2.336 L63.408,2.026 C63.516,1.996 63.576,1.918 63.576,1.813 Z" fill="#1B1A18"></path>
                                    <path d="M63.322,2.498 C63.027,2.498 62.788,2.258 62.788,1.958 C62.788,1.658 63.025,1.418 63.322,1.418 C63.612,1.418 63.848,1.661 63.848,1.958 C63.848,2.255 63.613,2.498 63.322,2.498 Z M63.322,1.298 C62.952,1.298 62.657,1.59 62.657,1.956 C62.657,2.322 62.953,2.616 63.322,2.616 C63.686,2.616 63.982,2.32 63.982,1.956 C63.982,1.594 63.686,1.296 63.322,1.296 L63.322,1.298 Z" fill="#1B1A18"></path>
                                    <path d="M37.481,1.016 C34.926,1.016 32.853,2.986 32.853,5.418 C32.853,8.004 34.836,9.936 37.481,9.936 C40.061,9.936 42.099,7.978 42.099,5.469 C42.099,2.974 40.074,1.014 37.481,1.014" fill="#E6792B"></path>
                                </g>
                            </g>
                        </svg>
                    </span >

                    <span aria-label="Apple Pay" data-apple-pay-icon="">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 25" aria-hidden="true" focusable="false">
                            <title>Apple Pay</title>
                            <path d="M47.962 6.717l-2.802 7.62c-.175.46-.34.924-.488 1.376-.072.225-.14.438-.208.64h-.053c-.066-.21-.137-.432-.214-.664-.146-.448-.302-.887-.462-1.305l-2.997-7.668h-1.603l4.288 11.024c.112.266.128.387.128.437 0 .015-.005.105-.13.44-.268.66-.576 1.23-.91 1.69-.344.47-.658.85-.94 1.13-.324.325-.66.592-1.003.794-.35.207-.667.374-.948.5l-.163.072.52 1.27.167-.062c.136-.05.39-.168.778-.357.39-.192.824-.498 1.286-.91.397-.347.76-.758 1.082-1.22.317-.454.634-.987.945-1.58.307-.59.614-1.264.914-2 .3-.74.62-1.568.954-2.457l3.463-8.77h-1.605zm-11.72 8.095c0 .16-.038.38-.11.644-.093.274-.228.545-.404.804-.175.256-.395.49-.655.697-.26.205-.568.37-.92.49-.35.123-.755.184-1.203.184-.27 0-.536-.045-.79-.133-.252-.09-.475-.223-.666-.4-.19-.174-.348-.4-.468-.675-.118-.273-.178-.61-.178-1.004 0-.644.173-1.166.513-1.548.352-.397.803-.702 1.34-.907.547-.21 1.156-.35 1.81-.413.53-.05 1.05-.076 1.543-.076h.19v2.338zm1.526 2.343c-.016-.465-.023-.933-.023-1.398v-4.574c0-.542-.055-1.095-.162-1.644-.11-.562-.32-1.077-.622-1.53-.305-.46-.732-.838-1.266-1.126-.536-.287-1.23-.433-2.067-.433-.61 0-1.208.08-1.77.237-.57.16-1.125.424-1.66.79l-.12.083.507 1.187.184-.124c.388-.26.823-.47 1.3-.618.475-.146.958-.22 1.44-.22.627 0 1.127.112 1.483.337.363.226.636.506.812.833.184.338.304.697.357 1.07.055.39.083.737.083 1.035v.133c-2.227-.01-3.965.36-5.12 1.104-1.21.78-1.826 1.89-1.826 3.3 0 .406.073.816.216 1.22.145.41.366.774.655 1.087.29.317.665.575 1.114.767.448.196.973.295 1.56.295.467 0 .903-.06 1.3-.176.393-.12.75-.276 1.06-.47.31-.193.584-.41.818-.643.107-.104.197-.21.286-.315h.058l.14 1.335h1.446l-.04-.215c-.077-.425-.125-.87-.142-1.327zM26.145 9.59c-.77.647-1.863.975-3.248.975-.38 0-.74-.016-1.07-.047-.275-.027-.528-.07-.756-.127V3.397c.2-.037.445-.07.733-.103.366-.04.807-.06 1.312-.06.625 0 1.203.076 1.716.224.51.146.953.364 1.32.646.36.28.644.643.84 1.08.2.444.298.973.298 1.57 0 1.246-.385 2.2-1.143 2.838zm1.38-6.282c-.47-.453-1.075-.805-1.798-1.047-.718-.237-1.58-.358-2.563-.358-.68 0-1.313.033-1.885.098-.565.064-1.09.138-1.56.22l-.15.025v16.452h1.5v-6.93c.507.086 1.086.132 1.724.132.85 0 1.647-.11 2.368-.325.728-.215 1.366-.548 1.897-.99.532-.442.957-.996 1.268-1.647.307-.652.463-1.42.463-2.28 0-.714-.112-1.355-.332-1.907-.222-.553-.535-1.036-.933-1.442zm-14.99 6.867c-.02-2.34 1.91-3.466 2-3.522-1.09-1.583-2.777-1.803-3.38-1.827-1.438-.143-2.81.847-3.537.847-.73 0-1.853-.825-3.05-.8-1.567.023-3.013.912-3.82 2.315-1.626 2.834-.414 7.02 1.173 9.31.778 1.123 1.7 2.383 2.92 2.337 1.17-.045 1.61-.758 3.025-.758 1.413-.002 1.812.756 3.046.735 1.26-.027 2.06-1.146 2.83-2.274.89-1.298 1.256-2.56 1.276-2.624-.025-.014-2.452-.94-2.48-3.74zM9.862 3.31c.645-.782 1.08-1.868.962-2.95-.93.037-2.057.622-2.72 1.4-.6.69-1.12 1.797-.977 2.857 1.035.08 2.09-.527 2.736-1.308z" fill="#0A0B09" fillRule="evenodd"></path>
                        </svg>
                    </span>

                    <span aria-label="Giftcard">
                        <svg className="shop-show-policies-icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 24" aria-hidden="true" focusable="false">
                            <path d="M29.75.143c.542 0 1.005.192 1.39.575.382.384.574.847.574 1.39v8.18H19.76c1.852-.626 3.667-1.822 5.448-3.592.122-.133.18-.284.168-.453-.01-.17-.08-.315-.214-.437l-3.04-3.04c-.122-.132-.268-.204-.436-.214-.17-.01-.32.046-.453.17-1.77 1.78-2.967 3.595-3.59 5.447V.142H29.75zM9.877 2.767l-3.04 3.04c-.132.12-.203.267-.213.436-.01.17.046.32.168.453 1.78 1.77 3.596 2.966 5.448 3.59H.286v-8.18c0-.54.192-1.004.575-1.388.385-.383.848-.575 1.39-.575h12.108V8.17c-.624-1.853-1.82-3.67-3.59-5.45-.134-.122-.285-.178-.454-.168-.168.01-.314.082-.437.215zM.287 13.57h14.07v10.144H2.25c-.542 0-1.005-.192-1.39-.575-.382-.385-.574-.848-.574-1.39v-8.18zm17.355 0h14.072v8.18c0 .542-.192 1.005-.575 1.39-.385.382-.848.574-1.39.574H17.642V13.57z" fill="#7AC142" fillRule="evenodd"></path>
                        </svg>
                    </span>
                </div >
            </div>
        );
    }

    shopPolices() {
        return (
            <div className="shop-policies">
                <p className="shop-policies-title">
                    Shop polices
                </p>
                <div className="shop-policies-detail-container">
                    <p className="shop-policies-detail">Accepted payment methods</p>
                    {this.shopPolicesIcons()}
                    <p className="shop-policies-detail-detail">Accepts Itsy Gift Cards and Itsy Credits</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="shop-show">
                {this.shopAndOwnerInfo()}
                {this.shopProducts()}
                {this.shopPolices()}
            </div>
        );
    }
}

export default withRouter(ShopShow);