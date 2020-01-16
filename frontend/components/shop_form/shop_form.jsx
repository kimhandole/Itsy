import React from 'react';

import { withRouter } from 'react-router-dom';

class ShopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    componentDidMount() {
        const elements = document.getElementsByClassName("footer");
        const footer = elements[0];
        footer.classList.add(".footer-light");
    }

    updateTitle() {
        return e => this.setState({
            title: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul className="login-error-list">
                {this.props.errors.map((error, i) => (
                    <li className="login-error-list-item" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    shopFormBanner() {
        return (
            <div className="shops-banner-container">
                <div className="shops-banner">
                    <h1 className="shops-banner-title">
                        Name your shop
                    </h1>
                    <p className="shops-banner-description">
                        Choose a memorable name that reflexts your style.
                    </p>
                </div>
            </div>
        );
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('shop[title]', this.state.title);
        formData.append('shop[owner_id]', this.props.currentUser)
        this.props.createShop(formData);
        this.props.history.push('/shops');
    }

    shopForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="shop-form-title-container">
                    <div className="shop-form-title-inner-container">
                        <input className="shop-form-title-input" type="text" placeholder="Enter your shop name" value={this.state.title} onChange={this.updateTitle()}/>
                        <p>Your shop name will appear in your shop and next to each of your listings throughout Itsy. After you open your shop, you can change your name once.</p>
                    </div>
                </div>
                <div className="shop-form-save">
                    <input type="submit" value="Save and continue" />
                </div>
            </form>
        );
    }

    render() {

        return (
            <section className="shop-form">
                {this.shopFormBanner()}
                {this.shopForm()}
            </section>
        );
    }
}

export default withRouter(ShopForm);