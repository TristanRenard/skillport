import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p className="text-primary">
        Primary color
      </p>
      <p className="text-secondary">
        Secondary color
      </p>
      <p className="text-tertiary">
        Tertiary color
      </p>
      <p className="text-quaternary">
        Quaternary color
      </p>
      <p className="text-quinary">
        Quinary color
      </p>
    </>
  );
}
