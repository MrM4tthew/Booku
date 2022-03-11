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
    setSavedBook({});
  };

  const deleteBook = () => {
    const updateList = data.filter((x) => x.title != savedBook.title);
    setData(updateList);
    setSavedBook({});
  };

  return (
    <BookContext.Provider
      value={{
        data,
        setSavedBook,
        saveBook,
        deleteBook,
        savedBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
