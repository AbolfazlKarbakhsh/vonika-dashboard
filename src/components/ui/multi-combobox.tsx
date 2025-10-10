"use client";

import { type ReactNode, useMemo, useState } from "react";

import { IconX } from "@tabler/icons-react";

import { Badge, BadgeButton } from "@/components/ui/badge";
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

export type MultiComboboxOption = {
  value: string;
  label: string;
};

export interface MultiComboboxProps {
  value: string[];
  onChange: (nextValues: string[]) => void;
  options: MultiComboboxOption[];
  selectedOptions?: MultiComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  maxShownItems?: number;
  buttonClassName?: string;
  hasError?: boolean;
  footer?: ReactNode;
  onSearchChange?: (value: string) => void;
}

function MultiCombobox({
  value,
  onChange,
  options,
  selectedOptions = [],
  placeholder = "موارد را انتخاب کنید",
  searchPlaceholder = "جستجو...",
  emptyText = "موردی یافت نشد.",
  maxShownItems = 2,
  buttonClassName,
  hasError = false,
  footer,
  onSearchChange,
}: MultiComboboxProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { visibleItems, hiddenCount } = useMemo(() => {
    const items = expanded ? value : value.slice(0, maxShownItems);
    return { visibleItems: items, hiddenCount: value.length - items.length };
  }, [expanded, maxShownItems, value]);

  const toggleSelection = (val: string) => {
    onChange(
      value.includes(val) ? value.filter((v) => v !== val) : [...value, val]
    );
  };

  const removeSelection = (val: string) => {
    onChange(value.filter((v) => v !== val));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          mode="input"
          aria-expanded={open}
          aria-invalid={hasError}
          autoHeight
          className={cn(
            "has-[[aria-invalid=true]]:border-destructive/60",
            "has-[[aria-invalid=true]]:ring-destructive/10",
            "dark:has-[[aria-invalid=true]]:border-destructive",
            "dark:has-[[aria-invalid=true]]:ring-destructive/20",
            "relative w-full px-1.5 py-1",
            buttonClassName
          )}
        >
          <div className="flex flex-wrap items-center gap-1 pe-2.5">
            {value.length > 0 ? (
              <>
                {visibleItems.map((val) => {
                  const allOptions = [...options, ...selectedOptions];
                  const option = allOptions.find((o) => o.value === val);
                  return option ? (
                    <Badge key={val} variant="outline">
                      {option.label}
                      <BadgeButton
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSelection(val);
                        }}
                      >
                        <IconX />
                      </BadgeButton>
                    </Badge>
                  ) : null;
                })}
                {hiddenCount > 0 || expanded ? (
                  <Badge
                    className="cursor-pointer px-1.5 text-muted-foreground hover:bg-accent"
                    appearance="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded((prev) => !prev);
                    }}
                  >
                    {expanded ? "نمایش کمتر" : `+${hiddenCount} بیشتر`}
                  </Badge>
                ) : null}
              </>
            ) : (
              <span className="px-2.5 text-muted-foreground">
                {placeholder}
              </span>
            )}
          </div>
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
                  onSelect={() => toggleSelection(option.value)}
                >
                  <span className="truncate">{option.label}</span>
                  {value?.includes(option.value) && <CommandCheck />}
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

export { MultiCombobox };
