import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { motion } from 'motion/react'
const CarDetails = () => {

  const { id } = useParams()
  const {cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate} = useAppContext()
  const navigate = useNavigate()
  const [car,setCar] = useState(null)
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  
  const currency = import.meta.env.VITE_CURRENCY

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "/api/bookings/create",
      {
        car: id,
        pickupDate,
        returnDate,
      }
    );

    if (data.success) {
      toast.success(data.message);
      navigate("/my-bookings");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

const fetchReviews = async () => {
  try {
    const { data } = await axios.get(
      `/api/reviews/${id}`
    );

    if (data.success) {
      setReviews(data.reviews);
    }
  } catch (error) {
    console.log(error);
  }
};

const addReview = async () => {
  try {
    const { data } = await axios.post(
      "/api/reviews",
      {
        carId: id,
        rating,
        comment,
      }
    );

    if (data.success) {
  toast.success("Review Added");
  setComment("");
  fetchReviews();

  const updatedCars = await axios.get("/api/user/cars");

  if (updatedCars.data.success) {
    const updatedCar = updatedCars.data.cars.find(
      (item) => item._id === id
    );

    setCar(updatedCar);
  }
}
     else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

  useEffect(() => {
  setCar(
    cars.find((car) => car._id === id)
  );

  fetchReviews();
}, [cars, id]);

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>

      <button
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
      >
        <img
          src={assets.arrow_icon}
          alt=""
          className='rotate-180 opacity-65'
        />
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>

        {/* Left: Car Image & Details */}
        <motion.div 
        
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
        
        className='lg:col-span-2'>

          <motion.img
  initial={{ scale: 0.98, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  src={car.image}
  alt={car.brand}
  className="w-full h-[450px] object-cover rounded-xl mb-6 shadow-md"
/>

          <motion.div 
          
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay:0.2, duration: 0.5 }}
          
          
          className='space-y-6'>

            <div>
              <h1 className='text-3xl font-bold'>
                {car.brand} {car.model}
              </h1>

              <p className='text-gray-500 text-lg'>
                {car.category} • {car.year}
              </p>
              <p className="text-yellow-500 mt-2">
  ⭐            {car.rating?.toFixed(1)} (
                {car.totalReviews} Reviews)
              </p>
            </div>

            <hr className='border-borderColor my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`
                },
                {
                  icon: assets.fuel_icon,
                  text: car.fuel_type
                },
                {
                  icon: assets.car_icon,
                  text: car.transmission
                },
                {
                  icon: assets.location_icon,
                  text: car.location
                }
              ].map(({ icon, text }) => (
                <motion.div

                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}

                  key={text}
                  className='flex flex-col items-center bg-light p-4 rounded-lg'
                >
                  <img
                    src={icon}
                    alt=""
                    className='h-5 mb-2'
                  />
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className='text-xl font-medium mb-3'>
                Description
              </h1>

              <p className='text-gray-500'>
                {car.description}
              </p>
            </div>

            {/* Features */}
            {/* Customer Reviews */}
<div className='mt-8'>
  <h1 className='text-xl font-medium mb-4'>
    Customer Reviews
  </h1>

  {/* Add Review */}
  <div className='flex flex-col gap-3 mb-6'>
    <select
      value={rating}
      onChange={(e) =>
        setRating(Number(e.target.value))
      }
      className='border border-borderColor p-3 rounded-lg'
    >
      <option value={5}>⭐⭐⭐⭐⭐</option>
      <option value={4}>⭐⭐⭐⭐</option>
      <option value={3}>⭐⭐⭐</option>
      <option value={2}>⭐⭐</option>
      <option value={1}>⭐</option>
    </select>

    <textarea
      value={comment}
      onChange={(e) =>
        setComment(e.target.value)
      }
      placeholder='Write your review...'
      rows='3'
      className='border border-borderColor p-3 rounded-lg'
    />

    <button
      type='button'
      onClick={addReview}
      className='bg-primary text-white py-3 rounded-lg'
    >
      Submit Review
    </button>
  </div>

  {/* Reviews List */}
  <div className='space-y-4'>
    {reviews.length === 0 ? (
      <p className='text-gray-500'>
        No reviews yet.
      </p>
    ) : (
      reviews.map((review) => (
        <div
          key={review._id}
          className='border border-borderColor rounded-lg p-4'
        >
          <h2 className='font-semibold'>
            {review.user?.name}
          </h2>

          <p className='text-yellow-500'>
            {"⭐".repeat(review.rating)}
          </p>

          <p className='text-gray-600 mt-2'>
            {review.comment}
          </p>
        </div>
      ))
    )}
  </div>
</div>

          </motion.div>
        </motion.div>

        {/* Right: Booking Form */}
        <motion.form 
        
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        
        
        
        onSubmit={handleSubmit}className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>

          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
            {currency}{car.pricePerDay}
            <span className='text-base text-gray-400 font-normal'>
              per day
            </span>
          </p>

          <hr className='border-borderColor my-6' />

          <div className='flex flex-col gap-2'>
            <label htmlFor="pickup-date">
              Pickup Date
            </label>

            <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)}
              type="date"
              className='border border-borderColor px-3 py-2 rounded-lg'
              required
              id='pickup-date'
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="return-date">
              Return Date
            </label>

            <input value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}
              type="date"
              className='border border-borderColor px-3 py-2 rounded-lg'
              required
              id='return-date'
            />
          </div>

          <button
            className='w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer'
          >
            Book Now
          </button>

          <p className='text-center text-sm'>
            No credit card required to reserve
          </p>

        </motion.form>

      </div>
    </div>
  ) : <Loader />
}

export default CarDetails
