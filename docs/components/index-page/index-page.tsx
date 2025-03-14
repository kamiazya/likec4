import { cn } from '$/lib'
import { Noto_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'


const LikeC4View = dynamic({
  loader: () => import('./LikeC4Diagram'),
  loading: () => <div>loading...</div>,
  ssr: false,
})


const heroFont = Noto_Sans({
  preload: true,
  display: 'swap',
  weight: ['500'],
  subsets: ['latin']
})

export const Hero = () => (
  <section className={cn(
    'w-full flex flex-col space-y-4 lg:space-y-6 items-center',
    'mt-8 md:mt-12 lg:mt-20',
  )}>
    <h1 className={cn(
      'text-center text-[min(3.75rem,max(6vw,2.25rem))]',
      'tracking-tight leading-none whitespace-nowrap',
      'text-transparent bg-clip-text bg-gradient-to-br from-[#F8F3D4] to-[#5E98AF]',
      heroFont.className
    )}>Architecture as a code</h1>
    <div className={cn(
      'text-center text-[min(1.5rem,max(3vw,1.25rem))] max-w-[42rem]',
      'leading-tight',
      'text-transparent bg-clip-text bg-gradient-to-r from-[#F8F3D4] to-[#5E98AF]',
      heroFont.className
    )}>
      Visualize, collaborate, and evolve the software architecture with always actual and live diagrams
    </div>
  </section>
)

export const HeroVideo = () => (
  <section className={cn(
    'w-full',
    'mt-12 md:mt-16',
  )}>
    <div className="w-full max-w-[1000px] mx-auto">
      <div className="relative overflow-hidden flex rounded-xl">
        <video autoPlay loop playsInline muted poster="/index-page-video.png">
          <source src="/index-page.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
)

export const GetStartedButton = () => (
  <section className={cn(
    'w-full',
    'mt-6',
    'text-center'
  )}>
    <Link
      href={'/docs/'}
      className={cn(
        heroFont.className,
        'inline-flex items-center justify-center rounded-md text-md',
        'text-black',
        'bg-gradient-to-br from-[#F8F3D4] to-[#5E98AF]',
        'hover:bg-opacity-40',
        'px-3 py-2'
      )}>
      Get Started
    </Link>
  </section>
)

type IndexPageSectionProps = PropsWithChildren<{
  title?: string
}>

export const IndexPageSection = ({title, children}: IndexPageSectionProps) => (
  <section className={cn(
    'w-full max-w-5xl mx-auto',
    'mt-20 md:mt-44',
  )}>
    {title && <div className="mx-auto max-w-[42rem] my-10 md:my-16 text-">
        <h2 className={cn(
        'text-center text-[min(3rem,max(4vw,1.875rem))]',
        'leading-tight',
        'text-transparent bg-clip-text bg-gradient-to-r from-[#F8F3D4] to-[#5E98AF]',
        heroFont.className
      )}>
        {title}
      </h2>
    </div>}
    {children}
  </section>
)

export const IndexPageWhy = () => (<div>
  <div>
    <div>Code</div>
    <img src="/index-page-likec4-file.png"/>
  </div>
</div>)


export const IndexPageDiagram = () => (
  <div className='mt-6'>
    <LikeC4View viewId='index'/>
  </div>
)
// export const IndexPageHero = () => {
//   return <>
//     <div className={styles.hero}>
//       <div className={styles.hero_ratio}>
//         <div className={styles.logo}>
//           <Logo />
//         </div>

//       </div>
//     </div>
//     <div className="my-6 w-full max-w-[1000px] mx-auto">
//       <div className="p-1 relative overflow-hidden shadow-xl flex bg-neutral-800/60 sm:rounded-xl dark:backdrop-blur dark:ring-neutral-700/80">
//         <video autoPlay loop playsInline>
//           <source src="https://github-production-user-asset-6210df.s3.amazonaws.com/824903/238808661-24521327-25d6-44ae-a6b4-6eb492242862.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   </>
// }
