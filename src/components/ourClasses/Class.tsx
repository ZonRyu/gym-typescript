import { ClassType } from '@/shared/type'


const Class = ({ name, desc, image }: ClassType) => {
  const overlayStyles = `p-5 absolute z-30 flex h-full w-[450px] flex-col 
    items-center justify-center whitespace-normal bg-primary-500 text-center 
    text-white opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className='relative mx-5 inline-block w-[450px]'>
        <div className={overlayStyles}>
            <p className='text-xl font-bold'>{name}</p>
            <p className='mt-5'>{desc}</p>
        </div>
        <img src={image} alt={name} />
    </li>
  )
}

export default Class