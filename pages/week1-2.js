// pages/week1-2.js — Weeks 1–2: Foundation — 14 days of guided third eye activation
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../lib/useAuth'
import { useProgress } from '../lib/useProgress'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', cream2:'#F2EBE0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const DAYS = [
  {
    day: 1, title: 'The Invitation Inward', week: 1, theme: 'Welcome & Intention Setting', duration: '20 minutes',
    teaching: "Today marks the beginning of a 52-day journey that will change the way you see \u2014 not with your physical eyes, but with the eye that sees beyond. The third eye, known in Sanskrit as the Ajna chakra, is not something you need to create. It already exists within you. It has always been there, quietly perceiving, waiting for you to pay attention.\n\nBefore we begin any technique, we begin with intention. Intention is the rudder of your spiritual ship. Without it, you drift. With it, even the gentlest wind carries you forward.\n\nToday\u2019s lesson is simple but foundational: you are not starting from zero. Every time you\u2019ve had a gut feeling that turned out to be right, every time you sensed something before it happened, every time you knew something without knowing how \u2014 that was your third eye, already working. We are not building something new. We are uncovering what was always there.",
    practice: "Find a quiet space. Sit comfortably with your spine straight \u2014 on a chair, on the floor, whatever works. Close your eyes.\n\nPlace your hand over your heart. Take three deep breaths. With each exhale, let your body settle.\n\nNow, in your own words (aloud or silently), state your intention for this journey. It might be: \u201CI open myself to deeper seeing.\u201D Or: \u201CI am ready to trust my inner knowing.\u201D Or something entirely your own. There is no wrong answer.\n\nSit with your intention for 5 minutes. Simply breathe and hold it in your awareness.\n\nWhen you\u2019re done, write your intention in your journal. Date it. You will return to this at the end of the 52 days.",
    journalPrompt: 'What called you to this journey? What are you hoping to see, feel, or understand by the end? Write freely \u2014 no editing, no judgment.',
  },
  {
    day: 2, title: 'The Anatomy of the Third Eye', week: 1, theme: 'Understanding the Ajna Chakra', duration: '25 minutes',
    teaching: "The third eye \u2014 the Ajna chakra \u2014 sits at the centre of your forehead, between and slightly above your eyebrows. In the chakra system, it is the sixth energy centre, governing intuition, insight, imagination, and spiritual perception.\n\nThe word \u201CAjna\u201D means \u201Ccommand\u201D or \u201Cperceive\u201D in Sanskrit. It is called the command centre because it is the point from which higher awareness directs the lower centres. When this chakra is balanced and active, you experience clarity of thought, strong intuition, vivid dreams, and a sense of connection to something larger than your individual self.\n\nPhysically, the third eye is associated with the pineal gland \u2014 a small, pine cone-shaped gland deep in the centre of your brain. The pineal gland produces melatonin (which regulates sleep) and is sensitive to light, even though it sits inside the skull. Ancient traditions across the world have recognised it as the seat of spiritual vision. The Egyptians represented it as the Eye of Horus. Descartes called it \u201Cthe seat of the soul.\u201D\n\nThe pineal gland can become calcified over time through fluoride, poor diet, lack of sunlight, and chronic stress. Part of our work in these first two weeks is to begin the process of decalcification \u2014 gently, naturally, through practice and awareness.\n\nBelow the Ajna chakra sits the throat chakra (expression) and above it sits the crown chakra (divine connection). The third eye is the bridge between personal identity and universal consciousness. It is where \u201CI\u201D begins to dissolve into \u201Call.\u201D",
    practice: "Sit in your quiet space. Close your eyes. Bring your awareness to the point between your eyebrows \u2014 the third eye point.\n\nDon\u2019t strain. Don\u2019t try to \u201Csee\u201D anything. Simply rest your attention there, as gently as you would rest your hand on a sleeping child.\n\nBreathe naturally. You may notice warmth, tingling, pulsing, pressure, or nothing at all. All responses are valid. The practice is the attention itself.\n\nStay here for 10 minutes. If your mind wanders (it will), gently return your focus to the third eye point. Each return is a repetition that strengthens the muscle of awareness.",
    journalPrompt: 'What did you feel (physically, emotionally, or intuitively) when you focused on the third eye point? Describe the sensations, even if they were subtle or unclear.',
  },
  {
    day: 3, title: 'The Breath as Gateway', week: 1, theme: 'Foundational Breathwork', duration: '25 minutes',
    teaching: "The breath is the bridge between the physical and the spiritual. It is the one bodily function that operates both automatically and voluntarily \u2014 you breathe without thinking, but you can also take control at any moment. This dual nature makes it the perfect tool for crossing from ordinary awareness into expanded states of perception.\n\nIn third eye work, the breath serves three purposes. First, it calms the nervous system. A calm body creates the conditions for subtle perception \u2014 you cannot hear a whisper in a storm. Second, it oxygenates the brain and stimulates the pineal gland. Third, it moves prana (life force energy) through the energy channels, clearing blockages and nourishing the chakras.\n\nToday we introduce two breathing techniques you will use throughout this course:\n\nTechnique 1: Balanced Breathing (Sama Vritti) \u2014 Inhale for a count of 4. Hold for 4. Exhale for 4. Hold for 4. This creates a square pattern that balances the nervous system and quiets the mind.\n\nTechnique 2: Third Eye Breath \u2014 Inhale slowly through the nose. As you inhale, visualise the breath travelling up from the base of your spine, through your chest, and converging at the third eye point. Hold briefly. As you exhale, visualise the breath flowing out through the third eye, as though you are breathing out through your forehead.",
    practice: "Begin with 5 minutes of Balanced Breathing (4-4-4-4). Find a rhythm that is comfortable \u2014 if 4 counts is too long, use 3. The key is equality and steadiness.\n\nThen transition to 5 minutes of Third Eye Breath. Inhale up the spine, hold at the third eye, exhale through the forehead. Don\u2019t force the visualisation \u2014 let it be soft, like imagining a warm golden light rising with each inhale.\n\nFinish with 2 minutes of natural breathing, simply observing the third eye point.\n\nTotal: 12 minutes of seated practice.",
    journalPrompt: 'Which breathing technique felt more natural to you? Did you notice any difference in the quality of your attention between the two? Write about the experience.',
  },
  {
    day: 4, title: 'Clearing the Vessel', week: 1, theme: 'Physical Preparation & Decalcification', duration: '30 minutes',
    teaching: "Spiritual development does not happen in isolation from the body. Your physical vessel is the instrument through which consciousness expresses itself. A foggy instrument produces foggy perception. A clear instrument produces clarity.\n\nThe pineal gland \u2014 your physical third eye \u2014 is one of the most sensitive organs in the body. Over time, it accumulates calcium deposits (calcification) that can dull its function. This is a natural process accelerated by environmental factors: fluoride in water and toothpaste, processed foods, heavy metals, lack of sunlight, and chronic stress.\n\nDecalcification is not an overnight process, but you can begin supporting your pineal gland today:\n\nWater: Drink filtered water when possible. Fluoride is the primary calcifier.\n\nSunlight: Spend 10-15 minutes in natural sunlight daily, ideally in the morning. The pineal gland responds to light cycles.\n\nDiet: Dark leafy greens, raw cacao, turmeric, lemon water, and chlorella support detoxification. Reduce processed foods, refined sugar, and artificial additives.\n\nSleep: The pineal gland is most active during deep sleep, particularly between 1am and 4am. Prioritise sleep quality \u2014 dark room, no screens before bed, consistent schedule.\n\nThese are not rigid rules. They are invitations to care for your instrument with the same reverence you bring to your practice.",
    practice: "Part 1 \u2014 Body Preparation (5 minutes): Stand and stretch gently. Roll your neck slowly in circles. Raise your arms overhead and stretch your spine. Shake your hands vigorously for 30 seconds \u2014 this moves stagnant energy. Then stand still and feel the tingling in your palms. That tingling is prana.\n\nPart 2 \u2014 Seated Practice (10 minutes): Sit and begin with 3 minutes of Balanced Breathing. Then shift to Third Eye Breath for 5 minutes. Close with 2 minutes of silent awareness at the third eye point.\n\nPart 3 \u2014 Nourishment: Drink a glass of warm lemon water. If you have turmeric, add a pinch. Set the intention that this water is clearing and nourishing your inner vision.",
    journalPrompt: 'How do you currently treat your body? Are there any habits you sense are dimming your clarity? Write honestly \u2014 not to judge yourself, but to see clearly.',
  },
  {
    day: 5, title: 'The Art of Stillness', week: 1, theme: 'Deepening Meditation & Trataka', duration: '30 minutes',
    teaching: "By now you have sat in stillness for four days. You may have noticed something: your mind does not want to be still. It wants to plan, remember, worry, fantasise, narrate \u2014 anything but be present. This is completely normal. In fact, noticing this is the practice.\n\nThere is a common misunderstanding that meditation means stopping your thoughts. It does not. Meditation means changing your relationship to your thoughts. Instead of being swept away by every mental wave, you learn to sit on the shore and watch the waves come and go.\n\nThe mind thinks. That is its nature, just as the heart beats and the lungs breathe. You learn instead to observe the mind without being controlled by it. This is the beginning of mastery \u2014 and it is the foundation of all third eye work.\n\nToday we introduce candle gazing (trataka). This is one of the oldest and most direct methods of third eye activation used across Hindu, Buddhist, and African spiritual traditions.",
    practice: "Part 1 \u2014 Candle Gazing / Trataka (10 minutes): Light a candle and place it at eye level, about an arm\u2019s length away. Sit comfortably. Gaze at the flame without blinking for as long as you can. When your eyes water or you need to blink, close your eyes gently and observe the afterimage of the flame on your inner screen \u2014 the space behind your closed eyelids. This afterimage often appears at the third eye point. Hold your attention on it until it fades. Then open your eyes and gaze at the flame again. Repeat for 10 minutes.\n\nTrataka strengthens concentration, stimulates the optic nerve (which connects to the pineal gland), and trains you to see with your inner eye.\n\nPart 2 \u2014 Silent Meditation (5 minutes): After trataka, close your eyes and sit in stillness. Observe whatever arises \u2014 images, colours, sensations. Don\u2019t chase them. Don\u2019t push them away. Simply witness.",
    journalPrompt: 'Describe the afterimage you saw during trataka. What colours appeared? Where did it appear in your visual field? Did any images arise during the silent meditation afterward?',
  },
  {
    day: 6, title: 'Listening to the Subtle Body', week: 1, theme: 'Energy Awareness & Body Scanning', duration: '30 minutes',
    teaching: "You have a physical body \u2014 bones, muscles, organs. But spiritual traditions across the world teach that you also have a subtle body \u2014 an energetic counterpart made of life force (prana, chi, or what the Zulu call umoya). This subtle body contains your chakras, your energy channels (nadis), and your aura.\n\nYou cannot see the subtle body with your physical eyes (yet). But you can feel it. Every time you walk into a room and sense the \u201Catmosphere,\u201D every time you feel drained by a certain person, every time your gut tells you something your mind doesn\u2019t know yet \u2014 these are perceptions of the subtle body.\n\nDeveloping awareness of the subtle body is essential for third eye work because the Ajna chakra is not a physical organ \u2014 it is an energy centre. To activate it, you must learn to perceive and work with energy.",
    practice: "Lie down or sit reclined. Close your eyes. Take 5 slow, deep breaths.\n\nBeginning at the crown of your head, slowly bring your attention downward through your body. At each point, pause for 30-60 seconds and simply notice what you feel.\n\nCrown of the head \u2192 Forehead / third eye point \u2192 Eyes \u2192 Jaw \u2192 Throat \u2192 Chest / heart \u2192 Solar plexus \u2192 Lower abdomen \u2192 Base of the spine \u2192 Thighs \u2192 Knees \u2192 Feet\n\nCommon sensations: warmth, coolness, tingling, heaviness, lightness, pulsing, tightness, openness, nothing. All are valid.\n\nAfter completing the scan (about 10 minutes), bring your attention back to the third eye point. Rest here for 3 minutes. Then open your eyes slowly.",
    journalPrompt: 'Where in your body did you feel the most sensation? Where did you feel the least? What was the quality of sensation at your third eye point?',
  },
  {
    day: 7, title: 'Week 1 Integration', week: 1, theme: 'Reflection, Rest & Consolidation', duration: '20 minutes',
    teaching: "You have completed your first week. Take a moment to honour that. Seven days of showing up, sitting down, and turning inward. In a world that rewards constant doing, you chose being. That is not a small thing.\n\nWeek 1 was about preparing the ground. You set your intention. You learned the anatomy of the third eye. You practised breathwork, meditation, candle gazing, and body scanning. You began caring for your physical body as a spiritual instrument.\n\nToday is a day of integration. In spiritual work, integration is as important as activation. Seeds need time in the dark earth before they sprout. Muscles grow during rest, not during the exercise itself. The same principle applies to consciousness.",
    practice: "Part 1 \u2014 Review (10 minutes): Read back through your journal entries from Days 1-6. Don\u2019t analyse \u2014 simply read. Notice what stands out now that didn\u2019t stand out when you wrote it.\n\nPart 2 \u2014 Gratitude Practice (5 minutes): Sit quietly. Bring to mind three things from this week that you are grateful for. Hold each one in your heart for a full minute. Gratitude opens the heart chakra, which is the energetic foundation that supports the third eye.\n\nPart 3 \u2014 Extended Rest: If possible, take a nap, go for a walk in nature, or simply sit in silence for as long as feels right. Today is about receiving, not doing.",
    journalPrompt: 'Looking back at your first week: what surprised you? What challenged you? What felt natural? If you could give your Day 1 self one piece of encouragement, what would it be?',
  },
  {
    day: 8, title: 'Establishing Your Daily Ritual', week: 2, theme: 'Creating a Sacred Practice Structure', duration: '25 minutes',
    teaching: "Welcome to Week 2. This week, we move from exploration to ritual \u2014 from trying practices to establishing a daily structure that becomes as natural as brushing your teeth.\n\nThe word \u201Critual\u201D sometimes carries religious connotations, but at its core, a ritual is simply a repeated action performed with intention and awareness. What transforms an ordinary act into a sacred one is your presence within it.\n\nFor the remainder of this course \u2014 and ideally for the rest of your life \u2014 you will maintain a daily practice. It does not need to be long. Fifteen minutes is enough. But it must be consistent.\n\nYour daily ritual will consist of three elements:\n1. Breathwork (3-5 minutes) \u2014 to arrive in the body and calm the mind\n2. Third Eye Meditation (5-10 minutes) \u2014 to activate and strengthen the Ajna chakra\n3. Journaling (5 minutes) \u2014 to record impressions and track your development\n\nThe ideal time is early morning, before the day\u2019s noise begins. But any consistent time works. The key is: same time, same place, every day.",
    practice: "Today, establish your ritual. Choose your time. Choose your space. If possible, create a small dedicated area \u2014 even a corner with a cushion and a candle.\n\nThen perform your first full daily ritual:\n\n1. Balanced Breathing \u2014 3 minutes (4-4-4-4 count)\n2. Third Eye Breath \u2014 3 minutes (inhale up spine, exhale through forehead)\n3. Third Eye Meditation \u2014 7 minutes (if you have a candle, begin with 3 minutes of trataka, then close eyes for 4 minutes)\n4. Journal \u2014 5 minutes\n\nTotal: approximately 18 minutes.",
    journalPrompt: 'What time and place have you chosen for your daily ritual? How did this first structured session feel compared to the more exploratory practices of Week 1?',
  },
  {
    day: 9, title: 'The Power of Sound', week: 2, theme: 'Mantra & Vibration for Activation', duration: '30 minutes',
    teaching: "Everything in the universe vibrates. Sound is one of the most direct ways to influence energy, which is why chanting, singing, drumming, and toning appear in virtually every spiritual tradition on earth.\n\nThe Ajna chakra resonates with the seed mantra \u201COM\u201D \u2014 or more precisely, \u201CAUM.\u201D When you chant AUM, the vibration travels through your skull and stimulates the pineal gland. This is not metaphor \u2014 it is physics.\n\nAUM has three sounds:\n\u201CA\u201D (aah) \u2014 vibrates in the chest and belly. Represents waking consciousness.\n\u201CU\u201D (ooh) \u2014 vibrates in the throat. Represents dreaming consciousness.\n\u201CM\u201D (mmm) \u2014 vibrates in the head and third eye. Represents deep sleep / the unconscious.\n\nThe silence after AUM represents the fourth state \u2014 turiya \u2014 pure awareness beyond waking, dreaming, and sleeping. This is the state the third eye perceives from.\n\nYou don\u2019t need to be religious to chant. AUM is a sound, and sounds belong to everyone.",
    practice: "Perform your daily ritual (breathwork + meditation), then add this:\n\nChanting AUM (7 minutes): Sit with your spine straight. Take a deep breath. On the exhale, chant \u201CAAAAAUUUUUMMMMM\u201D slowly, letting each syllable vibrate fully. Feel \u201CA\u201D in your chest. Feel \u201CU\u201D in your throat. Feel \u201CM\u201D buzzing at the bridge of your nose and third eye. Let the silence at the end ring.\n\nRepeat for 7 minutes (roughly 15-20 repetitions).\n\nAfter chanting, sit in complete silence for 3 minutes. Notice what you feel at the third eye point. The period immediately after chanting is often when the strongest sensations arise.",
    journalPrompt: 'Describe the physical sensations during and after chanting AUM. Where did you feel the vibration most strongly? Did the quality of silence after chanting feel different from ordinary silence?',
  },
  {
    day: 10, title: 'Seeing in the Dark', week: 2, theme: 'Inner Visualisation & the Mind\'s Eye', duration: '30 minutes',
    teaching: "Close your eyes right now. Picture a red apple sitting on a white table. Can you see it? That capacity \u2014 to perceive images without physical input \u2014 is the beginning of inner sight.\n\nVisualisation is not imagination in the dismissive sense. It is the active use of the mind\u2019s eye \u2014 the same faculty that becomes clairvoyance (clear seeing) when developed further. Every psychic impression, every prophetic vision, every moment of creative insight uses the same internal screen.\n\nSome people are naturally strong visualisers. Others see nothing when they close their eyes. Neither is better or worse \u2014 they are simply different starting points. Visualisation, like any skill, strengthens with practice.",
    practice: "Exercise 1 \u2014 Colour Breathing (5 minutes): Close your eyes. Breathe in and visualise breathing in a deep indigo (dark blue-purple) light \u2014 the colour associated with the third eye. See this light entering through the crown of your head and pooling at the Ajna point. Breathe out and visualise any darkness or fog leaving.\n\nExercise 2 \u2014 Shape Holding (5 minutes): Visualise a simple geometric shape \u2014 a white triangle on a black background. Hold it steady in your mind\u2019s eye. When it fades, gently bring it back. After 2 minutes, change to a circle. Then a square.\n\nExercise 3 \u2014 Memory Replay (3 minutes): Recall a happy memory in as much visual detail as possible. See the colours, the faces, the light. Try to \u201Cstep into\u201D the scene as though you are reliving it.\n\nFinish with 2 minutes of open awareness at the third eye \u2014 simply observe whatever appears on your inner screen without directing it.",
    journalPrompt: 'Rate your visualisation clarity on a scale of 1-10. Which exercise was easiest? Which was hardest? What colours or images appeared during the open awareness period?',
  },
  {
    day: 11, title: 'Dreaming Awake', week: 2, theme: 'Dream Work & the Third Eye at Night', duration: '25 minutes',
    teaching: "Your third eye does not sleep when you do. In fact, it is often most active during the night. Dreams are one of the primary channels through which the Ajna chakra communicates \u2014 delivering symbols, messages, warnings, guidance, and sometimes direct visions.\n\nMany people dismiss their dreams as random noise. This is one of the greatest missed opportunities in spiritual development. Your dream life is a direct line to your subconscious mind and, through it, to the universal field of consciousness.\n\nWorking with dreams accelerates third eye development because it teaches you to receive and interpret non-physical information \u2014 which is exactly what the third eye does during waking hours as well.\n\nThe most important dream practice is also the simplest: write them down. The act of recording your dreams sends a signal to your subconscious that says, \u201CI am paying attention. Send me more.\u201D Within days, most people notice their dream recall improving dramatically.",
    practice: "Tonight, before you sleep:\n\n1. Place your journal and a pen directly beside your bed \u2014 within arm\u2019s reach.\n\n2. As you lie in bed, perform 3 minutes of Third Eye Breath.\n\n3. Set a dream intention: \u201CTonight I will remember my dreams. I am open to receiving guidance through my dreams.\u201D\n\n4. Visualise the indigo light at your third eye as you drift to sleep.\n\nTomorrow morning \u2014 before you move, before you check your phone:\n\n5. Write down whatever you remember. Even fragments. Even feelings without images.\n\nContinue your daily breathwork and meditation practice during the day.",
    journalPrompt: 'Evening: What is one question you would like your dreams to answer tonight?\n\nMorning: Record everything you remember from your dreams \u2014 images, emotions, people, places, colours, sensations.',
  },
  {
    day: 12, title: 'Intuition as Practice', week: 2, theme: 'Developing Everyday Intuitive Awareness', duration: '20 minutes',
    teaching: "The third eye is not only for meditation cushions and mystical experiences. Its most practical application is intuition \u2014 the ability to know something without knowing how you know it.\n\nMost people experience intuition passively. But intuition can be actively cultivated. It can become a reliable faculty that you consult as naturally as you consult your eyes or ears.\n\nIntuition communicates through body signals (gut feelings, chest tightness, heart warmth), sudden knowing (a thought that arrives fully formed), images (a flash of a face or scene), and emotion (an inexplicable feeling of yes or no).\n\nThe biggest obstacle to intuition is not that it\u2019s absent \u2014 it\u2019s that we override it. Developing intuition means learning to listen first and analyse second.",
    practice: "Today, in addition to your daily ritual, practise intuition throughout the day:\n\nExercise 1 \u2014 Morning Prediction: Before checking your phone, sit quietly and ask: \u201CWhat is the energy of today?\u201D Write down whatever impressions arise. Review at end of day.\n\nExercise 2 \u2014 The Phone Exercise: The next time your phone rings, pause before looking. Ask yourself: who is it? Note your first impression, then check.\n\nExercise 3 \u2014 Decision Sensing: When faced with a choice today, pause. Close your eyes briefly. Ask your body: which option feels lighter, more expansive, more like a \u201Cyes\u201D? Choose that one.",
    journalPrompt: 'Record the results of all three exercises. What did your morning prediction say? How did the phone exercise go? What decision did you make intuitively, and how did it turn out?',
  },
  {
    day: 13, title: 'Protection & Grounding', week: 2, theme: 'Energetic Boundaries & Staying Rooted', duration: '30 minutes',
    teaching: "As your third eye opens, your sensitivity increases. This is a gift \u2014 but it also means you need to learn how to manage your energy. Without proper grounding and protection, increased sensitivity can lead to overwhelm.\n\nGrounding is the practice of anchoring your energy in your body and in the earth. Think of a tree: the taller it grows, the deeper its roots must reach. The same is true for you.\n\nProtection is the practice of maintaining clear energetic boundaries \u2014 knowing where your energy ends and another person\u2019s begins. This is not about fear. It is about sovereignty.\n\nIn African spiritual traditions, protection and grounding are considered fundamental \u2014 not optional add-ons. The ancestors understood that the spiritual world is vast, and that navigating it requires both openness and discernment.",
    practice: "Part 1 \u2014 Grounding (5 minutes): Stand barefoot on the ground (outside is ideal, but any floor works). Close your eyes. Visualise roots growing from the soles of your feet deep into the earth \u2014 through the soil, through the rock, all the way to the core. Feel yourself anchored. Feel the earth\u2019s energy rising up through these roots into your body.\n\nPart 2 \u2014 Protection Visualisation (5 minutes): Sit comfortably. Visualise a sphere of golden-white light surrounding your entire body. Set the intention: \u201COnly that which is for my highest good may enter this space. Everything else is returned with love.\u201D Hold this image for 5 minutes.\n\nPart 3 \u2014 Daily Practice: Do your standard breathwork and third eye meditation. Notice if it feels different after grounding and protection.\n\nGoing forward, do grounding and protection at the start of every practice session.",
    journalPrompt: 'How did grounding feel in your body? Did the protection visualisation change the quality of your meditation? Are there situations or people in your life that leave you feeling drained?',
  },
  {
    day: 14, title: 'Foundation Complete', week: 2, theme: 'Integration, Celebration & Preparation', duration: '35 minutes',
    teaching: "Fourteen days. You have built a foundation. Let that land.\n\nYou now have a daily ritual. You understand the anatomy of the third eye. You know how to breathe with intention, meditate with focus, chant with power, visualise with clarity, work with your dreams, listen to your intuition, and protect your energy. These are not small things. These are the building blocks of every advanced spiritual practice that follows.\n\nLook back at your Day 1 journal entry \u2014 your original intention. Read it. Feel how different you are from the person who wrote those words fourteen days ago.\n\nIn Weeks 3-5, we will move into Activation & Expansion \u2014 opening the Ajna chakra more fully, developing your intuitive gifts, exploring the subtle realms, and discovering your unique channel of perception. The foundation you have built here will support everything that comes.\n\nBut today is for completion. For gratitude. For rest. You have earned it.",
    practice: "Part 1 \u2014 Full Practice (15 minutes): Perform your complete daily ritual one final time for this module: Grounding (2 min) \u2192 Protection (2 min) \u2192 Balanced Breathing (3 min) \u2192 Third Eye Breath with AUM chanting (5 min) \u2192 Silent third eye meditation (3 min)\n\nPart 2 \u2014 Reflection (10 minutes): Read through all your journal entries from Days 1-14. Notice your growth. Notice patterns.\n\nPart 3 \u2014 Letter to Yourself: Write a letter to yourself from two weeks ago \u2014 the you who hadn\u2019t started yet. What would you want that person to know?\n\nPart 4 \u2014 Rest and Celebrate: You have completed the Foundation. Do something kind for yourself today.",
    journalPrompt: 'Write your letter to your past self. Then answer: What is the single most important thing you have learned in these 14 days? What are you most looking forward to in Weeks 3-5?',
  },
]

function LoadingScreen() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:C.cream, fontFamily:sans }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>👁</div>
        <p style={{ color:C.muted }}>Loading your practice space...</p>
      </div>
    </div>
  )
}

function LockedScreen() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:C.cream, fontFamily:sans, padding:'2rem' }}>
      <div style={{ maxWidth:480, textAlign:'center', background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'3rem 2rem', boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
        <h2 style={{ fontFamily:serif, color:C.green, fontWeight:400, fontSize:'1.8rem', margin:'0 0 0.75rem' }}>Course Access Required</h2>
        <p style={{ color:C.muted, lineHeight:1.7, marginBottom:'2rem' }}>You need to enroll in a cohort to access the course content. Once payment is complete, David will activate your access within 24 hours.</p>
        <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          <a href="/#pricing" style={{ display:'block', background:C.green, color:C.white, padding:'0.9rem', borderRadius:8, textDecoration:'none', fontWeight:500 }}>View Enrollment Options</a>
          <a href={`https://wa.me/27817904941?text=${encodeURIComponent('Hi David, I have completed payment and would like my course access activated.')}`} target="_blank" rel="noopener noreferrer" style={{ display:'block', background:'#25D366', color:C.white, padding:'0.9rem', borderRadius:8, textDecoration:'none', fontWeight:500 }}>💬 Message David on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

function CourseContent({ user }) {
  const { completed: completedDays, markDone, loading: progressLoading } = useProgress(user?.uid, 'week1-2')
  const [activeDay, setActiveDay] = useState(0)

  const handleComplete = async (day) => {
    await markDone(day)
  }

  const currentDay = DAYS[activeDay]
  const progress = Math.round(((completedDays || []).length / 14) * 100)
  const days = completedDays || []

  if (progressLoading) return <LoadingScreen />

  return (
    <>
      <Head>
        <title>Weeks 1-2: Foundation — The Clarity Institute</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/dashboard" style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
            <span style={{ fontSize:'0.82rem', color:C.muted }}>{progress}% complete</span>
            <Link href="/dashboard" style={{ fontSize:'0.85rem', color:C.muted, textDecoration:'none' }}>← Dashboard</Link>
          </div>
        </nav>

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'2rem 1.5rem' }}>
          <div style={{ marginBottom:'2rem' }}>
            <span style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:C.orange, display:'block', marginBottom:'0.5rem' }}>Weeks 1–2</span>
            <h1 style={{ fontFamily:serif, fontSize:'2.2rem', color:C.green, fontWeight:300, margin:'0 0 0.5rem' }}>Foundation</h1>
            <p style={{ color:C.muted, margin:0, fontSize:'0.95rem' }}>Establish your practice, understand the third eye anatomy, and begin daily activation rituals.</p>
            <div style={{ background:C.cream2, borderRadius:999, height:8, overflow:'hidden', marginTop:'1rem', maxWidth:400 }}>
              <div style={{ height:'100%', width:`${progress}%`, background:C.green, borderRadius:999, transition:'width 0.5s ease' }} />
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'2rem' }}>
            {/* Sidebar */}
            <div>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:14, overflow:'hidden', position:'sticky', top:'1rem' }}>
                {DAYS.map((d, i) => {
                  const isActive = i === activeDay
                  const isComplete = days.includes(d.day)
                  const isWeekBreak = i === 0 || d.week !== DAYS[i-1]?.week
                  return (
                    <div key={d.day}>
                      {isWeekBreak && (
                        <div style={{ padding:'0.6rem 1rem', background:C.cream, fontSize:'0.72rem', fontWeight:600, color:C.orange, textTransform:'uppercase', letterSpacing:'0.1em' }}>Week {d.week}</div>
                      )}
                      <button onClick={() => setActiveDay(i)} style={{
                        display:'flex', alignItems:'center', gap:'0.6rem', width:'100%', textAlign:'left', padding:'0.7rem 1rem',
                        background: isActive ? `${C.green}10` : 'transparent', border:'none', borderBottom:`1px solid ${C.border}`,
                        borderLeft: isActive ? `3px solid ${C.green}` : '3px solid transparent',
                        cursor:'pointer', fontFamily:sans, fontSize:'0.85rem', color: isActive ? C.green : C.text, fontWeight: isActive ? 500 : 400,
                      }}>
                        <span style={{
                          width:22, height:22, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                          fontSize:'0.7rem', fontWeight:600, flexShrink:0,
                          background: isComplete ? C.green : C.cream, color: isComplete ? C.white : C.muted,
                          border: isComplete ? 'none' : `1px solid ${C.border}`,
                        }}>{isComplete ? '✓' : d.day}</span>
                        <span style={{ lineHeight:1.3 }}>{d.title}</span>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Main content */}
            <div>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:'2.5rem', marginBottom:'1.5rem' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.5rem', flexWrap:'wrap', gap:'0.5rem' }}>
                  <div>
                    <span style={{ fontSize:'0.75rem', color:C.orange, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Day {currentDay.day} · {currentDay.theme}</span>
                    <h2 style={{ fontFamily:serif, fontSize:'2rem', color:C.green, fontWeight:300, margin:'0.25rem 0 0' }}>{currentDay.title}</h2>
                  </div>
                  <span style={{ fontSize:'0.8rem', color:C.muted, background:C.cream, padding:'0.3rem 0.75rem', borderRadius:999 }}>⏱ {currentDay.duration}</span>
                </div>

                <div style={{ marginBottom:'2rem' }}>
                  <h3 style={{ fontSize:'0.8rem', fontWeight:600, color:C.brown, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.75rem' }}>Today's Teaching</h3>
                  {currentDay.teaching.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color:C.text, fontSize:'0.95rem', lineHeight:1.85, margin:'0 0 1rem' }}>{para}</p>
                  ))}
                </div>

                <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}25`, borderRadius:14, padding:'1.75rem', marginBottom:'2rem' }}>
                  <h3 style={{ fontSize:'0.8rem', fontWeight:600, color:C.green, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.75rem' }}>🧘 Today's Practice</h3>
                  {currentDay.practice.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color:C.text, fontSize:'0.95rem', lineHeight:1.85, margin:'0 0 1rem' }}>{para}</p>
                  ))}
                </div>

                <div style={{ background:C.cream, borderLeft:`3px solid ${C.orange}`, borderRadius:'0 10px 10px 0', padding:'1.25rem 1.5rem', marginBottom:'2rem' }}>
                  <h3 style={{ fontSize:'0.8rem', fontWeight:600, color:C.orange, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.5rem' }}>📝 Journal Prompt</h3>
                  {currentDay.journalPrompt.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color:C.text, fontSize:'0.95rem', lineHeight:1.75, margin:'0 0 0.5rem', fontStyle:'italic' }}>{para}</p>
                  ))}
                </div>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
                  <button onClick={() => handleComplete(currentDay.day)} disabled={days.includes(currentDay.day)} style={{
                    background: days.includes(currentDay.day) ? C.cream : C.green,
                    color: days.includes(currentDay.day) ? C.green : C.white,
                    border: days.includes(currentDay.day) ? `1.5px solid ${C.green}` : 'none',
                    padding:'0.85rem 2rem', borderRadius:8, fontFamily:sans, fontSize:'0.95rem', fontWeight:500,
                    cursor: days.includes(currentDay.day) ? 'default' : 'pointer',
                  }}>{days.includes(currentDay.day) ? '✓ Day Completed' : 'Mark Day as Complete'}</button>

                  <div style={{ display:'flex', gap:'0.5rem' }}>
                    {activeDay > 0 && (
                      <button onClick={() => { setActiveDay(activeDay - 1); window.scrollTo(0,0) }} style={{
                        background:'transparent', color:C.muted, border:`1px solid ${C.border}`,
                        padding:'0.7rem 1.25rem', borderRadius:8, fontFamily:sans, fontSize:'0.85rem', cursor:'pointer',
                      }}>← Previous</button>
                    )}
                    {activeDay < DAYS.length - 1 && (
                      <button onClick={() => { setActiveDay(activeDay + 1); window.scrollTo(0,0) }} style={{
                        background:C.green, color:C.white, border:'none',
                        padding:'0.7rem 1.25rem', borderRadius:8, fontFamily:sans, fontSize:'0.85rem', cursor:'pointer',
                      }}>Next Day →</button>
                    )}
                    {activeDay === DAYS.length - 1 && (
                      <Link href="/week3-5" style={{
                        background:C.orange, color:C.white, padding:'0.7rem 1.25rem',
                        borderRadius:8, textDecoration:'none', fontSize:'0.85rem', fontWeight:500,
                      }}>Continue to Weeks 3–5 →</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Week1_2() {
  const { user, loading, isPaid, isAdmin } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!loading && !user) router.replace('/login?redirect=/week1-2')
  }, [loading, user, router])
  if (loading) return <LoadingScreen />
  if (!user) return <LoadingScreen />
  if (!isPaid && !isAdmin) return <LockedScreen />
  return <CourseContent user={user} />
}
