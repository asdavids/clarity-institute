import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const lessons = [
  {
    id: 1,
    day: 'Day 1',
    title: 'Welcome to the Path',
    duration: '25 min',
    type: 'Teaching + Practice',
    content: {
      intro: `Welcome. You have arrived at the beginning of something real.

Before we go anywhere, we want to say this clearly: you do not need to be spiritual, experienced, or certain about anything to be here. You only need to be willing. Willing to slow down. Willing to listen. Willing to look inward with honesty and curiosity.

This cohort is not about adding something to your life. It is about uncovering what has always been there. The inner eye, the third eye, the seat of intuition and deeper perception, is not a gift given to special people. It is a natural faculty present in every human being. What we are doing here is simply learning how to use it.`,
      sections: [
        {
          heading: 'What These Two Weeks Are About',
          body: `Weeks 1 and 2 are called Foundation and Stillness. This is deliberate. Before you can expand your perception, you need a stable inner ground to stand on. Think of it like building a house. You do not start with the roof. You start with the foundation.

In these two weeks you will:
• Establish a daily practice that becomes the spine of your awakening journey
• Learn what intuition actually is and how it works in the body and mind
• Begin to distinguish the voice of the inner eye from the noise of fear, habit, and conditioning
• Cultivate stillness as a daily experience, not just a concept
• Start to build a relationship with your own inner world through journaling, meditation, and breathwork`
        },
        {
          heading: 'Your First Practice: The Arrival',
          body: `Before you do anything else today, do this.

Find a quiet place. Sit comfortably with your back straight and your hands resting in your lap. Close your eyes.

Take three slow, deep breaths. Breathe in through your nose for four counts. Hold for two. Out through your mouth for six.

After the third breath, simply sit. Do not try to think anything or feel anything in particular. Just notice what is already here. The weight of your body. The sounds around you. The rhythm of your breath.

Stay here for five minutes.

This is the beginning of your practice. Simple. Unglamorous. And more powerful than it looks.

After you sit, open your journal and write this: "Today I chose to look inward. Here is what I noticed..."

Write freely. There are no wrong answers.`
        }
      ],
      reflection: 'What does it mean to you to begin this journey? What are you hoping to find? What are you afraid might be there?',
      affirmation: 'I am here. I am open. I am ready to see.'
    }
  },
  {
    id: 2,
    day: 'Day 2',
    title: 'The Anatomy of Intuition',
    duration: '30 min',
    type: 'Teaching + Body Practice',
    content: {
      intro: `Intuition is not mysterious. It is biological, psychological, and spiritual all at once. And once you understand how it works, you can begin to work with it deliberately rather than waiting for it to show up randomly.

Most people experience intuition as a feeling they cannot fully explain. A sense that something is right or wrong before they can articulate why. A knowing that arrives before the thinking mind has caught up. This is real. And there is a reason for it.`,
      sections: [
        {
          heading: 'Where Intuition Lives in the Body',
          body: `Your body is constantly processing information that your conscious mind never receives. Scientists call this interoception, the ability to sense your own internal states. Your heart, your gut, your nervous system are all gathering data and sending signals upward to the brain.

The gut-brain connection is one of the most studied areas in modern neuroscience. The enteric nervous system, the network of neurons lining your digestive system, contains over 100 million nerve cells. It communicates directly with the brain through the vagus nerve and operates largely independently. This is why we speak of gut feelings. They are not metaphorical. They are neurological.

The heart also plays a role. Research from the HeartMath Institute has shown that the heart generates an electromagnetic field that extends beyond the body and responds to emotional and perceptual states before the brain does. Your heart often knows before you do.

The third eye, located between the brows and associated with the pineal gland in many traditions, is understood spiritually as the organ of inner perception. Whether you approach this physiologically or spiritually, the truth is the same: there is a centre of awareness within you that can perceive beyond the five ordinary senses.`
        },
        {
          heading: 'The Three Voices You Will Learn to Distinguish',
          body: `As you develop your inner ear, you will begin to notice that not every inner voice is intuition. There are three primary inner voices you will encounter:

1. The Voice of Fear
This voice is loud, urgent, and catastrophising. It speaks in absolutes. It rehearses worst-case scenarios. It often masquerades as wisdom because it sounds cautious and protective. But fear contracts. It closes. Genuine intuition opens.

2. The Voice of Desire
This voice tells you what you want to hear. It is the voice that rationalises. It finds reasons to do what feels good in the moment regardless of whether it is truly aligned. Desire has energy but it can be self-serving. Intuition is clear without being self-serving.

3. The Voice of Intuition
This voice is quieter than the other two. It often arrives as a simple knowing rather than a compelling feeling. It does not argue with you. It does not repeat itself urgently. It simply states. It feels neutral, clear, and grounded. Often it asks something of you rather than reassuring you. It might say: not this one. Or: wait. Or simply: yes.

Learning to distinguish these three voices is one of the most valuable skills you will develop in this cohort.`
        },
        {
          heading: "Today's Body Practice: The Body Scan",
          body: `Sit or lie down comfortably. Close your eyes. Take five slow breaths.

Now, bring your awareness slowly from the top of your head down through your body. Spend a few moments at each of these points:

Crown of the head. Forehead. The space between your brows. Your throat. Your chest and heart. Your solar plexus, just above your navel. Your belly and gut. Your hands and feet.

At each point, simply notice. Is there tension? Warmth? Tingling? Numbness? A sense of expansion or contraction?

You are not trying to fix or change anything. You are simply learning the language of your own body. The more you practise this, the more your body will be able to communicate clearly with you. This is the foundation of embodied intuition.

Do this for 10 to 15 minutes. Then journal what you noticed.`
        }
      ],
      reflection: 'When in your life have you followed your intuition and been glad you did? When have you ignored it and later wished you had listened?',
      affirmation: 'My body is wise. I am learning to listen to it.'
    }
  },
  {
    id: 3,
    day: 'Day 3',
    title: 'Building Your Daily Practice',
    duration: '35 min',
    type: 'Teaching + Practice Design',
    content: {
      intro: `Every spiritual tradition in the world has one thing in common: consistency. The daily practice. The morning ritual. The evening reflection. The repeated return to centre.

This is not about discipline for its own sake. It is about creating a reliable inner environment where awareness can grow. Think of it as tending a garden. You cannot force flowers to bloom. But you can water the soil, remove the weeds, and ensure the conditions are right. That is what a daily practice does for the inner eye.`,
      sections: [
        {
          heading: 'Why Consistency Matters More Than Intensity',
          body: `Many people approach spiritual growth the way they approach dieting: with intense bursts of effort followed by complete abandonment. They meditate for three hours on a retreat and then nothing for six months. This does not build the inner foundation you need.

What builds awareness is the small, consistent return. Ten minutes every morning is worth more than two hours once a week. Why? Because you are training your nervous system. You are creating a neurological groove, a pattern that the brain begins to recognise and reinforce. Each time you return to stillness, you make it easier to access stillness the next time.

The ancient Zen saying is apt: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water." The practice is ordinary. It is the ordinariness that makes it powerful.`
        },
        {
          heading: 'Designing Your Personal Daily Practice',
          body: `Your daily practice should have three elements: a moment of arrival, a core practice, and a moment of closing.

THE MOMENT OF ARRIVAL (2 to 3 minutes)
This is how you enter the practice. A few deep breaths. A simple intention. You might say to yourself: "I am here. I am present. I am open." This signals to your nervous system that you are shifting from doing mode to being mode.

THE CORE PRACTICE (10 to 20 minutes)
Choose one of the following as your daily anchor and stick with it for the full two weeks:

Option A: Breath Meditation
Sit with eyes closed. Focus your attention on the sensation of your breath entering and leaving through your nose. When your mind wanders, gently return your attention to the breath. That's it. No visualisation, no mantra. Just the breath.

Option B: The Body Scan
Move your attention slowly through your body from head to feet. Notice without judgment. This is the practice from Day 2.

Option C: Open Awareness
Sit with eyes slightly open and simply be aware of whatever arises: sounds, sensations, thoughts, feelings. Do not chase any of it. Simply observe. This is sometimes called choiceless awareness.

THE MOMENT OF CLOSING (2 to 3 minutes)
Write three sentences in your journal. What did you notice? What are you grateful for today? What intention are you carrying into the day?`
        },
        {
          heading: 'The Sacred Window: When to Practise',
          body: `The single most powerful time to practise is the first 20 minutes after waking, before you check your phone, speak to anyone, or consume any content. This window is sometimes called the hypnopompic state, the period between sleep and full waking consciousness where the inner eye is naturally most open and the mind is quietest.

If morning is not possible, the second most powerful time is the last 20 minutes before sleep.

The key is to protect your chosen window. Put your phone in another room. Tell your household you are not available. Treat this time as a sacred appointment with yourself that cannot be rescheduled.

You would not cancel a doctor's appointment. Do not cancel your practice.`
        }
      ],
      reflection: 'What time of day feels most natural for your practice? What obstacles might you face? How will you meet them?',
      affirmation: 'Every time I return to practice, I am building something real and lasting.'
    }
  },
  {
    id: 4,
    day: 'Day 4',
    title: 'The Language of Stillness',
    duration: '30 min',
    type: 'Deep Teaching + Meditation',
    content: {
      intro: `Stillness is not the absence of movement. It is the presence of something deeper.

Most people are afraid of silence. When it descends, they reach for their phones, turn on music, or start a conversation. This is not laziness or weakness. It is a trained response. We live in a culture that has systematically taught us to equate stillness with emptiness, and emptiness with danger.

But every wisdom tradition in the world has pointed to the same truth: the most important things are found in silence. Not the silence of boredom or avoidance, but the alive, full silence that comes when the mind finally stops running.`,
      sections: [
        {
          heading: 'What Happens in the Brain During Deep Stillness',
          body: `When you enter genuine stillness, your brain shifts from beta waves, the fast, busy waves of ordinary waking consciousness, to alpha waves, associated with relaxed alertness and creative insight, and sometimes into theta waves, the state just at the edge of sleep where deep intuitive knowing often emerges.

In theta state, the default mode network of the brain, the part responsible for self-referential thinking, mind-wandering, and the constant internal monologue, quiets significantly. What remains is a quality of awareness that is spacious, receptive, and clear. This is the state in which the inner eye operates most naturally.

The ancient Egyptians called this state nun, the primordial waters of consciousness before creation. The Hindus called it samadhi, the state of absorbed awareness. The Zen masters called it no-mind. The name changes but the experience they are all pointing to is the same: a silence that is not empty but full, a stillness that is not passive but deeply alive.`
        },
        {
          heading: 'Extended Meditation: Entering the Stillness',
          body: `This is your longest practice yet. Set aside 20 minutes.

Sit comfortably. Spine upright but not rigid. Hands resting in your lap. Eyes gently closed.

Begin with five slow, deep breaths. With each exhale, feel your body becoming heavier, more relaxed, more settled.

Now, turn your attention to the space between your thoughts. You will notice that thoughts arise and pass. They are like waves on the surface of a lake. What you are looking for is the lake itself, the still, deep water beneath the movement on the surface.

You are not trying to stop the waves. You are simply becoming aware of the depth beneath them.

If thoughts arise, and they will, simply notice them without judgment and return your attention to the space between them. Each time you return, you are not failing. You are practising. The return is the practice.

Stay here for as long as you can. When you feel ready, very slowly bring your awareness back to your body, to the sounds around you, to the room. Take three deep breaths and open your eyes.

Sit quietly for two minutes before you do anything else. Let what arose settle.`
        },
        {
          heading: 'Stillness in Daily Life',
          body: `The goal is not to be still only during your practice. The goal is to begin to carry a thread of stillness through your whole day.

You can do this through what we call micro-pauses. Three times throughout your day, pause for sixty seconds. Put down whatever you are doing. Take three breaths. Notice where you are and what is happening inside you. Then continue.

These micro-pauses interrupt the unconscious momentum of the day and bring you back to the present moment where the inner eye can actually operate. You cannot access your intuition while you are running at full speed on autopilot. Stillness creates the opening.`
        }
      ],
      reflection: 'What does stillness feel like in your body? Is there resistance? Comfort? What does the quality of your inner silence tell you about the current state of your inner world?',
      affirmation: 'In stillness, I hear what I could never hear in the noise.'
    }
  },
  {
    id: 5,
    day: 'Day 5',
    title: 'Breathwork: The Bridge Between Worlds',
    duration: '40 min',
    type: 'Deep Practice',
    content: {
      intro: `Of all the tools available for awakening the inner eye, the breath is perhaps the most ancient and the most accessible. It costs nothing. It requires no equipment. It is always with you. And it is the only function of the autonomic nervous system that you can consciously control.

This is significant. The breath is the bridge between the conscious and the unconscious, between the voluntary and the involuntary, between the outer world and the inner one. Learning to use it deliberately is one of the most powerful things you can do for your spiritual development.`,
      sections: [
        {
          heading: 'The Science of Conscious Breathing',
          body: `When you breathe rapidly and shallowly, as most people do under stress, you activate the sympathetic nervous system, the fight-or-flight response. Cortisol rises. The mind narrows its focus to threat detection. The inner eye closes.

When you breathe slowly and deeply, particularly when the exhale is longer than the inhale, you activate the parasympathetic nervous system, the rest-and-digest response. The heart rate slows. The body relaxes. The mind opens. The inner eye becomes available.

This is not metaphor. It is physiology. And it means that you have the ability to intentionally shift your inner state in a matter of minutes simply by changing how you breathe.

The ancient yogic tradition understood this thousands of years before modern science confirmed it. Pranayama, the Sanskrit word for breathwork, literally translates as the extension of the life force. Every major spiritual tradition has its own version of conscious breathing as a gateway to deeper states.`
        },
        {
          heading: 'Four Breathwork Practices for the Inner Eye',
          body: `PRACTICE 1: 4-7-8 BREATHING (Calming and Grounding)
Inhale through the nose for 4 counts. Hold for 7 counts. Exhale through the mouth for 8 counts. Repeat 4 times. This is one of the fastest ways to shift from sympathetic to parasympathetic activation. Use this whenever you feel anxious, reactive, or scattered.

PRACTICE 2: BOX BREATHING (Clarity and Focus)
Inhale for 4 counts. Hold for 4 counts. Exhale for 4 counts. Hold for 4 counts. This is the pattern used by Navy SEALs and high-performance athletes to enter a state of calm, focused clarity. It balances the nervous system and brings the mind into sharp present-moment awareness.

PRACTICE 3: ALTERNATE NOSTRIL BREATHING (Balance and Integration)
Close your right nostril with your right thumb and inhale through the left nostril for 4 counts. Close both nostrils and hold for 2 counts. Release the right nostril and exhale for 4 counts. Inhale through the right nostril for 4 counts. Close both and hold for 2 counts. Exhale through the left nostril.

This ancient yogic practice is said to balance the left and right hemispheres of the brain and is particularly effective before meditation or any practice requiring both logic and intuition.

PRACTICE 4: CONSCIOUS CONNECTED BREATHING (Deep Opening)
Breathe in and out continuously without pausing between the inhale and exhale. Keep the breath circular, smooth, and rhythmic. Breathe into the belly first, then the chest. Do this for 5 to 10 minutes. This practice can induce altered states of consciousness and is very powerful. If you feel lightheaded, slow down or return to normal breathing. Always practise in a safe, comfortable position.`
        },
        {
          heading: "Today's Full Practice Session",
          body: `Set aside 30 minutes for today's full session.

Begin with 5 minutes of 4-7-8 breathing to arrive and settle.

Move into 10 minutes of box breathing with eyes closed, focusing your attention on the space between your brows, the location of the third eye, with each hold.

Then transition into 10 minutes of conscious connected breathing. Allow whatever arises to arise without resistance. You may feel tingling, warmth, emotion, or a sense of expansion. These are normal responses. Simply breathe through them.

Close with 5 minutes of natural breath and stillness. Rest in what has opened.

Journal immediately after. Do not wait. Write what arose, what you felt, what you saw, what you knew.`
        }
      ],
      reflection: 'What did you notice in today\'s breathwork? Where did you feel resistance? Where did you feel opening?',
      affirmation: 'Every breath is a doorway. I walk through it consciously.'
    }
  },
  {
    id: 6,
    day: 'Day 6',
    title: 'The Journal as a Sacred Tool',
    duration: '25 min',
    type: 'Teaching + Writing Practice',
    content: {
      intro: `The journal is one of the most underrated tools in the spiritual seeker's practice. Many people think of journaling as simply recording events, a diary of what happened today. But at its deepest, journaling is a technology of self-encounter. It is the practice of externalising the inner world so that we can see it, examine it, and learn from it.

Throughout history, the world's greatest mystics, philosophers, and visionaries kept journals. Rumi composed poetry that became the Masnavi. Marcus Aurelius wrote Meditations for himself alone with no intention of publication. Teresa of Avila recorded her inner visions in The Interior Castle. Carl Jung documented his dreams and visions in the Red Book. In every case, the act of writing was an act of deepening, of turning toward the inner world with attention and respect.`,
      sections: [
        {
          heading: 'Five Ways to Use Your Journal for Inner Eye Development',
          body: `1. STREAM OF CONSCIOUSNESS WRITING
Set a timer for 10 minutes. Write continuously without stopping, without editing, without lifting the pen. Do not worry about grammar, sense, or whether what you are writing is profound. The point is to outrun the editorial mind and access what lies beneath it. You will often surprise yourself.

2. THE EVENING REVIEW
Before sleep each night, write answers to these three questions: What did I notice today that I usually miss? When did I feel most alive and connected? What is asking for my attention right now?

3. DREAM RECORDING
Keep your journal beside your bed. The moment you wake, before you move or speak, write whatever you remember from your dreams. Even fragments. Even feelings. Even colours. Dreams are one of the primary languages through which the inner eye communicates.

4. DIALOGUE WITH THE INNER SELF
Write a question at the top of the page. Something real that you are wrestling with. Then, without overthinking, write a response as if from a wiser version of yourself. You will be surprised how much wisdom is already within you, waiting to be accessed.

5. GRATITUDE AND RECOGNITION
Each morning, write three things you are genuinely grateful for and one thing you recognise about yourself. Not surface gratitude but real recognition. "I am grateful for the moment of patience I offered to someone today even when I was tired." This practice trains the inner eye to notice what is real and good, which is essential for discernment.`
        },
        {
          heading: 'The Rule of the Journal',
          body: `There is one non-negotiable rule about your journal: it is for your eyes only.

The moment you imagine an audience, even a sympathetic one, your writing changes. You begin to perform rather than explore. You shape your words for approval rather than truth. The journal is one of the few places left in modern life where you can be completely, uncomplicatedly honest.

Write the things you would never say aloud. Write your fears. Write your contradictions. Write what you want that you are ashamed to admit. Write what you feel in the moments when the masks come down. This is where the real work happens.

Burn it afterwards if you need to. But write it first.`
        }
      ],
      reflection: 'Write for 15 minutes today using the stream of consciousness method. Begin with: "What I have never allowed myself to fully see is..."',
      affirmation: 'The page receives everything I am, without judgment.'
    }
  },
  {
    id: 7,
    day: 'Day 7',
    title: 'Rest, Integration and the Inner Listening',
    duration: '20 min',
    type: 'Rest Day + Reflection',
    content: {
      intro: `Every seven days, we pause. Not because we have run out of material, but because integration is not optional. It is half of the learning.

The word integration comes from the Latin integrare, meaning to make whole. When you receive new insight or experience a shift in awareness, the work of integration is the work of allowing that shift to actually settle into who you are. This takes time. It takes rest. It takes letting the waters of experience become still so that what has been stirred can settle to the bottom.

This is why wisdom traditions around the world built rest into their spiritual calendars. The Sabbath. The lunar cycle of retreat and renewal. The seasons of fasting and feasting. The wisdom of rest is ancient.`,
      sections: [
        {
          heading: 'What to Do on Your Rest Day',
          body: `Your rest day is not a day off from awareness. It is a day of gentle, open awareness without structure.

Do your short morning arrival practice, just five minutes of breath and presence. Then release the agenda.

Spend some time in nature if you can. Walk slowly. Notice what you notice. The colour of the sky. The sound of birds. The feeling of wind or sun on your skin. Nature does not rush. It simply is. Let it teach you by example.

Read something that nourishes you. Not news. Not social media. Something that genuinely feeds your spirit. Poetry. Philosophy. A sacred text from any tradition. A letter from a wise person. Let words enter slowly and sit with them.

Write in your journal but without a prompt. Simply write what wants to be written. Let the week speak through you.`
        },
        {
          heading: 'The First Week Integration Questions',
          body: `Before you move into Week 2, sit with these questions and write honest responses to each:

What has surprised me in this first week of practice?

What has been harder than I expected? What has been easier?

When this week did I feel most connected to my inner world? What was I doing?

What am I beginning to notice about the voice of my intuition? How does it feel when it speaks?

What is one thing I want to carry more intentionally into Week 2?

There are no right answers. The only requirement is honesty. These questions are not for anyone else to read or judge. They are for you, and for the inner eye that is beginning, slowly, to open.`
        }
      ],
      reflection: 'What has this first week stirred in you? Not just in your mind, but in your body, your heart, your dreams?',
      affirmation: 'I honour the pace of my own unfolding.'
    }
  },
  {
    id: 8,
    day: 'Day 8',
    title: 'Deep Inner Listening',
    duration: '35 min',
    type: 'Teaching + Advanced Practice',
    content: {
      intro: `You have completed your first week. You have a practice. You have begun to feel the difference between the noise and the quiet beneath it. Now we go deeper.

Week 2 is about cultivating deep inner listening, the capacity to hear not just what is loud and obvious within you, but what is subtle, quiet, and easily overlooked. This is the voice of the inner eye. And like any subtle thing, it requires a particular quality of attention to be perceived.

The Quakers have a beautiful practice called waiting on the spirit. They gather in complete silence and simply wait, with open, receptive attention, for truth to arise from within the gathered community. No one leads. No one teaches. They listen together. And in that collective, patient listening, wisdom often arises that none of them could have generated alone.

You are learning to do this individually. To wait, with patient, open attention, for your own inner truth to speak.`,
      sections: [
        {
          heading: 'The Practice of Receptive Attention',
          body: `Most of our inner attention is active. We are searching, analysing, solving, planning. Even in meditation, many people are secretly trying to achieve something, reach a state, get somewhere.

Receptive attention is different. It is the practice of becoming so still and so open that what needs to be known can simply arrive. You are not seeking. You are available.

Here is how to practise it:

Sit in your usual meditation position. Take five settling breaths. Allow your body to become heavy and relaxed.

Now, instead of focusing on anything, simply open. Open your awareness as if you were opening your hands, gently, palm upward, ready to receive whatever is placed there.

Do not look for anything. Do not expect anything. Simply remain open and attentive, like a lake on a still morning, perfectly reflective, perfectly ready.

If an image arises, let it be there without grasping. If a word comes, let it come and let it go. If a feeling arrives, feel it fully and release it. If nothing comes, that too is information. The practice is the openness, not the content.

Stay in this receptive state for 15 to 20 minutes.`
        },
        {
          heading: 'Reading the Signals: How the Inner Eye Communicates',
          body: `The inner eye does not always speak in words. More often it communicates through:

Images and symbols: A sudden mental image that feels significant. A symbol that keeps appearing in your dreams and your waking thoughts. Pay attention to these. They are the language of the unconscious mind.

Physical sensations: A warmth in the chest when something is true. A contraction in the gut when something is wrong. A tingling at the crown of the head during moments of insight. Learn to read your body as a spiritual instrument.

Synchronicities: The same idea, word, or theme appearing multiple times from different sources in a short period. The ancient Chinese called this principle li, the pattern beneath the apparent randomness of events. Carl Jung called it synchronicity, meaningful coincidence. When you see this, pay attention.

Dreams: We have spoken of this already. But as you deepen your practice, your dreams will become increasingly rich and increasingly relevant to your waking questions.

Sudden knowing: The quiet arrival of a certainty without an obvious source. This tends to come in moments of stillness or just after waking. It does not argue. It does not repeat itself. It simply states.`
        }
      ],
      reflection: 'In receptive attention today, what arrived? Even if it was subtle, what did you notice?',
      affirmation: 'I am learning to hear the quiet voice that has always been speaking.'
    }
  },
  {
    id: 9,
    day: 'Day 9',
    title: 'Clearing the Static: Emotional Honesty',
    duration: '30 min',
    type: 'Emotional Work + Practice',
    content: {
      intro: `One of the most common reasons people cannot hear their intuition clearly is that there is too much emotional static in the way. Unprocessed fear, grief, anger, shame, these emotions do not disappear when we ignore them. They accumulate. They create a kind of inner noise that drowns out the quieter frequencies of intuitive knowing.

Emotional honesty is therefore not just a psychological practice. It is a spiritual necessity. If you want to see clearly, you need to feel honestly.

This does not mean drowning in your emotions or endlessly revisiting old wounds. It means giving your emotions the honest attention they are asking for, so that they can complete their cycle and release. Emotions that are felt fully tend to move. Emotions that are suppressed tend to stagnate.`,
      sections: [
        {
          heading: 'The Emotional Inventory Practice',
          body: `This practice is best done in writing. It takes about 20 minutes.

Sit quietly for a few minutes. Take three slow breaths. Ask yourself: what emotions am I carrying right now that have not been fully acknowledged?

Do not rush to answer. Sit with the question. Often what arises first is the surface emotion, perhaps stress or tiredness. Beneath that there may be something deeper. Keep asking.

When you feel something stir, write it down. Name it as specifically as you can. Not just "I feel bad" but "I feel a quiet grief about a friendship that has drifted." Not just "I am stressed" but "I am afraid that I am not doing enough and that this fear is running my life."

For each emotion you name, write: where do I feel this in my body? What has this emotion been trying to tell me? What does it need from me?

You are not trying to fix or resolve anything today. You are simply offering honest attention to what is already there. This attention alone begins the process of clearing.`
        },
        {
          heading: 'The Release Practice',
          body: `After the emotional inventory, move into this physical release practice.

Stand with your feet hip-width apart. Take three deep breaths.

On each exhale, make a sound. It does not need to be musical or beautiful. It just needs to be real. A sigh. A groan. A hum. Allow the sound to carry whatever is sitting in your chest.

Shake your hands gently. Let the shaking move up into your arms. This is not performance. It is the nervous system releasing tension that has been held in the body.

Then, if it feels right, place both hands on your heart. Take three slow breaths into that space. Silently say to yourself: I see you. I feel you. I release you with love.

This practice sounds simple. It works deeply.`
        }
      ],
      reflection: 'What emotion has been asking for your attention that you have been avoiding? What might it be trying to tell you?',
      affirmation: 'I give my emotions honest attention so that they may move through me and free me.'
    }
  },
  {
    id: 10,
    day: 'Day 10',
    title: 'Nature as Teacher',
    duration: '45 min outdoors',
    type: 'Outdoor Practice',
    content: {
      intro: `Today you take your practice outside.

Every wisdom tradition on earth has pointed to the natural world as one of the primary teachers of the inner life. The San people of Southern Africa walked with the land for thousands of years and developed a relationship with the natural world that was simultaneously practical and deeply spiritual. The Celtic tradition spoke of the green world as alive with presence and wisdom. The Japanese practice of Shinrin-yoku, forest bathing, has been scientifically shown to reduce cortisol, lower blood pressure, and increase immune function in a single two-hour session.

Nature does not rush. It does not worry about the future or regret the past. It simply is, fully present in each moment. When you enter nature with open awareness, it teaches by example the very quality of presence you are trying to cultivate.`,
      sections: [
        {
          heading: 'The Slow Walk Practice',
          body: `Find somewhere in nature to walk today. It does not need to be dramatic. A park, a garden, a stretch of open ground, or a tree-lined street is enough. What matters is the quality of your attention.

Walk at half your normal pace. This alone will change everything.

Leave your phone in your pocket, ideally at home. For 30 minutes, simply walk and notice. Notice the quality of the light. The specific sounds around you. The smell of the air. The texture of the ground beneath your feet. The movement of leaves or grass in the wind.

At some point during the walk, stop. Find a tree, a rock, or a patch of grass and simply sit for five minutes. Become still in the midst of the natural world. Notice how the environment around you continues moving while you settle into stillness.

Ask the natural world, inwardly, what it has to teach you today. Then listen. Not with your ears but with your whole body. With your skin. With your breath. With the space behind your eyes.

You may receive a feeling. An image. A single word. A sense of direction. Or simply a quality of peace. All of it is the teaching.`
        },
        {
          heading: 'After the Walk',
          body: `Return home and journal for 15 minutes while the experience is still fresh.

Write what you noticed. Write what shifted in you. Write what the natural world seemed to be saying. Do not be too literal. Let yourself be poetic. Let metaphor arrive. The inner eye speaks in metaphor as naturally as it breathes.

If you received any images, symbols, or strong feelings during the walk, give them particular attention. These are often the seeds of deeper insight that will unfold over the coming days.`
        }
      ],
      reflection: 'What did nature show you today that you needed to see? How did the natural world speak to your inner world?',
      affirmation: 'The world around me is always speaking. I am learning to hear it.'
    }
  },
  {
    id: 11,
    day: 'Day 11',
    title: 'The Discipline of Discernment',
    duration: '30 min',
    type: 'Teaching + Practice',
    content: {
      intro: `Discernment is the ability to distinguish between what is true and what merely feels good. Between what serves your growth and what serves your comfort. Between the voice of genuine intuition and the voice of wishful thinking.

This is perhaps the most important skill in the entire journey of inner eye development. Without discernment, expanded awareness can lead you in circles. With it, every experience, every intuition, every inner signal becomes usable information that genuinely guides your life.

The Ignatian tradition of spiritual discernment, developed by Saint Ignatius of Loyola, identified what he called consolation and desolation as two of the primary guides. Consolation is the feeling of being drawn toward life, truth, love, and expansiveness. Desolation is the feeling of being pulled toward contraction, fear, and separation. This framework is remarkably practical and does not require any particular religious belief to use.`,
      sections: [
        {
          heading: 'The Four Questions of Discernment',
          body: `When you receive an intuition, an inner nudge, or a sense of direction, run it through these four questions before you act on it:

1. DOES IT EXPAND OR CONTRACT?
Genuine intuition tends to bring a quality of spaciousness even when it is challenging. Fear and desire tend to contract. If what you are sensing makes you feel smaller, more anxious, or more separate, examine it carefully. If it makes you feel open, clear, and free even when it is asking something difficult of you, pay close attention.

2. DOES IT SERVE ONLY YOU OR DOES IT CONSIDER OTHERS?
Wishful thinking tends to be self-serving. Genuine spiritual guidance tends to have a quality of considering the larger picture, including the wellbeing of others. This does not mean that guidance never asks you to prioritise yourself. Sometimes it does. But it does so from a place of wholeness, not from a place of selfishness.

3. IS IT CONSISTENT OVER TIME?
Real intuition tends to be consistent. It may whisper for months or years before you finally listen. Impulse tends to be urgent and short-lived. If a sense of direction has been present quietly beneath the surface for a long time, that is worth paying attention to.

4. CAN YOU HOLD IT LIGHTLY?
If you find yourself rigidly attached to a particular outcome or direction, that rigidity is usually more about ego than about genuine inner guidance. True intuition tends to come with a quality of openness. You sense the direction without needing it to be the only possible truth.`
        },
        {
          heading: 'The Discernment Journal Practice',
          body: `Choose one area of your life right now where you are genuinely uncertain about the right direction. It might be a relationship, a career choice, a living situation, or a personal challenge.

Write the question clearly at the top of your journal page.

Then, for 20 minutes, write freely about this question from the perspective of each of these voices in turn:

First, write from the voice of fear. What does fear say about this situation?

Then, write from the voice of desire. What does desire want?

Finally, write from the voice of the inner eye. What does the quiet knowing say? Do not rush this section. Sit in silence for a few moments before you write it. Let it come slowly.

When you have finished all three, read back through what you wrote. You will often find that the three voices are quite distinct and that the inner eye voice carries a particular quality of clarity and calm that the other two do not.`
        }
      ],
      reflection: 'In an area of your life right now, what does your inner eye actually say when fear and desire are set aside?',
      affirmation: 'I trust the quiet, consistent voice of my inner knowing.'
    }
  },
  {
    id: 12,
    day: 'Day 12',
    title: 'Intuition in Daily Life',
    duration: '25 min',
    type: 'Integration + Practice',
    content: {
      intro: `Everything you have been practising in these two weeks has a single practical destination: bringing the inner eye into your ordinary, everyday life.

Not just in meditation. Not just in journaling. But in conversations, in decisions, in the way you move through the day. In how you respond to the unexpected. In how you treat yourself in difficult moments. In how you recognise what actually matters beneath the urgency of everything that claims to matter.

This is what spiritual integration means. Not that you become someone who meditates beautifully in a quiet room and then returns to living unconsciously the rest of the time. But that the quality of presence, clarity, and openness you are cultivating in your practice begins to infuse every corner of your life.`,
      sections: [
        {
          heading: 'Three Daily Intuition Practices',
          body: `PRACTICE 1: THE MORNING INTENTION CHECK
Before you begin your day, sit for two minutes and ask yourself: what does today want from me? Not what do I want from today, but what does the day itself seem to be calling forward? This small shift in perspective, from grasping to receiving, trains the inner eye to operate in the active world.

PRACTICE 2: THE PAUSE BEFORE RESPONDING
Before you respond to any message, email, or request today that requires a real decision, take three breaths first. Let the breath settle the reactive mind. Then notice: what do you actually sense about this situation? What does your inner eye say? You do not always need to follow it immediately, but you do need to consult it.

PRACTICE 3: THE EVENING RECOGNITION
Each evening, identify one moment in the day when you felt completely present and alive. It does not need to be dramatic. It might be a conversation, a moment alone, a beautiful piece of light on a wall. Write it down. Why does this matter? Because the inner eye is most naturally active in moments of genuine presence. Tracking these moments trains you to recognise and seek them more frequently.`
        },
        {
          heading: 'What Integrated Intuition Actually Looks Like',
          body: `People who have developed their inner eye do not walk around in a permanent state of mystical certainty. They do not always know the answers. They do not always make the right choices.

What they do have is a relationship with their own inner knowing that they trust and consult. They are willing to slow down before major decisions. They have learned to distinguish their genuine inner voice from the voices of fear and desire. They have a practice that keeps them grounded and connected to themselves.

They are still fully human, still uncertain, still learning, still making mistakes. But they are doing all of this with a quality of self-awareness and inner attentiveness that changes the texture of their experience.

This is what you are building. It is not a destination. It is a way of walking.`
        }
      ],
      reflection: 'Where in your daily life is the inner eye already beginning to show up? What is changing in how you move through your day?',
      affirmation: 'My practice is not separate from my life. It is the ground my life is built on.'
    }
  },
  {
    id: 13,
    day: 'Day 13',
    title: 'The Community of Seekers',
    duration: '25 min',
    type: 'Community + Reflection',
    content: {
      intro: `No one awakens in isolation. Every tradition of spiritual development has understood this. The sangha in Buddhism is the community of practitioners, considered one of the three jewels alongside the teaching and the teacher. The circle of elders in African traditions. The Sufi order gathered around the murshid. The Christian monastic community. The Indigenous ceremonial gathering.

Community is not just support. It is acceleration. When you gather with others who are genuinely seeking, something happens that cannot happen alone. Mirrors appear. You see yourself in others. You are held accountable without judgment. The shared intention creates a container that amplifies individual practice.

This cohort is that container for you. Your fellow participants are not simply classmates. They are mirrors, companions, and teachers in their own right.`,
      sections: [
        {
          heading: 'How to Learn from the Community',
          body: `What triggers you in others is teaching you about yourself. This is one of the most reliable and uncomfortable truths in spiritual community. Pay close attention to what arises in you when you hear others share. Not to analyze them, but to learn about yourself.

What inspires you in another person is pointing you toward something in yourself that is trying to emerge. The qualities you most admire are rarely foreign to you. They are usually seeds waiting for the right conditions.

Sharing your experience serves others as much as it serves you. When you speak honestly about your struggles and your insights, you give others permission to do the same. Your vulnerability is a gift to the community.

Being witnessed matters. There is something that shifts in a person when they speak their truth and are met with genuine attention. You will both give and receive this in the coming weeks.`
        },
        {
          heading: 'Your Community Practice This Week',
          body: `In your cohort community space, share your response to this question:

"What has surprised me most in these two weeks of practice, and what am I beginning to see about myself that I could not see before?"

Write honestly. Not a polished version of your experience but the real one. This act of honest sharing is itself a spiritual practice.

Also: read at least two responses from other cohort members and respond with genuine, thoughtful reflection. Not just "great post!" but real engagement with what they have shared. The quality of community you create is directly related to the quality of attention you bring to it.`
        }
      ],
      reflection: 'What have you noticed about yourself in relationship to this community of seekers? What mirrors have appeared?',
      affirmation: 'I grow in the presence of others who are genuinely seeking truth.'
    }
  },
  {
    id: 14,
    day: 'Day 14',
    title: 'Completion: What Has Been Seeded',
    duration: '40 min',
    type: 'Integration + Celebration + Preparation',
    content: {
      intro: `You have arrived at the end of Weeks 1 and 2. Take a moment with that. Two weeks ago, you were at the beginning of something. Today you are not the same person who arrived.

This is not hyperbole. The neuroscience is clear: consistent mindfulness and meditation practice physically changes the brain within weeks. The prefrontal cortex, associated with clarity, decision-making, and emotional regulation, becomes more active. The amygdala, the brain's fear and threat-detection centre, becomes calmer. The insula, the part of the brain associated with interoception and self-awareness, becomes more sensitive and responsive.

You have been rewiring yourself. One breath at a time. One journal entry at a time. One moment of honest attention at a time.`,
      sections: [
        {
          heading: 'The Two-Week Harvest: What to Acknowledge',
          body: `Before you look forward to Weeks 3 through 8, look back.

In your journal, write honest answers to these:

What practice has had the most impact on you in these two weeks? Why?

What have you learned about the voice of your intuition? How does it feel when it speaks?

What emotional material has surfaced that you had not fully acknowledged before?

What one moment in these two weeks felt most like a genuine inner shift?

What is the most honest thing you can say about yourself right now that you could not have said two weeks ago?

Sit with these questions. Take your time. This harvest is not a test. It is a record of real change that deserves to be honoured.`
        },
        {
          heading: 'Preparing for What Comes Next',
          body: `Weeks 3 through 5 are called Activation and Expansion. The foundation you have built in these two weeks is exactly what that next phase requires.

You will go deeper into third eye activation techniques. You will work with dream journaling at a more sophisticated level. You will explore energy clearing and begin to access what the tradition calls the subtle realms of perception.

None of that would be possible without what you have done in these two weeks. The stillness you have cultivated. The body awareness you have developed. The daily practice you have established. The emotional honesty you have begun.

You are ready. Not because you are perfect. Not because your practice is flawless. But because you have shown up, consistently, and done the real work. That is readiness.`
        },
        {
          heading: 'A Closing Ceremony for These Two Weeks',
          body: `Tonight, before you sleep, do this.

Light a candle if you have one. Sit quietly for ten minutes in your usual practice position.

Bring to mind everything that has opened in you in these two weeks. The insights. The challenges. The moments of stillness. The emotions that moved. The things you saw that you had not seen before.

Hold all of it with genuine appreciation. Not because it was all comfortable, but because all of it was real.

Place both hands on your heart. Breathe slowly. Say silently or aloud:

"I have begun. I have shown up. I have looked inward with honesty. The inner eye is opening. I am grateful. I am ready."

Then, very gently, blow out the candle.

And know that something real has been seeded in you that will continue to grow, whether or not you are watching.`
        }
      ],
      reflection: 'What seed has been planted in you in these two weeks? What is it asking for as it grows?',
      affirmation: 'I have begun. And beginnings, when they are real, always lead somewhere.'
    }
  }
]

export default function Week12() {
  const [activeLesson, setActiveLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [tab, setTab] = useState('content')

  const lesson = lessons[activeLesson]
  const progress = Math.round((completedLessons.length / lessons.length) * 100)

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

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '72px', minHeight: '100vh', background: 'var(--warm-white)', fontFamily: "'Jost', sans-serif" }}>

        {/* Header */}
        <div style={{ background: 'var(--green)', padding: '3rem 5%', borderBottom: '4px solid var(--burnt-orange)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ color: 'var(--burnt-orange-light)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>The Clarity Cohort · Module 01</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'white', marginBottom: '0.8rem', lineHeight: 1.2 }}>
              Foundation &amp; <em style={{ fontStyle: 'italic', color: 'var(--burnt-orange-light)' }}>Stillness</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 300, maxWidth: '600px', lineHeight: 1.7 }}>
              Weeks 1 and 2 · 14 Days · Establish your daily practice, learn the anatomy of intuition, and cultivate deep inner listening through meditation and breathwork.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Your Progress</span>
                  <span style={{ color: 'var(--burnt-orange-light)', fontSize: '0.8rem', fontWeight: 500 }}>{progress}% Complete</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, background: 'var(--burnt-orange)', borderRadius: '3px', transition: 'width 0.5s ease' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.8rem' }}>📅 14 Days</span>
                <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.8rem' }}>✓ {completedLessons.length}/{lessons.length} Done</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 5%', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2.5rem', alignItems: 'start' }}>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <div style={{ background: 'white', border: '1px solid var(--sand)', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              <div style={{ padding: '1.2rem 1.4rem', borderBottom: '1px solid var(--sand)', background: 'var(--cream)' }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--burnt-orange)', fontWeight: 500 }}>All Lessons</p>
              </div>
              {lessons.map((l, i) => (
                <div key={i} onClick={() => { setActiveLesson(i); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  style={{ padding: '1rem 1.4rem', cursor: 'pointer', borderBottom: '1px solid var(--sand)', background: i === activeLesson ? 'var(--cream)' : 'white', borderLeft: i === activeLesson ? '3px solid var(--burnt-orange)' : '3px solid transparent', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: completedLessons.includes(i) ? 'var(--green)' : i === activeLesson ? 'var(--burnt-orange)' : 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'white', fontSize: '0.6rem', fontWeight: 700 }}>{completedLessons.includes(i) ? '✓' : i + 1}</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--burnt-orange)', fontWeight: 500 }}>{l.day}</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: i === activeLesson ? 'var(--text-dark)' : 'var(--text-mid)', fontWeight: i === activeLesson ? 500 : 400, lineHeight: 1.3, paddingLeft: '26px' }}>{l.title}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', paddingLeft: '26px', marginTop: '0.2rem' }}>{l.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Lesson Header */}
            <div style={{ background: 'white', border: '1px solid var(--sand)', borderRadius: '6px', padding: '2rem 2.4rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--burnt-orange)', fontWeight: 500, marginBottom: '0.5rem' }}>{lesson.day} · {lesson.type}</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.2 }}>{lesson.title}</h2>
                </div>
                <span style={{ background: 'var(--cream)', color: 'var(--text-mid)', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.8rem', border: '1px solid var(--sand)', whiteSpace: 'nowrap' }}>⏱ {lesson.duration}</span>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '0', marginTop: '1.8rem', borderBottom: '1px solid var(--sand)' }}>
                {['content', 'reflection', 'affirmation'].map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    style={{ padding: '0.6rem 1.4rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", fontWeight: tab === t ? 500 : 400, color: tab === t ? 'var(--burnt-orange)' : 'var(--text-light)', borderBottom: tab === t ? '2px solid var(--burnt-orange)' : '2px solid transparent', marginBottom: '-1px', letterSpacing: '0.05em', textTransform: 'capitalize', transition: 'all 0.2s' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ background: 'white', border: '1px solid var(--sand)', borderRadius: '6px', padding: '2.4rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              {tab === 'content' && (
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic', paddingBottom: '2rem', borderBottom: '1px solid var(--sand)' }}>
                    {lesson.content.intro}
                  </p>
                  {lesson.content.sections.map((sec, i) => (
                    <div key={i} style={{ marginBottom: '2.4rem' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--green)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--burnt-orange)', display: 'inline-block' }}>{sec.heading}</h3>
                      {sec.body.split('\n').map((para, j) => para.trim() && (
                        <p key={j} style={{ fontSize: '0.97rem', color: 'var(--text-dark)', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 300 }}>{para}</p>
                      ))}
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--sand)' }}>
                    <button onClick={markComplete}
                      style={{ background: completedLessons.includes(activeLesson) ? 'var(--green)' : 'var(--burnt-orange)', color: 'white', border: 'none', padding: '0.9rem 2.4rem', borderRadius: '2px', fontSize: '0.85rem', fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}>
                      {completedLessons.includes(activeLesson) ? '✓ Completed — Next Lesson' : activeLesson === lessons.length - 1 ? 'Complete Module' : 'Mark Complete & Continue'}
                    </button>
                  </div>
                </div>
              )}

              {tab === 'reflection' && (
                <div>
                  <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', borderLeft: '4px solid var(--burnt-orange)', borderRadius: '4px', padding: '1.8rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--burnt-orange)', fontWeight: 500, marginBottom: '0.8rem' }}>Today's Reflection Prompt</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.7, fontStyle: 'italic' }}>{lesson.content.reflection}</p>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>Take 10 to 15 minutes to write your response in your journal. Write freely, without editing or self-censorship. The reflection space is sacred. What you write here is for your eyes only.</p>
                </div>
              )}

              {tab === 'affirmation' && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem' }}>👁</div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--burnt-orange)', fontWeight: 500, marginBottom: '1.5rem' }}>Today's Affirmation</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1.5, fontStyle: 'italic', maxWidth: '500px', margin: '0 auto 2rem' }}>"{lesson.content.affirmation}"</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', fontWeight: 300, lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>Speak this affirmation aloud three times before you begin your practice today. Let the words land in your body, not just your mind.</p>
                </div>
              )}
            </div>

            {/* Nav between lessons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <button onClick={() => { if (activeLesson > 0) { setActiveLesson(activeLesson - 1); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
                disabled={activeLesson === 0}
                style={{ background: 'white', border: '1px solid var(--sand)', color: activeLesson === 0 ? 'var(--text-light)' : 'var(--text-dark)', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", cursor: activeLesson === 0 ? 'default' : 'pointer', opacity: activeLesson === 0 ? 0.5 : 1 }}>
                ← Previous Day
              </button>
              <Link href="/dashboard" style={{ background: 'var(--cream)', border: '1px solid var(--sand)', color: 'var(--text-mid)', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', textDecoration: 'none', fontFamily: "'Jost', sans-serif" }}>
                Back to Dashboard
              </Link>
              <button onClick={() => { if (activeLesson < lessons.length - 1) { setActiveLesson(activeLesson + 1); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
                disabled={activeLesson === lessons.length - 1}
                style={{ background: 'var(--burnt-orange)', border: 'none', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '2px', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", cursor: activeLesson === lessons.length - 1 ? 'default' : 'pointer', opacity: activeLesson === lessons.length - 1 ? 0.5 : 1 }}>
                Next Day →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
