import { useState, createContext, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [data, setData] = useState([]);
  const [savedBook, setSavedBook] = useState({});

  useEffect(() => {
    if (localStorage.getItem("bookmark") == null) {
      localStorage.setItem("bookmark", JSON.stringify([]));
    }

    var currentData = JSON.parse(localStorage.getItem("bookmark"));
    setData(currentData);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(data));
  }, [data]);

  const saveBook = () => {
    setData([...data, savedBook]);
  };

  return (
    <BookContext.Provider
      value={{
        data,
        setSavedBook,
        saveBook,
        savedBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
