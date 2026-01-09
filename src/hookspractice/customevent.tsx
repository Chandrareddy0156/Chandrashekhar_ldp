
import type { ReactNode } from 'react';

type ButtonProps = {
  onSmash: () => void;
  children: ReactNode;
};

function Button({ onSmash, children }: ButtonProps) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>

      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
