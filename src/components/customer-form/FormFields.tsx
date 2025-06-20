
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onInputChange: (field: string, value: string) => void;
  onBlur: (field: string) => void;
}

const FormFields = ({ formData, errors, touched, onInputChange, onBlur }: FormFieldsProps) => {
  const getFieldStatus = (field: string) => {
    const hasError = errors[field] && touched[field];
    const isValid = !errors[field] && touched[field] && formData[field as keyof typeof formData];
    return { hasError, isValid };
  };

  return (
    <div className="space-y-4">
      {/* Name Field */}
      <div className="relative">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name *
        </Label>
        <div className="relative mt-1">
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            onBlur={() => onBlur('name')}
            placeholder="Enter your full name"
            className={`transition-all duration-200 ${
              getFieldStatus('name').hasError 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : getFieldStatus('name').isValid 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : 'focus:border-blue-500 focus:ring-blue-500'
            } hover:border-gray-400`}
            required
          />
          {getFieldStatus('name').isValid && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
          )}
          {getFieldStatus('name').hasError && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
          )}
        </div>
        {errors.name && touched.name && (
          <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </Label>
        <div className="relative mt-1">
          <Input
            id="email"
            type="email"
            inputMode="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            onBlur={() => onBlur('email')}
            placeholder="Enter your email"
            className={`transition-all duration-200 ${
              getFieldStatus('email').hasError 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : getFieldStatus('email').isValid 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : 'focus:border-blue-500 focus:ring-blue-500'
            } hover:border-gray-400`}
            required
          />
          {getFieldStatus('email').isValid && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
          )}
          {getFieldStatus('email').hasError && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
          )}
        </div>
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="relative">
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone Number (Optional)
        </Label>
        <div className="relative mt-1">
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            onBlur={() => onBlur('phone')}
            placeholder="Enter your phone number"
            className={`transition-all duration-200 ${
              getFieldStatus('phone').hasError 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : getFieldStatus('phone').isValid 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : 'focus:border-blue-500 focus:ring-blue-500'
            } hover:border-gray-400`}
          />
          {getFieldStatus('phone').isValid && (
            <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
          )}
          {getFieldStatus('phone').hasError && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
          )}
        </div>
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.phone}</p>
        )}
      </div>
    </div>
  );
};

export default FormFields;
