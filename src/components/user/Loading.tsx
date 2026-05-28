import { Skeleton } from "../ui/skeleton";
const Loading = () => {
  return (
    <div>
      <Skeleton className="h-48.5 w-full lg:w-1/2 mb-8 required" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <Skeleton className="h-17.5 rounded" />
        <Skeleton className="h-17.5 rounded" />
        <Skeleton className="h-17.5 rounded" />
        <Skeleton className="h-17.5 rounded" />
      </div>
    </div>
  );
};
export default Loading;
