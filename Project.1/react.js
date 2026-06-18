import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE";

  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");
      setWeather(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        setError("City not found ❌");
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Error fetching data");
    }
  };

  return (
    <div style={styles.app}>
      <h1>🌤 Weather App Clone</h1>

      <div style={styles.searchBox}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button style={styles.button} onClick={getWeather}>
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={styles.card}>
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🤖 Condition: {weather.weather[0].main}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial",
    background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
    minHeight: "100vh",
    paddingTop: "60px",
  },
  searchBox: {
    margin: "20px",
  },
  input: {
    padding: "10px",
    width: "200px",
    borderRadius: "6px",
    border: "none",
  },
  button: {
    padding: "10px",
    marginLeft: "10px",
    border: "none",
    background: "#333",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    marginTop: "20px",
    background: "white",
    display: "inline-block",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};