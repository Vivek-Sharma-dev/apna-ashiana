import { useEffect, useState } from "react";
import LISTING_API from "../api/api";
import axios, { AxiosError } from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await LISTING_API.get("/listin");

        console.log(res.status);
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("Axios error:", err.response?.data || err.message);
          setErr(err.response?.data.message || err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div>This is the Home page</div>
      <div>hello</div>
      {}
    </>
  );
};

export default Home;
