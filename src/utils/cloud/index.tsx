type GenerateRadialGradienProps = {
  p1: number;
  p2: number;
  c1: number;
  c2: number;
};

export const generateRadialGradient = ({
  p1,
  p2,
  c1,
  c2,
}: GenerateRadialGradienProps) => {
  return {
    background: `radial-gradient(${p1}% ${p2}% at bottom right, #ddd4d0 ${c1}%, #fff ${c2}%)`,
  };
};

export const generateRandomNumber = ({
  max,
  min,
}: {
  max: number;
  min: number;
}) => {
  return Math.random() * (max - min) + min;
};

export const generateRandomCloudType = (): 'small' | 'medium' | 'large' => {
  const sizes = ['small', 'medium', 'large'];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex] as 'small' | 'medium' | 'large';
};

export const generateVelocity = (): 3 | 5 | 7 | -3 | -5 | -7 => {
  const sizes = [3, 5, 7, -3, -5, -7];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex] as 3 | 5 | 7 | -3 | -5 | -7;
};
