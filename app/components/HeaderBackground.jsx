const HeaderBackground = ({ title, background }) => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    opacity: '0.2',
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center absolute w-full top:0 left-0 py-20 mb-4  "
        style={backgroundStyle}></div>
      <h1 className="text-[--color-primary]  absolute  top-12 left-[50%] translate-x-[-50%]   ">
        {title}
      </h1>
    </>
  );
};

export default HeaderBackground;
