export const BeerBubbles = () => {
  // Genera 60 bollicine con proprietà casuali
  const bubbles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // 4-12px
    duration: Math.random() * 6 + 4, // 4-10s
    delay: Math.random() * 8, // 0-8s
    left: Math.random() * 100, // 0-100%
    wobbleOffset: Math.random() * 20 - 10, // -10px a +10px
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="beer-bubble absolute"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s, ${bubble.duration * 0.6}s`,
            animationDelay: `${bubble.delay}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};
