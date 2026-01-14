import { PropsWithChildren } from "react";

type DashboardCardProps = PropsWithChildren<{
  className?: string;
}>;

const DashboardCard = ({ children, className = "" }: DashboardCardProps) => {
  return (
    <div
      className={`bg-primary-foreground p-4 rounded-lg shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
export default DashboardCard;
