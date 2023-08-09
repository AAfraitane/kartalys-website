import Image from 'next/image'

import TeamMember01 from '@/public/images/team-member-01.jpg'
import TeamMember02 from '@/public/images/team-member-02.jpg'
import TeamMember03 from '@/public/images/team-member-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-300">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Notre équipe</h2>
            <p className="text-xl text-gray-600 text-justify">
            Nous sommes une équipe d'experts hautement qualifiés, fort d'expériences acquises au sein de grands groupes, notamment chez BNP Paribas, Société Générale, Malakoff
            Humanis, IBM et Allianz. un groupe dynamique qui s'engage à redéfinir l'avenir technologique des Comores, de l'Afrique et de l'Océan Indien
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMember01} width={80} height={80} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-kartalys" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 grow">
                Data Scientist
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Naoufad Saandi</cite> - <a className="text-red-kartalys hover:text-gray-900 transition duration-150 ease-in-out" href="#0">CEO</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMember02} width={80} height={80} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-kartalys" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 grow">
                Software engineer senior
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Samir Said Ali</cite> - <a className="text-red-kartalys hover:text-gray-900 transition duration-150 ease-in-out" href="#0">CTO</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMember03} width={80} height={80} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-kartalys" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 grow">
                Software engineer senior  
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Abdoul-Hakim Afraitane</cite> - <a className="text-red-kartalys hover:text-gray-900 transition duration-150 ease-in-out" href="#0">COO</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
