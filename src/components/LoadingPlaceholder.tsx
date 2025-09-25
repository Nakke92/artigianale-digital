import { cn } from '@/lib/utils';

interface LoadingPlaceholderProps {
  className?: string;
  aspectRatio?: string;
}

export const LoadingPlaceholder = ({ className, aspectRatio = "1/1" }: LoadingPlaceholderProps) => {
  return (
    <div 
      className={cn(
        "loading-placeholder rounded-lg animate-pulse",
        aspectRatio === "1/1" && "aspect-square",
        aspectRatio === "16/9" && "aspect-video",
        className
      )}
      style={{ aspectRatio }}
    />
  );
};