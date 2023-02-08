import React from "react";

const Hint = (props) => {
  const [isHintVisible, setHintVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setHintVisible(false);
    }, 30000);
  }, []);

  if (!isHintVisible) {
    return null;
  }

  return (
    <div className="absolute left-[20px] bottom-[100px] text-base font-gilroy-regular border-gray-400 border rounded p-4 shadow-2xl">
      Use <span className="dark:text-primary text-secondary">Spacebar</span> or{" "}
      <span className="dark:text-primary text-secondary">Arrow keys</span> to
      navigate
    </div>
  );
};

export default Hint;
