import React, { useState } from "react";
import classnames from "classnames";
import "./Menu.scss";

const Menu = ({ data }) => {
  const defaultMenuType = Object.keys(data)[0];
  const [currentMenuTab, setCurrentMenuTab] = useState(defaultMenuType);

  const displayMenuTabNames = () => {
    // pull all of the names of the menue types
    const menuTypes = Object.keys(data);
    const displayTabeNames = menuTypes.map(tabName => {
      return (
        <div className="dry-menu__name-label-wrapper">
          <div className="dry-menu__name-label-box"></div>
          <span
            className="dry-menu__name-label"
            onClick={() => setCurrentMenuTab(tabName)}
          >
            {tabName}
          </span>
        </div>
      );
    });
    return displayTabeNames;
  };
  const displayMenu = () => {
    // pull all of the names of the menue types
    const menuTypes = Object.keys(data);
    // make an array of menue types with all of the menue items in it
    const displayMenuTypes = menuTypes.map(menuTypeName => {
      // object of all of the product data that corispons with this menu type
      const menuTypeData = data[menuTypeName];
      // loop through all of the product objects and create markdown with there information
      const displayMenuTypeProducts = Object.keys(menuTypeData).map(
        productName => {
          const productData = menuTypeData[productName];
          const displayProduct = (
            <div className="dry-menu__product">
              <span>{productName}</span>
              <img src={productData.image} alt="" />
              <p>{productData.description}</p>
              <div>{`$${productData.price}`}</div>
            </div>
          );
          return displayProduct;
        }
      );

      return (
        <div
          className={classnames({
            "dry-menu__menu-tab-wrapper": true,
            "dry-menu__menu-tab-wrapper--active":
              currentMenuTab === menuTypeName
          })}
        >
          <div
            className={classnames({
              "dry-menu__menu-tab": true,
              "dry-menu__menu-tab--active": currentMenuTab === menuTypeName
            })}
          >
            <div className="dry-menu__product-wrapper">
              {displayMenuTypeProducts}
            </div>
          </div>
        </div>
      );
    });

    return displayMenuTypes;
  };

  return (
    <div className="dry-menu">
      <div>
        <h1 className="dry-menu__label">Menu</h1>
        <div className="dry-menu__tab-name-wrapper">
          {displayMenuTabNames()}
        </div>
        <div className="dry-menu__tab-wrapper">{displayMenu()}</div>
      </div>
    </div>
  );
};

Menu.defaultProps = {
  data: {}
};

export default Menu;
// EXAMPLE INPUT
// data:{
//         category1: {
//             pizza: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             pancake: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             salsa: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             }
//         },
//         category2: {
//             pizza: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             pancake: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             salsa: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             }
//         },
//         category3: {
//             pizza: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             pancake: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             salsa: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             }
//         },
//         category4: {
//             pizza: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             pancake: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             },
//             salsa: {
//                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//                 price: 10,
//                 description: "This is the tatsy items description"
//             }
//         }
//     }
