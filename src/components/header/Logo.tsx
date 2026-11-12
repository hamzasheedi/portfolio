import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      className="MMQH-header__logo"
      href="/"
      aria-label="MMQH home"
      onClick={onClick}
    >
      MMQH<span aria-hidden="true">.</span>
    </Link>
  );
}
