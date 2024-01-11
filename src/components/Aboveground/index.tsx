import Sky from './components/sky';
import { Clouds } from './components';

const Aboveground = () => {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'fixed',
      }}
    >
      <Sky />
      <div
        style={{
          width: '100%',
          height: '100%',
          color: 'white',
          position: 'fixed',
        }}
      >
        <Clouds number={5} />
      </div>
    </section>
  );
};

export { Aboveground };
