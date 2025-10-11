import type { ComponentProps } from "react";
import {
  IconChevronDown,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import avatarImage from "@/assets/img/avatar.png"

export default function ProfileInHeader({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const user = {
    full_name: "ابوالفضل کاربخش ",
    mobile: "۰۹۰۲۳۱۲۷۶۱۵",
    avatar:avatarImage,
  };

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("rounded-full has-[>svg]:px-0.5", className)}
          {...props}
        >
          <Avatar className="size-8 rounded-full">
            <AvatarImage src={user.avatar} alt={user.full_name} />
            <AvatarFallback className="rounded-lg">ا</AvatarFallback>
          </Avatar>
          <IconChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-right text-sm">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.full_name} />
              <AvatarFallback className="rounded-lg">ا</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-right text-sm leading-tight">
              <span className="truncate font-medium">{user.full_name}</span>
              <span className="truncate text-muted-foreground text-xs">{user.mobile}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <Link to="/profile">
          <DropdownMenuItem className="cursor-pointer">
            <IconUserCircle />
            حساب کاربری
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" >
          <IconLogout />
          خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
