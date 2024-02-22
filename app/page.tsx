'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
    const texts = document.querySelector('.texts') as HTMLDivElement

    gsap.to('.images', {
      scrollTrigger: {
        trigger: '.scrolled',
        //pin: '.images',
        scrub: 0.5,
        start: 'top top',
        end: () => '+=' + (texts.scrollHeight - window.innerHeight),
        id: 'scrolled'
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scrolled',
        start: 'top top',
        end: 'bottom',
        pin: false,
        scrub: true,
        id: 'img'
      }
    })

    const imagesBlock = gsap.utils.toArray('.image-block') as string[]

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
    <main className="wrapper">

      <div className="scrolled">
        <div className="images">
          <div className="first-image image-block">
            <Image
              src="/images/1.jpg"
              alt="unsplash image"
              priority={true}
              width={640}
              height={960}
            />
          </div>

          <div className="second-image image-block">
            <Image
              src="/images/2.jpg"
              alt="unsplash image"
              priority={true}
              width={640}
              height={960}
            />
          </div>

          <div className="third-image image-block">
            <Image
              src="/images/3.jpg"
              alt="unsplash image"
              priority={true}
              width={640}
              height={960}
            />
          </div>

          <div className="fourth-image image-block">
            <Image
              src="/images/4.jpg"
              alt="unsplash image"
              priority={true}
              width={640}
              height={960}
            />
          </div>
        </div>

        <div className="texts">
          <div className="first-text text-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at est eget metus convallis tempus. Quisque sit amet placerat nisl.<br/>Proin luctus velit nec nibh rutrum consequat. Suspendisse id mauris lorem.<br/>Donec tincidunt vulputate nulla vel lacinia. Etiam sollicitudin ante eget lectus luctus, at consequat nulla commodo. Morbi luctus diam non lorem blandit luctus.<br/>Mauris consequat imperdiet felis, id mattis nulla facilisis vel. Cras sed tempor lacus, maximus posuere risus. Sed erat enim, dictum eu dui ac, dignissim scelerisque arcu.</p>
          </div>

          <div className="second-text text-block">
            <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Integer at est eget metus convallis tempus. Quisque sit amet placerat nisl. Proin luctus velit nec nibh rutrum consequat. Suspendisse id mauris lorem. <br/>Donec tincidunt vulputate nulla vel lacinia. Etiam sollicitudin ante eget lectus luctus, at consequat<br/> nulla commodo. Morbi luctus diam non lorem blandit luctus. Mauris consequat<br/> imperdiet felis, id mattis nulla facilisis vel. Cras sed tempor lacus, maximus posuere risus. Sed erat enim,<br/> dictum eu dui ac, dignissim scelerisque arcu.</p>
          </div>

          <div className="third-text text-block">
            <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. <br/>Excepturi maxime placeat, <br/>perspiciatis dolorem tempora sint id <br/>iure in odio blanditiis vitae recusandae, <br/>eligendi dolore fugit provident, <br/>amet minus aperiam ad. <br/>Quibusdam hic quam accusamus, <br/>architecto et laboriosam dolor mollitia placeat, <br/>molestiae qui natus, <br/>incidunt aliquam laudantium dolore! <br/>Ipsam totam harum obcaecati repellat ducimus commodi. <br/>Delectus repellendus, <br/>ea quia velit in est architecto nobis dolorem ullam? <br/>Voluptatem laboriosam, <br/>sapiente id vero numquam commodi dolores vitae? <br/>Facilis, <br/>rem alias fugit eligendi optio facere maiores laborum in cumque laboriosam similique, <br/>eum at sequi unde fugiat vero quia iure ipsa quod, <br/>dolor labore asperiores.</p>
            <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. <br/>Excepturi maxime placeat, <br/>perspiciatis dolorem tempora sint id <br/>iure in odio blanditiis vitae recusandae, <br/>eligendi dolore fugit provident, <br/>amet minus aperiam ad. <br/>Quibusdam hic quam accusamus, <br/>architecto et laboriosam dolor mollitia placeat, <br/>molestiae qui natus, <br/>incidunt aliquam laudantium dolore! <br/>Ipsam totam harum obcaecati repellat ducimus commodi. <br/>Delectus repellendus, <br/>ea quia velit in est architecto nobis dolorem ullam? <br/>Voluptatem laboriosam, <br/>sapiente id vero numquam commodi dolores vitae? <br/>Facilis, <br/>rem alias fugit eligendi optio facere maiores laborum in cumque laboriosam similique, <br/>eum at sequi unde fugiat vero quia iure ipsa quod, <br/>dolor labore asperiores.</p>
          </div>
        </div>
      </div>

      <div className="other">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio sequi quaerat nisi a rem quis impedit, et consequuntur reprehenderit quidem dolorem, quas perspiciatis ab quam aperiam quia facere. Similique!</p>
      </div>
    </main>
  )
}
