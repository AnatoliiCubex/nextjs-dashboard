import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const useCustomSearchParams = (wait?: number) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeParams = useDebouncedCallback(
    (param: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if (param === "query") params.set("page", "1");

      if (value) {
        params.set(param, value);
      } else {
        params.delete(param);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    wait ?? 300
  );

  return { searchParams, handleChangeParams };
};
