import React from 'react';
import Footer from '../footer/footer';
import LoadingIcon from '../loading/loading_icon';

class CategoryShow extends React.Component {
    // componentDidMount() {
    //     this.props.fetchCategory(this.props.match.params.categoryId);
    //     this.props.fetchShops();
    //     this.props.fetchProducts();
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
    //         this.props.fetchCategory(this.props.match.params.categoryId);
    //         this.props.fetchShops();
    //         this.props.fetchProducts();
    //     }
    // }

    // toProductPage(product) {
    //     event.preventDefault();
    //     return (event) => {
    //         event.preventDefault();
    //         this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
    //     }
    // }

    render() {
        // let {category, shops, products} = this.props;

        // if (!category || Object.keys(shops).length === 0 || !products){
        //     return <LoadingIcon/>
        // }

        // const categoryItems = products.map(product => {
        //     return (
        //         <li key={product.id} >
        //             <img src={product.imageUrls[0]} />
        //             <p>{product.title.slice(0, 35)}...</p>
        //             <p className="category-shop-name">{shops[product.shopId].name}</p>
        //             <p>USD {product.price}</p>
        //         </li>
        //     )
        // });

        // return (
        //     <section id="category-show">
        //         <ul>
        //             {categoryItems}
        //         </ul>
        //     </section>
        // )
        

        return (
            <section id="category-show">
                <Footer isDark={true} />
            </section>
        )
    }

}



export default CategoryShow;