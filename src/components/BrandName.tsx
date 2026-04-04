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
      e
      <span className="relative inline-block">
        l
        {/* Arrow on top of l */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-[0.35em]"
          width="0.45em"
          height="0.45em"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l-6 8h4v12h4V10h4z" />
        </svg>
      </span>
      a
    </span>
  );
};

export default BrandName;
