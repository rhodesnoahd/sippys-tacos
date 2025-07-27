import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { Vast_Shadow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const vastShadow = Vast_Shadow({
  subsets: ["latin"],
  weight: ["400"],
});

const phoneNumber = "2815153387";

export default function Home() {
  return (
    <main className="mx-auto max-w-[430px] min-h-screen px-[0.5rem] flex flex-col bg-gray-900 text-gray-400">
      <header className="py-[1rem]">
        <h1
          className={`text-center text-4xl ${vastShadow.className} text-amber-500`}
        >
          Sippy&apos;s Tacos <span className="whitespace-nowrap">& More</span>
        </h1>
        <ul className="flex flex-row flex-wrap justify-center text-lg">
          <li>
            <a
              className="p-1 flex flex-row items-center hover:underline"
              href="https://www.google.com/maps/dir//1408+W+Main+St,+La+Porte,+TX+77571/@29.6656241,-95.115785,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86409fea085686c1:0x7561cec001098b5f!2m2!1d-95.0333826!2d29.6655943?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              get directions
            </a>
          </li>
          <li>
            <Link
              className="p-1 flex flex-row items-center hover:underline"
              href="#hours-of-operation"
            >
              <FontAwesomeIcon icon={faClock} className="pr-[1px]" />
              hours
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/sippystacos/"
              target="_blank"
              className="p-1 flex flex-row items-center hover:underline"
            >
              <FontAwesomeIcon icon={faSquareFacebook} className="pr-[1px]" />
              follow us
            </a>
          </li>
        </ul>
      </header>

      <div className="flex flex-col gap-6">
        <section id="menu">
          <h2 className="text-3xl font-bold">Menu</h2>
          <ul className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Tacos
              </li>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}>choice of meat | cilantro | onions</th>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2">corn tortilla</td>
                    <td className="w-1/2">$2.50 per taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2">flour tortilla</td>
                    <td className="w-1/2">$3.00 per taco</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}>extras</th>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2">add cheese</td>
                    <td className="w-1/2">$0.25 per taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2">add avocado</td>
                    <td className="w-1/2">$0.50 per taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2">add sour cream</td>
                    <td className="w-1/2">$0.25 per taco</td>
                  </tr>
                </tbody>
              </table>
              <div className="snap-x snap-mandatory flex flex-row gap-6 overflow-x-auto whitespace-nowrap">
                <div className="ml-[180px] snap-center w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (2).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    tacos with cheese
                  </p>
                </div>
                <div className="snap-center w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (6).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    chicken tacos
                  </p>
                </div>
                <div className="mr-[180px] snap-center w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (7).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    beef tacos
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Tostadas / $3.50
              </li>
              <p className="font-bold">
                choice of meat | beans | lettuce | tomato | cheese
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Gorditas / $5
              </li>
              <p className="font-bold">
                choice of meat | beans | lettuce | tomato | cheese
              </p>
              <div className="m-auto gap-6 overflow-x-auto whitespace-nowrap">
                <div className="w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download.jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    pastor gordita
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Sopes / $5
              </li>
              <p className="font-bold">
                choice of meat | beans | lettuce | tomato | queso fresco | crema
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Quesadilla / $8
              </li>
              <p className="font-bold">choice of meat | cheese</p>
              <div className="m-auto gap-6 overflow-x-auto whitespace-nowrap">
                <div className="w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (5).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    quesadilla
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Burrito / $9
              </li>
              <p className="font-bold">
                choice of meat | beans | lettuce | tomato | avocado | sour cream
                cheese
              </p>
              <div className="snap-x snap-mandatory flex flex-row gap-6 overflow-x-auto whitespace-nowrap">
                <div className="ml-[180px] snap-center w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (3).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    chicken burrito
                  </p>
                </div>
                <div className="mr-[180px] snap-center w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (4).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    chicken burrito
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Cheeseburger / $8
              </li>
              <p className="font-bold">
                mayo | mustard | lettuce | tomato | pickles | onion | cheese
              </p>
              <div className="m-auto gap-6 overflow-x-auto whitespace-nowrap">
                <div className="w-[250px]">
                  <div className="relative h-96 rounded-t-lg overflow-hidden">
                    <Image
                      src="/img/download (9).jpg"
                      alt="Picture of tacos"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="w-[250px] rounded-b-lg bg-gray-400 text-gray-900 text-center italic">
                    cheesburger
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Torta / $8
              </li>
              <p className="font-bold">
                choice of meat | beans | lettuce | tomato | avocado | mayo |
                cheese
              </p>
              <p className="font-bold">with fries $10</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Torta Cubana / $9
              </li>
              <p className="font-bold">
                beef fajita | ham | sausage | cheese | beans | lettuce | tomato
                | mayo | avocado
              </p>
              <p className="font-bold">with fries $11</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Torta Campechana / $9
              </li>
              <p className="font-bold">
                bistec | chorizo | sausage | cheese | beans | lettuce | mayo |
                avocado
              </p>
              <p className="font-bold">with fries $11</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-xl bg-gray-900">
                Torta Hawaiana
              </li>
              <p className="font-bold">
                al pastor | ham | cheese | pineapple | avocado
              </p>
              <p className="font-bold">with fries $11</p>
            </div>
          </ul>
        </section>

        <section id="hours-of-operation">
          <h2 className="text-3xl font-bold">Hours of Operation</h2>
          <table>
            <tbody>
              <tr>
                <td className="pr-2">Saturday</td>
                <td className="pr-2">10 AM-5 PM</td>
              </tr>
              <tr>
                <td className="pr-2">Sunday</td>
                <td className="pr-2">Closed</td>
              </tr>
              <tr>
                <td className="pr-2">Monday</td>
                <td className="pr-2">10 AM-8 PM</td>
              </tr>
              <tr>
                <td className="pr-2">Tuesday</td>
                <td className="pr-2">10 AM-8 PM</td>
              </tr>
              <tr>
                <td className="pr-2">Wednesday</td>
                <td className="pr-2">10 AM-8 PM</td>
              </tr>
              <tr>
                <td className="pr-2">Thursday</td>
                <td className="pr-2">10 AM-8 PM</td>
              </tr>
              <tr>
                <td className="pr-2">Friday</td>
                <td className="pr-2">10 AM-8 PM</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="contact" className="pb-[1rem]">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <div>
            <span>
              <a
                className="font-bold hover:underline"
                href="https://google.com/search?sa=X&amp;sca_esv=c4dfccb91823d8e9&amp;rlz=1C1VDKB_enUS1131US1131&amp;sxsrf=AE3TifOFGvvyLvhZ-p9wUtmm1DfgsjSZtA:1753576661413&amp;q=sippys+tacos+address&amp;ludocid=8458268899224947551&amp;ved=2ahUKEwjNxPWP5tuOAxV_8MkDHb5eJHAQ6BN6BAgrEAI&amp;biw=1171&amp;bih=919&amp;dpr=1"
                data-ved="2ahUKEwjNxPWP5tuOAxV_8MkDHb5eJHAQ6BN6BAgrEAI"
              >
                Address
              </a>
              <span>:</span>{" "}
            </span>
            <span>1408 W Main St, La Porte, TX 77571</span>
          </div>
          <div>
            <span className="font-bold">
              Phone<span>:</span>{" "}
            </span>
            <span>
              <span>
                <a href={`tel:${phoneNumber}`}>
                  <span
                    className="hover:underline"
                    aria-label="Call Phone Number (281) 515-3387"
                  >
                    (281) 515-3387
                  </span>
                </a>
              </span>
            </span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/sippystacos/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="2xl"
                className="-ml-[6px]"
              />
            </a>
          </div>
        </section>
      </div>

      <a
        href={`tel:${phoneNumber}`}
        className="z-999 flex flex-row gap-[0.25rem] items-center fixed bottom-6 right-3 py-[0.25rem] px-[0.75rem] rounded-full bg-green-600 hover:bg-green-500 text-gray-900"
      >
        <FontAwesomeIcon
          icon={faPhone}
          size="lg"
          className="motion-safe:animate-wiggle"
        />
        <span className="font-bold text-xl">Order Pickup</span>
      </a>
    </main>
  );
}
