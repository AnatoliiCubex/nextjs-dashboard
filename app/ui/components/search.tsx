"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { ChangeEvent } from "react";
import { useCustomSearchParams } from "~/app/hooks/use-custom-search-params";

export default function Search({ placeholder }: { placeholder: string }) {
  const { searchParams, handleChangeParams } = useCustomSearchParams();

  return (
    <div className='relative flex flex-shrink-0 flex-1'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='block border-gray-200 py-[9px] pl-10 border rounded-md w-full text-sm placeholder:text-gray-500 outline-2 peer'
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleChangeParams("query", e.target.value)}
      />
      <MagnifyingGlassIcon className='top-1/2 left-3 absolute w-[18px] h-[18px] text-gray-500 peer-focus:text-gray-900 -translate-y-1/2' />
    </div>
  );
}
