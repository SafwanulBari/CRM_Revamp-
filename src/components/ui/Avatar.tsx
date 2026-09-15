const AVATAR_PHOTOS = ["/figma/avatar-1.png", "/figma/avatar-2.png"];

export function avatarForIndex(index: number): string {
  return AVATAR_PHOTOS[index % AVATAR_PHOTOS.length];
}

export function Avatar({ src, name, size = 32 }: { src: string; name: string; size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border-[0.44px] border-violet-50 bg-gradient-to-b from-[#d7d5ff] to-[#576bff]"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} className="h-full w-full object-cover" />
    </div>
  );
}
