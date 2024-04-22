import Typewriter2 from '../components/TypeWriter2';

function Test() {
  return (
    <>
      <div className="title">
        Hello, I'm{' '}
        <Typewriter2
          textList={['a developer', 'gamer', 'IT student', 'web designer']}
          delay={150}
        />
      </div>
    </>
  );
}

export default Test;
