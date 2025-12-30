import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { booksData } from "./Books";
import type { Book} from "./Books"
import BookCard from "./Muicard";
import LibraryTabs from "./LibrarayTabs";

const LOCAL_STORAGE_KEY = "my-library-books";

const MyLibrary = () => {
  const [books, setBooks] = useState<Book[]>(() => {
    const storedBooks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedBooks ? JSON.parse(storedBooks) : booksData;
  });

  const [tab, setTab] = useState(0);

  const handleAction = (id: number) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "reading" ? "finished" : "reading",
            }
          : book
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const filteredBooks = books.filter((book) =>
    tab === 0 ? book.status === "reading" : book.status === "finished"
  );

  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={2}>
        My Library
      </Typography>

      <LibraryTabs value={tab} onChange={setTab} />
      <Grid container spacing={3}>
        {filteredBooks.map((book) => (
          <Grid>
            <BookCard book={book} onAction={handleAction} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyLibrary;
