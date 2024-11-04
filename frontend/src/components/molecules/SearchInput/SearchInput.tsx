import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative h-14 w-full max-w-[18.75rem] rounded-full bg-gray-600">
      <Search className="absolute right-6 top-1/4" />
    </div>
  );
}
