import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import { toast } from 'react-hot-toast'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const Dashboard = () => {

  const {axios,isOwner,currency} = useAppContext()

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  })
  const bookingChartData = [
  {
    name: 'Pending',
    value: data.pendingBookings,
  },
  {
    name: 'Confirmed',
    value: data.completedBookings,
  },
]

const revenueChartData = [
  {
    name: 'Revenue',
    amount: data.monthlyRevenue,
  },
]

const COLORS = ['#f59e0b', '#10b981']

  const dashboardCards = [
    
    
    {
      title: "Total Cars",
      value: data.totalCars,
      icon: assets.carIconColored,
    },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "Confirmed",
      value: data.completedBookings,
      icon: assets.listIconColored,
    },
  ]

  const fetchDashboardData = async () => {
  try {
    const { data } = await axios.get('/api/owner/dashboard')

    if (data.success) {
      setData(data.dashboardData)
    } else {
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
}

useEffect(() => {
  if (isOwner) {
    fetchDashboardData()
  }
}, [isOwner])


  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>

      <Title
        title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      {/* Dashboard Cards */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>

        {dashboardCards.map((card, index) => (

          <div
            key={index}
            className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'
          >

            <div>
              <h1 className='text-xs text-gray-500'>
                {card.title}
              </h1>

              <p className='text-lg font-semibold'>
                {card.value}
              </p>
            </div>

            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
              <img
                src={card.icon}
                alt=""
                className='h-4 w-4'
              />
            </div>

          </div>

        ))}

      </div>

      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>

        {/* Recent Bookings */}

        <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full'>

          <h1 className='text-lg font-medium'>
            Recent Bookings
          </h1>

          <p className='text-gray-500'>
            Latest customer bookings
          </p>

          {data.recentBookings.map((booking, index) => (

            <div
              key={index}
              className='mt-4 flex items-center justify-between'
            >

              <div className='flex items-center gap-2'>

                <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>

                  <img
                    src={assets.listIconColored}
                    alt=""
                    className='h-5 w-5'
                  />

                </div>

                <div>

                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>

                  <p className='text-sm text-gray-500'>
                    {booking.createdAt.split('T')[0]}
                  </p>

                </div>

              </div>

              <div className='flex items-center gap-2 font-medium'>

                <p className='text-sm text-gray-500'>
                  {currency}{booking.price}
                </p>

                <p className='px-3 py-0.5 border border-borderColor rounded-full text-sm'>
                  {booking.status}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Monthly Revenue */}

        <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs'>

          <h1 className='text-lg font-medium'>
            Monthly Revenue
          </h1>

          <p className='text-gray-500'>
            Revenue for current month
          </p>

          <p className='text-3xl mt-6 font-semibold text-primary'>
            {currency}{data.monthlyRevenue}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">

  {/* Booking Status Chart */}
  <div className="p-4 md:p-6 border border-borderColor rounded-md">
    <h1 className="text-lg font-medium mb-4">
      Booking Status
    </h1>

    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={bookingChartData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          label
        >
          {bookingChartData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* Revenue Chart */}
  <div className="p-4 md:p-6 border border-borderColor rounded-md">
    <h1 className="text-lg font-medium mb-4">
      Revenue Analytics
    </h1>

    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={revenueChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  </div>

</div>

      </div>

    </div>
  )
}

export default Dashboard


// import { useState } from 'react'
// import { assets, dummyDashboardData } from '../../assets/assets'
// import Title from '../../components/owner/Title'

// const Dashboard = () => {

//   const currency = "₹"

//   const [data] = useState(dummyDashboardData)

//   const dashboardCards = [
//     {
//       title: "Total Cars",
//       value: data.totalCars,
//       icon: assets.carIconColored,
//     },
//     {
//       title: "Bookings",
//       value: data.totalBookings,
//       icon: assets.listIconColored,
//     },
//     {
//       title: "Pending",
//       value: data.pendingBookings,
//       icon: assets.cautionIconColored,
//     },
//     {
//       title: "Confirmed",
//       value: data.completedBookings,
//       icon: assets.listIconColored,
//     },
//   ]

//   return (
//     <div className='flex-1 p-8 bg-slate-50 min-h-screen'>

//       <Title
//         title="🚀 Admin Dashboard"
//         subTitle="Monitor cars, bookings, revenue and platform performance."
//       />

//       {/* Dashboard Cards */}

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>

//         {dashboardCards.map((card, index) => (

//           <div
//             key={index}
//             className='bg-white rounded-2xl shadow-md p-5 border hover:shadow-xl transition-all duration-300'
//           >

//             <div className='flex justify-between items-center'>

//               <div>
//                 <p className='text-gray-500 text-sm'>
//                   {card.title}
//                 </p>

//                 <h2 className='text-3xl font-bold mt-2'>
//                   {card.value}
//                 </h2>
//               </div>

//               <div className='bg-blue-100 p-4 rounded-full'>

//                 <img
//                   src={card.icon}
//                   alt=""
//                   className='w-6 h-6'
//                 />

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//       {/* Recent Bookings + Revenue */}

//       <div className='flex flex-col lg:flex-row gap-6'>

//         {/* Recent Bookings */}

//         <div className='bg-white rounded-2xl shadow-md p-6 w-full lg:w-2/3'>

//           <h2 className='text-xl font-semibold'>
//             Recent Bookings
//           </h2>

//           <p className='text-gray-500 mb-6'>
//             Latest customer bookings
//           </p>

//           {data.recentBookings.map((booking, index) => (

//             <div
//               key={index}
//               className='flex items-center justify-between py-4 border-b last:border-none'
//             >

//               <div className='flex items-center gap-4'>

//                 <div className='bg-blue-100 p-3 rounded-full'>

//                   <img
//                     src={assets.listIconColored}
//                     alt=""
//                     className='w-5 h-5'
//                   />

//                 </div>

//                 <div>

//                   <h3 className='font-medium'>
//                     {booking.car.brand} {booking.car.model}
//                   </h3>

//                   <p className='text-sm text-gray-500'>
//                     {booking.createdAt.split("T")[0]}
//                   </p>

//                 </div>

//               </div>

//               <div className='flex items-center gap-3'>

//                 <p className='font-semibold'>
//                   {currency}{booking.price}
//                 </p>

//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium
//                   ${
//                     booking.status === "confirmed"
//                       ? "bg-green-100 text-green-600"
//                       : "bg-yellow-100 text-yellow-600"
//                   }`}
//                 >
//                   {booking.status}
//                 </span>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* Revenue Card */}

//         <div className='bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-6 w-full lg:w-1/3'>

//           <h2 className='text-xl font-semibold'>
//             Monthly Revenue
//           </h2>

//           <p className='text-blue-100 mt-1'>
//             Revenue for current month
//           </p>

//           <div className='mt-10'>

//             <h1 className='text-5xl font-bold'>
//               {currency}{data.monthlyRevenue}
//             </h1>

//             <p className='mt-3 text-blue-100'>
//               +12% from last month
//             </p>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Dashboard
