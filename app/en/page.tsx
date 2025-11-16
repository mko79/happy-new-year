"use client";

import { Heart, Smile, CheckCircle2 } from "lucide-react";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
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
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());

  const vocabulary = [
    {
      word: "party",
      definiton: "socail gatherings",
      part: "noun",
      example: "maya's party was very good,we had a great time",
      imageUrl: party,
    },
    {
      word: "special",
      definiton: "exceptional, unique",
      part: "adjective",
      example: "this is a special gift",
      imageUrl: specail,
    },
    {
      word: "program",
      definiton: "show that is broadcast on television or radios",
      part: "noun",
      example:
        "last night, I styed up late",
      imageUrl: program,
    },
    {
      word: "present",
      definiton: "gift",
      part: "noun",
      example: "Fadi got no presents for his birthday",
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
        "striking display of light sound produced by explosive devices",
      part: "noun",
      example: "Last night, we watched the fire works in the city",
      imageUrl: fire_work,
    },
    {
      word: "celebrate",
      definiton: "festival, festivities ",
      part: "noun",
      example:
        "Hir birthday party was a wonderfull celebration",
      imageUrl: celebrate,
    },
    {
      word: "send",
      definiton: "to deliver something",
      part: "verb",
      example: "please, send me your phone number",
      imageUrl: send,
    },
  ];

  // Shuffle definitions on client side only to avoid hydration mismatch
  const [shuffledDefinitions, setShuffledDefinitions] = useState<Array<{ word: string; definition: string }>>([]);
  const hasShuffledRef = useRef(false);

  useEffect(() => {
    // Only shuffle once on client side
    if (typeof window !== "undefined" && !hasShuffledRef.current) {
      hasShuffledRef.current = true;
      const definitions = vocabulary.map((item) => ({
        word: item.word,
        definition: item.definiton,
      }));
      // Shuffle array using Fisher-Yates algorithm
      const shuffled = [...definitions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setShuffledDefinitions(shuffled);
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fireworks function for correct matches
  const triggerFireworks = useCallback(() => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  // Play wrong answer sound
  const playWrongAnswerSound = useCallback(() => {
    try {
      // Create audio on-demand - proxy now excludes static assets
      const audio = new Audio("/sounds/810757__mokasza__buzzer-02.mp3");
      audio.volume = 0.5; // Set volume to 50%

      // Handle errors
      audio.addEventListener("error", () => {
        const error = audio.error;
        if (error) {
          console.error("Audio error code:", error.code);
          console.error("Audio error message:", error.message);
          console.error("Audio src:", audio.src);
        }
      }, { once: true });

      // Wait for audio to be ready, then play
      const playAudio = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Sound playing successfully");
            })
            .catch((error) => {
              console.error("Play promise rejected:", error);
            });
        }
      };

      // If already loaded, play immediately
      if (audio.readyState >= 2) {
        playAudio();
      } else {
        // Wait for canplay event
        audio.addEventListener("canplay", playAudio, { once: true });
        audio.load();
      }
    } catch (error) {
      console.error("Error creating/playing sound:", error);
    }
  }, []);

  // Big celebration when all matches are complete
  const triggerBigCelebration = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Launch from multiple positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.5, y: Math.random() - 0.2 },
        colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
      });
    }, 250);
  }, []);

  const handleWordClick = (word: string) => {
    if (matchedPairs.has(word)) return; // Already matched

    if (selectedWord === word) {
      // Deselect if clicking the same word
      setSelectedWord(null);
    } else {
      // Select new word
      setSelectedWord(word);
      // If we have a selected definition, check if they match
      if (selectedDefinition) {
        // Find the vocabulary object for the selected definition
        const definitionItem = shuffledDefinitions.find(
          (def) => def.definition === selectedDefinition
        );
        // Check if the definition's word matches the clicked word
        if (definitionItem && definitionItem.word === word) {
          // Correct match! They belong to the same vocabulary object
          setMatchedPairs(new Set([...matchedPairs, word]));
          setSelectedWord(null);
          setSelectedDefinition(null);
          // Trigger fireworks for correct match!
          triggerFireworks();
        } else {
          // Wrong match, keep word selected, clear definition
          setSelectedDefinition(null);
          // Play wrong answer sound
          playWrongAnswerSound();
        }
      }
    }
  };

  const handleDefinitionClick = (definition: string, definitionWord: string) => {
    if (matchedPairs.has(definitionWord)) return; // Already matched

    if (selectedDefinition === definition) {
      // Deselect if clicking the same definition
      setSelectedDefinition(null);
    } else {
      // Select new definition
      setSelectedDefinition(definition);
      // If we have a selected word, check if they match
      if (selectedWord) {
        // Check if the definition's word matches the selected word
        // This means they belong to the same vocabulary object
        if (definitionWord === selectedWord) {
          // Correct match! They belong to the same vocabulary object
          setMatchedPairs(new Set([...matchedPairs, selectedWord]));
          setSelectedWord(null);
          setSelectedDefinition(null);
          // Trigger fireworks for correct match!
          triggerFireworks();
        } else {
          // Wrong match, keep definition selected, clear word
          setSelectedWord(null);
          // Play wrong answer sound
          playWrongAnswerSound();
        }
      }
    }
  };

  const isCorrectMatch = (word: string, definition: string) => {
    // Find the definition object and check if its word matches
    const definitionItem = shuffledDefinitions.find(
      (def) => def.definition === definition
    );
    return definitionItem?.word === word;
  };

  // Trigger big celebration when all matches are complete
  useEffect(() => {
    if (matchedPairs.size === vocabulary.length && vocabulary.length > 0) {
      triggerBigCelebration();
    }
  }, [matchedPairs.size, vocabulary.length, triggerBigCelebration]);

  return (
    <div className="bg-gradient-to-br from-blue-200 to-indigo-100 flex flex-col">
      <Header currentLocale="en" />

      <main className="flex flex-col items-center justify-center flex-grow p-4 sm:p-6 md:p-8">
        <section
          id="hero-section"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4"
        >
          <div className="w-full max-w-7xl">
            <div className="space-y-4 flex flex-col items-center prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase !mb-4 text-center">
                Happy new year
              </h1>
              <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-x-2 not-prose text-center">
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">presented by:</p>
                <ul className="flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-x-4 text-blue-600 font-medium text-xs sm:text-sm md:text-base capitalize font-semibold">
                  <li>dyiam kolaib</li>
                  <li>shahd almasry</li>
                  <li>hala al hashmi</li>
                  <li>shahd almoghrabi</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-16">
              <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Image
                  src={img1}
                  alt="img1"
                  className="object-cover rounded-2xl w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Image
                  src={img2}
                  alt="img2"
                  className="object-cover rounded-2xl w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Image
                  src={img3}
                  alt="img3"
                  className="object-cover rounded-2xl w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Image
                  src={img4}
                  alt="img4"
                  className="object-cover rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Hero section */}
        <section
          id="question"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4"
        >
          <div className="flex flex-col items-center gap-y-3 xs:gap-y-4 sm:gap-y-5 prose prose-xs xs:prose-sm sm:prose-base md:prose-lg max-w-2xl w-full">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-blue-600 font-bold !mb-1 xs:!mb-2 text-center">
              what is your favorite celebration?
            </h3>
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 !mt-0 text-center">
              what were you doing on last new year's Eve?
            </h3>
            <div className="flex gap-x-3 xs:gap-x-4 sm:gap-x-5 not-prose">
              <Heart className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" />
              <Smile className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" />
            </div>
            <textarea
              name="answer"
              id=""
              placeholder="your answer"
              className="border-2 rounded-xl border-gray-500 w-full p-2 xs:p-3 sm:p-4 mt-4 xs:mt-6 sm:mt-8 md:mt-12 not-prose text-xs xs:text-sm sm:text-base"
              rows={4}
            ></textarea>
          </div>
        </section>
        {/* Question section */}
        <section
          id="vocabulary"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-full">
            {vocabulary.map((item) => {
              return (
                <Modal
                  key={item.word}
                  trigger={
                    <div className="flex flex-col w-96 sm:w-80 items-center gap-6 p-4 bg-white rounded-4xl shadow-2xl hover:shadow-3xl transition-all cursor-pointer border-4 border-gray-200 hover:border-blue-600 transform hover:-translate-y-3 duration-300">
                      {item.imageUrl ? (
                        <div className="w-full aspect-square max-w-full md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] relative overflow-hidden rounded-3xl">
                          <Image
                            src={item.imageUrl}
                            alt={item.word}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gray-200 rounded-3xl flex items-center justify-center">
                          <span className="text-gray-400 text-4xl sm:text-5xl md:text-6xl">📝</span>
                        </div>
                      )}
                      <span className="text-black font-extrabold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl capitalize">
                        {item.word}
                      </span>
                    </div>
                  }
                >
                  <div className="prose prose-xs xs:prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
                    {item.imageUrl && (
                      <div className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-108 aspect-square max-w-full relative mb-5 xs:mb-6 rounded-xl overflow-hidden not-prose">
                        <Image
                          src={item.imageUrl}
                          alt={item.word}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 !mb-4 xs:mb-5">
                      {item.word}
                    </h3>
                    <p className="text-rose-500 italic font-bold !mb-5 xs:!mb-6 text-base xs:text-lg sm:text-xl">
                      &quot; {item.part} &quot;
                    </p>
                    <div>
                      <strong className="text-gray-700 font-semibold text-base xs:text-lg sm:text-xl">Definition:</strong>
                      <p className="text-gray-600 !mt-3 font-medium text-base xs:text-lg sm:text-xl">{item.definiton}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700 !font-semibold text-base xs:text-lg sm:text-xl">Example:</strong>
                      <blockquote className="text-gray-600 italic !mt-3 !mb-0 text-base xs:text-lg sm:text-xl">
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
        {/* Matching Exercise section */}
        <section
          id="matching"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-6xl">
            <div className="prose prose-xs xs:prose-sm sm:prose-base md:prose-lg max-w-none mb-4 xs:mb-6 sm:mb-8 text-center">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 !mb-1 xs:!mb-2">
                Match the Words with Their meaning
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg">
                Click on a word, then click on its matching meaning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
              {/* Vocabulary Column */}
              <div className="space-y-5 xs:space-y-6 sm:space-y-7">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 mb-5 xs:mb-6 text-center">
                  Vocabulary Words
                </h3>
                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                  {vocabulary.map((item) => {
                    const isMatched = matchedPairs.has(item.word);
                    const isSelected = selectedWord === item.word;
                    return (
                      <div
                        key={item.word}
                        onClick={() => handleWordClick(item.word)}
                        className={`
                          flex items-center gap-3 xs:gap-4 sm:gap-4 p-2 xs:p-4 bg-white rounded-2xl shadow-lg
                          transition-all cursor-pointer border-2 transform hover:-translate-y-1 duration-300
                          ${isMatched
                            ? "border-green-500 bg-green-50"
                            : isSelected
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-400 hover:shadow-xl"
                          }
                        `}
                      >
                        {item.imageUrl && (
                          <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-20 relative overflow-hidden rounded-xl flex-shrink-0">
                            <Image
                              src={item.imageUrl}
                              alt={item.word}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800 flex-grow capitalize">
                          {item.word}
                        </span>
                        {isMatched && (
                          <CheckCircle2 className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Definitions Column */}
              <div className="space-y-5 xs:space-y-6 sm:space-y-7">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 mb-5 xs:mb-6 text-center capitalize">
                  meaning
                </h3>
                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                  {shuffledDefinitions.length > 0 ? (
                    shuffledDefinitions.map((def, index) => {
                      const isMatched = matchedPairs.has(def.word);
                      const isSelected = selectedDefinition === def.definition;
                      const isCorrectForSelected =
                        selectedWord &&
                        isCorrectMatch(selectedWord, def.definition);
                      return (
                        <div
                          key={`${def.word}-${index}`}
                          onClick={() => handleDefinitionClick(def.definition, def.word)}
                          className={`
                            p-4 xs:p-6 sm:p-8 bg-white rounded-2xl shadow-lg transition-all cursor-pointer border-2 transform hover:-translate-y-1 duration-300
                            ${isMatched
                              ? "border-green-500 bg-green-50"
                              : isSelected || isCorrectForSelected
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-400 hover:shadow-xl"
                            }
                          `}
                        >
                          <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                            {def.definition}
                          </p>
                          {isMatched && (
                            <div className="flex items-center justify-end mt-3 xs:mt-4">
                              <CheckCircle2 className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-green-500" />
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    // Show unshuffled definitions during SSR/initial render
                    vocabulary.map((item, index) => (
                      <div
                        key={`${item.word}-${index}`}
                        className="p-4 xs:p-5 sm:p-6 bg-white rounded-2xl shadow-lg border-3 border-gray-200"
                      >
                        <p className="text-gray-700 text-base xs:text-lg sm:text-xl leading-relaxed">
                          {item.definiton}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            {matchedPairs.size === vocabulary.length && (
              <div className="mt-4 xs:mt-6 sm:mt-8 text-center">
                <div className="inline-flex flex-col xs:flex-row items-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-6 py-2 xs:py-3 bg-green-100 border-2 border-green-500 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-600" />
                  <span className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-green-700 text-center">
                    Congratulations! You matched all words correctly!
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Matching Exercise section */}

        {/* Main Idea Section */}
        <section
          id="main-idea"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
              What is the main idea of the text?
            </h2>
            <div className="flex justify-center mt-8 sm:mt-10">
              <Modal
                trigger={
                  <div className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-lg sm:text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    Click for Answer
                  </div>
                }
              >
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Main Idea:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The main idea of the text is to celebrate the New Year and share joyful moments with friends and family.
                    It emphasizes the importance of togetherness, happiness, and creating wonderful memories during this
                    special time of the year.
                  </p>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Celebrating the New Year with loved ones</li>
                      <li>Creating happy memories through shared experiences</li>
                      <li>Expressing gratitude for the past year</li>
                      <li>Looking forward to new opportunities in the coming year</li>
                    </ul>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </section>

        {/* Country Quiz Section */}
        <section
          id="country-quiz"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-8xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
              Country Quiz: New Year Traditions
            </h2>
            <p className="text-gray-600 text-center text-lg mb-8">Select the countries that have each tradition.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[1000px] text-xl sm:text-2xl">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-4 sm:p-6 text-left font-bold text-gray-700">Tradition</th>
                    <th className="border border-gray-300 p-4 sm:p-6 text-left font-bold text-gray-700">Countries</th>
                    <th className="border border-gray-300 p-4 sm:p-6 text-left font-bold text-gray-700">Your Answer</th>
                    <th className="border border-gray-300 p-4 sm:p-6 text-left font-bold text-gray-700">Correct Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 sm:p-6">People eat special food</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q1" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q1" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q1" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q1"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q1">Netherlands</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 sm:p-6">People watch fireworks</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q2" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q2" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q2" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q2"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q2">Netherlands</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 sm:p-6">Celebration occurs in January</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q3" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q3" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q3" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q3"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q3">Netherlands, China</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 sm:p-6">People give presents</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q4" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q4" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q4" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q4"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q4">Iran, China</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 sm:p-6">People watch TV</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q5" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q5" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q5" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q5"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q5">Netherlands</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 sm:p-6">It's a long celebration</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q6" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q6" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q6" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q6"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q6">China</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 sm:p-6">People clean their houses</td>
                    <td className="border border-gray-300 p-4 sm:p-6">
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="q7" value="Netherlands" className="mr-2" />
                          Netherlands
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q7" value="Iran" className="mr-2" />
                          Iran
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="q7" value="China" className="mr-2" />
                          China
                        </label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-4 sm:p-6" id="answer-q7"></td>
                    <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q7">Netherlands, Iran, China</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                id="check-answers"
                className="px-6 py-3 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const questions = [
                    { id: 'q1', correct: ['Netherlands'] },
                    { id: 'q2', correct: ['Netherlands'] },
                    { id: 'q3', correct: ['Netherlands', 'China'] },
                    { id: 'q4', correct: ['Iran', 'China'] },
                    { id: 'q5', correct: ['Netherlands'] },
                    { id: 'q6', correct: ['China'] },
                    { id: 'q7', correct: ['Netherlands', 'Iran', 'China'] }
                  ];

                  let score = 0;

                  questions.forEach(q => {
                    const selected = Array.from(document.querySelectorAll(`input[type=checkbox][name=${q.id}]`))
                      .filter(checkbox => (checkbox as HTMLInputElement).checked)
                      .map(checkbox => (checkbox as HTMLInputElement).value);

                    const answerCell = document.getElementById(`answer-${q.id}`);
                    const correctCell = document.getElementById(`correct-${q.id}`);

                    if (answerCell && correctCell) {
                      answerCell.textContent = selected.length > 0 ? selected.join(', ') : 'Not answered';

                      // Check if the selected answers match the correct answers
                      const isCorrect = selected.length === q.correct.length &&
                        selected.every(country => q.correct.includes(country)) &&
                        q.correct.every(country => selected.includes(country));

                      if (isCorrect) {
                        answerCell.className = 'border border-gray-300 p-3 font-bold text-green-600';
                        score++;
                      } else {
                        answerCell.className = 'border border-gray-300 p-3 font-bold text-red-600';
                      }

                      // Show the correct answer
                      correctCell.classList.remove('hidden');
                    }
                  });

                  const result = document.getElementById('result');
                  if (result) {
                    result.textContent = `You scored ${score} out of ${questions.length}!`;

                    if (score === questions.length) {
                      result.className = 'mt-6 text-center text-xl font-bold text-green-600';
                    } else if (score >= questions.length / 2) {
                      result.className = 'mt-6 text-center text-xl font-bold text-blue-600';
                    } else {
                      result.className = 'mt-6 text-center text-xl font-bold text-red-600';
                    }
                  }
                }}
              >
                Check Answers
              </button>
              <button
                id="reset-quiz"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-full text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const checkboxes = document.querySelectorAll('input[type=checkbox]');
                  checkboxes.forEach(checkbox => {
                    (checkbox as HTMLInputElement).checked = false;
                  });

                  const answerCells = document.querySelectorAll('[id^="answer-"]');
                  answerCells.forEach(cell => {
                    cell.textContent = '';
                    cell.className = 'border border-gray-300 p-3';
                  });

                  const correctCells = document.querySelectorAll('[id^="correct-"]');
                  correctCells.forEach(cell => {
                    cell.classList.add('hidden');
                  });

                  const result = document.getElementById('result');
                  if (result) {
                    result.textContent = '';
                  }
                }}
              >
                Reset Quiz
              </button>
            </div>

            <div id="result" className="mt-6 text-center text-xl font-bold"></div>
          </div>
        </section>

        {/* New Year Sentences Section */}
        <section
          id="new-year-sentences"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
              New Year Sentences
            </h2>
            <p className="text-gray-600 text-center text-lg mb-8">
              Complete the sentences about New Year's Day celebrations
            </p>

            <div className="space-y-8">
              {/* Sentence 1 */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">1. On New Year's Day, I ...</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                  <div className="flex items-start">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                </div>
              </div>

              {/* Sentence 2 */}
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">2. I would like to celebrate New Year's Day in ... because ...</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                  <div className="flex items-start">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                  <div className="flex items-start">
                    <label htmlFor="sentence1a" className="bg-gray-400 text-lg w-full h-px">
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Check Answers
              </button>
            </div>
          </div>
        </section>

        {/* Favorite Celebration Section */}
        <section
          id="favorite-celebration"
          className="flex min-h-screen items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
              My Favorite Celebration
            </h2>
            <p className="text-gray-600 text-center text-lg mb-8">
              Write about your favorite celebration. What do people do?
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4">Question:</h3>
              <p className="text-gray-700 text-lg mb-6">
                Describe your favorite celebration. What activities do people typically do during this celebration?
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                  <div className="flex-1 border-b-2 border-gray-300 pb-2">
                    <p className="text-gray-700">People usually ...</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
                  <div className="flex-1 border-b-2 border-gray-300 pb-2">
                    <p className="text-gray-700">During the celebration, families ...</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                  <div className="flex-1 border-b-2 border-gray-300 pb-2">
                    <p className="text-gray-700">Traditional foods include ...</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
                  <div className="flex-1 border-b-2 border-gray-300 pb-2">
                    <p className="text-gray-700">The celebration is special because ...</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">5</div>
                  <div className="flex-1 border-b-2 border-gray-300 pb-2">
                    <p className="text-gray-700">Children often ...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 italic">
                Students can write their answers in their notebooks or on a separate sheet of paper.
              </p>
            </div>
          </div>
        </section>

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
