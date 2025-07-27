import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
  faUtensils,
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
      <header id="top" className="grid place-content-center h-screen py-[1rem]">
        <h1
          className={`text-center text-6xl ${vastShadow.className} text-amber-500`}
        >
          Sippy&apos;s Tacos <span className="whitespace-nowrap">& More</span>
        </h1>
        <ul className="flex flex-row flex-wrap justify-center text-lg">
          <li>
            <Link
              className="p-1 flex flex-row items-center hover:underline"
              href="#menu"
            >
              <FontAwesomeIcon icon={faUtensils} className="pr-[1px]" />
              menu
            </Link>
          </li>
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
        <section id="menu" className="mb-6">
          <h2 className="text-center text-3xl font-bold">Our Menu</h2>
          <ul className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center text-xl font-bold bg-gray-900">
                Tacos
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; cilantro &bull; onions
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="pr-2 w-1/2 text-right">corn tortilla</td>
                    <td className="w-1/2 text-left">$2.50 / taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2 text-right">flour tortilla</td>
                    <td className="w-1/2 text-left">$3.00 / taco</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2} className="font-normal italic">
                      extras
                    </th>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2 text-right">cheese</td>
                    <td className="w-1/2 text-left">25&cent; / taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2 text-right">avocado</td>
                    <td className="w-1/2 text-left">50&cent; / taco</td>
                  </tr>
                  <tr>
                    <td className="pr-2 w-1/2 text-right">sour cream</td>
                    <td className="w-1/2 text-left">25&cent; / taco</td>
                  </tr>
                </tbody>
              </table>
              <div className="no-scrollbar snap-x snap-mandatory flex flex-row gap-6 overflow-x-auto whitespace-nowrap">
                <div className="ml-[82px] snap-center w-[250px]">
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
                <div className="mr-[82px] snap-center w-[250px]">
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
              <li className="z-10 sticky top-0 w-full text-center text-xl font-bold bg-gray-900">
                Tostadas / $3.50
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; beans &bull; lettuce &bull; tomato &bull;
                cheese
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Gorditas / $5
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; beans &bull; lettuce &bull; tomato &bull;
                cheese
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
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Sopes / $5
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; beans &bull; lettuce &bull; tomato &bull;
                queso fresco &bull; crema
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Quesadilla / $8
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; cheese
              </p>
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
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Burrito / $9
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; beans &bull; lettuce &bull; tomato &bull;
                avocado &bull; sour cream cheese
              </p>
              <div className="no-scrollbar snap-x snap-mandatory flex flex-row gap-6 overflow-x-auto whitespace-nowrap">
                <div className="ml-[82px] snap-center w-[250px]">
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
                <div className="mr-[82px] snap-center w-[250px]">
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
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Cheeseburger / $8
              </li>
              <p className="text-center font-normal italic">
                mayo &bull; mustard &bull; lettuce &bull; tomato &bull; pickles
                &bull; onion &bull; cheese
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
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Torta / $8
              </li>
              <p className="text-center font-normal italic">
                choice of meat &bull; beans &bull; lettuce &bull; tomato &bull;
                avocado &bull; mayo &bull; cheese
              </p>
              <p className="text-center font-normal">with fries $10</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Torta Cubana / $9
              </li>
              <p className="text-center font-normal italic">
                beef fajita &bull; ham &bull; sausage &bull; cheese &bull; beans
                &bull; lettuce &bull; tomato &bull; mayo &bull; avocado
              </p>
              <p className="text-center font-normal">with fries $11</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Torta Campechana / $9
              </li>
              <p className="text-center font-normal italic">
                bistec &bull; chorizo &bull; sausage &bull; cheese &bull; beans
                &bull; lettuce &bull; mayo &bull; avocado
              </p>
              <p className="text-center font-normal">with fries $11</p>
            </div>

            <div className="flex flex-col gap-2">
              <li className="z-10 sticky top-0 w-full text-center font-bold text-xl bg-gray-900">
                Torta Hawaiana
              </li>
              <p className="text-center font-normal italic">
                al pastor &bull; ham &bull; cheese &bull; pineapple &bull;
                avocado
              </p>
              <p className="text-center font-normal">with fries $11</p>
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

        <section id="contact" className="mb-[42px]">
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

      {/* <a
        href={`tel:${phoneNumber}`}
        className="z-999 pointer-events-auto mx-auto flex flex-row gap-[0.25rem] items-center fixed bottom-6 right-3 py-[0.25rem] px-[0.75rem] rounded-full bg-green-600 hover:bg-green-500 text-gray-900"
      >
        <FontAwesomeIcon
          icon={faPhone}
          size="lg"
          className="motion-safe:animate-wiggle"
        />
        <span className="font-bold text-xl">Order Pickup</span>
      </a> */}
      <div className="z-999 fixed inset-0 mx-auto max-w-[430px] h-screen pointer-events-none">
        <a
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto mx-auto flex flex-row gap-[0.25rem] items-center absolute bottom-6 right-3 py-[0.25rem] px-[0.75rem] rounded-full bg-green-600 hover:bg-green-500 text-gray-900"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)",
          }}
        >
          <FontAwesomeIcon
            icon={faPhone}
            size="lg"
            className="motion-safe:animate-wiggle"
          />
          <span className="font-bold text-xl">Order Pickup</span>
        </a>
      </div>
    </main>
  );
}
