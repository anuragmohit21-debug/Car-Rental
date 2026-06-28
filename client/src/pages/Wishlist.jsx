import React from "react";
import Title from "../components/Title";
import CarCard from "../components/CarCard";
import { useAppContext } from "../context/AppContext";

const Wishlist = () => {
  const { wishlist } = useAppContext();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-16">
      <Title
        title="My Wishlist"
        subTitle="Your favourite cars in one place"
        align="left"
      />

      {wishlist.length === 0 ? (
        <p className="mt-10 text-gray-500">
          No cars added to wishlist ❤️
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {wishlist.map((car) => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;