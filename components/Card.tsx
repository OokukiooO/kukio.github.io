import Image from './Image'

const Card = ({ title, description, imgSrc, onDetailClick }) => (
  <div className="w-full max-w-[544px] flex-shrink-0 p-4 sm:w-1/2 lg:w-1/3">
    <div
      className={`flex flex-col overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60${
        imgSrc ? ' h-full' : ''
      }`}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
        <p className="flex-1 text-gray-500 dark:text-gray-400 mb-3 max-w-none prose">{description}</p>
        <button
          className="bg-primary-500 hover:bg-primary-600 mt-2 self-start rounded px-4 py-2 font-semibold text-white shadow transition"
          onClick={onDetailClick}
        >
          详情
        </button>
      </div>
    </div>
  </div>
)

export default Card
