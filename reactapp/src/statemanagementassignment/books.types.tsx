export interface Book {
    id: number;
    title: string;
    author: string;
    readTime: string;
    status: 'currentlyReading' | 'finished';
    coverColor: string;
  }
  
  export interface TabData {
    label: string;
    value: number;
    status: BookStatus;
  }
  
  export type BookStatus = 'currentlyReading' | 'finished';
  
  export interface LibraryStats {
    currentlyReading: number;
    finished: number;
    total: number;
    percentageFinished: number;
  }
  