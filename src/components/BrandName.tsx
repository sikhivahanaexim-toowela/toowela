interface BrandNameProps {
  className?: string;
}

const BrandName = ({ className = "text-2xl md:text-3xl" }: BrandNameProps) => {
  return (
    <span className={`font-heading font-bold tracking-tight ${className}`}>
      Too
      <span className="relative inline-block">
        <span className="text-foreground" style={{ clipPath: "inset(0 50% 0 0)" }}>W</span>
        <span className="absolute inset-0 text-primary" style={{ clipPath: "inset(0 0 0 50%)" }}>W</span>
      </span>
      ela
    </span>
  );
};

export default BrandName;
