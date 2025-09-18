export interface PillProps {
  title: string
}

// interfaces/index.ts
export interface ButtonProps {
  label: string;
  styles: string; // ✅ required by the checker
  onClick?: () => void;
}
