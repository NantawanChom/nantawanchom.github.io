interface HexPatternProps {
  color?: string;
  opacity?: number;
  scale?: number;
  className?: string;
}
export function HexPattern({
  color = "#6B8E6B",
  opacity = 0.05,
  scale = 1,
  className = "",
}: HexPatternProps) {
  // A single hexagon path
  const path = "M28 0L56 16V48L28 64L0 48V16L28 0Z";
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        zIndex: 0,
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hex-pattern"
            width={56 * scale}
            height={96 * scale}
            patternUnits="userSpaceOnUse"
            patternTransform={`scale(${scale})`}
          >
            {/* Staggered grid of hexagons */}
            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
            />

            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
              transform="translate(28, 48)"
            />

            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
              transform="translate(-28, 48)"
            />

            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
              transform="translate(56, 0)"
            />

            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
              transform="translate(28, -48)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
  );
}
