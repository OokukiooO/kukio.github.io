import Image from './Image'

const Card = ({ title, description, imgSrc, onDetailClick }) => (
  <div className="max-w-[544px] p-4 w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60 flex flex-col`}
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
      <div className="p-6 flex flex-col flex-1">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 flex-1">{description}</p>
        <button
          className="mt-2 px-4 py-2 rounded bg-primary-500 text-white font-semibold shadow hover:bg-primary-600 transition self-start"
          onClick={onDetailClick}
        >
          详情
        </button>
      </div>
    </div>
  </div>
)

export default Card
