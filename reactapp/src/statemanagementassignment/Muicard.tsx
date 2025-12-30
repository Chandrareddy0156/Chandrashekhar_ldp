import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
  } from "@mui/material";
  import AccessTimeIcon from "@mui/icons-material/AccessTime";
  import PersonIcon from "@mui/icons-material/Person";
  import type { Book } from "./Books"
  
  interface Props {
    book: Book;
    onAction: (id: number) => void;
  }
  
  const BookCard = ({ book, onAction }: Props) => {
    const isReading = book.status === "reading";
  
    return (
      <Card sx={{ width: 260 }}>
        <CardMedia
          component="img"
          height="180"
          image={book.image}
          alt={book.title}
        />
  
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600}>
            {book.title}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
  
          <Stack direction="row" spacing={1} mt={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="caption">{book.time}</Typography>
  
            <PersonIcon fontSize="small" />
            <Typography variant="caption">{book.reads}</Typography>
          </Stack>
  
          <Button
            variant="text"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => onAction(book.id)}
          >
            {isReading ? "Finished" : "Read again"}
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  export default BookCard;
  