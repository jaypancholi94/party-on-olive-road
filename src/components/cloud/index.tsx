import { CLOUD_STYLE } from '@/constants/cloud';
import { generateRadialGradient } from '@/utils/cloud';
type CloudProps = {
  type: 'small' | 'medium' | 'large';
  position: { x: number; y: number };

  velocity: 3 | 5 | 7 | -3 | -5 | -7;
  opacity: number;
  scale: number;
};

const Cloud = ({ type, position, velocity, opacity, scale }: CloudProps) => {
  if (type === 'small') {
    return (
      <div
        className="absolute"
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
          opacity: opacity,
          scale: scale,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={CLOUD_STYLE.small.base}>
          <div
            className={CLOUD_STYLE.small.puff1}
            style={generateRadialGradient({
              p1: 100,
              p2: 80,
              c1: 110,
              c2: 130,
            })}
          />
          <div
            className={CLOUD_STYLE.small.puff2}
            style={generateRadialGradient({ p1: 161, p2: 130, c1: 74, c2: 86 })}
          />
        </div>
      </div>
    );
  }
  if (type === 'medium') {
    return (
      <div
        className="absolute"
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
          opacity: opacity,
          scale: scale,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={CLOUD_STYLE.medium.base}>
          <div
            className={CLOUD_STYLE.medium.puff1}
            style={generateRadialGradient({
              p1: 100,
              p2: 80,
              c1: 110,
              c2: 130,
            })}
          />
          <div
            className={CLOUD_STYLE.medium.puff2}
            style={generateRadialGradient({ p1: 161, p2: 124, c1: 72, c2: 90 })}
          />
          <div
            className={CLOUD_STYLE.medium.puff3}
            style={generateRadialGradient({
              p1: 100,
              p2: 80,
              c1: 110,
              c2: 130,
            })}
          />
          <div
            className={CLOUD_STYLE.medium.puff4}
            style={generateRadialGradient({
              p1: 110,
              p2: 90,
              c1: 100,
              c2: 130,
            })}
          />
        </div>
      </div>
    );
  }
  return (
    <div
      className="fixed"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        opacity: opacity,
        scale: scale,
        transform: 'translate(-50%, -50%)',
      }}
    >
      Large
      <div className={CLOUD_STYLE.large.base}>
        <div className={CLOUD_STYLE.large.halfBase} />
        <div
          className={CLOUD_STYLE.large.puff1}
          style={generateRadialGradient({ p1: 90, p2: 90, c1: 110, c2: 130 })}
        />
        <div
          className={CLOUD_STYLE.large.puff2}
          style={generateRadialGradient({ p1: 150, p2: 108, c1: 85, c2: 100 })}
        />
        <div className={CLOUD_STYLE.large.puff3} />
        <div
          className={CLOUD_STYLE.large.puff4}
          style={generateRadialGradient({ p1: 95, p2: 85, c1: 120, c2: 130 })}
        />
        <div
          className={CLOUD_STYLE.large.puff5}
          style={generateRadialGradient({ p1: 110, p2: 90, c1: 100, c2: 130 })}
        />
      </div>
    </div>
  );
};

export { Cloud };
