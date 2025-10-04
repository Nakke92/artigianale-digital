export const BeerBubbles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[9999]">
      {[...Array(35)].map((_, i) => (
        <div
          key={i}
          className="beer-bubble"
          style={{
            '--bubble-size': `${Math.random() * 35 + 20}px`,
            '--bubble-duration': `${Math.random() * 5 + 6}s`,
            '--bubble-delay': `${Math.random() * 8}s`,
            '--bubble-drift': `${(Math.random() - 0.5) * 80}px`,
            left: `${Math.random() * 100}%`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
