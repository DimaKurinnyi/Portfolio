import { HeroAnimate } from './Animations/HeroAnimate';

const Skills = () => {
  const skillsData = [
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
  ];
  return (
    <>
      <HeroAnimate customDelay={3} customY={75}>
        <h1 className="text-center text-[--color-primary] text-3xl mt-12">Skills</h1>
      </HeroAnimate>
      <div className="mt-16 mb-16 text-center">
        <div className=" px-12 xs:px-1   ">
          <ul className="flex mx-auto flex-wrap justify-center gap-2 text-lg max-w-3xl xs:text-[10px]">
            {skillsData.map((skill, index) => (
              <HeroAnimate customDelay={index} customY={75}>
                <li className="border rounded-xl px-3 py-2 border-solid border-[--color-ligh]">
                  {skill}
                </li>
              </HeroAnimate>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
