import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-primary-foreground" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-surface-dark text-surface-dark-foreground">
          Chat with us on WhatsApp
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default WhatsAppButton;
