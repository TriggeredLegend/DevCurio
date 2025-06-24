import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 focus:ring-primary-500 mr-3 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded px-2 py-1 text-sm font-medium uppercase focus:ring-2 focus:ring-offset-2 focus:outline-none"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
