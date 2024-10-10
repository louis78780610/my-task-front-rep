import { Link } from 'react-router-dom';
import Button from "../component/Button";

const TopPage = () => {
  return(
    <>
      <div className='pt-8'>
      <h1 className='text-6xl font-serif italic mb-4 text-neutral-700 text-center sm:text-4xl'>Wellcome</h1>
      <div className='flex justify-center p-12 sm:p-4 md:flex md:flex-col md:items-center sm:items-center'>
        <Link to="task1"><Button onClick={() => {}} children="Task1"/></Link>
      </div>
      </div>
    </>
  );
};

export default TopPage;