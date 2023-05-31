import "./index.css";
import { useEffect, useState } from "react";
import { current_weather } from "../../../servises/3rd_api";
import Image from "next/image";

export const Weather: React.FC = () => {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [iconCode, setIconCode] = useState("01d");

  function getCoordinates() {
    console.log(111111111);
    if (navigator.geolocation) {
      console.log(1122222111);

      navigator.geolocation.getCurrentPosition(showcoordinates);
    }
  }

  function showcoordinates(myposition: any) {
    console.log("myposition", myposition);
    setlatitude(myposition.coords.latitude);
    setlongitude(myposition.coords.longitude);
    console.log("Your Latitude is: " + myposition.coords.latitude);

    console.log("<br>Your Longitude is: " + myposition.coords.longitude);
    return {
      latitude: myposition.coords.latitude,
      longitude: myposition.coords.longitude,
    };
  }
  useEffect(() => {
    (() => getCoordinates())();
  }, []);

  async function getData() {
    console.log("getData happend");
    console.log("latitude happend", latitude, typeof latitude);
    console.log("latitude happend", typeof longitude, longitude);

    if (latitude != 0 && longitude != 0) {
      console.log(current_weather(latitude, longitude));

      /*  const res = await fetch(current_weather(latitude, longitude));
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log("data", data);

      setIconCode(data.weather[0].icon);
      return data;
     */
    }
  }

  useEffect(() => {
    console.log("getData happend2");

    (async () => {
      await getData();
    })();
  }, [latitude, longitude]);

  return (
    <>
      <div className="Weather">
        <span>
          {iconCode && (
            <img
              id="weather_icon"
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              width={50}
              height={50}
              alt="weather_icon icon"
            />
          )}
        </span>
        {new Date().toLocaleDateString("us", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </>
  );
};
