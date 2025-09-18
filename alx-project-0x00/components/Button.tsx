// components/Button.tsx
import { ButtonProps } from "@/interfaces";

export default function Button({ label, styles, onClick }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white ${styles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
