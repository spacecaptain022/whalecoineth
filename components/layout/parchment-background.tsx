export function ParchmentBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none bg-bg"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: "url(/textures/parchment.svg)",
          backgroundSize: "720px 720px",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
