import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const useCustomSearchParams = (wait?: number) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeParams = useDebouncedCallback(
    (param: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      value ? params.set("query", value) : params.delete("query");
      replace(`${pathname}?${params.toString()}`);
    },
    wait ?? 300
  );

  return { searchParams, handleChangeParams };
};
