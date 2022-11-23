import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form class="search-box"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        autocomplete="on"
        placeholder="Buscar Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      {/* <input type="submit" value="" /> */}
      <button type="reset"></button>
    </form>
  );
}
