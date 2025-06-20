
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled?: boolean;
}

const SubmitButton = ({ isSubmitting, disabled = false }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 transition-all duration-300 transform ${
        isSubmitting ? 'scale-95' : 'hover:scale-105'
      } hover:shadow-lg active:scale-95`}
      disabled={isSubmitting || disabled}
    >
      {isSubmitting ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Submitting...</span>
        </div>
      ) : (
        <>
          Submit & Leave Review
          <Star className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
