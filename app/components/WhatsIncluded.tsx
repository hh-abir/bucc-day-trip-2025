'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaFutbol, FaUtensils, FaBus, FaTimes } from 'react-icons/fa';

const WhatsIncluded = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // --- Card types (declare before using selectedCard) ---
  type FoodSection = { label: string; items: string[] };
  type FoodContent = {
    breakfast: FoodSection;
    lunch: FoodSection;
    snacks: FoodSection;
  };

  type Activity = { name: string; desc: string; obstacles?: string[] };

  type Card =
    | {
        id: 'travel' | 'facilities';
        icon: React.ReactNode;
        title: string;
        bgGradient: string;
        accentColor: string;
        borderColor: string;
        description: string;
        content: string[];
      }
    | {
        id: 'activities';
        icon: React.ReactNode;
        title: string;
        bgGradient: string;
        accentColor: string;
        borderColor: string;
        description: string;
        content: Activity[];
      }
    | {
        id: 'food';
        icon: React.ReactNode;
        title: string;
        bgGradient: string;
        accentColor: string;
        borderColor: string;
        description: string;
        content: FoodContent;
      };

  const [selectedCard, setSelectedCard] = useState<Card['id'] | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const cards = [
    {
      id: 'travel',
      icon: <FaBus className="w-12 h-12 text-blue-500" />,
      title: 'Travel',
      bgGradient: 'from-blue-50 to-blue-100',
      accentColor: 'text-blue-500',
      borderColor: 'border-blue-200',
      description: 'Round-trip transportation included',
      content: [
        'Depart from BRAC University',
        'Enjoy comfortable bus ride to the resort with fellow BUCCians',
        'Return to campus at end of day',
      ],
    },
    {
      id: 'facilities',
      icon: <FaBed className="w-12 h-12 text-indigo-500" />,
      title: 'Facilities',
      bgGradient: 'from-indigo-50 to-indigo-100',
      accentColor: 'text-indigo-500',
      borderColor: 'border-indigo-200',
      description: 'Premium amenities at the resort',
      content: [
        'Deluxe Air-Conditioned Rooms',
        'Swimming Pool',
        'Football Field',
        'Indoor Games Area',
        'Garden & Pond Area',
      ],
    },
    {
      id: 'activities',
      icon: <FaFutbol className="w-12 h-12 text-green-500" />,
      title: 'Activities & Games',
      bgGradient: 'from-green-50 to-green-100',
      accentColor: 'text-green-500',
      borderColor: 'border-green-200',
      description: '4 houses compete in exciting games to win the trophy',
      content: [
        {
          name: 'Teams',
          desc: "There are 4 houses (teams) and you will be sorted in a house randomly. Don't worry, the magical hat will place you in the best house. You have to compete in a series of games and win points for your house to lift the trophy.",
        },
        {
          name: 'First game: Simon Says',
          desc: 'A typical Simon Says Game where you have to listen to what Simon says if you wanna survive to the end.',
        },
        {
          name: 'Second game: Tara 3Kana 1Machi',
          desc: 'A traditional KanaMachi game with a twist. Where in a designated round area and there will be 3 Kanas (eyes will be blinded through clothing) and 1 Machi. The machi has to survive a given time in that circle to win.',
        },
        {
          name: 'Final game: Not your typical relay race',
          // Explicitly updated description as requested
          desc: "Male Female Combine 5 x 100 m Race. All four teams will participate side by side. Facing challenges and obstacles set by opponent teams and has to come out victorious after completing every hardship on the track. The races are both team and individual based.",
          obstacles: [
            'Murog Lorai - Show that you are not a brac Murgi',
            'Third leg Race - Your partner is not always your friend',
            "Carry the Bhoja - Let's see your strength, the bhoja might be a little too much for you",
            'Go straight - A balance race that will test your endurance',
            'Human Train - Our childhood game with a dirty twist that will make you cry',
          ],
        },
      ],
    },
    {
      id: 'food',
      icon: <FaUtensils className="w-12 h-12 text-purple-500" />,
      title: 'Food & Refreshments',
      bgGradient: 'from-purple-50 to-purple-100',
      accentColor: 'text-purple-500',
      borderColor: 'border-purple-200',
      description: 'Full meals and beverages throughout the day',
      content: {
        breakfast: {
          label: '🌅 Breakfast',
          items: ['Dim Khichuri', 'Juice (small)', 'Water (Bottled)'],
        },
        lunch: {
          label: '🍽️ Lunch',
          items: [
            'Polao',
            'Chicken Roast (1/4th)',
            'Beef/Chicken Curry/Fish Fry',
            'Boiled Egg',
            'Chinese Vegetables',
            'Salad',
            'Firni/Doi',
            'Soft Drinks',
            'Water (Bottled)',
          ],
        },
        snacks: {
          label: '🥤 Snacks',
          items: ['Chicken Sandwich', 'Veg Pakora', 'Tea', 'Water (Bottled)'],
        },
      },
    },
  ];

  const typedCards: Card[] = cards as unknown as Card[];

  const getCard = (id: Card['id'] | null): Card | undefined => typedCards.find((c) => c.id === id);
  const activeCard = getCard(selectedCard);

  return (
    <section id="whats-included" className="py-20 bg-white text-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            What&apos;s Included?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            One price covers everything. We&apos;ve arranged all the details for a worry-free day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelectedCard(card.id as Card['id'])}
            >
              <div
                className={`bg-gradient-to-br ${card.bgGradient} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {card.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
                <div className={`text-xs font-semibold ${card.accentColor} mt-4 flex items-center gap-2`}>
                  Click to explore →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Drawer */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {activeCard && (
                <div className="">
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${activeCard.bgGradient} p-6 sticky top-0 z-10 flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-3">
                      {activeCard.icon}
                      <h2 className="text-2xl font-bold text-gray-800">
                        {activeCard.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="p-2 hover:bg-white/20 rounded-full transition"
                    >
                      <FaTimes className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {activeCard.id === 'food' ? (
                      <div className="space-y-6">
                        {Object.keys(activeCard.content).map((key) => {
                          const section = activeCard.content[key as keyof FoodContent];
                          return (
                            <div key={key}>
                              <p className="font-semibold text-gray-800 mb-2 text-lg">{section.label}</p>
                              <div className="space-y-2">
                                {section.items.map((item, idx) => (
                                  <p key={idx} className="text-sm text-gray-700 flex items-center gap-2 ml-2">
                                    <span className={activeCard.accentColor}>→</span> {item}
                                  </p>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : activeCard.id === 'activities' ? (
                      <div className="space-y-6">
                        {activeCard.content.map((activity, idx) => (
                          <div key={idx}>
                            <p className="font-semibold text-gray-800 mb-1 text-lg">{activity.name}</p>
                            <p className="text-sm text-gray-700 mb-2">{activity.desc}</p>
                            {activity.obstacles && (
                              /* Changed to Ordered List (ol) for numbering */
                              <ol className="space-y-1 ml-3">
                                {activity.obstacles.map((obstacle, obstIdx) => (
                                  <li key={obstIdx} className="text-xs text-gray-700 flex items-start gap-2">
                                    {/* Display Number instead of Bullet */}
                                    <span className={`${activeCard.accentColor} font-bold min-w-[12px]`}>
                                      {obstIdx + 1}.
                                    </span>
                                    <span>{obstacle}</span>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {activeCard.content.map((item, idx) => (
                          <p key={idx} className="text-sm text-gray-700 flex items-center gap-2 ml-2">
                            <span className={activeCard.accentColor}>→</span> {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatsIncluded;