import React from "react";
import styles from '../sampleData/product_id_styles.js';
import helper from '../helpers/helpers.js';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('obj: ', this.props.productObj)
    // console.log('func: ', this.props.updateOutfitCollection);
  }

  handleAddOutfit() {
    this.props.updateOutfitCollection(this.props.productObj);
    console.log('hello');
  }

  render() {
    let info = this.props.eachProductInfo.productInfo;
    let imgURL = this.props.eachProductInfo.productStyles.results[0].photos[0]["thumbnail_url"];
    let img = (<>
      {
        imgURL ?
        <img src={imgURL} className="card__image" />
        : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
      }
    </>)

    return (
      <div className="card">
        <div className="card__body">
          {img}
          <p className="card__category">{info.category}</p>
          <em className="card__name">{info.name}</em>
          <p className="card__price">${info.default_price}</p>
          <p className="card__rating">⭐⭐⭐⭐⭐</p>
        </div>
        <button className="card__btn" onClick={()=> this.handleAddOutfit()}>❤️</button>
        {/* <p>__________________________________</p> */}
      </div>
    )
  }
}


// const ProductItem = (props) => {
//   console.log('props in ProdcutItem: ', props);

//   const handleAddOutfit = () => {
//     props.updateOutfitCollection(this.props.productObj);
//     console.log('hello');
//   };


//   let info = props.eachProductInfo.productInfo;
//   let imgURL = props.eachProductInfo.productStyles.results[0].photos[0]["thumbnail_url"];
//   let img = (<>
//     {
//       imgURL ?
//       <img src={imgURL} className="card__image" />
//       : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
//     }
//   </>)

//   return (
//     <div className="card">
//       <div className="card__body">
//         {img}
//         <p className="card__category">{info.category}</p>
//         <em className="card__name">{info.name}</em>
//         <p className="card__price">${info.default_price}</p>
//         <p className="card__rating">⭐⭐⭐⭐⭐</p>
//       </div>
//       <button className="card__btn" >❤️</button>
//       {/* <p>__________________________________</p> */}
//     </div>
//   )
// }

export default ProductItem;