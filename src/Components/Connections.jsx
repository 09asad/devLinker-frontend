import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {

    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1 className="text-center my-10 font-bold text-2xl"> No Connection Found </h1>;

  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-10">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, age, gender, about, photoURL } = connection;

        return (
          <div className="flex items-center gap-8 bg-base-300 p-3 rounded-2xl my-3 cursor-pointer">
            <img src={photoURL} alt="photo" className="w-30 h-30 rounded-full object-cover" />
            <div>
              <h2 className="font-bold text-xl">{firstName} {lastName}</h2>
              <p>{age}, {gender}</p>
              <p className="text-sm mt-2">{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;