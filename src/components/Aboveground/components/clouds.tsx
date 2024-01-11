import { Cloud } from '@/components/cloud';
import {
  generateRandomNumber,
  generateRandomCloudType,
  generateVelocity,
} from '@/utils/cloud';

type CloudsProps = {
  number: number;
};

const Clouds = ({ number }: CloudsProps) => {
  const cloudArray = Array.from({ length: number });

  // TODO: less opacity will have less velocity then foreground clouds.
  // todo: more smaller cloud at back
  return (
    <>
      {cloudArray.map((index) => (
        <Cloud
          type={'small'}
          position={{
            x: generateRandomNumber({ max: 100, min: 0 }),
            y: generateRandomNumber({ max: 50, min: 0 }),
          }}
          velocity={generateVelocity()}
          opacity={generateRandomNumber({ max: 1, min: 0.3 })}
          scale={generateRandomNumber({ max: 0.7, min: 0.2 })}
        />
      ))}
    </>
  );
};
export { Clouds };
