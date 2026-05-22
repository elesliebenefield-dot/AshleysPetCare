interface LogoProps {
  variant?: "horizontal" | "stacked";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconSizes = { sm: 28, md: 36, lg: 48 };
const nameSizes = { sm: "text-base", md: "text-xl", lg: "text-2xl" };
const taglineSizes = { sm: "text-[10px]", md: "text-xs", lg: "text-sm" };

export default function Logo({
  variant = "horizontal",
  size = "md",
  className = "",
}: LogoProps) {
  const iconPx = iconSizes[size];

  const icon = (
    <svg
      viewBox="0 0 32 32"
      width={iconPx}
      height={iconPx}
      aria-hidden="true"
      fill="none"
    >
      {/* Heart — paw body */}
      <path
        d="M16 27 C14 25 3 20 3 13 C3 7.5 8 5 12 5 C14 5 15.2 6.5 16 8.5 C16.8 6.5 18 5 20 5 C24 5 29 7.5 29 13 C29 20 18 25 16 27 Z"
        fill="#C97B84"
      />
      {/* Three toe pads — white circles inside heart */}
      <circle cx="11.5" cy="14.5" r="2.2" fill="white" />
      <circle cx="16" cy="12.5" r="2.2" fill="white" />
      <circle cx="20.5" cy="14.5" r="2.2" fill="white" />
    </svg>
  );

  const wordmark = (
    <div className={variant === "stacked" ? "text-center" : ""}>
      <div
        className={`font-heading font-semibold text-brand-charcoal leading-tight tracking-tight ${nameSizes[size]}`}
      >
        Ashley&apos;s Pet Care
      </div>
      <div
        className={`font-body text-brand-sage tracking-widest uppercase ${taglineSizes[size]}`}
      >
        From Leash to Love
      </div>
    </div>
  );

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {icon}
        {wordmark}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {icon}
      {wordmark}
    </div>
  );
}
