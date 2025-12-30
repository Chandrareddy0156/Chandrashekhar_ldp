export interface Book {
    id: number;
    title: string;
    author: string;
    time: string;
    reads: string;
    image: string;
    status: "reading" | "finished";
  }
  
  export const booksData: Book[] = [
    {
      id: 1,
      title: "Bring Your Human to Work",
      author: "Erica Keswin",
      time: "13-minute read",
      reads: "1.9k reads",
      image: "/images/book1.svg",
      status: "reading",
    },
    {
      id: 2,
      title: "Employee to Entrepreneur",
      author: "Steve Glaveski",
      time: "15-minute read",
      reads: "1.5k reads",
      image: "/images/book2.svg",
      status: "reading",
    },
    {
      id: 3,
      title: "Beyond Entrepreneurship 2.0",
      author: "Jim Collins & Bill Lazier",
      time: "13-minute read",
      reads: "2k reads",
      image: "/images/book3.svg",
      status: "finished",
    },
  ];
  