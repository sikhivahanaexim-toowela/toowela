import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
}

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <span className={cn("text-2xl md:text-3xl font-bold tracking-tight", className)} style={{ fontFamily: "'Russo One', sans-serif" }}>
      Too
      <span className="relative inline-block">
        <span className="text-primary" style={{ clipPath: "inset(0 50% 0 0)" }}>W</span>
        <span className="absolute inset-0" style={{ clipPath: "inset(0 0 0 50%)" }}>W</span>
      </span>
      e
      <span className="relative inline-block">
        <span className="font-black">l</span>
        <span
          className="absolute left-1/2 -translate-x-1/2 -top-[0.3em] text-[0.5em] font-black leading-none"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          ▲
        </span>
      </span>
      a
    </span>
  );
};

export default BrandName;
