import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return(

        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCIXB7HgsGHPLbgLzCEIOLCH-c9F78GIETg&s" alt="logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                    <li>Offers</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>

    );
}

const RestaurantCard = (props) => {

    const { resData } = props;

    const { 
        id,
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        areaName,
        sla
    } = resData?.info;

    return(

        <div className="res-card">
         <p>{props.l8im}</p>
            <img 
            className="res-logo"
            alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />

            <div className="rest-info">
               <div className="rest-name">{name}</div>

                <div className="sub-info">
                    <div className="type"> 
                        {cuisines.slice(0,3).join(", ")}
                    </div>

                    <div className="rating-time">
                        <div>⭐️ {avgRating}</div>
                        <div>{sla.deliveryTime} mins</div>
                    </div>

                    <div className="location">{areaName}</div>

                </div>
            </div>
        </div>
    );
}

const resList = [
{
"info": {
"id": "452096",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4c3632d2-a308-46dd-a090-b899aae5e981_452096.JPG",
"locality": "Sector E",
"areaName": "Aliganj",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.3,
"parentId": "721",
"avgRatingString": "4.3",
"totalRatingsString": "7.4K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/pizza-hut-sector-e-aliganj-rest452096",
"type": "WEBLINK"
}
},
{
"info": {
"id": "636723",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Mahanagar",
"areaName": "Mahanagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.2,
"parentId": "61955",
"avgRatingString": "4.2",
"totalRatingsString": "2.6K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 8.5,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "8.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.2",
"ratingCount": "65"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/chinese-wok-mahanagar-rest636723",
"type": "WEBLINK"
}
},
{
"info": {
"id": "789167",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/45a1c345-e52f-4616-a2e5-60f86db963a1_789167.JPG",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.5,
"parentId": "1040",
"avgRatingString": "4.5",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 4.2,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "28"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/theobroma-aliganj-rest789167",
"type": "WEBLINK"
}
},
{
"info": {
"id": "333396",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2ffc18ae-bfaf-451c-851d-d7360444f9af_333396.jpg",
"locality": "Sector E",
"areaName": "Aliganj",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.5,
"parentId": "166",
"avgRatingString": "4.5",
"totalRatingsString": "33K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹39"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "2.8K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/burger-king-sector-e-aliganj-rest333396",
"type": "WEBLINK"
}
},
{
"info": {
"id": "78778",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/a84f4f61-54b5-4611-b348-88cc1e305d69_78778.JPG",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "9.0K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "6.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/dominos-pizza-aliganj-rest78778",
"type": "WEBLINK"
}
},
{
"info": {
"id": "461532",
"name": "Starbucks Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/2f62bc1c-0221-4495-895d-203edc09c42c_461532.JPG",
"locality": "Hazratganj",
"areaName": "Hazratganj",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream"
],
"avgRating": 4.5,
"parentId": "195515",
"avgRatingString": "4.5",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 9.1,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "9.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "923"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/starbucks-coffee-hazratganj-rest461532",
"type": "WEBLINK"
}
},
{
"info": {
"id": "458202",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1709cec4-af56-4db8-a0fc-41c411f68171_458202.JPG",
"locality": "Sector E",
"areaName": "Jankipuram",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "7.7K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/kfc-sector-e-jankipuram-rest458202",
"type": "WEBLINK"
}
},
{
"info": {
"id": "577179",
"name": "Wow! Momo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/891c642d-f1b4-48e2-9480-894e8e7ca501_577179.JPG",
"locality": "Sector E",
"areaName": "Jankipuram",
"costForTwo": "₹300 for two",
"cuisines": [
"Momos",
"Chinese",
"fastfood",
"Asian",
"Beverages"
],
"avgRating": 4.2,
"parentId": "1776",
"avgRatingString": "4.2",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Chinese.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Chinese.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/wow-momo-sector-e-jankipuram-rest577179",
"type": "WEBLINK"
}
},
{
"info": {
"id": "165050",
"name": "Mahalaxmi Sweets & Restaurant",
"cloudinaryImageId": "oqk0mierg0rlhuxoa3ok",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"Thalis",
"South Indian",
"Snacks",
"Chinese",
"Sweets",
"Desserts",
"Beverages",
"Ice Cream"
],
"avgRating": 4.5,
"veg": true,
"parentId": "262175",
"avgRatingString": "4.5",
"totalRatingsString": "40K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:15:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "8.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/mahalaxmi-sweets-and-restaurant-aliganj-rest165050",
"type": "WEBLINK"
}
},
{
"info": {
"id": "63930",
"name": "The Bon Bon Bakers",
"cloudinaryImageId": "2c761e85049f81355f6bf864c97666dd",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹300 for two",
"cuisines": [
"Cakes & Pastries",
"Snacks",
"pizza",
"Pastas",
"dessert",
"jar cakes",
"Continental",
"Beverages",
"Burgers",
"Bakery",
"sandwich",
"Fast Food"
],
"avgRating": 4.6,
"veg": true,
"parentId": "433397",
"avgRatingString": "4.6",
"totalRatingsString": "35K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 22:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "1.3K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/the-bon-bon-bakers-aliganj-rest63930",
"type": "WEBLINK"
}
},
{
"info": {
"id": "73286",
"name": "Aryan Family's Delight",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/10/5fc2a44d-0e37-455f-a02e-1c2ce6edc249_73286.jpg",
"locality": "Vikas Nagar",
"areaName": "Vikas Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Chinese",
"Italian"
],
"avgRating": 4.6,
"parentId": "6001",
"avgRatingString": "4.6",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-North%20Indian.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-North%20Indian.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "4.8K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/aryan-familys-delight-vikas-nagar-rest73286",
"type": "WEBLINK"
}
},
{
"info": {
"id": "65082",
"name": "Classic Radhey Sweets",
"cloudinaryImageId": "hogs5exnbgrll77362qy",
"locality": "Mahanagar",
"areaName": "Mahanagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Sweets",
"Thalis",
"Snacks"
],
"avgRating": 4.5,
"veg": true,
"parentId": "63739",
"avgRatingString": "4.5",
"totalRatingsString": "33K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 6.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "1.3K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/classic-radhey-sweets-mahanagar-rest65082",
"type": "WEBLINK"
}
},
{
"info": {
"id": "66673",
"name": "Mr. Brown - Danbro",
"cloudinaryImageId": "2c469b5d88f84b7495b9825d06e4bb9b",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹350 for two",
"cuisines": [
"Bakery",
"Cakes & Pastries",
"Snacks",
"Italian",
"Pizzas",
"Burgers",
"Beverages",
"Continental",
"Desserts"
],
"avgRating": 4.5,
"veg": true,
"parentId": "561622",
"avgRatingString": "4.5",
"totalRatingsString": "41K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 07:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "9.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/mr-brown-danbro-aliganj-rest66673",
"type": "WEBLINK"
}
},
{
"info": {
"id": "615587",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/38ab777a-b6e1-4dbf-a498-5bda020cf8b9_615587.JPG",
"locality": "Sector P",
"areaName": "Aliganj",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
"avgRating": 4.7,
"veg": true,
"parentId": "2233",
"avgRatingString": "4.7",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹200 OFF",
"subHeader": "ABOVE ₹999",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/the-belgian-waffle-co-sector-p-aliganj-rest615587",
"type": "WEBLINK"
}
},
{
"info": {
"id": "861622",
"name": "Pastas By Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/3065f36b-6cfa-4940-8efa-ec0adfe970d3_861622.JPG",
"locality": "Sector E",
"areaName": "Aliganj",
"costForTwo": "₹400 for two",
"cuisines": [
"Pastas"
],
"avgRating": 4.3,
"parentId": "306806",
"avgRatingString": "4.3",
"totalRatingsString": "49",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹200 OFF",
"subHeader": "ABOVE ₹1299",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/pastas-by-pizza-hut-sector-e-aliganj-rest861622",
"type": "WEBLINK"
}
},
{
"info": {
"id": "792353",
"name": "Wendy's Flavor Fresh Burgers",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/7d72b93b-c197-487e-b959-8fed003b12e2_792353.jpg",
"locality": "Sitapur Road",
"areaName": "Aliganj",
"costForTwo": "₹500 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Snacks",
"Beverages"
],
"avgRating": 4.7,
"parentId": "470493",
"avgRatingString": "4.7",
"totalRatingsString": "22",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "30% OFF",
"subHeader": "UPTO ₹75"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/wendys-flavor-fresh-burgers-sitapur-road-aliganj-rest792353",
"type": "WEBLINK"
}
},
{
"info": {
"id": "61055",
"name": "The Chocolate Room",
"cloudinaryImageId": "7b564261a24a6aae8f39c3f84e1da901",
"locality": "Aliganj",
"areaName": "Aliganj",
"costForTwo": "₹399 for two",
"cuisines": [
"Bakery",
"Cafe",
"Desserts",
"Beverages",
"Mexican",
"Italian",
"Chinese"
],
"avgRating": 4,
"parentId": "1002",
"avgRatingString": "4.0",
"totalRatingsString": "3.0K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-26 00:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹199",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "1.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/the-chocolate-room-aliganj-rest61055",
"type": "WEBLINK"
}
},
{
"info": {
"id": "800077",
"name": "Quick Crave",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/2/30c6627e-56c0-4530-879a-dcf82ba7b68d_800077.jpg",
"locality": "Sitapur Road",
"areaName": "Aliganj",
"costForTwo": "₹500 for two",
"cuisines": [
"Pizzas",
"Fast Food"
],
"avgRating": 4.6,
"parentId": "478149",
"avgRatingString": "4.6",
"totalRatingsString": "13",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "OnlyOnSwiggy",
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/quick-crave-sitapur-road-aliganj-rest800077",
"type": "WEBLINK"
}
},
{
"info": {
"id": "566474",
"name": "Faasos' Signature Wraps & Rolls",
"cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
"locality": "Sitapur Road",
"areaName": "Aliganj",
"costForTwo": "₹350 for two",
"cuisines": [
"Fast Food",
"Snacks",
"North Indian",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "340366",
"avgRatingString": "4.5",
"totalRatingsString": "161",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Rolls.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/faasos-signature-wraps-and-rolls-sitapur-road-aliganj-rest566474",
"type": "WEBLINK"
}
},
{
"info": {
"id": "591311",
"name": "Dum Safar Biryani",
"cloudinaryImageId": "xukouz4hd1xbo1clabhk",
"locality": "Sector E",
"areaName": "Aliganj",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Kebabs",
"North Indian",
"Barbecue"
],
"avgRating": 4.4,
"parentId": "351013",
"avgRatingString": "4.4",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-25 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-50e2e65b-83e5-41ff-861b-f9c71fecc223"
},
"cta": {
"link": "https://www.swiggy.com/city/lucknow/dum-safar-biryani-sector-e-aliganj-rest591311",
"type": "WEBLINK"
}
}
];

const Body = () => {
    return (
        <div className="body">

            <div className="search">
                Search
            </div>

            <div className="res-container">
                {
                    resList.map( (restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        
        <div className="app">

            <Header/>
            <Body/>



        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
