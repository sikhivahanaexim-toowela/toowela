import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
}

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <span className={cn("font-heading text-2xl md:text-3xl font-bold tracking-tight", className)}>
      Too
      <span className="relative inline-block">
        <span style={{ clipPath: "inset(0 50% 0 0)" }}>W</span>
        <span className="absolute inset-0 text-primary" style={{ clipPath: "inset(0 0 0 50%)" }}>W</span>
      </span>
      ela
    </span>
  );
};

export default BrandName;
