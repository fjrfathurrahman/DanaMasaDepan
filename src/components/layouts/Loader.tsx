import { Skeleton } from "@nextui-org/react";

export function Text() {
  return (
    <>
      <Skeleton className="w-3/4 h-6 rounded-lg" />
      <Skeleton className="w-4/5 h-6 rounded-lg" />
      <Skeleton className="w-2/5 h-6 rounded-lg" />
    </>
  );
}

export function Fragment() {
  return (
    <>
      <Skeleton className="w-full h-14 rounded-xl" />
      <Skeleton className="w-full h-14 rounded-xl" />
      <Skeleton className="w-full h-14 rounded-xl" />
    </>
  );
}

export const Loader = { Text, Fragment };
