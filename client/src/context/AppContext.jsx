import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [token, setToken] = useState(
    () => localStorage.getItem("token")
  );
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch Cars
  const fetchCars = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "/api/user/cars"
      );

      if (data.success) {
        setCars(data.cars);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  // Fetch Wishlist
  const fetchWishlist = async () => {
    try {
      const { data } = await axios.get(
        "/api/user/wishlist"
      );

      if (data.success) {
        setWishlist(data.wishlist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle Wishlist
  const toggleWishlist = async (carId) => {
    try {
      const { data } = await axios.post(
        "/api/user/wishlist",
        {
          carId,
        }
      );

      if (data.success) {
        await fetchWishlist();
        toast.success("Wishlist Updated");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch User
  const fetchUser = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "/api/user/data"
      );

      if (data.success) {
        setUser(data.user);
        setIsOwner(
          data.user.role === "owner"
        );
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [navigate]);

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    setWishlist([]);

    delete axios.defaults.headers.common[
      "Authorization"
    ];

    toast.success(
      "You have been logged out"
    );
  };

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = token;

      fetchUser();
      fetchWishlist();
    }
  }, [token, fetchUser]);

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    fetchUser,
    showLogin,
    setShowLogin,
    logout,
    fetchCars,
    cars,
    setCars,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    wishlist,
    setWishlist,
    fetchWishlist,
    toggleWishlist,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};