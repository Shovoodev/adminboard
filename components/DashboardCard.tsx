const DashboardCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-primary-foreground p-4 rounded-lg shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
