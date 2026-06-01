import { useState } from "react";
import axios from "axios";

function BusSearch() {
const [source, setSource] = useState("");
const [destination, setDestination] = useState("");
const [buses, setBuses] = useState([]);

const searchBus = async () => {
const res = await axios.get(
"http://localhost:5000/api/buses",
{
params: {
source,
destination
}
}
);

```
setBuses(res.data);
```

};

return ( <div> <h2>Search Buses</h2>

```
  <input
    placeholder="From"
    onChange={(e) => setSource(e.target.value)}
  />

  <input
    placeholder="To"
    onChange={(e) => setDestination(e.target.value)}
  />

  <button onClick={searchBus}>
    Search
  </button>

  <hr />

  {buses.map((bus) => (
    <div key={bus.id}>
      <h3>{bus.bus_name}</h3>
      <p>Fare: ₹{bus.fare}</p>
      <p>Departure: {bus.departure_time}</p>
      <button>Book Now</button>
    </div>
  ))}
</div>
```

);
}

export default BusSearch;
