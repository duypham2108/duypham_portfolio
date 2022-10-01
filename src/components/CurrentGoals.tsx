import { FiDisc } from 'react-icons/fi';

const taskList = [
  "I'm working on a startup for multi-omics projects",
  "I'm writing the last paper and thesis to be ready to graduate next year",
  "I'm working on the Vietnamese Genome Projects",
  "I'm product manager for a pet food business",
];

export default function CurrentGoals() {
  return (
    <div className='my-6 w-full pb-8'>
      <ul>
        {taskList.map((task, index) => (
          <li key={index} className='mb-4 flex items-center gap-4'>
            <div>
              <FiDisc className='h-6 w-6 text-green-500' />
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-200 md:text-base'>
              {task}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
