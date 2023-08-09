import kartapayLogo from '@/public/images/kartapay_flat_2_transparent.png'
import Image from 'next/image'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nos produits et services</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-red-kartalys" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-red-100" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </g>
              </svg>

              <h4 className="h4 mb-2">kartaCloud</h4>
              <p className="text-lg text-gray-600 text-justify">
                Dans ce domaine, nous offrons
                des solutions de cloud et
                d'hébergement de premier ordre
                pour les entreprises de toutes
                tailles.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-green-800" cx="32" cy="32" r="32" />
                <path className="stroke-current text-green-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-green-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">kartaSoft</h4>
              <p className="text-lg text-gray-600 text-justify">
                Cette branche se consacre au
                développement de logiciels
                novateurs pour répondre aux défis
                des entreprises modernes
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-yellow-500" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-yellow-700" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-yellow-700" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-yellow-700" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">kartaSys</h4>
              <p className="text-lg text-gray-600 text-justify">
                Offrant des services
                technologiques de premier plan,
                cette branche est à l'avant-garde
                de l'assistance technique et du
                support aux entreprises.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center col-start-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="my-8">
                <Image  width={22000} height={13500}  src={kartapayLogo} alt="Kartapay" />
              </div>

              <p className="text-lg text-gray-600 text-justify">
                Il s'agit d'une plateforme de paiement
                numérique novatrice conçue pour
                digitaliser les paiements aux Comores. 
                Sa fonction première est d'aggréger les différentns 
                supports de paiement disponibles.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
