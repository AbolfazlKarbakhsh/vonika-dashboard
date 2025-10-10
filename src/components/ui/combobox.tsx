"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import { Button, ButtonArrow } from "@/components/ui/button";
import {
  Command,
  CommandCheck,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

export type ComboboxOption = {
  value: string;
  label: string;
};

export interface ComboboxProps {
  value?: string | null;
  onChange: (nextValue: string | null) => void;
  options: ComboboxOption[];
  selectedOptions?: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  buttonClassName?: string;
  footer?: ReactNode;
  onSearchChange?: (value: string) => void;
}

function Combobox({
  value = null,
  onChange,
  options,
  selectedOptions = [],
  placeholder = "جستجو کنید",
  searchPlaceholder = "جستجو کنید...",
  emptyText = "موردی یافت نشد",
  buttonClassName,
  footer,
  onSearchChange,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel = useMemo(() => {
    const found = [...options, ...selectedOptions].find(
      (o) => o.value === value
    );
    return found?.label ?? "";
  }, [options, selectedOptions, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          autoHeight={true}
          mode="input"
          placeholder={!value}
          className={cn("relative w-full px-2.5", buttonClassName)}
        >
          <span className="truncate">
            {value ? selectedLabel : placeholder}
          </span>
          <ButtonArrow className="absolute end-3 top-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command>
          <CommandInput
            placeholder={searchPlaceholder}
            onValueChange={(v) => onSearchChange?.(v)}
          />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={`${option.value} ${option.label}`}
                  onSelect={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && <CommandCheck />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        {footer ? <div className="border-t p-2">{footer}</div> : null}
      </PopoverContent>
    </Popover>
  );
}

export { Combobox };
