"use client";

import { Heart, Smile } from "lucide-react";
import Header from "../../components/Header";
import { Modal } from "@/components/Modal";
import Image from "next/image";
import img1 from "../../public/images/img1.jpeg";
import img2 from "../../public/images/img2.jpeg";
import img3 from "../../public/images/img3.jpeg";
import img4 from "../../public/images/img4.jpeg";
import specail from "../../public/images/specail.jpeg";
import program from "../../public/images/program.jpeg";
import busy from "../../public/images/busy.jpeg";
import fire_work from "../../public/images/fire_work.jpeg";
import present from "../../public/images/present.jpeg";
import celebrate from "../../public/images/celebrate.jpeg";
import send from "../../public/images/send.jpeg";
import party from "../../public/images/party.jpeg";

export default function Home() {
  const vocabulary = [
    {
      word: "party",
      definiton: "socail gatherings",
      part: "noun",
      example: "maya's party was very good,we had a great time",
      imageUrl: party,
    },
    {
      word: "specail",
      definiton: "exceplional, unique",
      part: "adjective",
      example: "this is specail gift for miss yousra",
      imageUrl: specail,
    },
    {
      word: "program",
      definiton: "show that is broadcast on teleision or radios",
      part: "noun",
      example:
        "last night, istayedu plate because I was watching my favourite TV program",
      imageUrl: program,
    },
    {
      word: "present",
      definiton: "gift",
      part: "noun",
      example: "fadi has no present in the new year",
      imageUrl: present,
    },
    {
      word: "busy",
      definiton: "engaged taken in use",
      part: "adjctive",
      example: "I couldn't go to my friend's party because I was very busy ",
      imageUrl: busy,
    },
    {
      word: "fire work",
      definiton:
        "striking display of light sound produced by explosive devices, explosive fightor argment display of temper",
      part: "noun",
      example: "Last night, we watched the fire works in the city",
      imageUrl: fire_work,
    },
    {
      word: "celebrate",
      definiton: "fistival, festivities ",
      part: "noun",
      example:
        "hir birthday party was a wonder full celebrate with cake, baiioons and friends ",
      imageUrl: celebrate,
    },
    {
      word: "send",
      definiton: "to deliver somethings",
      part: "verb",
      example: "please, send me your phone number",
      imageUrl: send,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-100 flex flex-col">
      <Header currentLocale="en" />

      <main className="flex flex-col items-center justify-center flex-grow p-8 capitalize">
        <section
          id="hero-section"
          className="flex min-h-screen h-screen items-center justify-center pt-24"
        >
          <div>
            <div className="space-y-4 flex flex-col items-center prose prose-lg max-w-none">
              <h1 className="text-7xl font-bold uppercase !mb-4 text-center">
                Happy new year
              </h1>
              <div className="flex items-center gap-x-2 not-prose text-center">
                <p className="text-gray-500">presented by:</p>
                <ul className="flex gap-x-4 text-blue-600 font-medium">
                  <li>dyiam kolaib</li>
                  <li>shahd almasry</li>
                  <li>hala al hashmi</li>
                  <li>shahd almoghrabi</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-6 mt-16">
              <div className="overflow-hidden roundrd-xl">
                <Image
                  src={img1}
                  alt="img1"
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="overflow-hidden roundrd-xl">
                <Image
                  src={img2}
                  alt="img1"
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="overflow-hidden roundrd-xl">
                <Image
                  src={img3}
                  alt="img1"
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="overflow-hidden roundrd-xl">
                <Image
                  src={img4}
                  alt="img1"
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Hero section */}
        <section
          id="question"
          className="flex min-h-screen items-center justify-center pt-24"
        >
          <div className="flex flex-col items-center gap-y-4 prose prose-lg max-w-2xl">
            <h3 className="text-3xl text-blue-600 font-bold !mb-2">
              what is your favorite part in the new year?
            </h3>
            <h3 className="text-3xl font-semibold text-gray-600 !mt-0">
              what you are doing in last new year?{" "}
            </h3>
            <div className="flex gap-x-4 not-prose">
              <Heart className="w-8 h-8 text-gray-500" />
              <Smile className="w-8 h-8 text-gray-500" />
            </div>
            <textarea
              name="answer"
              id=""
              placeholder="your answer"
              className="border-2 rounded-xl border-gray-500 w-full p-4 mt-12 not-prose"
              rows={5}
            ></textarea>
          </div>
        </section>
        {/* Question section */}
        <section
          id="vocabulary"
          className="flex min-h-screen items-center justify-center pt-24"
        >
          <div className="grid grid-cols-4 gap-y-24 gap-x-8">
            {vocabulary.map((item) => {
              return (
                <Modal
                  key={item.word}
                  trigger={
                    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-300">
                      {item.imageUrl ? (
                        <div className="w-72 h-72 relative overflow-hidden rounded-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.word}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400 text-2xl">📝</span>
                        </div>
                      )}
                      <span className="text-black font-medium capitalize text-center">
                        {item.word}
                      </span>
                    </div>
                  }
                >
                  <div className="prose">
                    {item.imageUrl && (
                      <div className="w-full h-80 w-72 relative mb-4 rounded-lg overflow-hidden not-prose">
                        <Image
                          src={item.imageUrl}
                          alt={item.word}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-3xl font-bold text-blue-600 capitalize !mb-2">
                      {item.word}
                    </h3>
                    <p className="text-rose-500 italic capitalize font-bold !mb-4">
                      &quot; {item.part} &quot;
                    </p>
                    <div>
                      <strong className="text-gray-700 font-semibold">Definition:</strong>
                      <p className="text-gray-600 !mt-1 font-medium">{item.definiton}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 !font-semibold">Example:</strong>
                      <blockquote className="text-gray-600 italic !mt-1 !mb-0">
                        &ldquo;{item.example}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </Modal>
              );
            })}
          </div>
        </section>
        {/* Vocabulary section */}
      </main>
      <footer className="py-6 text-center text-gray-500 prose prose-sm max-w-none">
        <p className="!mb-0">
          © {new Date().getFullYear()} Happy New Year App. All rights reserved
          to{" "}
          <span className="text-uppercase text-blue-500 font-semibold uppercase">
            dyam kassem kolaib
          </span>
        </p>
      </footer>
    </div>
  );
}
