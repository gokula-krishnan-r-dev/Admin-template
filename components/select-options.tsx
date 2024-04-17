import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define an interface for the option type
interface Option {
  value: string;
  label: string;
}

// Define an interface for the component's props
interface SelectOptionsProps {
  placeholder?: string;
  options: Option[];
  buttonProps?: React.ComponentPropsWithoutRef<"button">; // Using a utility type to accept all valid button props
  onValueChange?: any;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({
  placeholder = "Select option",
  options,
  buttonProps,
  onValueChange,
}) => {
  return (
    <div>
      <Select onValueChange={onValueChange}>
        <SelectTrigger
          {...buttonProps}
          className={`w-[180px] ${buttonProps?.className || ""}`.trim()}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectOptions;
