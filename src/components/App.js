import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/kamars";
import "./App.css";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddKamar from "./AddKamar";
import KamarList from "./KamarList";
import KamarDetail from "./KamarDetail";
import EditKamar from "./EditKamar";
import { useEffect, useState } from "react";

function App() {
  const [kamars, setKamars] = useState([]);

  // RetriveKamars
  const retriveKamars = async () => {
    const response = await api.get("/kamars");
    return response.data;
    // setKamars(response.data);
  };

  const addKamarHandler = async (kamar) => {
    const request = {
      id: uuid(),
      ...kamar,
    };

    const response = await api.post("/kamars", request);
    setKamars([...kamars, response.data]);
  };

  const updateKamarHandler = async (contact) => {
    const response = await api.put(`kamars/${contact.id}`, contact);
    const { id } = response.data;
    setKamars(
      kamars.map((kamar) => {
        return kamar.id === id ? { ...response.data } : kamar;
      })
    );
  };

  const removeKamarHandler = async (id) => {
    if (window.confirm("Anda Yakin Menhapus Kamar ini!")) {
      await api.delete(`/kamars/${id}`);
      const newKamarList = kamars.filter((kamar) => {
        return kamar.id !== id;
      });

      setKamars(newKamarList);
    }
  };

  useEffect(() => {
    const getAllKamars = async () => {
      const allKamars = await retriveKamars();
      if (allKamars) setKamars(allKamars);
    };

    getAllKamars();
  }, []);

  useEffect(() => {}, [kamars]);

  // console.log(kamars);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <KamarList
                {...props}
                kamars={kamars}
                getKamarId={removeKamarHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddKamar {...props} addKamarHandler={addKamarHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditKamar {...props} updateKamarHandler={updateKamarHandler} />
            )}
          />
          <Route path="/kamar" component={KamarDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
