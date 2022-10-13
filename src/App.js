import React from "react";
import List from "./components/List";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  /* STATES START*/
  const [formData, setFormData] = React.useState({ place: "" });
  const [counter, setCounter] = React.useState(0);
  const [coords, setCoords] = React.useState({
    lon: "",
    lat: "",
  });
  const [places, setPlaces] = React.useState([]);
  const pageLength = 5;
  const [offset, setOffset] = React.useState(0);
  const [numOfPlaces, setNumOfPlaces] = React.useState("");
  //const [btnStatus, setBtnStatus] = React.useState("visible");
  const [placeInfo, setPlaceInfo] = React.useState({});

  /** STATES END */

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const apikey = "5ae2e3f221c38a28845f05b67086197a9b692fe955df4ed765b9213a";

  React.useEffect(() => {
    function getApi(method, query) {
      return new Promise(function(resolve, reject) {
        let apiURL =
          "https://api.opentripmap.com/0.1/en/places/" +
          method +
          "?apikey=" +
          apikey;
        if (query !== undefined) {
          apiURL += "&" + query;
        }
        fetch(apiURL)
          .then((res) => res.json())
          .then((data) => resolve(data))
          .catch(function(err) {
            console.log("Fetch Error: -S", err);
          });
      });
    }

    if (formData.place !== "") {
      getApi("geoname", `name=${formData.place}`).then(function(data) {
        let message = "Name not found";
        if (data.status === "OK") {
          setCoords((prevCoords) => {
            return {
              lon: data.lon,
              lat: data.lat,
            };
          });
          setPlaceInfo(data);
          message = data.name;
          console.log(message, data);
        }
      });
    }
  }, [counter]);

  React.useEffect(() => {
    const getCityFromApi = async () => {
      const url = `https://api.opentripmap.com/0.1/en/places/radius?apikey=${apikey}&rate=3&radius=1000&offset=${offset}&lon=${coords.lon}&lat=${coords.lat}&format=count`;
      const res = await fetch(url);
      const data = await res.json();
      setNumOfPlaces(data.count);
    };

    const loadList = async () => {
      const url = `https://api.opentripmap.com/0.1/en/places/radius?apikey=${apikey}&rate=3&radius=1000&limit=${pageLength}&offset=${offset}&lon=${coords.lon}&lat=${coords.lat}&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
      setPlaces(data);
    };

    if (coords.lat !== "") {
      getCityFromApi();
      loadList();
    }
  }, [coords.lat, offset]);

  function handleSubmit(e) {
    e.preventDefault();
    setOffset(0);

    setCounter((prevCount) => prevCount + 1);
    //console.log(formData.place);
  }

  function nextFive() {
    setOffset((prevOffset) => prevOffset + 5);
  }

  function prevFive() {
    setOffset((prevOffset) => prevOffset - 5);
  }

  return (
    <div className="container">
      <Header city={formData.place} />
      <div className="row">
        <div className="col-md-12 p-4">
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              id="search"
              className="input-group mt-5 mb-4 border p-1"
            >
              <div className="input-group-prepend border-0">
                <button className="btn btn-link ">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <input
                type="search"
                placeholder="Region, city, village,  etc. (e.g. Konya)"
                className="form-control bg-none border-0"
                value={formData.place}
                name="place"
                onChange={handleChange}
              />
            </form>
          </div>

          <Info numOfPlaces={numOfPlaces} city={placeInfo} />
          <List
            offset={offset}
            pageLength={pageLength}
            numOfPlaces={numOfPlaces}
            places={places}
            nextFive={nextFive}
            prevFive={prevFive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
