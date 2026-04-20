import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-[800px] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-full max-w-lg rounded-2xl border border-surface-dark/40 bg-bg/70 px-8 py-14 shadow-[0_12px_40px_rgba(20,40,61,0.08)]">
        <div className="relative mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full border border-accent-deep/50 animate-drift">
          <Image
            src="/brand/logo.jpeg"
            alt="Whalecoin"
            fill
            sizes="112px"
            className="object-cover scale-[1.05]"
          />
        </div>
        <span className="eyebrow mb-4">404 · Lost at Sea</span>
        <h1 className="font-display text-display-lg text-text mb-4">
          This signal did not surface.
        </h1>
        <p className="text-text-muted mb-10 mx-auto max-w-md leading-[1.6]">
          The page you were looking for has drifted beyond the map. The deep
          keeps some things to itself.
        </p>
        <Link
          href="/"
          className="ink-link text-text text-[14px] tracking-widest uppercase"
        >
          Return to the Current
        </Link>
      </div>
    </section>
  );
}
