import { cn } from "@/lib/utils";
import toowelaLogo from "@/assets/toowela-logo.jpeg";

interface BrandNameProps {
  className?: string;
}

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <img
      src={toowelaLogo}
      alt="TooWela"
      className={cn("h-10 md:h-12 w-auto object-contain", className)}
    />
  );
};

export default BrandName;
