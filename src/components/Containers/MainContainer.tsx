const MainContainer = (props: { children: React.ReactNode }) => {
    return (
      <div className="w-full h-full min-w-screen min-h-screen max-w-screen bg-gray-950 flex flex-col text-gray-100 leading-relaxed">{props.children}</div>
    );
  };
  
  export default MainContainer;
  