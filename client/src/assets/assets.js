import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.png"
import car_image6 from "./car_image6.png"
import car_image7 from "./car_image7.webp"
import car_image8 from "./car_image8.webp"
import car_image9 from "./car_image9.webp"
import car_image10 from "./car_image10.webp"
import car_image11 from "./car_image11.webp"
import car_image12 from "./car_image12.webp"
import car_image13 from "./car_image13.webp"
import car_image14 from "./car_image14.webp"
import car_image15 from "./car_image15.webp"

export const cityList = ['New Delhi', 'Chennai', 'Goa', 'Bengalur']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9,
    car_image10,
    car_image11,
    car_image12,
    car_image13,
    car_image14,
    car_image15
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Anurag",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image1,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Semi-Automatic",
        "pricePerDay": 30000,
        "location": "New Delhi",
        "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
        "isAvailable": true,
        "createdAt": "2026-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Corolla",
        "image": car_image2,
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 25000,
        "location": "Chennai",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvailable": true,
        "createdAt": "2026-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Jeep ",
        "model": "Wrangler",
        "image": car_image3,
        "year": 2024,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 1200,
        "location": "Goa",
        "description": "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
        "isAvailable": true,
        "createdAt": "2026-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Neo 6",
        "image": car_image4,
        "year": 2022,
        "category": "Luxury Sports Sedan",
        "seating_capacity": 2,
        "fuel_type": "Diesel",
        "transmission": "Semi-Automatic",
        "pricePerDay": 20000,
        "location": "Bangalore",
        "description": "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvailable": true,
        "createdAt": "2026-04-17T06:15:47.318Z",
    },
    {
  "_id": "68009c93a3f5fc6338ea7e35",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Rolls-Royce",
  "model": "Phantom",
  "image": car_image5,
  "year": 2026,
  "category": "Ultra Luxury Sedan",
  "seating_capacity": 5,
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "pricePerDay": 120000,
  "location": "Mumbai",
  "description": "The Rolls-Royce Phantom is an ultra-luxury sedan offering handcrafted interiors, unmatched comfort, and a world-class chauffeur experience.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e36",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Toyota",
  "model": "Fortuner Legender",
  "image": car_image6,
  "year": 2020,
  "category": "Luxury SUV",
  "seating_capacity": 7,
  "fuel_type": "Diesel",
  "transmission": "Automatic",
  "pricePerDay": 28000,
  "location": "Chennai",
  "description": "The Toyota Fortuner Legender is a premium SUV known for its reliability, powerful engine, and excellent highway and off-road performance.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e37",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Audi",
  "model": "RS7 Sportback",
  "image": car_image7,
  "year": 2025,
  "category": "Luxury Sports Sedan",
  "seating_capacity": 5,
  "fuel_type": "Petrol",
  "transmission": "Manual",
  "pricePerDay": 55000,
  "location": "Bangalore",
  "description": "The Audi RS7 Sportback delivers supercar performance with luxurious interiors and advanced technology.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e38",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Bugatti",
  "model": "Chiron",
  "image": car_image8,
  "year": 2024,
  "category": "Supercar",
  "seating_capacity": 2,
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "pricePerDay": 250000,
  "location": "Pune",
  "description": "The Bugatti Chiron is one of the world's fastest hypercars, combining extraordinary performance with exclusive luxury.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e39",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Mahindra",
  "model": "Thar Roxx",
  "image": car_image9,
  "year": 2022,
  "category": "Off-Road SUV",
  "seating_capacity": 5,
  "fuel_type": "Diesel",
  "transmission": "Manual",
  "pricePerDay": 18000,
  "location": "Goa",
  "description": "The Mahindra Thar Roxx is built for adventure lovers and offers outstanding off-road capabilities and rugged styling.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e40",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Land Rover",
  "model": "Range Rover Sport",
  "image": car_image10,
  "year": 2026,
  "category": "Luxury SUV",
  "seating_capacity": 5,
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "pricePerDay": 65000,
  "location": "New Delhi",
  "description": "The Range Rover Sport combines luxury, performance, and all-terrain capability with premium interiors.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e41",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "MG",
  "model": "Hector Plus",
  "image": car_image11,
  "year": 2024,
  "category": "Mid-Size SUV",
  "seating_capacity": 7,
  "fuel_type": "Hybrid",
  "transmission": "Automatic",
  "pricePerDay": 17000,
  "location": "Hyderabad",
  "description": "The MG Hector Plus offers spacious interiors, connected car technology, and premium comfort for families.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e42",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Mercedes-Benz",
  "model": "G-Class",
  "image": car_image12,
  "year": 2025,
  "category": "Luxury SUV",
  "seating_capacity": 5,
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "pricePerDay": 85000,
  "location": "Mumbai",
  "description": "The Mercedes-Benz G-Class is an iconic luxury SUV with exceptional off-road capabilities and premium craftsmanship.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e43",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Kia",
  "model": "Seltos X-Line",
  "image": car_image13,
  "year": 2025,
  "category": "Compact SUV",
  "seating_capacity": 5,
  "fuel_type": "Petrol",
  "transmission": "Manual",
  "pricePerDay": 16000,
  "location": "Pune",
  "description": "The Kia Seltos X-Line offers a sporty design, modern features, and excellent comfort for city driving.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e44",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Hyundai",
  "model": "Creta SX(O)",
  "image": car_image14,
  "year": 2021,
  "category": "Compact SUV",
  "seating_capacity": 5,
  "fuel_type": "Diesel",
  "transmission": "Manual",
  "pricePerDay": 15000,
  "location": "Jaipur",
  "description": "The Hyundai Creta SX(O) is a feature-packed SUV offering premium comfort, safety, and excellent fuel efficiency.",
  "isAvailable": true
},
{
  "_id": "68009c93a3f5fc6338ea7e45",
  "owner": "67fe3467ed8a8fe17d0ba6e2",
  "brand": "Lamborghini",
  "model": "Huracán EVO",
  "image": car_image15,
  "year": 2025,
  "category": "Supercar",
  "seating_capacity": 2,
  "fuel_type": "Hybrid",
  "transmission": "Automatic",
  "pricePerDay": 180000,
  "location": "Mumbai",
  "description": "The Lamborghini Huracán EVO is an exotic supercar delivering breathtaking performance, aggressive styling, and an unforgettable driving experience.",
  "isAvailable": true
}
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2026-06-13T00:00:00.000Z",
        "returnDate": "2026-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 40000,
        "createdAt": "2026-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130000,
        "createdAt": "2026-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2026-06-11T00:00:00.000Z",
        "returnDate": "2026-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 6000,
        "createdAt": "2026-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2026-06-11T00:00:00.000Z",
        "returnDate": "2026-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 50000,
        "createdAt": "2026-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 15,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}