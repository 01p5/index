import clsx from "clsx";

export function Card({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      {...rest}
      className={clsx(
        "bg-dark-panel/80 border border-border-subtle rounded-lg",
        "transition-colors duration-200 hover:border-border-active",
        className,
      )}
    />
  );
}
