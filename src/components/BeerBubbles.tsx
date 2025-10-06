export const BeerBubbles = () => {
  // Genera 90 bollicine con proprietà casuali per maggiore densità
  const bubbles = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // 4-12px
    duration: Math.random() * 6 + 4, // 4-10s
    delay: Math.random() * 8, // 0-8s
    left: Math.random() * 100, // 0-100%
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="beer-bubble-wrapper"
          style={{
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="beer-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDuration: `${bubble.duration * 0.6}s`,
              animationDelay: `${bubble.delay}s`,
              willChange: 'transform',
            }}
          />
        </div>
      ))}
    </div>
  );
};
