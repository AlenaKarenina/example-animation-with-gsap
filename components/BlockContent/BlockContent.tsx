'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import lcs from './BlockContent.module.css'
import { IMAGES_DATA, TEXT_DATA } from './BlockContent.mock'

export default function BlockContent() {

  useEffect(() => {
    const texts = document.querySelector(`.${lcs.texts}`) as HTMLDivElement

    gsap.to(`.${lcs.images}`, {
      scrollTrigger: {
        trigger: `.${lcs.scrolled}`,
        scrub: 0.5,
        start: 'top top',
        end: () => '+=' + (texts.scrollHeight - window.innerHeight),
        id: 'scrolled'
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${lcs.scrolled}`,
        start: 'top top',
        end: 'bottom',
        scrub: true,
        id: 'image'
      }
    })

    const imagesBlock = gsap.utils.toArray(`.${lcs.imageBlock}`) as string[]

    imagesBlock.forEach((image: string, i) => {
      if (imagesBlock[i + 1]) {
        tl.to(image, { opacity: 0, zIndex: -1 }, '+=0.2').to(
          imagesBlock[i + 1],
          { opacity: 1, zIndex: 0 },
          '<'
        );
      }
    })

    tl.to({}, {}, '+=0.2')
  }, [])

  return (
    <main className={lcs.wrapper}>

      <div className={lcs.scrolled}>
        <div className={lcs.images}>
          {IMAGES_DATA.map((image, index) => (
            <div className={lcs.imageBlock} key={index}>
              <Image
                src={image}
                alt={'unsplash image'}
                priority={true}
                width={640}
                height={960}
              />
            </div>
          ))}
        </div>

        <div className={lcs.texts}>
          {TEXT_DATA.map((text, index) => (
            <div className={lcs.textBlock} key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className={lcs.other}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio sequi quaerat nisi a rem quis impedit, et consequuntur reprehenderit quidem dolorem, quas perspiciatis ab quam aperiam quia facere. Similique!</p>
      </div>
    </main>
  )
}
