import { useState } from "react";
import Terminal from "../components/Terminal";
import BirthdayScreen from "../components/BirthdayScreen";

const Index = () => {
  const [showBirthday, setShowBirthday] = useState(false);

  return (
    <>
      {showBirthday ? (
        <BirthdayScreen />
      ) : (
        <Terminal onComplete={() => setShowBirthday(true)} />
      )}
    </>
  );
};

export default Index;
