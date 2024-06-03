import { UilHome } from '@iconscout/react-unicons'

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      <UilHome
        className="sidebar-icon"
        onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
        }}
      />
      
      
    </div>
  );
}
