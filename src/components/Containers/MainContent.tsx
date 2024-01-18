const MainContent = (props: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <section className={`flex flex-col p-4 my-24 items-center ${props.className}`}>
        {props.children}
      </section>
    );
  };
  
  export default MainContent;
  