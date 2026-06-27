import React, { useEffect, useState } from 'react'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
const ManageBookings = () => {

  const { currency, axios } = useAppContext()

  const [bookings, setBookings] = useState([])

  const fetchOwnerBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/owner')
      data.success
        ? setBookings(data.bookings)
        : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const changeBookingStatus = async (bookingId, status) => {
  try {
    const { data } = await axios.post(
      '/api/bookings/change-status',
      { bookingId, status }
    )

    if (data.success) {
      toast.success(data.message)
      fetchOwnerBookings()
    } else {
      toast.error(data.message)
    }

  } catch (error) {
    toast.error(error.message)
  }
}

    useEffect(() => {
        fetchOwnerBookings()
    }, [])

    return (
        <div className='px-4 pt-10 md:px-10 w-full'>

            <Title
                title="Manage Bookings"
                subTitle="Track all customer bookings, manage payments and booking status."
            />

            <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>

                <table className='w-full border-collapse text-left text-sm text-gray-600'>

                    <thead className='text-gray-500'>
                        <tr>
                            <th className='p-3 font-medium'>Car</th>
                            <th className='p-3 font-medium max-md:hidden'>Date Range</th>
                            <th className='p-3 font-medium'>Total</th>
                            <th className='p-3 font-medium max-md:hidden'>Payment</th>
                            <th className='p-3 font-medium'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr
                                key={index}
                                className='border-t border-borderColor text-gray-500'
                            >

                                <td className='p-3 flex items-center gap-3'>
                                    <img
                                        src={booking.car.image}
                                        alt=""
                                        className='h-12 w-12 aspect-square rounded-md object-cover'
                                    />

                                    <p className='font-medium max-md:hidden'>
                                        {booking.car.brand} {booking.car.model}
                                    </p>
                                </td>

                                <td className='p-3 max-md:hidden'>
                                    {booking.pickupDate.split('T')[0]} to{' '}
                                    {booking.returnDate.split('T')[0]}
                                </td>

                                <td className='p-3'>
                                    {currency}{booking.price}
                                </td>

                                <td className='p-3 max-md:hidden'>
                                    <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>
                                        offline
                                    </span>
                                </td>

                                <td className='p-3'>
                                    {booking.status === 'pending' ? (
                                        <select onChange={e=>changeBookingStatus(booking._id,e.target.value)}
                                            value={booking.status}
                                            className='px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'
                                        >
                                            <option value="pending">
                                                Pending
                                            </option>
                                            <option value="cancelled">
                                                Cancelled
                                            </option>
                                            <option value="confirmed">
                                                Confirmed
                                            </option>
                                        </select>
                                    ) : (
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                booking.status === 'confirmed'
                                                    ? 'bg-green-100 text-green-500'
                                                    : 'bg-red-100 text-red-500'
                                            }`}
                                        >
                                            {booking.status}
                                        </span>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ManageBookings













// import React, { useEffect, useState } from 'react'
// import Title from '../../components/owner/Title'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast'

// const ManageBookings = () => {

//   const { currency, axios } = useAppContext()

//   const [bookings, setBookings] = useState([])

//   const fetchOwnerBookings = async () => {
//     try {
//       const { data } = await axios.get('/api/bookings/owner')
//       data.success
//         ? setBookings(data.bookings)
//         : toast.error(data.message)
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }


//   return (
//     <div className="w-full px-4 md:px-10 py-8">

//       <Title
//         title="Manage Bookings"
//         subTitle="Track and manage all customer bookings from one place."
//       />

//       <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

//         <div className="overflow-x-auto">

//           <table className="w-full text-sm">

//             <thead className="bg-gray-50 border-b">
//               <tr className="text-gray-600">
//                 <th className="text-left px-6 py-4 font-semibold">
//                   Vehicle
//                 </th>

//                 <th className="text-left px-6 py-4 font-semibold max-md:hidden">
//                   Booking Dates
//                 </th>

//                 <th className="text-left px-6 py-4 font-semibold">
//                   Amount
//                 </th>

//                 <th className="text-left px-6 py-4 font-semibold max-md:hidden">
//                   Payment
//                 </th>

//                 <th className="text-left px-6 py-4 font-semibold">
//                   Status
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr
//                   key={index}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   {/* Car */}
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={booking.car.image}
//                         alt=""
//                         className="w-14 h-14 rounded-lg object-cover"
//                       />

//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           {booking.car.brand} {booking.car.model}
//                         </h3>

//                         <p className="text-xs text-gray-500">
//                           {booking.car.seating_capacity} Seats •{" "}
//                           {booking.car.transmission}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   {/* Date */}
//                   <td className="px-6 py-4 max-md:hidden">
//                     <div className="text-gray-700">
//                       {booking.pickupDate.split("T")[0]}
//                     </div>

//                     <div className="text-xs text-gray-500">
//                       to {booking.returnDate.split("T")[0]}
//                     </div>
//                   </td>

//                   {/* Price */}
//                   <td className="px-6 py-4 font-semibold text-primary">
//                     {currency}
//                     {booking.price}
//                   </td>

//                   {/* Payment */}
//                   <td className="px-6 py-4 max-md:hidden">
//                     <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
//                       Offline
//                     </span>
//                   </td>

//                   {/* Status */}
//                   <td className="px-6 py-4">

//                     {booking.status === "pending" ? (
//                       <select
//                         defaultValue={booking.status}
//                         className="border rounded-lg px-3 py-2 text-sm outline-none"
//                       >
//                         <option value="pending">Pending</option>
//                         <option value="confirmed">Confirmed</option>
//                         <option value="cancelled">Cancelled</option>
//                       </select>
//                     ) : (
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${
//                           booking.status === "confirmed"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-red-100 text-red-700"
//                         }`}
//                       >
//                         {booking.status}
//                       </span>
//                     )}

//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageBookings;
