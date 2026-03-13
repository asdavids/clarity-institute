import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const lessons = [
  {
    id: 1,
    day: 'Day 15',
    week: 'Week 3',
    title: 'Welcome to Activation',
    duration: '30 min',
    type: 'Teaching + Meditation',
    content: {
      intro: `You have arrived at the threshold.

The first two weeks were about building the ground. You established your practice. You learned to distinguish the voice of intuition from the voice of fear and desire. You cultivated stillness. You began to hear yourself more clearly.

Now we go deeper.

Weeks 3 through 5 are called Activation and Expansion. This is the phase where the inner eye begins to genuinely open. Where what was theoretical becomes experiential. Where the practices move from building awareness to directly awakening it.

This phase asks more of you. More stillness. More honesty. More willingness to encounter the parts of yourself that have been waiting in the dark for your attention. The ancient initiates who entered temples of awakening in Egypt, India, and across Africa understood that the opening of the inner eye was not a comfortable process. It was a sacred one. And sacred things ask something real of us.

You are ready. The foundation you built is exactly what this phase requires.`,
      sections: [
        {
          heading: 'What Activation Actually Means',
          body: `The word activation is used carefully here. It does not mean switching on a switch. It does not mean a sudden dramatic awakening where everything becomes clear in an instant.

Activation means the deliberate, intentional deepening of the inner eye's capacity. It means moving from occasional glimpses of deeper perception to a more consistent, reliable relationship with your own intuitive knowing.

In the yogic tradition this process is sometimes called pratyahara, the withdrawal of the senses from the outer world in order to perceive the inner world more clearly. In the Sufi tradition it is called fana, the dissolving of the conditioned self in order to encounter what is real beneath it. In the African sangoma tradition it is the period of thwasa, the calling and awakening of the healer's inner vision.

The name and the cultural container change. The essential process is the same: a deliberate turning of attention inward, with enough sustained focus and enough genuine surrender that deeper layers of awareness begin to reveal themselves.`
        },
        {
          heading: 'What to Expect in These Three Weeks',
          body: `As the inner eye begins to activate more fully, a range of experiences may arise. It is important that you understand these in advance so that when they appear you recognise them as signs of opening rather than signs of something going wrong.

You may experience increased vividness in your dreams. Some people begin to experience lucid dreams during this phase, becoming aware within the dream that they are dreaming. This is a significant sign of inner eye activation.

You may notice heightened sensitivity to the energy and emotional states of people around you. Environments may begin to feel more textured, more alive, more communicative than before.

You may encounter emotional material that has been suppressed. Old grief. Old anger. Old fear. This is the energy clearing aspect of the work. The inner eye cannot open fully while significant emotional material is blocking the channel. What surfaces is not a problem. It is the clearing.

You may have moments of sudden, inexplicable knowing. A sense of certainty about something without being able to explain why. A recognition of truth that arrives before the thinking mind has processed anything.

All of these are welcome. All of these are signs that the work is working.`
        },
        {
          heading: 'Your Activation Commitment',
          body: `Before we begin, make a conscious commitment to these three weeks.

Write this in your journal today:

"For the next twenty-one days I commit to showing up fully for my practice. I commit to honesty over comfort. I commit to remaining open even when what I encounter is uncomfortable. I commit to trusting the process even when I cannot see where it is leading.

I understand that activation requires genuine surrender, not the surrender of my will, but the surrender of my resistance. I am willing to see what is real. I am willing to feel what is true. I am willing to become more of who I actually am.

I am ready."

Sign it. Date it. Return to it whenever the work feels difficult.`
        }
      ],
      reflection: 'What are you most hoping to experience in these three weeks of activation? What are you most afraid might arise? Write both with complete honesty.',
      affirmation: 'I am ready to go deeper. I trust what is waiting for me there.'
    }
  },
  {
    id: 2,
    day: 'Day 16',
    week: 'Week 3',
    title: 'The Third Eye: Anatomy of the Ajna',
    duration: '35 min',
    type: 'Deep Teaching',
    content: {
      intro: `To activate something, it helps to understand what it actually is.

The third eye, known in the yogic tradition as the Ajna chakra, is located at the centre of the forehead, slightly above and between the physical eyes. The word Ajna comes from Sanskrit and means both command and perception. It is the centre through which higher wisdom is both received and expressed.

In the physical body, the Ajna corresponds to the pineal gland, a small pinecone-shaped gland located near the centre of the brain. The pineal gland produces melatonin, regulating the sleep-wake cycle, but it also produces trace amounts of DMT, dimethyltryptamine, the molecule that many researchers and mystics have associated with profound states of inner vision, near-death experiences, and deep meditative states.

The ancient Egyptians symbolised the pineal gland as the Eye of Horus. The ancient Greeks called it the seat of the soul. Descartes, the father of modern philosophy, described it as the principal seat of the rational soul. In Hinduism, the bindu, the sacred dot worn on the forehead, marks the location of the third eye as a reminder of its presence and potential.`,
      sections: [
        {
          heading: 'The Six Qualities of an Open Ajna',
          body: `When the third eye is functioning clearly and openly, six qualities tend to be present:

1. CLARITY: The ability to see situations, people, and circumstances as they truly are, rather than through the distorting lens of projection, fear, or desire.

2. DISCERNMENT: The capacity to distinguish truth from illusion, genuine intuition from wishful thinking, authentic guidance from ego-driven impulse.

3. IMAGINATION: Not fantasy but genuine creative vision, the ability to perceive possibilities that do not yet exist in physical form and to hold them with enough conviction to bring them into being.

4. INNER VISION: The capacity to receive images, symbols, and impressions through inner sight rather than only through the physical eyes.

5. TELEPATHIC SENSITIVITY: An increased awareness of the thoughts, feelings, and energetic states of others without being told. This is not supernatural. It is the natural expansion of empathic perception.

6. COSMIC AWARENESS: A growing sense of connection to something larger than the individual self, a felt experience of being part of a greater intelligence and order.`
        },
        {
          heading: 'What Blocks the Ajna',
          body: `Just as the Ajna has qualities when open, it has characteristic blockages when closed.

Rigidity of thinking: The insistence that only what can be measured and proven is real. This is not intelligence. It is a closing of the mind that masquerades as intelligence.

Overthinking: The constant mental commentary that drowns out subtler signals. When the analytical mind never rests, the intuitive mind cannot speak.

Unprocessed trauma: Significant emotional wounds create blockages in the energy body that impede the flow of awareness through the Ajna centre. This is why emotional clearing is an essential part of third eye work.

Excessive screen time and artificial light: The pineal gland is sensitive to light. Excessive exposure to blue light, particularly at night, suppresses melatonin production and disrupts the pineal gland's natural rhythms.

Fluoride: There is emerging research suggesting that fluoride accumulates in the pineal gland and may calcify it over time. Reducing fluoride exposure and increasing consumption of clean, filtered water is a simple physical support for third eye health.

Fear of the unknown: Perhaps the most significant blockage of all. The inner eye will show you things that your conditioned mind does not expect. If you are afraid of what you might see, you will unconsciously keep the eye closed. Courage is required.`
        },
        {
          heading: 'Physical Practices to Support the Ajna',
          body: `Sun gazing at dawn or dusk: Spending a few minutes gazing softly at the horizon during the first or last ten minutes of sunlight activates the pineal gland through the optic nerve. Do this gently and never look directly at the sun when it is high in the sky.

Darkness meditation: Spending time in complete darkness, even for twenty minutes, stimulates pineal activity. Sit in a completely dark room with eyes open. Allow the darkness to become alive rather than simply empty.

Indigo and violet visualisation: These colours correspond to the Ajna chakra frequency. During meditation, visualise a deep indigo light at the centre of your forehead, pulsing gently with each breath.

Essential oils: Frankincense, sandalwood, and cedarwood have long been used in spiritual traditions to support states of inner vision. Apply a small amount to the forehead before meditation.

Silence: We return always to silence. The pineal gland speaks most clearly in deep quiet.`
        }
      ],
      reflection: 'Of the six qualities of an open Ajna, which do you feel is most developed in you right now? Which feels most dormant? What do you sense is blocking it?',
      affirmation: 'My inner eye is awakening. I welcome what it sees.'
    }
  },
  {
    id: 3,
    day: 'Day 17',
    week: 'Week 3',
    title: 'Third Eye Activation Meditation',
    duration: '45 min',
    type: 'Core Activation Practice',
    content: {
      intro: `Today we do the work directly.

This is the central activation meditation of the entire cohort. It draws on techniques from the Tibetan Buddhist tradition of visualisation, the Hindu practice of trataka, the Sufi practice of muraqaba, and the African tradition of entering the spirit body through sustained inner attention.

Set aside 45 minutes for today. This is not a practice to rush. Find a space where you will not be disturbed. Sit comfortably with your spine upright. Dim the lights if possible. You may wish to light a candle or incense if that supports your entry into a meditative state.

Before you begin, place two or three drops of frankincense or sandalwood oil on your fingertip and gently touch the centre of your forehead. If you do not have these oils, simply place your fingertip at the centre of your forehead for thirty seconds with light, gentle pressure. This activates blood flow and awareness to the Ajna point.`,
      sections: [
        {
          heading: 'Part One: Arrival and Grounding (10 minutes)',
          body: `Begin with your established breathing practice. Use 4-7-8 breathing for five cycles to settle the nervous system.

Then bring your awareness to your body. Feel the weight of your body in your seat. Feel the contact between your feet and the floor. Breathe into your belly. Allow yourself to become genuinely heavy, grounded, and present.

Visualise roots growing from the base of your spine downward into the earth. Deep, strong, nourishing roots that anchor you fully to the ground. Feel the earth's energy moving up through these roots into your body, filling you with stability and presence.

You cannot safely expand upward without first being grounded downward. This is not merely a metaphor. It is an energetic reality that every genuine tradition understands. The higher you wish to reach, the deeper your roots must go.

Stay in this grounded state for the full ten minutes before moving forward.`
        },
        {
          heading: 'Part Two: The Indigo Flame (15 minutes)',
          body: `With your eyes closed, bring your attention to the centre of your forehead, the Ajna point.

Begin to breathe directly into this point. Imagine that with each inhale, your breath flows not into your lungs but into the centre of your forehead. With each exhale, it flows outward from that same point.

After ten breaths, begin to visualise a small point of deep indigo light at the Ajna centre. It is no larger than a candle flame at first. Simply hold your attention on it.

As you continue breathing into this point, allow the indigo flame to gradually grow with each inhale. Let it expand slowly, naturally, without force. It might pulse gently with your heartbeat. It might shift slightly in colour, moving toward violet or deep blue. Allow whatever arises without trying to control the specific appearance.

If your attention wanders, gently return it to the indigo light. Every return is the practice.

After fifteen minutes the light may have expanded to fill your entire forehead, or even your entire head. Some people at this stage begin to see colours, geometric patterns, or images behind their closed eyes. These are natural phenomena of the awakening inner eye. Simply observe them without grasping or pushing them away.`
        },
        {
          heading: 'Part Three: Open Reception (15 minutes)',
          body: `Now release the visualisation entirely. Let the indigo light dissolve.

What remains is a quality of open, alive awareness at the Ajna point. A warmth. A tingling. A presence. Simply rest in this quality without trying to produce anything.

This is the receptive phase. You have activated the inner eye through sustained attention. Now you allow it to show you what it sees.

Remain in open, receptive awareness. If images arise, observe them. If words or phrases arrive, receive them. If feelings move through you, let them move. If nothing appears, that too is fine. The activation is happening whether or not dramatic phenomena accompany it.

The Sufi masters called this state muraqaba, watchful waiting. It is not passive. It is an intensely alive form of attention that is receptive rather than seeking. Like a still pool that perfectly reflects whatever passes above it.

After fifteen minutes, very slowly allow your awareness to return to your body and your breath.`
        },
        {
          heading: 'Part Four: Integration (5 minutes)',
          body: `Before you open your eyes, bring both hands to your heart. Take three slow, deep breaths.

Inwardly give thanks for whatever arose, whether it was rich with imagery and feeling or quiet and still. Both are valid. Both are the work.

Very slowly open your eyes. Spend two full minutes simply sitting before you move or speak or write. Let what was activated settle.

Then write in your journal immediately. Write everything. The images. The feelings. The quality of the experience. The resistance. The moments of opening. The things that surprised you. Do not edit. Do not judge. Simply record.

You have just done something significant. Honour it.`
        }
      ],
      reflection: 'What did you encounter in today\'s activation meditation? What images, feelings, sensations, or knowings arose? What surprised you most?',
      affirmation: 'My inner eye is open. I receive what it offers with gratitude and trust.'
    }
  },
  {
    id: 4,
    day: 'Day 18',
    week: 'Week 3',
    title: 'Energy Clearing: Releasing What Blocks the Channel',
    duration: '40 min',
    type: 'Energy Work + Practice',
    content: {
      intro: `The inner eye is not simply a mental faculty. It operates through the entire energy system of the body. And like any system, it can become blocked.

In every tradition that works with subtle energy, from the Chinese meridian system to the Indian chakra system to the African concept of vital life force known variously as ashe, nyama, or moya, there is a consistent understanding: energy that does not flow freely creates stagnation. Stagnation creates blockage. Blockage creates diminished perception, diminished vitality, and diminished connection to the deeper layers of reality.

Energy clearing is therefore not a peripheral practice in third eye work. It is central to it. You cannot consistently access clear inner vision while carrying significant energetic blockages in the body and the emotional field.

The good news is that the body knows how to clear itself. It has been trying to do so for years. What it needs from you is your conscious permission, your willing attention, and your capacity to remain present with what arises during the clearing process.`,
      sections: [
        {
          heading: 'Understanding the Emotional Energy Body',
          body: `Every significant emotional experience leaves an energetic imprint in the body. This is not metaphor. Somatic therapists, trauma researchers, and neuroscientists have documented extensively how unprocessed emotional experiences are stored in the nervous system and the body's tissues.

Peter Levine, the founder of Somatic Experiencing, describes trauma as frozen energy in the body. Energy that was activated in response to a threatening or overwhelming experience and never had the opportunity to complete its natural cycle of activation and release. This frozen energy does not simply sit inertly. It requires a portion of the nervous system's resources to keep it contained. This is why people who carry significant unprocessed trauma often feel chronically tired, anxious, or disconnected.

From a spiritual perspective, this stored emotional energy sits directly in the channels through which the inner eye operates. Clearing it does not mean that you must relive every painful experience. It means giving the stored energy a pathway to move and release, gently, with your conscious support.`
        },
        {
          heading: 'The Seven-Layer Energy Clearing Practice',
          body: `This practice combines breathwork, sound, movement, and visualisation. It is best done alone in a private space where you feel completely free to make sound and movement without self-consciousness.

LAYER 1: BREATH ACTIVATION (5 minutes)
Begin with conscious connected breathing, the circular breath from Week 1. Breathe continuously without pause between inhale and exhale. Breathe into the belly first, then the chest. Allow the breath to build energy in the body.

LAYER 2: SOUND RELEASE (5 minutes)
Continue breathing and begin to add sound to the exhale. Start with a simple hum. Allow the hum to deepen into whatever sound wants to emerge. A sigh. A groan. A tone. Follow the sound wherever it wants to go. Sound is one of the most powerful tools for moving stuck energy in the body. Do not perform. Simply allow.

LAYER 3: MOVEMENT (5 minutes)
Allow your body to begin moving in response to the breath and sound. Shake your hands. Roll your shoulders. Move your spine. Sway. Stomp your feet gently on the floor. Allow the movement to be organic rather than choreographed. You are shaking loose what has been held.

LAYER 4: THE BODY SCAN WITH INTENTION (5 minutes)
Come to stillness. Breathe normally. Slowly move your awareness through your body from head to feet. At each area, ask: is there anything here that is ready to release? If you feel tightness, heaviness, or resistance, breathe directly into that area. As you exhale, imagine that energy releasing and dispersing.

LAYER 5: FORGIVENESS BREATH (5 minutes)
Bring to mind anyone toward whom you carry resentment, hurt, or unresolved feeling. This is not about excusing what they did. It is about freeing yourself from the energetic weight of carrying it. With each exhale, silently say: I release this. I free myself. I reclaim this energy for my own wholeness.

LAYER 6: SELF-COMPASSION (5 minutes)
Turn the same attention toward yourself. Bring to mind the ways you have judged yourself harshly, held yourself to impossible standards, or treated yourself with less kindness than you would offer a friend. With each exhale, place your hands on your heart and say: I forgive myself. I am learning. I am enough.

LAYER 7: SEALING WITH LIGHT (5 minutes)
Visualise a warm golden light entering through the crown of your head with each inhale. As it moves downward through your body, it fills every space that has been cleared with warmth, light, and vitality. By the time it reaches your feet, your entire energy body is filled and glowing. Seal this by pressing both palms flat against the earth or the floor for thirty seconds.`
        }
      ],
      reflection: 'What came up during the energy clearing? Where in your body did you feel the most resistance? What emotion was stored there?',
      affirmation: 'I release what no longer serves me. I reclaim the energy of my own wholeness.'
    }
  },
  {
    id: 5,
    day: 'Day 19',
    week: 'Week 3',
    title: 'Dream Journaling: The Nightly Oracle',
    duration: '30 min teaching + ongoing nightly practice',
    type: 'Dream Work',
    content: {
      intro: `Every night, without exception, your inner eye is active.

While the conscious mind rests and the analytical faculty quiets, the deeper layers of awareness speak freely. They speak in the language of the soul: images, symbols, emotions, archetypes, and stories that carry far more information than their surface appearance suggests.

The ancient Egyptians built entire temples dedicated to the art of sacred dreaming. They called it sekhenu, the practice of receiving divine communication through the dream state. In these temples, seekers would undergo purification rituals, spend days in fasting and prayer, and then lie down in sacred darkness to receive guidance from the inner world. The dreams they received were considered among the most reliable forms of divine communication available.

You have your own temple. It is your bedroom. And the oracle speaks every single night. The question is simply whether you are listening.`,
      sections: [
        {
          heading: 'Why Dreams Matter for Third Eye Activation',
          body: `During the REM phases of sleep, the brain produces theta waves, the same brain state associated with deep meditation and the most receptive states of inner vision. The prefrontal cortex, the seat of rational, analytical thinking, becomes significantly less active. The areas of the brain associated with emotion, imagery, memory, and pattern recognition become highly active.

This means that in the dream state, the inner eye operates more freely than at almost any other time. The filters that normally restrict or edit what we perceive are lowered. The deeper layers of the psyche communicate without the interference of the thinking mind.

Dreams can carry:
Guidance on real decisions and situations in your waking life
Warnings about situations or relationships that require your attention
Information about your own psychological and spiritual state that your conscious mind has not yet processed
Creative solutions to problems you have been wrestling with
Contact with dimensions of reality beyond ordinary waking consciousness
Premonitions: impressions of events that have not yet occurred

All of these have been documented across cultures and throughout history. They are not the province of fantasy. They are a genuine faculty of the awakened inner eye.`
        },
        {
          heading: 'The Complete Dream Journaling System',
          body: `PREPARATION THE NIGHT BEFORE
Set your journal and pen beside your bed within easy reach. Before sleep, write an intention: "Tonight I am open to receiving guidance through my dreams. I will remember what I am shown." This simple act of setting intention has been shown to significantly increase dream recall.

Avoid alcohol, heavy food, and screens for at least an hour before sleep. These all suppress REM activity and reduce dream vividness and recall.

Consider a brief meditation before sleep. Five minutes of the Ajna activation breath, breathing into the third eye centre, primes the inner eye for activity during the night.

THE MOMENT OF WAKING
This is the most critical moment in the entire practice. The moment you wake, before you move, before you speak, before you check your phone, bring your awareness gently to whatever images, feelings, or fragments remain from your dreams.

Do not move yet. Movement shifts the brain out of the hypnopompic state, the threshold between sleep and waking, where dream memory is most accessible. Lie still. Let the dream come back to you.

When you have gathered as much as you can hold, reach for your journal. Write immediately. Write in the present tense as if you are still in the dream. Not "I was in a house" but "I am in a house." This keeps you closer to the felt experience and tends to unlock more detail.

WHAT TO RECORD
Write the images, the setting, the characters, the actions. But pay particular attention to the emotional tone. How did the dream feel? What was the dominant emotional atmosphere? This is often the most important information.

Note any symbols that feel significant. Note any words or phrases that were spoken. Note the colours, if they were vivid. Note anything that felt strange or unexpected, as these incongruities are often where the most important messages are hidden.

WORKING WITH THE DREAM
After you have recorded the dream, sit quietly with it. Ask: if this dream is a message from my deeper self, what is it saying? What in my waking life does this seem to be pointing toward?

Do not force a literal interpretation. Dreams speak in metaphor. A dream about your teeth falling out is rarely about your teeth. A dream about being lost in a forest may be about a period of transition and uncertainty in your waking life. A dream about flying may be about a new freedom or possibility that is becoming available to you.

Trust your first response. The meaning that arises immediately, before the thinking mind has time to argue with it, is usually the most accurate.`
        },
        {
          heading: 'Dream Archetypes to Know',
          body: `Carl Jung identified a set of universal archetypal figures that appear across cultures in both dreams and mythology. Recognising these when they appear in your dreams can deepen your understanding significantly.

THE SHADOW: The figure in your dreams who represents your own disowned qualities. Often appears as a threatening or dark figure of the same gender. When the shadow appears, ask: what quality does this figure represent that I have not yet acknowledged in myself?

THE ANIMA / ANIMUS: For those who identify as male, the feminine figure in dreams often represents the inner life, intuition, and the unconscious. For those who identify as female, the masculine figure often represents action, assertion, and rational direction. Their appearance suggests a need for integration of these qualities.

THE WISE ELDER: The teacher, sage, or guide figure who appears in dreams to offer counsel. Take what this figure says very seriously. It is one of the clearest expressions of the inner eye's guidance available through the dream state.

THE CHILD: The innocent, spontaneous, creative aspect of the self. When the child appears in dreams, it often signals a need to return to simplicity, play, or the essential self beneath the conditioned personality.

THE TRICKSTER: The unpredictable, shape-shifting figure who disrupts comfortable assumptions and forces new perspectives. Often appears at times of significant transition.`
        }
      ],
      reflection: 'Write about a dream that has stayed with you for days, months, or even years. What do you sense it was trying to tell you? Has that message become clearer with time?',
      affirmation: 'Every night my inner eye speaks to me. I am learning to listen.'
    }
  },
  {
    id: 6,
    day: 'Day 20',
    week: 'Week 3',
    title: 'Chakra Awakening: The Full Energy Column',
    duration: '45 min',
    type: 'Energy Practice',
    content: {
      intro: `The third eye does not operate in isolation. It is one point in a complete system of energy centres that runs through the body from the base of the spine to the crown of the head.

In the yogic tradition these centres are called chakras, from the Sanskrit word for wheel. Each chakra governs a different domain of human experience and corresponds to a different layer of awareness. When the entire system is balanced and flowing, the inner eye receives clear, unobstructed information. When lower centres are blocked or imbalanced, the third eye's signal is distorted.

Think of it as a radio tower. The Ajna is the transmitter and receiver. But if the foundation of the tower is unstable or the wiring is damaged, even the most powerful transmitter will produce static rather than clear signal. Working with the full chakra system is therefore not a detour from third eye work. It is an essential part of it.`,
      sections: [
        {
          heading: 'The Seven Centres and Their Domains',
          body: `ROOT CHAKRA (Muladhara) — Base of the spine
Governs: Safety, survival, physical groundedness, belonging
When blocked: Chronic anxiety, financial fear, feeling unsafe in the world, inability to be present
Colour: Deep red
Element: Earth

SACRAL CHAKRA (Svadhisthana) — Below the navel
Governs: Creativity, sexuality, emotional fluidity, pleasure, relationships
When blocked: Creative blocks, emotional numbness or volatility, difficulty with intimacy
Colour: Warm orange
Element: Water

SOLAR PLEXUS CHAKRA (Manipura) — Above the navel
Governs: Personal power, self-worth, will, identity, confidence
When blocked: People-pleasing, inability to set boundaries, chronic self-doubt
Colour: Bright yellow
Element: Fire

HEART CHAKRA (Anahata) — Centre of the chest
Governs: Love, compassion, connection, forgiveness, joy
When blocked: Inability to give or receive love freely, grief held without release, isolation
Colour: Emerald green
Element: Air

THROAT CHAKRA (Vishuddha) — Centre of the throat
Governs: Expression, truth, communication, authenticity
When blocked: Difficulty speaking truth, chronic people-pleasing through silence, fear of being seen
Colour: Bright blue
Element: Sound

THIRD EYE CHAKRA (Ajna) — Centre of the forehead
Governs: Intuition, inner vision, wisdom, discernment
When blocked: Mental fog, inability to trust intuition, rigid thinking
Colour: Deep indigo
Element: Light

CROWN CHAKRA (Sahasrara) — Top of the head
Governs: Spiritual connection, cosmic awareness, divine presence
When blocked: Spiritual disconnection, existential emptiness, inability to receive guidance
Colour: Violet or pure white
Element: Consciousness`
        },
        {
          heading: 'The Full Chakra Activation Meditation',
          body: `Set aside 45 minutes. Lie down comfortably on your back. Close your eyes.

Begin with ten slow, deep breaths. Allow your body to become completely relaxed and heavy.

Now you will move through each chakra from the base upward, spending three to four minutes at each centre.

ROOT: Bring your awareness to the base of your spine. Visualise a deep red sphere of light, warm and dense as the earth. With each breath it pulses and grows stronger. Feel your connection to the physical world, to the ground beneath you, to the safety of your own body. Breathe into this centre until you feel genuinely grounded.

SACRAL: Move your awareness just below the navel. See a warm orange light, fluid and creative. Breathe into your creative centre. Feel the life force that animates your desires, your relationships, your creative impulses. Release any shame or judgment you carry about pleasure or desire.

SOLAR PLEXUS: Bring awareness to just above the navel. Visualise a bright yellow sun burning at your centre. Feel your own personal power, your right to take up space in the world, your inherent worth. Let this light burn through any self-doubt or self-diminishment.

HEART: Move to the centre of your chest. See a luminous emerald green light radiating from your heart in all directions. Allow your heart to open gently, like a flower turning toward the sun. Breathe love in. Breathe love out. Stay here as long as you need.

THROAT: Bring awareness to your throat. See a clear bright blue light at the centre of your throat. Feel the truth that lives in you that has not yet been spoken. Give it permission to exist. You do not need to speak it aloud right now. Simply acknowledge it and give it your blessing.

THIRD EYE: Move your awareness to the centre of your forehead. The deep indigo flame from yesterday's practice. Allow it to glow and pulse. You are home. Rest here for a full five minutes.

CROWN: Finally, allow your awareness to rise to the top of your head. See a violet or pure white light opening like a lotus at the crown. Feel the connection to something vast and benevolent above you. Allow the boundary between yourself and the larger consciousness to become permeable. Breathe in that larger presence. Let it fill you.

INTEGRATION: Visualise a column of light running from your crown through all seven centres to the base of your spine, and from the base of your spine down into the earth. All centres aligned. All centres glowing. All centres in communication with one another.

Rest here for five minutes in complete stillness.`
        }
      ],
      reflection: 'Which chakra felt most blocked or resistant during today\'s practice? What domain of life does that centre govern? What does this tell you about where your growth edge currently is?',
      affirmation: 'My energy flows freely. Every centre of my being is alive and open.'
    }
  },
  {
    id: 7,
    day: 'Day 21',
    week: 'Week 3',
    title: 'Rest and Integration: One Week In',
    duration: '20 min',
    type: 'Rest + Deep Reflection',
    content: {
      intro: `One week into activation. Pause here.

This week you worked directly with the Ajna centre. You did the central activation meditation. You cleared energy that was blocking the channel. You began working seriously with your dreams. You moved through the full chakra column.

This is significant work. The body and the psyche need time to integrate what has been stirred and opened. Integration is not laziness. It is half of the transformation. The insights that arise during periods of rest are often the most important ones.

Today is yours. There is no formal practice beyond your short morning arrival. The day itself is the practice.`,
      sections: [
        {
          heading: 'The Week Three Integration Questions',
          body: `Sit with these questions in your journal today. Take your time with each one.

What has genuinely shifted in how I perceive the world around me since beginning this cohort?

What has my dream life been showing me this week? Is there a consistent theme or symbol?

Where in my body do I feel the most open right now? Where do I still feel resistance or blockage?

What truth has the inner eye shown me this week that the thinking mind has been resistant to accepting?

Who in my life has become a mirror for me during this process? What are they reflecting?

What am I being called to release in order to open more fully?

What am I being called toward?`
        },
        {
          heading: 'A Note on Difficult Experiences',
          body: `Some of you will have had experiences this week that felt uncomfortable, disorienting, or emotionally challenging. Old grief surfacing. Unexpected anger. Dreams that disturbed rather than comforted. Moments of confusion about who you are and what you want.

This is not a sign that something has gone wrong. This is the clearing in action. When you open the channel, everything that has been sitting in the channel comes through on its way out. The uncomfortable experiences are part of the healing, not evidence against it.

If you are finding the process genuinely overwhelming, please reach out to your facilitator or a trusted person in the community. You do not need to navigate this alone. In fact, you are not meant to. This is one of the reasons we do this work in a community container rather than in isolation.

The ancient initiates had guides. You do too.`
        }
      ],
      reflection: 'Write a letter to your inner eye. Tell it what you have noticed this week. Tell it what you are still afraid to see. Ask it what it most wants you to know right now. Then sit in silence for five minutes and listen. Write whatever comes.',
      affirmation: 'I honour the pace of my own unfolding. Everything is happening in perfect order.'
    }
  },
  {
    id: 8,
    day: 'Day 22',
    week: 'Week 4',
    title: 'Accessing the Subtle Realms',
    duration: '40 min',
    type: 'Advanced Teaching + Practice',
    content: {
      intro: `Welcome to Week 4. You have arrived at territory that few people enter deliberately, and even fewer navigate with clarity and groundedness. This week we work with what the traditions call the subtle realms.

The subtle realms are not a place you travel to. They are layers of reality that interpenetrate the physical world at every moment, invisible to ordinary perception but accessible to the awakened inner eye. Every wisdom tradition has its own map of these layers.

The Yoruba tradition of West Africa speaks of the orun, the spiritual dimension that exists alongside and within the aye, the physical world. The Hindu tradition describes multiple lokas, or planes of existence, that range from the gross physical to the subtlest levels of pure consciousness. The Tibetan Buddhist tradition has perhaps the most detailed map of all, describing multiple bardos, or transitional states, each with its own characteristic phenomena and beings.

We are not asking you to take any of these maps as literal truth. We are asking you to approach them as frameworks for navigating territory that your own experience will ultimately confirm or refine. The map is not the territory. Your own direct experience is the territory.`,
      sections: [
        {
          heading: 'The Four Layers of Reality',
          body: `For practical purposes in this cohort, we work with a four-layer model of reality that draws on multiple traditions:

THE PHYSICAL LAYER: The world as perceived by the five ordinary senses. Dense, material, measurable. This is the layer most people spend their entire lives in, mistaking it for the totality of reality.

THE ETHERIC LAYER: The subtle energy field that immediately surrounds and interpenetrates the physical body and the physical world. This is what traditional healers, acupuncturists, and energy workers work with. It is the layer where emotions and physical health intersect. Many people with developed inner eye sensitivity begin by perceiving the etheric layer as a slight luminosity or warmth around living bodies.

THE ASTRAL LAYER: A more expansive layer of reality associated with the emotional body, the dream world, and the realm of archetypes and symbols. This is the layer most commonly accessed in deep meditation, vivid dreaming, and states of expanded consciousness. Time and space operate differently here. Symbolic communication is primary.

THE CAUSAL LAYER: The deepest layer accessible to human perception, associated with pure consciousness, absolute stillness, and the ground of being from which all other layers emerge. This is what mystics point to when they speak of union with the divine, the experience of the absolute, or the ground of all being.

The inner eye, as it develops, gains the ability to perceive across all four of these layers. Most people begin at the etheric and gradually deepen toward the causal through sustained practice.`
        },
        {
          heading: 'Practice: The Expanded Field Meditation',
          body: `This meditation is designed to expand your field of awareness beyond the physical body and begin to sense the etheric and lower astral layers.

Sit comfortably with eyes closed. Complete your grounding practice. Five minutes, roots into the earth, fully present in the body.

Now, with your awareness, begin to expand outward from your body. As you inhale, feel your awareness extend about one foot beyond your skin in all directions. As you exhale, let it settle back slightly but not fully return.

With each breath cycle, allow your awareness to extend a little further. One foot. Two feet. Three feet. The edge of the room. Beyond the room.

As you expand, remain completely grounded in your body. The roots go deeper as the awareness expands upward and outward. This is essential. Expansion without grounding is disorientation. Grounded expansion is true perception.

At each layer of expansion, notice: what do you sense here? You may begin to notice a quality of warmth or aliveness that extends beyond your physical skin. You may sense the emotional atmosphere of the space around you. You may feel the presence of the natural world if you are near it.

Do not manufacture anything. Simply notice what is already there as your awareness becomes sensitive enough to perceive it.

Stay in this expanded state for twenty minutes. Then very slowly, with intention, draw your awareness back to the physical body. Take three grounding breaths. Press your palms to the floor. Return fully before you stand up.`
        }
      ],
      reflection: 'What did you sense in the expanded field? What surprised you? Where did you feel most expanded and most resistant?',
      affirmation: 'I am more than my physical body. My awareness is vast and my feet are on the ground.'
    }
  },
  {
    id: 9,
    day: 'Day 23',
    week: 'Week 4',
    title: 'Aura Reading and Sensing Energy Fields',
    duration: '35 min',
    type: 'Practical Skill Development',
    content: {
      intro: `The human aura, the luminous energy field that surrounds and interpenetrates the physical body, has been described in spiritual traditions for thousands of years. Kirlian photography, developed in the twentieth century, provided the first consistent photographic evidence of this field. More recently, research in bioelectromagnetics and the study of biophotons, light emitted by living cells, has provided further scientific grounding for what mystics have always known.

The aura is not a fixed, uniform field. It is dynamic, constantly changing in response to thoughts, emotions, health, intention, and the presence of others. Learning to sense and read this field is one of the most practically useful developments of the third eye.

Most people, as they develop their inner eye, begin to sense auras before they see them. They notice a quality of warmth or coolness around certain people. A sense of expansion or contraction in someone's presence. A feeling of resonance or dissonance. These are all early-stage aura perception. The visual element often develops later, as the inner eye becomes more fully activated.`,
      sections: [
        {
          heading: 'Exercise One: Sensing Your Own Aura',
          body: `Hold your hands about two feet apart, palms facing each other.

Very slowly begin to bring them toward each other. Move slowly enough that you can notice subtle sensations. As your hands get closer, at some point you will begin to feel a slight resistance, warmth, tingling, or density between them. This is the edge of your etheric field meeting itself.

Play with this boundary. Push your hands in slightly and feel the compression. Pull them back slightly and feel the expansion. Get familiar with the sensation of your own energy field.

Once you can reliably feel your own field, try this with a partner if you have one available. Stand facing each other about six feet apart. Slowly walk toward each other. Notice at what distance you begin to sense each other's energy field. Notice the quality of what you sense. Some people feel warmth. Some feel a slight pressure. Some feel an emotional quality. All of these are valid forms of aura perception.`
        },
        {
          heading: 'Exercise Two: Seeing the Etheric Aura',
          body: `This exercise develops the visual aspect of aura perception. It requires a willing subject, reasonable light, and a neutral background.

Ask someone to stand against a plain white or neutral-coloured wall. Soft, diffuse light works best. Avoid direct harsh light.

Soften your gaze. This is key. You are not staring hard at the person. You are allowing your eyes to relax into a soft, slightly unfocused state. Look just to the side of the person rather than directly at them. Allow your peripheral vision to do the work.

After a minute or two of this soft gazing, you may begin to notice a slight luminosity or shimmer at the edges of the person's body. This is the etheric aura, the densest layer of the energy field, closest to the physical body.

With practice, this shimmer becomes more defined. Over time, some people begin to perceive colours in the wider aura field. Each colour carries information about the person's current state.

Blue or indigo tends to indicate calm, spirituality, and clear communication. Green suggests healing energy, compassion, or a period of growth. Yellow indicates mental activity, optimism, or intellectual energy. Orange suggests creativity or emotional vitality. Red indicates strong physical energy, passion, or sometimes anger. White or gold around the crown often indicates heightened spiritual awareness.'

Do not strain. Do not try to manufacture what you see. Simply remain in the soft, receptive state and receive what is genuinely there.`
        },
        {
          heading: 'Working with What You Sense',
          body: `As you begin to develop sensitivity to energy fields, a few guidelines will serve you well.

First, always ground yourself before sensing others' fields. Without grounding, you can absorb what you perceive rather than simply observing it. This leads to energy fatigue, emotional confusion, and the phenomenon commonly called picking up other people's stuff.

Second, maintain energetic boundaries. Sensing someone's field does not mean merging with it. You are an observer with your own distinct field. Maintain awareness of where you end and another person begins.

Third, do not share unsolicited readings. As your sensitivity develops, you may begin to perceive things about people that they have not asked you to share. The ethical practitioner only offers what is asked for, and even then does so with humility and care. You are learning to perceive, not to judge or diagnose.

Fourth, cleanse your field after working with others' energy. A simple practice is to stand in a shower and visualise the water carrying away any energy that is not your own. Or shake your hands as if shaking off water, imagining any absorbed energy releasing from your field.`
        }
      ],
      reflection: 'What did you sense when working with energy fields today? What felt natural? What felt difficult? How does developing this sensitivity feel in your body?',
      affirmation: 'I sense the living energy of the world around me with clarity and care.'
    }
  },
  {
    id: 10,
    day: 'Day 24',
    week: 'Week 4',
    title: 'Advanced Dream Work: Lucid Dreaming',
    duration: '30 min teaching + nightly practice',
    type: 'Advanced Dream Practice',
    content: {
      intro: `Lucid dreaming is the experience of becoming aware within a dream that you are dreaming. In this state, you are simultaneously in the dream and aware of yourself as the dreamer. The dream continues but you are now a conscious participant in it rather than simply a passive experiencer.

This is one of the most significant developments available in third eye work. In the lucid state, the inner eye operates with exceptional clarity. You can ask direct questions and receive direct answers from the deeper intelligence of the dream. You can navigate the dream landscape with intention. You can encounter your own archetypal figures consciously and engage with what they represent.

The Tibetan Buddhist tradition developed an entire system of yogic practice around conscious dreaming called dream yoga. Practitioners used the lucid dream state for direct spiritual development, working with the nature of consciousness and the relationship between waking, dreaming, and deep sleep states. Indigenous dream traditions across Africa, the Americas, and Australia similarly treated the conscious dream state as sacred territory for healing and guidance.`,
      sections: [
        {
          heading: 'The Mechanics of Lucid Dreaming',
          body: `Lucid dreaming most commonly occurs during the later REM cycles of the night, particularly in the two hours before your natural waking time. During these later cycles, REM periods become longer and more vivid.

The most reliable technique for inducing lucid dreams is called MILD, Mnemonic Induction of Lucid Dreams, developed by researcher Stephen LaBerge at Stanford University.

The MILD technique works as follows: When you wake naturally in the early morning, usually around 4 or 5am, stay awake for fifteen to twenty minutes. During this time, review the dream you just had in as much detail as possible. Then set a clear, specific intention: "The next time I am dreaming I will recognise that I am dreaming." Hold this intention firmly and return to sleep.

The waking interval activates your reflective awareness and makes it more likely to activate within the dream itself.`
        },
        {
          heading: 'Reality Testing: Training Lucidity in Waking Life',
          body: `The single most effective daily practice for developing lucid dreaming is reality testing during waking life.

Throughout the day, at random moments, ask yourself: Am I dreaming right now? And then actually check. Look at your hands. Do they look normal? Look at a piece of text, look away, and look back. Does it say the same thing? In dreams, hands often appear strange and text tends to change or become unreadable.

The reason this works is that the habits of waking life carry into the dream state. If you practise asking "Am I dreaming?" twenty times a day, eventually you will ask that same question inside a dream. And because your hands will look strange and the text will change, you will realise the answer is yes.

This realisation is the moment of lucidity.`
        },
        {
          heading: 'What to Do Once You Are Lucid',
          body: `The first challenge of lucid dreaming is maintaining the state without waking up. The excitement of realising you are dreaming tends to cause people to wake immediately. To prevent this, focus on physical sensations within the dream. Touch the ground. Rub your hands together. Look at a specific detail in the environment. This keeps the dreaming brain engaged without becoming overstimulated.

Once stable, there are several powerful practices available to you in the lucid state.

ASK FOR GUIDANCE: Simply speak aloud within the dream: "Show me what I need to see" or "What is the message for me right now?" The dream environment often responds with remarkable directness.

MEET YOUR INNER GUIDE: Intend to meet a wise figure who carries guidance for you. Walk through a door with the intention that what is on the other side will show you something important. These encounters can be among the most significant spiritual experiences available through dream work.

FACE YOUR SHADOW: If a threatening or dark figure appears in a lucid dream, resist the urge to flee. Turn toward it. Ask: "Who are you? What do you represent? What do you want from me?" This direct engagement with the shadow in the lucid state can produce extraordinary insight and genuine psychological integration.

EXPERIENCE YOUR UNLIMITED NATURE: In the lucid state, you can fly, move through walls, travel to any location, and experience states of consciousness that are not available in ordinary waking life. Use these experiences not merely for entertainment but as direct demonstrations of the non-physical nature of awareness.`
        }
      ],
      reflection: 'Have you ever experienced a lucid dream? Describe it if so. If not, what do you imagine you would do with full lucid awareness in the dream state?',
      affirmation: 'I am the dreamer and I know it. In both waking and sleeping I move with awareness.'
    }
  },
  {
    id: 11,
    day: 'Day 25',
    week: 'Week 4',
    title: 'Intuitive Reading: Sensing the Unseen',
    duration: '40 min',
    type: 'Practical Intuition Development',
    content: {
      intro: `Today we move the inner eye from inner perception to outer perception: using your developed intuitive sensitivity to receive information about people, places, and situations beyond what ordinary observation would reveal.

This is what is sometimes called psychic perception. The word psychic comes from the Greek psyche, meaning soul or mind. It is not supernatural. It is the natural extension of the inner eye's perceptual range beyond the ordinary boundaries of the five senses.

Every person who has consistently developed a genuine meditation practice develops some degree of this capacity. It is not exceptional. It is what naturally happens when the inner eye becomes activated and the filtering systems of the conditioned mind relax their grip. You begin to receive information through channels that were always present but previously too noisy or too closed to access.

The question is not whether you have this capacity. The question is how to develop it responsibly, accurately, and with genuine humility.`,
      sections: [
        {
          heading: 'The Psychometry Practice',
          body: `Psychometry is the practice of receiving impressions from objects. The principle is that physical objects absorb the emotional and energetic imprints of the people and events associated with them over time. The activated inner eye can read these imprints through direct contact.

Ask someone you trust to give you a personal object, a watch, a ring, a stone they carry. Something they have had for some time and that carries personal significance. Do not ask them to tell you anything about it beforehand.

Hold the object in your non-dominant hand. Close your eyes. Take three grounding breaths.

Now, without trying to think about the object, simply open your inner awareness to whatever arises. You may receive an image. A feeling. A colour. A name. A place. An emotion. A physical sensation. A word or phrase. An impression of a person.

Do not edit or dismiss what arises. Simply notice and receive. After five minutes, speak or write everything that came, including what seemed vague, unclear, or nonsensical. Do not try to make it make sense. Simply report it.

Then ask the person if anything you received resonates with the object's history or with their experience of it.

Beginners are often surprised by how much resonates. You will also receive things that seem completely off. This is normal and expected. The practice is developing accuracy over time, not performing perfectly from the beginning. Every impression you receive and then validate or disconfirm teaches you to distinguish accurate inner perception from mental noise.`
        },
        {
          heading: 'Remote Viewing: Sensing Distant Places',
          body: `Remote viewing is the practice of perceiving places, objects, or events beyond the range of ordinary sensory perception. It was studied extensively by the United States military in a classified programme called Project Stargate, which ran from the 1970s to the 1990s. The results were significant enough that the programme operated for over two decades.

A simple practice of remote viewing: Ask someone to choose a location anywhere in the world, photograph it on their phone without showing you, and write the photo's coordinates or a number code on a piece of paper.

You receive only the code. Then, in a relaxed, meditative state, allow impressions of the location to arise. What do you see? What colours? Is it indoors or outdoors? Is there water? Is it urban or natural? What is the emotional quality of the place? What geometric shapes appear?

Write everything without judgment. Then compare with the actual photograph.

Again, the point is not perfect accuracy from the start. The point is developing the perceptual muscle and learning, through repeated practice and feedback, to distinguish genuine inner perception from the mind's tendency to manufacture what seems likely.`
        },
        {
          heading: 'The Ethics of Developed Perception',
          body: `As the inner eye develops and intuitive perception becomes more reliable, the question of ethics becomes increasingly important.

You will begin to sense things about people that they have not shared with you. You will sometimes know things before you are told. You may receive impressions about people's private lives, struggles, or circumstances.

The first principle is consent. You do not read people without their permission. Just as you would not open someone's diary without asking, you do not probe someone's energy field or direct your intuitive perception toward them without invitation.

The second principle is humility. Your perceptions are always filtered through your own psychology, your projections, your blind spots. No human intuitive perception is perfectly accurate or perfectly objective. Hold what you receive lightly and always with the caveat that you may be wrong.

The third principle is service. The development of intuitive perception is not for personal power or for impressing others. It is a capacity that, when properly developed, can be genuinely useful in service of others' wellbeing. Keep this orientation at the centre of your practice.`
        }
      ],
      reflection: 'How do you relate to the idea of intuitive perception beyond ordinary senses? What feels exciting? What feels uncomfortable or raises questions for you?',
      affirmation: 'I use the gifts of my awakened perception in service of truth and genuine care for others.'
    }
  },
  {
    id: 12,
    day: 'Day 26',
    week: 'Week 4',
    title: 'Sound, Frequency and the Inner Eye',
    duration: '40 min',
    type: 'Sound Practice',
    content: {
      intro: `Sound is one of the oldest and most powerful technologies for activating the inner eye. Long before written language, long before organised religion, human beings gathered around fires and used sound, voice, rhythm, and vibration to enter states of expanded consciousness and access the wisdom of the inner world.

The Vedic tradition built an entire spiritual science around sacred sound, mantra, recognising that specific frequencies of vibration carry specific qualities of consciousness. The indigenous cultures of Southern Africa used the mbira, the drum, and communal song to enter states of spiritual perception. The Aboriginal Australians used the didgeridoo and songlines, which were literally vibrational maps of the landscape. The ancient Sumerians developed temple choirs whose specific harmonic combinations were understood to create conditions for divine encounter.

Modern neuroscience has confirmed what these traditions intuitively knew: sound directly alters brainwave states. Specific frequencies and rhythms can shift the brain from ordinary beta consciousness into the alpha and theta states where intuitive perception is most accessible.`,
      sections: [
        {
          heading: 'Binaural Beats and Brainwave Entrainment',
          body: `Binaural beats are an auditory phenomenon where two slightly different frequencies played simultaneously, one in each ear, cause the brain to produce a third frequency that is the mathematical difference between the two. This third frequency corresponds to specific brainwave states.

Delta binaural beats (1 to 4 Hz): Deep dreamless sleep and very deep meditation. Associated with healing and regeneration.

Theta binaural beats (4 to 8 Hz): The state associated with the inner eye, dream consciousness, deep intuition, and creative insight. This is the optimal frequency for third eye work.

Alpha binaural beats (8 to 14 Hz): Relaxed alertness, creative thinking, and light meditative states.

Beta binaural beats (14 to 30 Hz): Normal waking consciousness, focus, and analytical thinking.

For third eye activation, theta binaural beats, particularly in the 6 to 8 Hz range, are most directly supportive. Listening through headphones while meditating can significantly deepen the quality of the inner eye activation practices you have been doing.

Search for "theta binaural beats for third eye" on any music platform and use them during your activation meditation. Listen for at least twenty minutes for the entrainment effect to fully activate.`
        },
        {
          heading: 'The Practice of Toning',
          body: `Toning is the practice of sustaining a single vocal sound for an extended period, allowing the vibration to resonate through the body and the energy centres.

Each chakra has a traditionally associated seed sound, called a bija mantra in Sanskrit:

Root: LAM (pronounced lum)
Sacral: VAM (pronounced vum)
Solar Plexus: RAM (pronounced rum)
Heart: YAM (pronounced yum)
Throat: HAM (pronounced hum)
Third Eye: OM (or AUM, pronounced ohm)
Crown: Silence, or a high-pitched sustained tone

Today's practice is a full chakra toning sequence. Sit comfortably with eyes closed. Begin at the root chakra and tone each seed sound for one to two minutes, feeling the vibration in the corresponding area of the body. Move upward through each centre.

When you reach the Ajna, spend five minutes toning OM. As you tone, feel the vibration at the centre of your forehead. Allow the sound to activate the third eye centre directly. You may notice pressure, warmth, tingling, or a sense of expansion at the Ajna point. These are signs of activation.

After completing all seven centres, sit in complete silence for five minutes. The contrast between the vibrational activation and the silence that follows is itself a powerful tool for opening the inner ear.`
        }
      ],
      reflection: 'How did your body respond to the toning practice? Which chakra sound produced the strongest sensation? What did the silence after the toning feel like?',
      affirmation: 'I am a living instrument of perception. Sound opens what silence holds.'
    }
  },
  {
    id: 13,
    day: 'Day 27',
    week: 'Week 4',
    title: 'The Akashic Field: Memory of Everything',
    duration: '35 min',
    type: 'Advanced Concept + Meditation',
    content: {
      intro: `There is a concept found across spiritual traditions that describes a field of consciousness in which all information, all events, and all possibilities are permanently recorded and accessible to the awakened inner eye.

The Hindu tradition calls it the Akasha, from the Sanskrit word for ether or sky, the most subtle of the five elements. The Akashic records are described as a cosmic library containing the complete history of every soul's journey across all lifetimes.

The physicist Ervin Laszlo described the quantum vacuum, the field of zero-point energy that underlies all physical reality, as a kind of information field in which all events leave permanent traces. He called this the A-field.

The biologist Rupert Sheldrake proposed the theory of morphic resonance, which suggests that all living systems access and contribute to a collective memory field that transcends individual space and time.

Whether approached through the lens of ancient spirituality or cutting-edge physics, the essential idea is the same: there is a field of information available to the awakened inner eye that extends far beyond what any individual could know through personal experience alone.`,
      sections: [
        {
          heading: 'Accessing the Field',
          body: `The practice of accessing what many call the Akashic field begins in the same place all advanced inner eye work begins: deep stillness.

The field is not elsewhere. It is here, now, interpenetrating everything. The reason it is not ordinarily perceptible is not because it is distant or rare. It is because the noise of ordinary consciousness is too loud for its subtle frequencies to be detected.

The deep silence you have been cultivating since Week 1 is the prerequisite for this work. Not silence as the absence of sound, but the alive, receptive, open quality of awareness that arises when the thinking mind becomes genuinely quiet.

In this deep stillness, the inner eye can sometimes access what feels like knowing things you could not logically know. A sudden understanding of a historical event's deeper meaning. A sense of connection to people you have never met who faced similar challenges. An impression that feels like memory but belongs to a larger story than your personal biography.

These experiences are not imagination. They are the inner eye touching the edges of a much larger field of intelligence.`
        },
        {
          heading: 'The Akashic Meditation',
          body: `This meditation is among the most advanced in the cohort. Approach it with patience. The first several times you practise it, you may simply experience deep stillness. That is enough. The access deepens over time.

Sit comfortably. Complete your full grounding practice. Allow yourself to become genuinely settled and still.

Bring your awareness to the Ajna point. Activate the indigo flame. Breathe into it for five minutes.

Now, with your awareness expanded and your inner eye active, imagine that you are in a vast, dark, star-filled space. Not outer space as you imagine it physically, but a space of pure consciousness. Infinite. Silent. Alive.

In this space, allow a question to arise. Not a small personal question, but something significant. Something that genuinely matters to you at the deepest level. Something about your life's purpose. About the nature of a relationship. About a pattern in your life whose origins you do not understand.

Hold the question lightly in the space. Do not seek an answer with your thinking mind. Simply hold the question and allow the field to respond.

You may receive an image. A feeling. A sense of knowing. A memory that does not feel like your own. A word or phrase. A vision of some kind.

Remain receptive for fifteen to twenty minutes. Then very slowly return to ordinary awareness.

Record everything immediately, even what seems strange or unclear. The meaning of Akashic impressions often unfolds over days rather than being immediately obvious.`
        }
      ],
      reflection: 'What arose in the Akashic meditation? What question did you bring? What, if anything, came in response? How do you feel about the concept of an information field beyond individual consciousness?',
      affirmation: 'I am connected to a wisdom that is larger than my personal history. I am open to what it shows me.'
    }
  },
  {
    id: 14,
    day: 'Day 28',
    week: 'Week 4',
    title: 'Rest and Deep Integration',
    duration: '20 min',
    type: 'Rest + Reflection',
    content: {
      intro: `Two weeks into activation. Four weeks into the cohort.

You have covered extraordinary territory. The anatomy and activation of the Ajna. Energy clearing. Dream work and lucid dreaming. Subtle realms and field expansion. Aura sensing. Sound and vibration. The Akashic field.

If you feel slightly overwhelmed, that is appropriate. If you feel exhilarated, that is also appropriate. If you feel quiet and still and like you need several days to process, that is perhaps the most appropriate of all.

This is genuine inner work. It leaves a mark. Not on your outer life yet, necessarily, though that will come. But on the inner landscape. On the quality of your awareness. On the relationship between you and the deeper parts of yourself that have been waiting for this kind of attention.

Rest today. You have earned it. And the work that happens in rest, the quiet consolidation of what has been opened, is as important as any active practice.`,
      sections: [
        {
          heading: 'The Week Four Integration Questions',
          body: `Write freely in response to these questions. Do not rush. Let them take as long as they take.

What is the most significant inner experience I have had in this cohort so far?

How has my relationship with my dreams changed since beginning this work?

What have I sensed about the energy field around me and others that surprised me?

Where am I still most resistant to opening? What am I protecting by keeping that area closed?

What is the most honest thing I can say about who I am becoming through this process?

What would I tell someone who was about to begin this cohort? What would I want them to know?`
        },
        {
          heading: 'Preparing for Week Five',
          body: `Week 5 is the final week of the Activation and Expansion phase. It is also the deepest.

In Week 5 we work with integration at a more profound level. We bring together everything that has been activated and begin the process of weaving it into a coherent, lived spiritual practice that will carry you through the rest of your life.

We also work with what many traditions call the spiritual gifts, the specific intuitive capacities that are most natural to you, your particular expression of the awakened inner eye. Not everyone's inner eye opens in the same way. Some people are predominantly visual. Others are primarily clairsentient, feeling-based. Others are clairaudient, receiving information through inner hearing. Others are primarily knowingness-based, simply knowing things without being able to say how. Week 5 helps you identify and develop your specific primary gift.

Rest well. You are almost through the activation phase.`
        }
      ],
      reflection: 'Four weeks in, who are you becoming? Write about this without modesty and without inflation. Simply honestly. Who is emerging through this practice?',
      affirmation: 'I am becoming more of who I truly am. This is the most important work I will ever do.'
    }
  },
  {
    id: 15,
    day: 'Day 29',
    week: 'Week 5',
    title: 'Your Unique Intuitive Gift',
    duration: '35 min',
    type: 'Self-Discovery + Practice',
    content: {
      intro: `Welcome to the final week of the Activation phase.

One of the most important discoveries you can make in this cohort is identifying your primary intuitive modality, the specific channel through which your inner eye speaks most naturally and clearly.

Just as people have different primary learning styles, different primary ways of taking in and processing information, people have different primary intuitive channels. Understanding yours does not limit you. It gives you a home base, a primary instrument that you can develop to a high level of reliability, while remaining open to the others.

The four primary intuitive channels, known in the spiritual tradition as the four clairs, are clairvoyance, clear seeing; clairsentience, clear feeling; clairaudience, clear hearing; and claircognizance, clear knowing. Each of these corresponds to a different expression of the awakened inner eye.`,
      sections: [
        {
          heading: 'The Four Primary Intuitive Channels',
          body: `CLAIRVOYANCE: Clear Seeing
The gift of inner vision. Clairvoyant people receive intuitive information primarily as images, colours, symbols, or scenes that arise in the inner visual field. They tend to think in pictures. Their dreams are often vivid and visual. They may literally see auras or energy fields. During meditation, they tend to receive rich visual experiences.

Signs you may be primarily clairvoyant: You think in images rather than words. You have always had vivid, detailed dreams. You have a strong sense of spatial orientation. You often get visual impressions of people and situations that turn out to be accurate.

CLAIRSENTIENCE: Clear Feeling
The gift of inner feeling. Clairsentient people receive intuitive information primarily through physical and emotional sensations in the body. They feel the emotions of others as if they were their own. They walk into rooms and immediately feel the emotional atmosphere. They often know something is wrong before any visual or verbal information confirms it.

Signs you may be primarily clairsentient: You are highly empathic. You are significantly affected by the emotional states of people around you. You often know how someone is really feeling beneath what they are presenting. You feel intuitive guidance primarily as a physical sensation, a gut tightening, a warmth in the chest, a tingling in the skin.

CLAIRAUDIENCE: Clear Hearing
The gift of inner hearing. Clairaudient people receive intuitive information primarily through inner sounds, words, music, or voices. They may hear their name called in silence. They may receive guidance as a clear inner voice that sounds distinct from their ordinary thinking. They are often highly sensitive to the sound environments around them.

Signs you may be primarily clairaudient: You have always been strongly affected by music and sound. You sometimes hear words or phrases in your mind that seem to come from somewhere other than your own thinking. You tend to receive guidance in the form of words or sentences rather than images or feelings. You are sensitive to tone of voice and hear subtleties in people's speech that others miss.

CLAIRCOGNIZANCE: Clear Knowing
The gift of direct knowing. Claircognizant people receive intuitive information as a sudden, complete knowing that arrives without any image, feeling, or sound. They simply know things. They cannot always say how they know. They just know. This gift is often the most difficult to trust precisely because there is no accompanying sensation or image to validate it.

Signs you may be primarily claircognizant: You often know things without being able to explain how. You have strong convictions about situations that later turn out to be accurate. Your intuition tends to arrive as certainty rather than as a feeling or image. You find it difficult to articulate where your insights come from because they seem to simply appear fully formed.`
        },
        {
          heading: 'Identifying Your Primary Channel',
          body: `Reflect honestly on the descriptions above. You likely resonated most strongly with one or two of the four channels.

To confirm your primary gift, ask yourself:

When I have received accurate intuitive guidance in the past, how did it come? As an image? A feeling? A voice or words? Simply knowing?

In meditation, what type of inner experience arises most naturally? Visual imagery? Physical sensations and emotions? Inner sounds or words? Direct knowings?

Which channel do I most naturally trust? Which do I most tend to dismiss?

The last question is particularly revealing. The channel you most tend to dismiss, telling yourself you imagined it or it was just coincidence, is often your actual primary gift. We tend to distrust what we cannot easily explain, and the most direct intuitive channels are often the hardest to rationalise.

Write your conclusion in your journal: "My primary intuitive channel appears to be..." Then describe the specific experiences that led you to this conclusion.`
        }
      ],
      reflection: 'Which of the four channels feels most natural to you? Which have you been dismissing or doubting? What would change if you fully trusted your primary intuitive gift?',
      affirmation: 'I know how my inner eye speaks. I honour its language and I trust its wisdom.'
    }
  },
  {
    id: 16,
    day: 'Day 30',
    week: 'Week 5',
    title: 'Developing Your Primary Gift',
    duration: '40 min',
    type: 'Targeted Practice',
    content: {
      intro: `Now that you have identified your primary intuitive channel, today we develop it with targeted practice.

The principle here is the same as developing any skill: specific, focused, consistent practice aimed directly at the faculty you are developing produces faster and deeper results than general practice alone. A musician who knows they are primarily a pianist practises piano. They also study theory, listen widely, and develop overall musicianship. But the piano is their primary instrument.

Your primary intuitive channel is your instrument. Today we practise it directly.`,
      sections: [
        {
          heading: 'Practices for Each Channel',
          body: `FOR CLAIRVOYANTS: Visual Activation Practice
Sit in meditation with eyes closed. After your grounding and Ajna activation, place your awareness on the dark screen behind your closed eyes. Rather than waiting passively, begin to intentionally see a simple shape in your inner vision. A circle. A triangle. A star.

Hold it clearly for thirty seconds. Release it. Now allow an image to arise spontaneously, without your direction. Simply receive it. Notice its detail. Its colour. Its movement. Ask it: what do you represent?

Practise this daily. The visual channel strengthens rapidly with this focused attention.

FOR CLAIRSENTIENTS: Feeling Activation Practice
Sit comfortably. Ground yourself fully. Then bring your awareness entirely into your body.

Begin to amplify your sensitivity by asking your body to feel the energy of a loved one, someone who is not physically present. Hold them in your awareness and notice what you feel. Warmth? Pressure? An emotional quality? A physical sensation in a specific part of your body?

Then ask your body: what is this person most needing right now? Let the answer come as a felt sense rather than a thought.

FOR CLAIRAUDIENTS: Hearing Activation Practice
Sit in deep silence. Ground yourself. Activate the Ajna. Then bring your awareness to the inner auditory space behind your ordinary thinking.

Ask a simple question aloud or in your mind: What do I most need to hear today?

Then listen. Not with your ears but with the inner hearing. You may notice a subtle shift in the quality of the inner silence. A word may arise. A phrase. A name. A sound.

Write down everything you hear, including what seems too quiet or too ordinary to count. Clairaudient messages often arrive as if your own thoughts, the difference is a quality of clarity and otherness that, with practice, becomes unmistakeable.

FOR CLAIRCOGNIZANTS: Knowing Activation Practice
This practice develops trust in the direct knowing channel.

Write a question at the top of your journal page. Something real and current in your life. Then, without thinking, write the answer that arrives in the first five seconds. Do not consider it. Do not evaluate it. Simply write the first thing that comes.

Do this ten times with ten different questions. Then review what you wrote. You will likely find that a significant proportion of the immediate knowings are accurate and insightful in ways that surprise you.

The claircognizant channel is blocked primarily by the thinking mind's insistence on explanation. This practice bypasses explanation and trains you to trust the direct arrival.`
        }
      ],
      reflection: 'How did the targeted practice feel for your primary channel? What arose? What became clearer about how your particular inner eye speaks?',
      affirmation: 'I know my gift. I honour it. I develop it with care.'
    }
  },
  {
    id: 17,
    day: 'Day 31',
    week: 'Week 5',
    title: 'Spiritual Protection and Energetic Boundaries',
    duration: '30 min',
    type: 'Essential Teaching',
    content: {
      intro: `As the inner eye opens and your sensitivity to subtle energies increases, the question of spiritual protection and energetic boundaries becomes increasingly important.

This is not a topic rooted in fear. It is a topic rooted in wisdom. Just as you lock your physical door not because you are constantly afraid but because appropriate boundaries are part of living wisely in the physical world, energetic boundaries are part of living wisely in an expanded perceptual world.

As your field becomes more open and your sensitivity increases, you become more permeable. This is part of the opening. The challenge is learning to be open without becoming unprotected. Receptive without becoming a sponge. Present with others without absorbing what is theirs.

Every tradition that works with expanded consciousness has developed practices for this. The Christian tradition speaks of putting on the full armour of God. The Zulu sangoma tradition uses specific herbs, prayers, and rituals to protect the healer's field during work with others. The Tibetan Buddhist tradition uses specific visualisations and mantras. The underlying principle across all of these is the same: to consciously maintain the integrity and coherence of your own energy field while remaining open to the wider world.`,
      sections: [
        {
          heading: 'Signs That Your Energetic Boundaries Need Attention',
          body: `You feel significantly different, heavier, more anxious, or more depleted after spending time with certain people.

You absorb the emotions of others and then cannot distinguish them from your own.

You feel chronically tired in ways that do not correlate with physical activity.

You find it difficult to be in crowded public spaces without feeling overwhelmed.

You say yes when you mean no because you can feel the other person's disappointment before they express it.

You lose your sense of self in intimate relationships, becoming whoever the other person needs you to be.

You have difficulty ending conversations, even when you are tired, because you can feel the other person's need for continued connection.

All of these are signs of insufficiently developed energetic boundaries. They are not personality flaws. They are simply areas where the practice of conscious boundary-setting is needed.`
        },
        {
          heading: 'Three Core Protection Practices',
          body: `PRACTICE ONE: THE LIGHT SHIELD
Before entering any situation where you will be around many people or around individuals whose energy you find draining, do this: Close your eyes. Take three deep breaths. Visualise a sphere of brilliant white or golden light completely surrounding your body, about one foot beyond your skin in all directions. This sphere is fully permeable to love, truth, and genuine connection. It is impermeable to energy that is not yours. It allows your light to shine outward while maintaining the integrity of your own field. Hold this visualisation for thirty seconds. It is established. Carry it with you.

PRACTICE TWO: THE CORD CUTTING
At the end of each day, particularly after interactions that felt energetically draining or entangling, do this: Sit quietly. Call to mind anyone with whom you have had significant interaction today. Visualise the energetic cords that connect you to each person. These cords are not your relationships. They are the energetic residue of the interaction. With a single intention, imagine cutting each cord cleanly at your boundary. You are not cutting the relationship. You are simply releasing the energetic attachment so that you can return to your own baseline energy. Then visualise any energy that is not yours draining from your field into the earth below you, where it is neutralised and recycled.

PRACTICE THREE: THE DAILY SEALING
Each morning after your practice, complete your energetic preparation by placing your awareness at your crown chakra and visualising it as a lotus flower that you can open or close at will. During your practice and during times of intentional inner work, you open it to receive. During ordinary daily life, you bring it to a half-open state, present and aware but not fully permeable. During times when you need to be very focused or when you are in environments that feel energetically chaotic, you close it almost fully, maintaining just a thread of connection to the wider field. This conscious regulation of your own permeability is one of the most important skills of the developed intuitive.`
        }
      ],
      reflection: 'Where in your life do you most notice the impact of insufficient energetic boundaries? With whom? In what situations? What would change if those boundaries were strong and clear?',
      affirmation: 'My field is coherent and whole. I am open to what serves and protected from what does not.'
    }
  },
  {
    id: 18,
    day: 'Day 32',
    week: 'Week 5',
    title: 'Integrating the Activated Inner Eye Into Daily Life',
    duration: '35 min',
    type: 'Integration Practice',
    content: {
      intro: `The activation phase is nearly complete. In two days you will move into the Integration and Embodiment phase of the cohort, Weeks 6 through 8.

But before we arrive there, we need to address the most important question of the entire journey: how do you take what has been activated in the container of practice and bring it into the actual texture of your daily life?

Because this is where it either becomes real or remains merely interesting.

Many people go on spiritual retreats, do profound inner work, have genuine experiences of expanded consciousness, and then return to their ordinary life and find that within two weeks everything has returned to how it was before. The insights fade. The practices slip. The clarity becomes cloudy again. And they are left with a memory of having touched something real but without the living relationship with it that they hoped for.

This does not have to happen. But preventing it requires intentional design.`,
      sections: [
        {
          heading: 'The Three-Level Integration',
          body: `Integration happens at three levels: the practice level, the perception level, and the behaviour level.

THE PRACTICE LEVEL
This is the most straightforward. You maintain your daily practice. Not because you are rigidly following a rule but because you have genuinely experienced what it opens in you and you value that opening enough to protect the time required for it.

Your daily practice from this point forward should include: ten to fifteen minutes of breath and stillness at minimum, a brief Ajna activation at least three times per week, dream recording every morning, and the evening reflection practice. These are not negotiable if you want to maintain what has been activated.

THE PERCEPTION LEVEL
This is about bringing the quality of inner eye awareness into ordinary moments. Not just in formal practice but while washing dishes, waiting in a queue, having a conversation, walking through your neighbourhood.

The practice is deceptively simple: pause, breathe, notice. In any ordinary moment throughout the day, you can drop into the inner eye's perceptual mode simply by taking a conscious breath and opening your awareness beyond the surface of what is in front of you.

What is this person actually feeling beneath what they are saying? What is the deeper quality of this moment? What is being asked of me here that I might otherwise miss?

These questions, asked consistently in ordinary moments, gradually transform the inner eye from an occasional guest into a permanent resident.

THE BEHAVIOUR LEVEL
This is the level that ultimately matters most. Does the awakened inner eye actually change how you live? Does the clarity translate into different choices? Does the expanded perception lead to more compassionate, more authentic, more purposeful action?

This is the test of genuine integration. Not whether you can have profound meditative experiences, but whether those experiences change the quality of your daily choices, relationships, and commitments.

Begin to notice: where is your inner eye showing you something that requires a behavioural change? What is it telling you to stop? What is it telling you to start? What relationship needs a honest conversation? What habit is clearly not serving your growth? What calling has been quiet but consistent?

Integration happens when you listen to these answers and act on them.`
        },
        {
          heading: 'The Activated Life: What It Actually Looks Like',
          body: `People who have genuinely integrated an active inner eye into their daily lives are not recognisable by any particular spiritual performance. They do not necessarily dress a certain way or use certain language or carry crystals or burn incense.

What they are recognisable by is something far more subtle and far more substantial.

They are present. When you speak with them, they are actually there with you. Not planning their next thought or managing their image. Present.

They are honest. Not brutally, not tactlessly, but genuinely. They do not say what they do not mean. They do not perform emotions they are not feeling.

They are responsive rather than reactive. When something unexpected or challenging happens, there is a quality of stillness before they respond. They have access to a space between stimulus and response that most people do not.

They are purposeful. Their life has a direction that comes from within rather than from external expectation or social pressure. They may not always know the exact path, but they know the direction and they trust it.

They are compassionate. Not as a performed virtue but as a natural consequence of being able to genuinely perceive the inner world of others.

This is what you are building. Not a spiritual identity. A genuinely awakened way of living.`
        }
      ],
      reflection: 'What specific change in how you live is your inner eye asking you to make right now? What have you been knowing but not yet acting on?',
      affirmation: 'My practice lives in every moment. The inner eye is not something I do. It is something I am.'
    }
  },
  {
    id: 19,
    day: 'Day 33',
    week: 'Week 5',
    title: 'The Activation Ceremony',
    duration: '60 min',
    type: 'Sacred Ceremony',
    content: {
      intro: `Today we mark the completion of the Activation and Expansion phase with a closing ceremony.

Ceremony is important. It is how human beings, throughout all of history and across all cultures, mark significant thresholds. Birth. Coming of age. Marriage. Death. Initiation into new capacities and new responsibilities.

The completion of your activation work is a genuine threshold. Something in you has changed over these three weeks. Not everything. Not finally. But genuinely. The inner eye is more open than it was. The channel is clearer. The relationship between you and your deeper wisdom is more developed, more trusted, and more alive.

This deserves to be marked. Not with performance or drama, but with genuine acknowledgement and genuine gratitude.

Set aside sixty minutes for this. Find a space that feels sacred to you. It might be your usual practice space, set up more intentionally than usual. It might be somewhere in nature. It might be a particular room that carries significance. What matters is that it feels right to you.`,
      sections: [
        {
          heading: 'The Ceremony',
          body: `PREPARATION
Cleanse your space. Open windows if possible. If you use incense or candles, light them now. If you use essential oils, apply frankincense or sandalwood to your forehead and your heart.

Sit comfortably. Take ten slow, deep breaths. Allow everything that is not this moment to fall away.

OPENING
Speak aloud, or inwardly if you prefer, an acknowledgement of what you are marking:

"I have completed three weeks of activation work. I have turned toward my own inner world with honesty and courage. I have done things that were uncomfortable. I have faced things I had been avoiding. I have opened where I had been closed. I acknowledge this. I honour this."

THE REVIEW
Sit for ten minutes in stillness and review the three weeks. Allow the significant moments to arise in your memory: the first activation meditation. The energy clearing that moved something deep. The dream that stayed with you. The moment of genuine knowing. The resistance that gave way. The thing you saw about yourself that surprised you.

Hold each of these memories with appreciation. They are the record of your opening.

THE DECLARATION
Write or speak your declaration. Complete this sentence in your own words:

"The inner eye that has been activated in me is..."

Write what it can see. Write what it is for. Write what responsibility it carries. Write what it asks of you. Write what you are committed to doing with it.

This declaration is your sacred contract with your own awakening.

THE RECEPTION
Sit in complete silence for fifteen minutes. You have spoken. Now receive.

Open your awareness fully. Allow the inner eye to show you whatever it wishes to show you in this moment of completion and threshold.

THE CLOSING
Place both hands on your heart. Take three deep breaths.

Say: "I am grateful. I am changed. I am ready for what comes next."

Sit quietly for five minutes after the ceremony before moving. Let what has been marked settle into your bones.`
        },
        {
          heading: 'After the Ceremony',
          body: `Write in your journal everything that arose during the ceremony. The declaration you made. What you received in the silence. How your body feels. What you sense is ahead.

Share something from your ceremony in the cohort community space if you feel moved to. Not everything, not necessarily the most intimate parts. But something. Sharing the threshold you have crossed with others who are walking the same path is itself a form of integration.

Rest tonight. Sleep well. Tomorrow you begin the final phase of the cohort: Integration and Embodiment. The work of Weeks 6 through 8 is to take everything that has been activated and weave it into the permanent fabric of who you are.

You are ready.`
        }
      ],
      reflection: 'What did you discover in the ceremony? What did the inner eye show you in the silence? What declaration did you make?',
      affirmation: 'I have been activated. I carry the flame of the inner eye forward into every area of my life.'
    }
  },
  {
    id: 20,
    day: 'Day 34',
    week: 'Week 5',
    title: 'Closing: What Has Been Opened',
    duration: '30 min',
    type: 'Integration + Preparation',
    content: {
      intro: `You have completed the Activation and Expansion phase of the Clarity Cohort.

Twenty days. Twenty practices. Multiple layers of the inner eye opened, worked with, and beginning to integrate. Dreams more vivid and more communicative. Energy more perceptible and more navigable. Intuitive perception more reliable and more trusted. Your specific gifts more clearly identified and more intentionally developed.

This is not a small thing.

The world needs people who can see clearly. Who can feel the truth beneath the surface. Who can act from genuine inner knowing rather than from fear, conditioning, or the expectations of others. Every person who genuinely develops their inner eye becomes, in some way, a clearer channel for wisdom in their family, their community, and their world.

This is not an exaggeration. It is the testimony of every tradition that has walked this path before you.`,
      sections: [
        {
          heading: 'The Harvest of Weeks 3 through 5',
          body: `Before you move into the final phase, complete this harvest in your journal.

Of all the practices in the activation phase, which three had the deepest impact on you and why?

What is the most significant thing your dream life has shown you during this phase?

How has your relationship with your own energy field and the energy fields of others changed?

What is your primary intuitive channel, and how has identifying it changed your relationship with your inner guidance?

What was the most challenging part of this phase? What did that challenge teach you?

Who are you after these five weeks that you were not before you began?`
        },
        {
          heading: 'What Weeks 6 Through 8 Hold',
          body: `The Integration and Embodiment phase is in many ways the most important of the cohort. Activation without integration is like planting seeds without watering them. The potential is there but it does not fully take root.

In Weeks 6 through 8 you will:

Ground every practice you have developed into a sustainable, personalised lifetime spiritual routine that fits the actual shape of your life.

Work with the specific areas of your life where the inner eye's guidance is most needed and most challenging to follow: relationships, vocation, creative expression, and life purpose.

Develop your capacity to share your gifts with others, not as a performance but as a natural expression of who you are becoming.

Complete the cohort with a clear personal vision, a specific statement of what the inner eye shows you about the direction of your life from this point forward.

You are in the home stretch. And home stretches are where the most important things often happen.

See you in Week 6.`
        }
      ],
      reflection: 'Write a letter to yourself to be opened in one year. Describe who you are right now, at the end of the activation phase. What do you hope to be able to tell yourself in twelve months about how you lived what you learned here?',
      affirmation: 'I have been changed. I carry this change forward with gratitude, courage, and clear eyes.'
    }
  }
]

export default function Week35() {
  const [activeLesson, setActiveLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [tab, setTab] = useState('content')

  const lesson = lessons[activeLesson]
  const progress = Math.round((completedLessons.length / lessons.length) * 100)

  const weekColors = { 'Week 3': '#3D5A3E', 'Week 4': '#6B4A2A', 'Week 5': '#C1581A' }
  const weekBg = weekColors[lesson.week] || '#3D5A3E'

  const markComplete = () => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson])
    }
    if (activeLesson < lessons.length - 1) {
      setActiveLesson(activeLesson + 1)
      setTab('content')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const weekGroups = ['Week 3', 'Week 4', 'Week 5']

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#FAF7F2', fontFamily: "'Jost', sans-serif" }}>

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, #2D4520, #3D5A3E)`, padding: '3rem 5%', borderBottom: '4px solid #C1581A' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ color: '#D97C3A', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>The Clarity Cohort · Module 02</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'white', marginBottom: '0.8rem', lineHeight: 1.2 }}>
              Activation &amp; <em style={{ fontStyle: 'italic', color: '#D97C3A' }}>Expansion</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 300, maxWidth: '640px', lineHeight: 1.7 }}>
              Weeks 3 to 5 · 20 Days · Third eye activation techniques, energy clearing, dream journaling, and accessing the subtle realms of perception.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Your Progress</span>
                  <span style={{ color: '#D97C3A', fontSize: '0.8rem', fontWeight: 500 }}>{progress}% Complete</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, background: '#C1581A', borderRadius: '3px', transition: 'width 0.5s ease' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {weekGroups.map(w => (
                  <span key={w} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.78rem' }}>{w}</span>
                ))}
                <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.78rem' }}>✓ {completedLessons.length}/{lessons.length} Done</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 5%', display: 'grid', gridTemplateColumns: '290px 1fr', gap: '2.5rem', alignItems: 'start' }}>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '90px', maxHeight: 'calc(100vh - 110px)', overflowY: 'auto' }}>
            <div style={{ background: 'white', border: '1px solid #E8D9C0', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              {weekGroups.map(week => (
                <div key={week}>
                  <div style={{ padding: '0.8rem 1.4rem', background: weekColors[week], borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{week}</p>
                  </div>
                  {lessons.filter(l => l.week === week).map((l, idx) => {
                    const globalIdx = lessons.indexOf(l)
                    return (
                      <div key={globalIdx} onClick={() => { setActiveLesson(globalIdx); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                        style={{ padding: '0.9rem 1.4rem', cursor: 'pointer', borderBottom: '1px solid #E8D9C0', background: globalIdx === activeLesson ? '#F5EFE4' : 'white', borderLeft: globalIdx === activeLesson ? `3px solid ${weekColors[week]}` : '3px solid transparent', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: completedLessons.includes(globalIdx) ? '#3D5A3E' : globalIdx === activeLesson ? weekColors[week] : '#E8D9C0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ color: 'white', fontSize: '0.55rem', fontWeight: 700 }}>{completedLessons.includes(globalIdx) ? '✓' : globalIdx + 1}</span>
                          </div>
                          <span style={{ fontSize: '0.68rem', color: weekColors[week], fontWeight: 500 }}>{l.day}</span>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: globalIdx === activeLesson ? '#2C1F12' : '#5A4433', fontWeight: globalIdx === activeLesson ? 500 : 400, lineHeight: 1.3, paddingLeft: '24px' }}>{l.title}</p>
                        <p style={{ fontSize: '0.7rem', color: '#8A7060', paddingLeft: '24px', marginTop: '0.15rem' }}>{l.duration}</p>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Week badge */}
            <div style={{ display: 'inline-block', background: weekBg, color: 'white', padding: '0.3rem 1rem', borderRadius: '2px', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{lesson.week}</div>

            {/* Lesson Header */}
            <div style={{ background: 'white', border: '1px solid #E8D9C0', borderRadius: '6px', padding: '2rem 2.4rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C1581A', fontWeight: 500, marginBottom: '0.5rem' }}>{lesson.day} · {lesson.type}</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 400, color: '#2C1F12', lineHeight: 1.2 }}>{lesson.title}</h2>
                </div>
                <span style={{ background: '#F5EFE4', color: '#5A4433', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.8rem', border: '1px solid #E8D9C0', whiteSpace: 'nowrap' }}>⏱ {lesson.duration}</span>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 0, marginTop: '1.8rem', borderBottom: '1px solid #E8D9C0' }}>
                {['content', 'reflection', 'affirmation'].map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    style={{ padding: '0.6rem 1.4rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", fontWeight: tab === t ? 500 : 400, color: tab === t ? '#C1581A' : '#8A7060', borderBottom: tab === t ? `2px solid #C1581A` : '2px solid transparent', marginBottom: '-1px', letterSpacing: '0.05em', textTransform: 'capitalize', transition: 'all 0.2s' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ background: 'white', border: '1px solid #E8D9C0', borderRadius: '6px', padding: '2.4rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              {tab === 'content' && (
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#5A4433', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic', paddingBottom: '2rem', borderBottom: '1px solid #E8D9C0' }}>
                    {lesson.content.intro}
                  </p>
                  {lesson.content.sections.map((sec, i) => (
                    <div key={i} style={{ marginBottom: '2.4rem' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#3D5A3E', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: `2px solid #C1581A`, display: 'inline-block' }}>{sec.heading}</h3>
                      {sec.body.split('\n').map((para, j) => para.trim() && (
                        <p key={j} style={{ fontSize: '0.97rem', color: '#2C1F12', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 300 }}>{para}</p>
                      ))}
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E8D9C0' }}>
                    <button onClick={markComplete}
                      style={{ background: completedLessons.includes(activeLesson) ? '#3D5A3E' : '#C1581A', color: 'white', border: 'none', padding: '0.9rem 2.4rem', borderRadius: '2px', fontSize: '0.85rem', fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                      {completedLessons.includes(activeLesson) ? '✓ Completed — Next Lesson' : activeLesson === lessons.length - 1 ? 'Complete Module' : 'Mark Complete & Continue'}
                    </button>
                  </div>
                </div>
              )}

              {tab === 'reflection' && (
                <div>
                  <div style={{ background: '#F5EFE4', border: '1px solid #E8D9C0', borderLeft: '4px solid #C1581A', borderRadius: '4px', padding: '1.8rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C1581A', fontWeight: 500, marginBottom: '0.8rem' }}>Today's Reflection Prompt</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#2C1F12', lineHeight: 1.7, fontStyle: 'italic' }}>{lesson.content.reflection}</p>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#8A7060', lineHeight: 1.7, fontWeight: 300 }}>Take 10 to 15 minutes with your journal. Write without editing. The more honest, the more useful.</p>
                </div>
              )}

              {tab === 'affirmation' && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: weekBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem' }}>👁</div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C1581A', fontWeight: 500, marginBottom: '1.5rem' }}>Today's Affirmation</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 300, color: '#2C1F12', lineHeight: 1.5, fontStyle: 'italic', maxWidth: '520px', margin: '0 auto 2rem' }}>"{lesson.content.affirmation}"</p>
                  <p style={{ fontSize: '0.88rem', color: '#8A7060', fontWeight: 300, lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>Speak this aloud three times before beginning your practice. Let it settle into your body.</p>
                </div>
              )}
            </div>

            {/* Nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <button onClick={() => { if (activeLesson > 0) { setActiveLesson(activeLesson - 1); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
                disabled={activeLesson === 0}
                style={{ background: 'white', border: '1px solid #E8D9C0', color: activeLesson === 0 ? '#8A7060' : '#2C1F12', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", cursor: activeLesson === 0 ? 'default' : 'pointer', opacity: activeLesson === 0 ? 0.5 : 1 }}>
                ← Previous Day
              </button>
              <Link href="/dashboard" style={{ background: '#F5EFE4', border: '1px solid #E8D9C0', color: '#5A4433', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', textDecoration: 'none', fontFamily: "'Jost', sans-serif" }}>
                Back to Dashboard
              </Link>
              <button onClick={() => { if (activeLesson < lessons.length - 1) { setActiveLesson(activeLesson + 1); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
                disabled={activeLesson === lessons.length - 1}
                style={{ background: '#C1581A', border: 'none', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", cursor: activeLesson === lessons.length - 1 ? 'default' : 'pointer', opacity: activeLesson === lessons.length - 1 ? 0.5 : 1 }}>
                Next Day →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
