import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`overflow-hidden rounded shadow-sm transform hover:scale-105 transition-transform duration-75 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
