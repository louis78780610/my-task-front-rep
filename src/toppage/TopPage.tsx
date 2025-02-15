import { Link } from 'react-router-dom';
import Button from "../component/Button";

const TopPage = () => {
  return(
    <>
      <div className='pt-8'>
      <h1 className='text-6xl font-serif italic mb-4 text-neutral-700 text-center sm:text-4xl'>Wellcome</h1>
      <div className='flex justify-center p-12 sm:p-4 md:flex md:flex-col md:items-center sm:items-center'>
        <Link to="task1"><Button onClick={() => {}} children="Task1"/></Link>
        <Link to="task2"><Button onClick={() => {}} children="Task2"/></Link>
        <Link to="task3"><Button onClick={() => {}} children="Task3"/></Link>
        <Link to="task4"><Button onClick={() => {}} children="Task4"/></Link>
        <Link to="task5"><Button onClick={() => {}} children="Task5"/></Link>
        <Link to="task6"><Button onClick={() => {}} children="Task6"/></Link>
        <Link to="task7"><Button onClick={() => {}} children="Task7"/></Link>
        <Link to="task8"><Button onClick={() => {}} children="Task8"/></Link>
        <Link to="task9"><Button onClick={() => {}} children="Task9"/></Link>
        <Link to="task10"><Button onClick={() => {}} children="Task10"/></Link>
        <Link to="task11"><Button onClick={() => {}} children="Task11"/></Link>
        <Link to="task12"><Button onClick={() => {}} children="Task12(1600pxで見て)"/></Link>
        <Link to="task13"><Button onClick={() => {}} children="Task13"/></Link>
      </div>
      </div>
    </>
  );
};

export default TopPage;