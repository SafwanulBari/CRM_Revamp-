export function WelcomeBanner({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-heading text-[28px] leading-[1.24] text-dark-600">
        Welcome Back, <span className="font-bold text-dark-950">{name}</span>
      </h1>
      <span className="text-2xl" role="img" aria-label="waving hand">
        👋
      </span>
    </div>
  );
}
