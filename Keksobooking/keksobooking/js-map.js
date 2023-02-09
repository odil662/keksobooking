const adsNearby = [
    {
   author: {
    avatar: img/avatars/user[01].png
   },
   offer: {
    title:"Большая уютная квартира",
    address: "250, 150", 
    price: 1000,
    type: "palace", 
    rooms: 3,
    guests: 6,
    checkin: "13:00",
    checkout: "12:00",
    features: ["wifi", "parking", "washer", "elevator", "conditioner"],
    description: "",
    photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
    "x": 200,
    "y": 500
   }
   },
   {
   author: {
   avatar: img/avatars/user[02].png
   },
   offer: {
   title: "Маленькая неуютная квартира",
   address: "500, 200", 
   price: 2000,
   type: "flat", 
   rooms: 1,
   guests: 2,
   checkin: "13:00",
   checkout: "12:00",
   features: ["dishwasher", "parking", "washer", "elevator", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 150,
   "y": 600
   }
   },
   {
   author: {
   avatar: img/avatars/user[03].png
   },
   offer: {
   title: "Огромный прекрасный дворец",
   address: "400, 100", 
   price: 3000,
   type: "palace", 
   rooms: 2,
   guests: 4,
   checkin: "14:00",
   checkout: "13:00",
   features: ["wifi", "dishwasher", "parking", "washer", "elevator"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 250,
   "y": 450
   }
   },
   {
   author: {
   avatar: img/avatars/user[04].png
   },
   offer: {
   title: "Маленький ужасный дворец",
   address: "600, 50", 
   price: 4000,
   type: "flat", 
   rooms: 2,
   guests: 4,
   checkin: "12:00",
   checkout: "13:00",
   features: ["wifi", "dishwasher", "parking", "washer", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 300,
   "y": 230
   }
   },
   {
   author: {
   avatar: img/avatars/user[05].png
   },
   offer: {
   title: "Красивый гостевой домик", 
   address: "450, 550", 
   price: 5000,
   type: "house", 
   rooms: 4,
   guests: 8,
   checkin: "14:00",
   checkout: "12:00",
   features: ["wifi", "dishwasher", "parking","elevator", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 400,
   "y": 300
   }
   },
   {
   author: {
   avatar: img/avatars/user[06].png
   },
   offer: {
   title: "Некрасивый негостеприимный домик",
   address: "100, 350", 
   price: 6000,
   type: "bungalo", 
   rooms: 3,
   guests: 6,
   checkin: "13:00",
   checkout: "12:00",
   features: ["wifi", "dishwasher", "washer", "elevator", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 500,
   "y": 220
   }
   },
   {
   author: {
   avatar: img/avatars/user[07].png
   },
   offer: {
   title:  "Уютное бунгало далеко от моря",
   address: "700, 450", 
   price: 7000,
   type: "Bungalo", 
   rooms: 4,
   guests: 8,
   checkin: "12:00",
   checkout: "14:00",
   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 190,
   "y": 330
   }
   },
   {
   author: {
   avatar: img/avatars/user[08].png
   },
   offer: {
   title:  "Неуютное бунгало по колено в воде",
   address: "350, 600", 
   price: 8000,
   type: "house", 
   rooms: 5,
   guests: 10,
   checkin: "12:00",
   checkout: "14:00",
   features: ["wifi", "dishwasher", "elevator", "conditioner"],
   description: "",
   photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
   },
   location: {
   "x": 240,
   "y": 480
   }
   }
   ];
   
   var userDialog = document.querySelector(".map");
   userDialog.classList.remove("map--faded");
   
  // var fragment = document.createDocumentFragment();