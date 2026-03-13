import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const lessons = [
  {
    id: 1,
    day: 'Day 35',
    week: 'Week 6',
    title: 'Welcome to Integration',
    duration: '30 min',
    type: 'Teaching + Ceremony',
    content: {
      intro: `You have arrived at the final phase.

Five weeks ago you built the ground. Three weeks ago you opened the eye. Now comes the work that determines whether any of this actually changes your life: integration.

Integration is the most unglamorous and most essential word in the entire vocabulary of spiritual development. It is the difference between someone who has had profound experiences and someone who has become a genuinely different person. Between knowledge and wisdom. Between insight and transformation.

The word itself comes from the Latin integrare: to make whole. And that is precisely what these final three weeks are about. Not adding more experiences, not pursuing more openings, not reaching higher. But becoming whole. Weaving everything that has been activated, cleared, opened, and revealed into the actual living fabric of who you are and how you move through the world.

This is where the cohort earns its name. The Clarity Institute. Not clarity as a mystical state visited in meditation. Clarity as a permanent quality of how you live, how you see, how you choose, how you speak, how you love.

This is the work. And it is the most important work of the entire eight weeks.`,
      sections: [
        {
          heading: 'What Integration Actually Requires',
          body: `Integration requires three things that the activation phase did not require in the same way.

The first is time. Genuine integration cannot be rushed. The nervous system needs time to rewire. The psyche needs time to reorganise around new understanding. The body needs time to carry new ways of being as its natural default rather than as a conscious effort. You cannot force this. But you can create the conditions for it.

The second is testing. Insight that has only been held in meditation is theoretical. It becomes real when it is tested in the friction of actual life. In the conversation where you want to react but you pause. In the decision where you want to choose comfort but your inner eye points elsewhere. In the relationship where old patterns want to reassert themselves but something in you has genuinely changed. These tests are not obstacles to integration. They are integration.

The third is community. We have touched on this throughout the cohort, but in this final phase it becomes most essential. The mirrors that others provide, the honest reflections, the witnessing of each other's growth, the accountability of being seen, these are irreplaceable. You cannot fully integrate alone. You need others who can see you clearly enough to confirm what is real and challenge what is not.

These three weeks will provide all three.`
        },
        {
          heading: 'The Architecture of Weeks 6 Through 8',
          body: `Week 6 is called Grounding the Gifts. Its focus is on taking every practice, every insight, every opening from the first five weeks and anchoring it into the specific, concrete realities of your actual life. Not a spiritual life somewhere in the future. The life you are living right now, in your actual relationships, your actual work, your actual body, your actual community.

Week 7 is called Living as an Intuitive. Its focus is on the outward expression of the developed inner eye: how it changes the way you relate to others, how it informs the work you do in the world, and how you begin to share your gifts with others in a way that is grounded, ethical, and genuinely useful rather than performative.

Week 8 is called The Clear Path Forward. It is the completion of the cohort and the beginning of everything that comes after. You will leave with a personal vision, a lifetime practice, and a clarity about your direction that you did not have when you arrived.

This is where everything becomes real. Welcome.`
        },
        {
          heading: 'Your Integration Intention',
          body: `Before we begin, write your integration intention in your journal.

Complete these sentences honestly:

"The most important thing I want to integrate from this cohort into my daily life is..."

"The area of my life where I most need my inner eye to guide me right now is..."

"The version of myself I am integrating toward looks like..."

"The one thing I am most committed to doing differently after this cohort ends is..."

These are not performance statements. They are honest anchors. Return to them each week for the rest of the cohort and measure how you are doing against them.

Integration is the most honest part of the journey. It is where you find out what was real and what was simply interesting.`
        }
      ],
      reflection: 'Looking back across the five weeks of practice, what has genuinely changed in you? Not what you hope has changed or what you think should have changed. What has actually, concretely shifted in how you experience yourself and the world?',
      affirmation: 'I am not just a seeker. I am becoming what I sought.'
    }
  },
  {
    id: 2,
    day: 'Day 36',
    week: 'Week 6',
    title: 'Your Lifetime Practice: Designing What Lasts',
    duration: '40 min',
    type: 'Practice Design',
    content: {
      intro: `One of the most common spiritual failures is the collapse of practice after a structured container ends.

The retreat ends and you return to ordinary life. The course concludes and the schedule dissolves. The community disperses and the accountability disappears. And within weeks, sometimes days, the practice that was producing genuine transformation quietly fades. Not through any failure of will but simply because no one designed what comes next.

Today you design what comes next. A lifetime practice. Not a rigid, punishing schedule that will collapse under the first real demand on your time. But a flexible, honest, genuinely sustainable daily structure that fits the actual shape of your life and carries everything you have developed into the years ahead.

This is one of the most practically important things you will do in this entire cohort.`,
      sections: [
        {
          heading: 'The Four Pillars of a Sustainable Practice',
          body: `A sustainable lifetime spiritual practice rests on four pillars. Each one is necessary. None alone is sufficient.

PILLAR ONE: THE ANCHOR PRACTICE
This is the single practice you do every single day without exception. It is short enough that no excuse can justify skipping it, and deep enough that it genuinely maintains the opening of the inner eye. Based on everything you have experienced in this cohort, choose your anchor practice.

For most people this will be ten to fifteen minutes of breath and stillness in the Ajna activation mode you developed in Week 3. For others it might be the morning journal. For others, the body scan. What matters is that it is genuinely effective for you and genuinely doable every day.

Your anchor practice is the spine of your spiritual life. Everything else grows from it.

PILLAR TWO: THE DEEPER WEEKLY PRACTICE
Once per week, ideally on the same day each week, you engage in a longer, deeper practice session of forty-five to sixty minutes. This is where you do the full chakra activation, the extended dream work review, the longer journaling, the energy clearing. This session prevents the anchor practice from becoming merely habitual and keeps the inner eye genuinely deepening rather than simply maintaining.

PILLAR THREE: THE INTEGRATION PRACTICE
This is the practice that happens throughout the day, not in formal sessions but in the pauses between activities. The three micro-pauses. The pause before responding. The evening recognition. The moment of asking, before a significant decision, what does my inner eye actually say?

This pillar is what takes the inner eye from being something you visit in practice to something you live in continuously.

PILLAR FOUR: THE COMMUNITY CONNECTION
Once a month at minimum, connect with others who are walking the same path. This cohort has created relationships and a community that can continue beyond the eight weeks. An ongoing circle of even two or three people who meet regularly to share their practice, reflect honestly on each other's growth, and hold each other accountable is more valuable than almost any individual practice.

Human beings do not sustain transformation in isolation. We sustain it in community.`
        },
        {
          heading: 'Designing Your Personal Practice Structure',
          body: `Take your journal and design your actual practice structure. Be specific. Be honest about the realities of your life. Be realistic about your schedule. And be ambitious about what you are worth.

Write down:

MY DAILY ANCHOR PRACTICE:
What it is. When in the day I will do it. How long it will take. Where I will do it. What I will do if my usual time is disrupted.

MY WEEKLY DEEPER PRACTICE:
Which day of the week. What time. How long. Which practices it will include. How I will protect this time.

MY DAILY INTEGRATION PRACTICES:
Which specific micro-practices from the cohort will I carry into my ordinary day? Name them specifically. The morning intention check. The pause before responding. The evening recognition. Choose no more than three so they are actually doable.

MY COMMUNITY CONNECTION:
Who are one to three people from this cohort with whom I will maintain a regular connection? What form will that connection take? How often? What will we do together?

This is your practice blueprint. It is not set in stone. You will refine it over time as you discover what works in practice rather than theory. But having it written down, having it specific, having it real, is the difference between intention and commitment.`
        },
        {
          heading: 'The Non-Negotiable',
          body: `One final thing must be said about sustainable practice: there has to be something non-negotiable at the centre of it.

Not everything can be flexible. If everything is negotiable, everything will eventually be negotiated away. The demands of ordinary life are relentless. They do not stop for your spiritual development. They fill every available space with urgency. If you do not hold something sacred in your own life, something that is not available for reassignment to other priorities, it will be taken.

What is non-negotiable in your practice? What is the thing you will do even on the hardest days? Even when you are travelling? Even when work is overwhelming? Even when the people around you need more of you than you feel you have?

It might be five minutes. It might be ten. It does not need to be long. But it needs to be inviolable.

Write it down. Say it aloud. Make it real.`
        }
      ],
      reflection: 'What has historically caused your spiritual or wellness practices to collapse? What was missing? How will the structure you designed today address those specific vulnerabilities?',
      affirmation: 'My practice is not something I do when life allows. It is the ground that makes the rest of life possible.'
    }
  },
  {
    id: 3,
    day: 'Day 37',
    week: 'Week 6',
    title: 'The Inner Eye in Relationships',
    duration: '35 min',
    type: 'Teaching + Practice',
    content: {
      intro: `Nothing tests and reveals the development of the inner eye more consistently than relationships.

In the relative quiet of meditation, the inner eye can be clear, open, and reliable. But take that same person and place them in a tense conversation with someone they love, or in a situation where they feel unseen or disrespected, or in the presence of someone whose emotional state powerfully activates their own, and suddenly the inner eye can become clouded by projection, reactivity, old wounds, and the ancient, compelling urgency of the ego to protect itself.

This is not a failure. This is the curriculum.

Every significant relationship in your life is a mirror. Not a flattering one. An honest one. It shows you exactly where you are still run by conditioning rather than clarity. Where the inner eye is still filtered by unhealed material. Where your practice is real and where it is still theoretical.

The spiritual traditions understood this. Zen has a saying: before enlightenment, argue with your partner. After enlightenment, argue with your partner differently. The relationships do not disappear. The charge does not always disappear. But your relationship to the charge can change completely.`,
      sections: [
        {
          heading: 'Four Ways the Inner Eye Changes How You Relate',
          body: `PRESENCE: The single most significant gift the developed inner eye brings to relationships is genuine presence. The capacity to actually be with another person rather than managing how they see you, preparing your next response, or processing what they said through the filter of your own unresolved material.

Most people have never been truly present with another human being for longer than a few moments. Most interactions are two people in parallel, each in their own interior monologue, occasionally making contact across the distance. The inner eye, through the practice of deep listening and genuine receptive attention, closes that distance.

When you are truly present with someone, they feel it. Not as an idea. As an experience. And it is transformative for them in ways they may not be able to articulate.

PERCEPTION: The inner eye begins to perceive the full reality of another person, not just the surface they present but the feeling beneath it. The fear beneath the anger. The longing beneath the withdrawal. The love beneath the criticism.

This perception, used with care and ethical restraint, allows you to respond to what is actually happening in an interaction rather than merely to what is being performed.

HONESTY: The developed inner eye has a diminishing tolerance for inauthenticity, including your own. The longer you practise, the harder it becomes to sustain conversations that are not genuine, relationships that are maintained through performance rather than truth, or connections that cost more of yourself than they nourish.

This sometimes means difficult conversations. Honest acknowledgements. Boundaries drawn that were not drawn before. These are not relationship failures. They are relationship maturation.

COMPASSION: Paradoxically, the same inner eye that develops a lower tolerance for inauthenticity also develops a much higher capacity for compassion. When you can genuinely perceive the fear, the wound, and the unmet need beneath someone's difficult behaviour, it becomes harder to simply react to the surface and much easier to respond to the whole person.

This is the quality that makes genuinely awakened people so easy to be around: they see you more fully than you see yourself, and they are not threatened by what they see.`
        },
        {
          heading: 'Practice: The Deep Listening Exercise',
          body: `This practice requires a partner. It can be done with anyone you trust: a cohort member, a friend, a partner, a family member.

Sit facing each other. Set a timer for five minutes.

During the five minutes, one person speaks about something real and current in their life. Not a story they have told many times. Something alive and present. Something they are genuinely sitting with.

The listener's only task is to listen. Not to respond, nod, reassure, or prepare what they will say. Simply to be completely present with the person speaking. To receive them fully without agenda.

At the end of five minutes, the listener reflects back only what they genuinely sensed, not just what was said but what they felt beneath it. What emotion seemed to be present beneath the words? What did their body communicate? What felt most alive in what was shared?

Then switch.

After both turns, sit together in silence for two minutes. Then share what the experience was like.

This exercise is deceptively powerful. People who do it together often describe feeling more genuinely heard in those five minutes than in years of conversation. Because someone was actually there.`
        },
        {
          heading: 'Navigating Difficult Relationships',
          body: `The inner eye development that has happened in this cohort will not automatically resolve difficult relationships in your life. What it will do is change your capacity to navigate them.

Some relationships will become closer and more genuine as you become more present and more honest.

Some relationships will become more clearly visible as what they actually are rather than what you hoped they were. This can be painful but it is also liberation.

Some relationships will need honest conversations that have been avoided. The inner eye does not let you pretend you do not know what you know. Once you can genuinely perceive the dynamic of a relationship clearly, continuing to avoid naming it costs something real.

Some relationships will require the difficult wisdom of appropriate distance or ending. Not every relationship is meant to continue indefinitely. Some are complete. The inner eye, when it is clear, can perceive this and the courage to act on it is part of what integration requires.

In all of these, the guiding principle is the same: what does genuine love for myself and for the other person actually require here? Not comfort. Not avoidance. Genuine love, which is always honest and always courageous even when it is also tender.`
        }
      ],
      reflection: 'Which relationship in your life most clearly mirrors where you still have growth to do? What does your inner eye see about this relationship that you have not fully acknowledged or acted on?',
      affirmation: 'I bring the full presence of my awakened awareness to every relationship. I see clearly and I love honestly.'
    }
  },
  {
    id: 4,
    day: 'Day 38',
    week: 'Week 6',
    title: 'The Inner Eye and Your Vocation',
    duration: '35 min',
    type: 'Deep Teaching + Reflection',
    content: {
      intro: `The word vocation comes from the Latin vocare: to call. A vocation is not simply a job or a career. It is the specific form your gift takes in the world. The particular way your presence and your capacities serve something beyond yourself.

Not everyone knows their vocation. Many people spend entire lifetimes in work that is functional but not alive, that pays the bills but does not feed the soul, that is chosen by default rather than by genuine inner calling.

The inner eye, when it is genuinely open, cannot be satisfied with this. Not because it is demanding or idealistic but because it perceives clearly the difference between living from one's centre and living from one's conditioning. Between the life that is authentically yours and the life that was assembled from external expectations.

This does not necessarily mean quitting your job. It does not necessarily mean a dramatic external change. For some people it does. For others it means bringing the quality of inner eye awareness into the work they are already doing and allowing that presence to transform it from the inside. For others it means beginning to pursue something on the side that is genuinely alive while maintaining what is practically necessary.

What it always means is a greater honesty about what your actual gifts are and what they are genuinely for.`,
      sections: [
        {
          heading: 'Four Questions for Vocational Clarity',
          body: `These are not quick questions. Each one deserves extended time in your journal. Come back to them over multiple sessions if necessary. This is some of the most important work you will do in this cohort.

QUESTION ONE: What have I always known how to do that others find difficult?
Not what you were trained to do. What you have always naturally been able to do. The way you understand people. The way you organise complexity. The way you create. The way you lead. The way you listen. The way you build. Your natural gifts are so natural to you that you often undervalue them because they do not feel like effort.

QUESTION TWO: What do I do when I lose track of time?
Flow states, the experiences of being fully absorbed in an activity that feels effortless and deeply engaging, are one of the most reliable indicators of vocational alignment. The things that produce flow in you are pointing toward the work that is genuinely yours.

QUESTION THREE: What need in the world genuinely moves me?
Not what I think I should care about. What actually moves me. What injustice, what suffering, what gap between what is and what could be, produces in me a genuine response of wanting to do something about it? This is the compass point of vocation.

QUESTION FOUR: If I imagine myself at the end of my life looking back, what would I most regret not having done or tried?
This question, asked with genuine honesty rather than as a performance, often cuts through the noise of practicality and fear and points directly at what the inner eye knows to be true about what your life is for.`
        },
        {
          heading: 'Intuition as a Vocational Guide',
          body: `The inner eye has something specific to say about your vocation. Not as an abstract concept but as a lived reality.

In your journal today, after settling into your practice, ask your inner eye directly: What is my work in this world?

Do not answer with your thinking mind. Sit in the question. Breathe into the Ajna point. Allow the answer to arrive rather than constructing it.

What comes? Even fragments. Even something that seems too small or too large or too impractical. Write it down without judgment.

The vocational guidance of the inner eye does not always arrive as a complete blueprint. More often it arrives as a direction, a quality, a feeling of yes when something is considered and no when something else is. Over time, following these yeses and nos with increasing courage, the path reveals itself.

The Quaker tradition has a beautiful concept called the leadings: the persistent, quiet, consistent nudges of the inner light toward a particular direction. Leadings do not shout. They persist. If the same direction has been present in you for months or years, quietly, beneath the noise of practicality and fear, that is a leading. That is the inner eye pointing home.`
        }
      ],
      reflection: 'What does your inner eye say when you ask it: what is my work in this world? Write what comes without editing. Then sit with it. How does it feel in your body when you consider actually following it?',
      affirmation: 'My gifts are real and they are needed. I am courageous enough to offer them.'
    }
  },
  {
    id: 5,
    day: 'Day 39',
    week: 'Week 6',
    title: 'The Body as a Spiritual Instrument',
    duration: '45 min',
    type: 'Body Practice',
    content: {
      intro: `Throughout this cohort we have worked with the body as a vehicle of intuitive perception. The body scan. The breathwork. The energy clearing. The chakra activation. The somatic release practices.

In this integration phase we deepen this work in a specific direction: learning to treat the body not merely as a container for the spirit but as the spirit's primary instrument of perception, expression, and communication in the physical world.

Many spiritual traditions have made the mistake of treating the body as an obstacle to be overcome, a cage from which the spirit seeks to escape. This is a fundamental error. The body is not the prison of the soul. It is the soul's most intimate expression in the physical dimension.

Your body knows things your mind does not know. It holds wisdom your intellect cannot access. It signals truth that your conditioning works to override. Learning to inhabit the body fully, not just to use it or manage it but to genuinely live in it, is one of the most profound spiritual practices available.`,
      sections: [
        {
          heading: 'The Grounded Awakening',
          body: `The spiritual path that does not include the body produces what teachers sometimes call spiritual bypassing: using spiritual concepts and experiences to avoid rather than engage with the full reality of embodied human life. The person who meditates beautifully but cannot sustain a real relationship. Who has profound insights about love but cannot be vulnerable. Who speaks wisdom but cannot feel grief. Who opens in practice but closes in life.

Genuine awakening goes downward as much as it goes upward. It becomes more embodied, not less. More present in the physical, not more removed from it. The inner eye that is genuinely open does not float above the world. It is deeply rooted in it while seeing it clearly.

The practices that support this grounded awakening are the ones that bring consciousness into the body rather than taking consciousness out of it.`
        },
        {
          heading: 'Three Body Integration Practices',
          body: `PRACTICE ONE: CONSCIOUS MOVEMENT
Choose a form of physical movement that you enjoy, or at minimum that you can do: walking, yoga, dancing, swimming, running, any form. The practice is to do it once this week with complete inner eye attention.

Not listening to a podcast. Not processing your day. With your awareness fully in the physical sensations of the movement. The feeling of muscles working. The rhythm of breath. The contact between your body and the ground, the water, the air. The aliveness of being in a body in motion.

When the mind wanders into thinking, bring it back to sensation. This is meditation in movement and it is among the most powerful integrative practices available.

PRACTICE TWO: EATING AS PRACTICE
Choose one meal this week to eat with complete presence. No screen, no conversation, no distraction. Simply the experience of eating.

Before you begin, take three breaths and genuinely appreciate what is in front of you. Notice the colours, the textures, the smells. As you eat, notice the flavours, the sensations, the way the body responds. Eat slowly enough that you can actually taste each mouthful.

This sounds simple. It is profoundly disruptive to the automatic pilot of ordinary life. And it is integrative in ways that are difficult to explain but immediately felt.

PRACTICE THREE: THE DAILY BODY GRATITUDE
Each evening before sleep, spend two minutes placing your hands on different parts of your body and offering genuine appreciation. Your heart for beating. Your lungs for breathing. Your hands for creating. Your legs for carrying you. Your eyes for seeing.

This is not performance. It is the genuine cultivation of a relationship with the body as a sacred instrument rather than a problematic machine to be managed.`
        },
        {
          heading: 'Healing the Body Through the Inner Eye',
          body: `The inner eye can be directed toward the body itself as a healing tool. This is the foundation of all energy healing practices across traditions, from Reiki to qigong to the healing traditions of the sangoma.

The principle is simple: conscious attention is itself a form of energy. Where you place sustained, loving attention in the body, you increase blood flow, reduce cortisol, activate the parasympathetic nervous system, and create conditions for the body's natural healing intelligence to operate more effectively.

This is not a substitute for medical care. It is a complement to it and a daily practice of care for the body as the sacred instrument it is.

Practice: Sit comfortably. Close your eyes. Take five grounding breaths. Bring your awareness to any area of your body that is currently holding pain, tension, illness, or discomfort. Do not try to fix it or change it. Simply bring warm, sustained, accepting attention to it. Breathe into it gently. Imagine that your breath carries warmth and healing intelligence directly to that area. Stay here for ten minutes.

Do this daily for any area of ongoing discomfort. Track what changes over time. You may be surprised.`
        }
      ],
      reflection: 'What is your current relationship with your body? Has this cohort changed how you inhabit it? Where do you still feel disconnected from the body as a spiritual instrument?',
      affirmation: 'I am fully at home in my body. It is the sacred ground of my awakening.'
    }
  },
  {
    id: 6,
    day: 'Day 40',
    week: 'Week 6',
    title: 'Shadow Integration: Becoming Whole',
    duration: '45 min',
    type: 'Deep Inner Work',
    content: {
      intro: `Carl Jung said: Until you make the unconscious conscious, it will direct your life and you will call it fate.

The shadow is the name given to the parts of ourselves that we have disowned, suppressed, or refused to acknowledge. Not just the obviously dark parts, the anger, the jealousy, the selfishness. But also the disowned light: the gifts we were told were too much, the desires we were taught were shameful, the greatness we were afraid to claim.

Shadow work is not comfortable. It is not designed to be. It is the practice of turning toward the parts of yourself that you have been turning away from, often for decades, and bringing them into the light of conscious awareness. Not to indulge them. Not to act them out. But to integrate them, to reclaim the energy that has been locked in their suppression and make it available for genuine living.

The inner eye cannot be fully clear while significant shadow material remains unconscious. Everything we refuse to see about ourselves becomes a distorting lens through which we see everything else. The jealousy we deny becomes projection. The anger we suppress becomes passive aggression or physical illness. The greatness we disown becomes resentment of those who dare to claim theirs.

Shadow work is, in the deepest sense, the most important work of integration.`,
      sections: [
        {
          heading: 'Identifying Your Shadow',
          body: `The shadow reveals itself most clearly through three doorways.

THE DOORWAY OF STRONG REACTION: Pay close attention to the people, behaviours, and situations that produce a disproportionately strong reaction in you. The person whose confidence makes you furious. The colleague whose recognition makes you seething with jealousy. The behaviour in others that you find utterly intolerable.

Jung called this the law of projection: whatever we cannot accept in ourselves, we project onto others and then react to with great intensity. The thing that most enrages you in someone else is pointing directly at something unacknowledged in yourself. This is not comfortable. It is extraordinarily useful.

Ask yourself: where in me does this quality exist that I have been refusing to acknowledge?

THE DOORWAY OF SHAME: The things you are most ashamed of carry significant shadow material. Not the reasonable regret of having done something harmful. The deep, persistent shame that goes beyond what the situation actually calls for. This shame often surrounds qualities or desires that were shamed in childhood and therefore driven underground.

What are you most ashamed of? Not the performed answer. The real one.

THE DOORWAY OF DREAMS: The threatening, dark, or disturbing figures in your dreams are very often expressions of shadow material. The pursuer. The monster. The enemy. These figures are not strangers. They are parts of yourself, asking for acknowledgment.

When these figures appear in dreams, rather than fleeing them, turn toward them. Ask them their names. Ask what they represent. Ask what they need from you. The answer is usually not what you expect.`
        },
        {
          heading: 'The Shadow Integration Practice',
          body: `This practice is best done in writing, in your journal, with complete privacy and complete honesty.

STEP ONE: IDENTIFY
Choose one quality in others that produces a particularly strong negative reaction in you. Name it specifically. Arrogance. Neediness. Laziness. Manipulation. Cruelty. Selfishness. Whatever it is, name it clearly.

STEP TWO: OWN
Write honestly about how and where this quality exists in yourself. Not how you have behaved badly in ways you regret. Where does this quality genuinely live in you, perhaps in a more hidden or subtle form?

The arrogant person may have a deeply hidden grandiosity that they compensate for with excessive humility. The person furious at neediness may have deep unmet needs they are ashamed to acknowledge. The person enraged by laziness may be suppressing their own deep exhaustion and need for rest.

Write what you find without self-condemnation. You are not confessing to a crime. You are reclaiming a lost part of yourself.

STEP THREE: UNDERSTAND
Write about where this quality originated. Was there a time when this aspect of you was shamed? When it was dangerous to be seen? When it was punished or rejected? Understanding the origin does not excuse the behaviour but it does transform the relationship with it from rejection to compassion.

STEP FOUR: INTEGRATE
Write a statement of integration: "I acknowledge that [quality] exists in me. I understand why it developed. I commit to seeing it clearly rather than projecting it. I reclaim the energy that has been locked in its suppression and direct it toward [constructive expression]."

For example: the suppressed grandiosity reclaimed as genuine confidence. The hidden need reclaimed as the capacity for real intimacy. The suppressed laziness reclaimed as healthy rest and self-care.

This is shadow integration. It does not happen in one sitting. Return to this practice whenever you notice the doorways opening.`
        }
      ],
      reflection: 'What did the shadow integration practice reveal? What quality in others are you most reactive to and what does it show you about yourself? Write without self-judgment. Simply with honesty.',
      affirmation: 'I embrace all of who I am. The shadow and the light are both mine and both serve my wholeness.'
    }
  },
  {
    id: 7,
    day: 'Day 41',
    week: 'Week 6',
    title: 'Rest and Deep Reflection',
    duration: '20 min',
    type: 'Rest + Community',
    content: {
      intro: `The sixth week has been the heaviest in terms of honest inner work.

Relationships. Vocation. The body. The shadow. These are not light territories. They are the places where spiritual development either becomes genuinely real or remains a comfortable theory.

You have done genuine work this week. You deserve genuine rest.

Today is for stillness, for integration, and for honest community. Share in your cohort space. Receive from others. Let the week settle.`,
      sections: [
        {
          heading: 'The Week Six Integration Questions',
          body: `Write in your journal before engaging with the community today.

What in this week's work landed most deeply and why?

What did the shadow work reveal that surprised you?

What did the vocation reflection clarify about your direction?

What is one specific thing you are committing to doing differently in a relationship in your life as a result of this week's work?

What does your body want you to know right now?

Sit with each question for at least five minutes before writing your response. Let the answers come from beneath the surface.`
        },
        {
          heading: 'Community Sharing',
          body: `In your cohort community space today, share your response to this question:

"What is the one thing from this week's integration work that I most needed to see, and what am I going to do about it?"

This is different from sharing an insight. It is sharing a commitment. The shift from insight to commitment is the shift from interesting to transformative.

Read and respond to at least two other shares. Offer genuine reflection, not encouragement alone. Notice what in others' shares mirrors something in your own experience.

The community at this stage of the cohort has developed a depth of genuine mutual knowing that is rare and precious. Use it.`
        }
      ],
      reflection: 'Write a letter of appreciation to yourself for the courage it has taken to do this inner work. Not false modesty and not inflation. Genuine, honest appreciation for what you have faced and what you have opened.',
      affirmation: 'I have the courage to see clearly and the wisdom to use what I see.'
    }
  },
  {
    id: 8,
    day: 'Day 42',
    week: 'Week 7',
    title: 'Living as an Intuitive: Your New Normal',
    duration: '35 min',
    type: 'Teaching + Practice',
    content: {
      intro: `Welcome to Week 7. You are in the final fortnight of the cohort and entering the territory that most spiritual courses never reach: the question of what it actually means to live as someone whose inner eye is genuinely open.

Not on a retreat. Not in a meditation session. Not when everything is quiet and aligned. But in ordinary life. In the grocery store and the board meeting and the difficult conversation and the sleepless night and the moment when the old patterns want to reassert themselves with all their familiar authority.

What does it mean to be an intuitive in real life?

It means something very specific and very unglamorous. It means that you have developed a genuine relationship with an inner guidance system that is more reliable, more truthful, and more consistently in your best interest than the guidance systems most people operate from: the approval of others, the avoidance of discomfort, the repetition of familiar patterns, the performance of a constructed identity.

And having developed that relationship, you use it. Consistently. Even when it is inconvenient. Especially when it is inconvenient.`,
      sections: [
        {
          heading: 'The Marks of Someone Living Intuitively',
          body: `There are specific, recognisable qualities in people who have genuinely integrated the inner eye into their daily lives. These are not mystical performances. They are practical, behavioural, relational realities.

THEY PAUSE BEFORE RESPONDING. Not dramatically. Not obviously. But there is a perceptible quality of genuine consideration before they speak or act. They have access to a space between stimulus and response that most people do not.

THEY FOLLOW THROUGH ON INNER GUIDANCE. When the inner eye says something clearly, they act on it. Not always immediately, not without discernment, but they do not habitually override what they know to be true because it is inconvenient or uncomfortable.

THEY SPEAK THE TRUTH WITH CARE. They have developed what the Quakers call speaking truth to power and what others simply call honesty: the capacity to say what is real even when it would be easier to stay quiet. They do this with as much care as possible, but they do it.

THEY KNOW THEIR LIMITS AND THEIR GIFTS. They are neither falsely modest nor inflated about who they are and what they can offer. They know what they are genuinely good at and they offer it. They know where they genuinely need support and they seek it without shame.

THEY HOLD UNCERTAINTY WELL. The open inner eye is not a guarantee of certainty. It is a capacity for navigating uncertainty with grace. People living intuitively are comfortable not knowing and trust that what they need to know will be available when they need it.

THEY ARE PRESENT. This, perhaps more than anything else. They are actually here. With you. In this moment. Not partially here with most of their attention elsewhere. Present.`
        },
        {
          heading: 'The Daily Intuitive Practice',
          body: `From this day forward, add this practice to your daily anchor:

Each morning, after your stillness practice, ask the inner eye five specific questions:

ONE: What do I most need to pay attention to today?
TWO: Is there anyone I need to reach out to or be with today?
THREE: Is there anything I am avoiding that I should be facing?
FOUR: What is today asking me to create, contribute, or complete?
FIVE: What do I need to let go of in order to be fully present today?

Do not answer these with your thinking mind. Ask them into the Ajna point, breathe, and receive whatever arrives. Write the answers without editing. They will be brief. Often a word or a name or a simple direction.

Then, at the end of each day, spend five minutes reviewing: how accurate was the morning guidance? Where did I follow it and what happened? Where did I override it and what happened?

This daily cycle of asking, receiving, acting, and reviewing is how you build an increasingly accurate and trustworthy relationship with your own inner guidance system. It is not glamorous. It is extraordinarily effective.`
        }
      ],
      reflection: 'Think of a recent situation where you received clear inner guidance and followed it. What happened? Now think of a situation where you received clear inner guidance and ignored it. What happened? What does the comparison tell you?',
      affirmation: 'I live from the inside out. My inner eye is my primary guide and I trust it completely.'
    }
  },
  {
    id: 9,
    day: 'Day 43',
    week: 'Week 7',
    title: 'Sharing Your Gifts: Service and Expression',
    duration: '35 min',
    type: 'Teaching + Reflection',
    content: {
      intro: `There is a point in genuine spiritual development where the focus necessarily shifts from receiving to giving.

Not because the personal work is finished. It never is. But because the gifts that have been developed begin to call for expression. The inner eye that has been opened begins to want to be useful in the world beyond the self. The clarity that has been cultivated begins to want to be offered.

This is not the spiritual ego performing awakening for an audience. It is something far more organic and far more humble: the natural overflow of genuine development. A tree that grows does not deliberate about whether to offer shade. It simply does, because that is what trees do when they have genuinely grown.

What do you do when your inner eye has genuinely grown?

You share. Not from a position of having arrived somewhere others have not. But from the simple, honest offer of what you have genuinely learned to someone who might benefit from it. This is the root of all genuine service.`,
      sections: [
        {
          heading: 'Three Levels of Sharing',
          body: `LEVEL ONE: PRESENCE AS SERVICE
The most fundamental form of sharing your gifts is simply the quality of your presence. When you are genuinely present with someone, when you listen with the full attention of the developed inner eye, when you see them more clearly than they see themselves and hold that seeing without judgment, you are offering something extraordinary.

This level of service requires no title, no platform, no audience. It simply requires that you show up fully for the people already in your life. Your family. Your friends. Your colleagues. The person in the queue who seems to need a moment of genuine human contact.

This is the most undervalued and most needed form of service in the world. And it is available to everyone who has done the work you have done.

LEVEL TWO: INTENTIONAL SHARING
This is the deliberate offer of specific wisdom, practice, or guidance to people who are genuinely seeking it. It might be sharing what you have learned with a friend who is struggling. It might be beginning to facilitate a small circle of people interested in inner development. It might be writing about your journey. It might be integrating intuitive perception into your professional work.

At this level, the ethical principle of non-imposition is essential. You offer to those who ask. You do not perform your awakening or impose your path on others. You simply make yourself available to those who are genuinely seeking what you have genuinely found.

LEVEL THREE: FORMAL SERVICE
For those who feel genuinely called to share their gifts in a more structured way, through teaching, facilitation, healing work, or creative expression, this level involves the deliberate development of those capacities into something that can serve others consistently and reliably.

This level requires preparation, humility, ongoing personal practice, and the willingness to be supervised and supported by those who have walked further along the path. It is not a destination for everyone in this cohort. But for those who feel the calling, it is worth acknowledging honestly.`
        },
        {
          heading: 'The Practice of Conscious Service',
          body: `This week, identify one specific way you will consciously offer your gifts in service.

It might be as small as deciding to listen more fully in conversations this week, bringing the quality of inner eye presence you have developed to the people you already interact with.

It might be reaching out to someone you know who is struggling and offering, without agenda, to simply be with them.

It might be sharing something from this journey, a practice, an insight, a reflection, with someone who you sense might benefit from it.

It might be beginning a conversation you have been putting off, one that requires the courage the inner eye has been developing in you.

Whatever form it takes, do it with awareness. Notice what it feels like to offer your gifts. Notice where you hold back and why. Notice what happens in the person you serve.

Service is not sacrifice. In genuine service, the giver receives as much as the one who receives. This is one of the most reliably reported phenomena in the spiritual life and in the psychology of wellbeing.

The inner eye that gives flourishes. The inner eye that hoards, waiting until it feels ready enough or worthy enough, stagnates.

You are ready enough. You are worthy enough. Begin.`
        }
      ],
      reflection: 'What specific gift do you feel most called to offer to others? What holds you back from offering it? Is the hesitation wisdom or is it fear? How do you know the difference?',
      affirmation: 'My gifts are not mine to keep. They are mine to offer. And in offering them I become more fully myself.'
    }
  },
  {
    id: 10,
    day: 'Day 44',
    week: 'Week 7',
    title: 'Receiving Feedback: The Mirror of Community',
    duration: '40 min',
    type: 'Community Practice',
    content: {
      intro: `One of the most profound and most uncomfortable gifts of genuine spiritual community is honest feedback.

Not flattery. Not the performed support of people who are more invested in being liked than in being useful. Genuine, caring, accurate reflection of what others genuinely see when they observe your practice, your growth, and your edges.

This is rare. Most people in our lives are not in a position to offer it. The relationships are too entangled with their own needs, their own history with us, their own investment in our not changing too much. The community of fellow practitioners, especially after seven weeks of genuine shared work, is one of the few spaces where something more honest is possible.

Today's practice is about both giving and receiving that honest reflection.`,
      sections: [
        {
          heading: 'The Art of Receiving Feedback',
          body: `Most people are not good at receiving feedback. Even when they ask for it. Even when they genuinely want to grow.

The most common responses to feedback are defensiveness, explanation, counter-argument, sudden self-deprecation, or immediate agreement followed by quietly dismissing it. None of these are actually receiving.

Receiving feedback means allowing what is offered to actually land in you before you respond to it. It means staying present with what is uncomfortable about it rather than immediately managing your reaction. It means genuinely considering whether it is true before you decide whether it is fair.

In the context of spiritual community, the practice of receiving feedback is itself a profound spiritual practice. It requires all the stillness, all the emotional honesty, all the discernment, and all the humility that the entire cohort has been developing.

The guidelines for receiving feedback in this context:

First, when someone offers you a reflection, breathe before you respond. Simply breathe. Let the initial reactive impulse pass.

Second, ask yourself: is there truth in this, even if I do not like how it was delivered or do not agree with everything they said? The part that has truth in it is the part worth receiving.

Third, thank them. Genuinely. Honest feedback is a gift. It is more rare and more valuable than praise.

Fourth, sit with it for twenty-four hours before you decide what to do with it. The immediate response to honest feedback is rarely the wisest response.`
        },
        {
          heading: 'The Community Feedback Practice',
          body: `In your cohort community space today, post a vulnerable, honest share using this format:

"I have been in this cohort for seven weeks. Here is what I have genuinely opened in myself: [be specific]

Here is where I am still struggling or where I sense I have a significant blind spot: [be honest]

The specific feedback I am inviting from this community is: [ask for what you actually want to know]"

Then read the responses you receive with the guidelines above. Breathe before you respond. Let what is true land. Thank the people who offered honest reflection.

Then offer genuine, caring feedback to at least two other people who have shared. Not what they want to hear. What you actually see. With as much care and as much honesty as you can hold simultaneously.

This practice is where seven weeks of individual inner work becomes genuinely collective wisdom. The community sees things in you that you cannot see in yourself. This is not a weakness. It is why community exists.`
        }
      ],
      reflection: 'What feedback have you received in this cohort, directly or indirectly, that has been most challenging to receive? What part of it do you sense is true, even if you have been resisting acknowledging it?',
      affirmation: 'I welcome the mirror of honest community. Being truly seen is one of the greatest gifts I can receive.'
    }
  },
  {
    id: 11,
    day: 'Day 45',
    week: 'Week 7',
    title: 'Purpose, Meaning and the Long View',
    duration: '40 min',
    type: 'Deep Reflection',
    content: {
      intro: `Viktor Frankl, the Austrian psychiatrist who survived the Nazi death camps and went on to found logotherapy, the school of therapy based on the search for meaning, wrote: Those who have a why to live can bear almost any how.

The inner eye, when it is genuinely open and genuinely clear, eventually points toward a why. Not just the how of living more skillfully or the what of specific practices and insights. But the deeper orientation of purpose: what am I ultimately here for? What is this life, this particular incarnation, this specific set of gifts and challenges and circumstances, actually for?

This is not a question that can be answered entirely from the outside. No teacher, no tradition, no book can fully answer it for you. But the inner eye can. And after seven weeks of practice, yours is open enough to be asked directly.

Today we ask it directly.`,
      sections: [
        {
          heading: 'The Difference Between Goals and Purpose',
          body: `Goals are specific outcomes in the external world. To earn a certain income. To build a particular thing. To achieve a specific recognition. Goals are important and valuable. They give direction and structure to energy and effort.

Purpose is different. Purpose is the deeper orientation from which all meaningful goals emerge. It is not what you want to achieve but why it matters. Not what you want to accumulate but what you want to contribute. Not who you want to be seen as but who you genuinely are and what that presence offers the world.

People who have only goals and no purpose tend to achieve their goals and find themselves asking: is this all? The goal post moves. Another goal replaces it. The achievement produces a brief satisfaction and then the gnawing continues.

People who have purpose and no goals tend to remain in inspiration without embodiment. The vision is alive but nothing concrete is being built.

The inner eye integration at this stage of the cohort is about bringing these two into alignment: the deep purpose that the inner eye perceives clearly, and the specific, grounded goals that express that purpose in the actual circumstances of your actual life.`
        },
        {
          heading: 'The Purpose Meditation',
          body: `Set aside thirty minutes for this practice.

Begin with your full grounding and Ajna activation practice. Ten minutes minimum.

Then, in the deep receptive state you have developed, ask the inner eye this question:

What is the deepest purpose of my life?

Not what you have been told it should be. Not what would make others proud or impressed. What the inner eye actually sees when it looks at the full arc of your life from the perspective of its deepest wisdom.

Remain in receptive, open attention. Allow whatever arises to arise without judgment. It may be a single word. An image. A feeling. A direction. A person or community that needs what only you can offer. A quality that your life is meant to embody and demonstrate.

Write everything that comes. Even what seems too large. Even what seems too small. Even what seems impractical or frightening or humbling.

The purpose the inner eye shows you is not always comfortable. Real purpose is usually bigger than the ego wants and more specific than the mind expects. It points toward growth as much as toward comfort. It asks something real of you.

After the meditation, spend twenty minutes writing freely about what arose. Let the full implications unfold on the page.`
        },
        {
          heading: 'The Contribution Question',
          body: `Purpose becomes real when it is expressed as contribution.

Ask yourself honestly: when I am gone, what do I want to have contributed to the people and the world I was part of?

Not what legacy I want to be remembered for. What I actually want to have contributed. The actual positive difference in the actual lives of actual people.

Write about this honestly. If the answer feels small, let it be small. Small contributions offered consistently over a lifetime accumulate into something extraordinary. If the answer feels large, let it be large. Do not diminish what the inner eye genuinely sees.

Then ask: what is the smallest possible first step I could take today, this week, toward that contribution?

The long view and the immediate next step. The purpose and the practice. This is how vision becomes life.`
        }
      ],
      reflection: 'What is the deepest purpose your inner eye showed you today? What contribution do you most want to have made with your life? What is the first concrete step toward it?',
      affirmation: 'My life has a purpose that only I can fulfil. I am living it, beginning now.'
    }
  },
  {
    id: 12,
    day: 'Day 46',
    week: 'Week 7',
    title: 'The Confident Intuitive: Trusting What You Know',
    duration: '30 min',
    type: 'Teaching + Practice',
    content: {
      intro: `Confidence is not the absence of doubt. It is the willingness to act on what you know despite the presence of doubt.

One of the most common challenges for people in the later stages of intuitive development is a persistent, nagging self-questioning: am I imagining this? Is this really my intuition or is it just what I want to believe? How do I know I am not just making this up?

This questioning is not a sign of weakness or insufficient development. It is actually a sign of genuine discernment. The person who never questions their inner guidance at all is in more danger than the person who questions it carefully. Unexamined inner guidance is just as likely to be ego, projection, or wishful thinking as genuine intuition. The questioning is the discernment process in action.

The difference between the person who has developed the inner eye and the person who has not is not the absence of doubt. It is the development of the capacity to distinguish, with increasing accuracy, between doubt that is wisdom and doubt that is simply fear.`,
      sections: [
        {
          heading: 'Building Intuitive Confidence: The Evidence Practice',
          body: `The most reliable way to build genuine confidence in your inner guidance is to track its accuracy over time.

For the next month, keep what we call an intuition journal: a simple record of every time you receive what seems like genuine inner guidance and then either follow or do not follow it, and what happens as a result.

It does not need to be elaborate. A brief note each time: what the guidance was, whether you followed it, and what the outcome was.

After thirty days, review the record. Look for patterns. When you followed the guidance, what tended to happen? When you overrode it, what tended to happen? Which types of guidance were most reliable? Which were most often coloured by wishful thinking or fear?

This is the practice of building an evidence base for your own inner guidance system. It is the most empirical and most grounding thing you can do for intuitive confidence. It takes the question of whether to trust your intuition out of the abstract and into the concrete observable record of your actual experience.

Most people who do this practice for thirty days find, without exception, that the accuracy rate of their genuine inner guidance is significantly higher than they expected. And the instances of inaccuracy are almost always traceable to either wishful thinking, which has the quality of excitement and grasping, or fear-based avoidance, which has the quality of urgency and contraction.`
        },
        {
          heading: 'Acting on What You Know',
          body: `Ultimately, confidence in the inner eye comes not from thinking about it but from acting on it.

Every time you act on genuine inner guidance, even when it is uncomfortable or inconvenient, and experience the result, you build the relationship between your conscious self and your inner wisdom. The relationship deepens through use.

Think of it as a muscle. The more consistently you exercise it, the stronger it becomes. The more consistently you ignore it, the more distant and unreliable it seems.

The practices for this final stretch of the cohort are therefore less about developing new perceptual capacities and more about the simple, repeated, courageous act of following what you already know.

What do you know right now that you have not yet acted on? Not a complicated, multi-layered situation. Something simple and clear. Something the inner eye has been saying quietly for some time that you have been not-quite-acting-on.

Write it down. Then write the single next step. Then take it.

This is what being a confident intuitive actually looks like. Not certainty. Not the absence of fear. The willingness to move anyway, trusting what you know.`
        }
      ],
      reflection: 'What has your inner eye been saying quietly but persistently that you have not yet fully acted on? What specifically is stopping you? Is the stop wisdom or fear?',
      affirmation: 'I trust what I know. I act on what I know. My inner eye is reliable and I honour it.'
    }
  },
  {
    id: 13,
    day: 'Day 47',
    week: 'Week 7',
    title: 'Rest and Week Seven Harvest',
    duration: '25 min',
    type: 'Rest + Deep Integration',
    content: {
      intro: `Seven weeks. Forty-seven days. You are one week from the completion of this cohort.

Take a moment with that. Not rushing forward to what comes next. Simply being here, in this moment, as someone who has done seven weeks of genuine inner work. Who has shown up consistently. Who has been honest when honesty was uncomfortable. Who has opened where opening was asked.

This is worth acknowledging. Not with self-congratulation. With genuine recognition.

Rest today. The final week asks something significant of you and you will need to be genuinely rested for it.`,
      sections: [
        {
          heading: 'The Week Seven Harvest',
          body: `In your journal, write honest responses to these questions. Take your time.

What is the clearest indication that my inner eye has genuinely developed in this cohort? Give a specific example.

How has my relationship with my own inner guidance changed since Week 1?

What is the most courageous thing I have done in this cohort?

In which specific relationship has my inner eye development been most tested?

What is one piece of inner guidance I have been receiving consistently that I have not yet fully acted on?

What am I most proud of about my journey in this cohort?

If I were to describe who I am now, after seven weeks, to the person I was before the cohort began, what would I say?`
        },
        {
          heading: 'Preparing for Week Eight',
          body: `Week Eight is the completion of the cohort. It is also the beginning of everything that comes after.

In this final week you will complete your personal vision statement: a clear, honest, specific articulation of who you are, what your gifts are, what you are committed to, and what direction your inner eye is pointing you toward.

You will complete the cohort with a ceremony of genuine recognition, held in community, where what has been real about this journey is acknowledged and what is being carried forward is declared.

And you will receive your completion certification, not as a credential but as a record: you were here, you did the work, something real happened.

Come to Week Eight with everything you have. It is worth it.`
        }
      ],
      reflection: 'Write one paragraph that honestly summarises who you are at this point in the cohort. Not who you hope to become. Who you actually are right now, as a result of everything you have done and faced and opened.',
      affirmation: 'Seven weeks in. I am not who I was. I carry everything I have learned forward with courage and gratitude.'
    }
  },
  {
    id: 14,
    day: 'Day 48',
    week: 'Week 8',
    title: 'The Clear Path: Your Personal Vision',
    duration: '60 min',
    type: 'Vision Work',
    content: {
      intro: `Welcome to the final week.

This week is the most practically focused of the entire cohort. We have done the inner work. We have opened the channel. We have cleared the blockages, developed the gifts, integrated the shadow, and begun to live more fully from the inside out.

Now we do the work of translation: taking everything that is real and alive in you after these eight weeks and translating it into a clear, specific, honest vision for your life going forward.

Not a vague aspiration. A genuine vision. The kind that the inner eye can actually navigate by because it is specific enough to give direction without being rigid enough to close possibility.

A vision is not a plan. A plan describes the route. A vision describes the destination and the quality of the journey toward it. Plans change constantly as circumstances change. A genuine vision, one that is rooted in the deep truth of who you are and what you are for, does not change. It deepens.

Today we write yours.`,
      sections: [
        {
          heading: 'The Four Dimensions of a Personal Vision',
          body: `A complete personal vision addresses four dimensions of your life. Spend at least ten minutes with each dimension, writing freely and honestly in your journal before drafting the final vision statement.

DIMENSION ONE: THE INNER LIFE
What is the quality of inner life you are committed to cultivating? What is your relationship with your own inner world, with your practice, with the inner eye going to look like five years from now if you continue on this path with genuine commitment?

Write what you genuinely want. Not what you think you should want. What you actually want your inner life to feel like and be.

DIMENSION TWO: RELATIONSHIPS AND COMMUNITY
Who are the people you want to build your life with? What quality of relationship are you committed to? What do you want to give in your most important relationships and what do you need to receive? What community do you want to be part of and what role do you want to play in it?

DIMENSION THREE: VOCATION AND CONTRIBUTION
What work do you genuinely want to be doing? What is the specific contribution you most want to make? What does success in your work life look like through the eyes of the inner eye rather than through the eyes of the ego?

DIMENSION FOUR: EMBODIMENT AND VITALITY
How do you want to inhabit your body? What is your relationship with your own physical life, your health, your energy, your relationship to the natural world? What does it mean to be fully, joyfully, sustainably alive in the body you have?`
        },
        {
          heading: 'Writing Your Vision Statement',
          body: `After journaling freely in all four dimensions, write a single, coherent vision statement of one to two pages. This is not a goal list. It is a narrative, written in the present tense as if you are already living it.

Begin with: "I am living a life of..."

Write it as if you are describing your life to someone five years from now, after you have genuinely lived what these eight weeks have been pointing you toward. Use specific language. Use the language of the inner eye, which is the language of feeling and quality and genuine truth, rather than the language of the ego, which is the language of achievement and comparison and external validation.

This vision statement is a living document. It will evolve as you do. But write the truest version you can today, at the end of these eight weeks, with everything you have developed available to you.

Some prompts to guide you if you feel stuck:

"Five years from now, the quality of my inner life is..."
"My most important relationships are characterised by..."
"The work I do in the world contributes..."
"My body feels..."
"I begin each day..."
"I end each day..."
"When I face uncertainty I..."
"The thing I am most known for by those who know me well is..."
"My life makes a difference in the world because..."

Write until the vision feels genuinely true. Not perfect. True.`
        }
      ],
      reflection: 'Read back your vision statement aloud. How does it feel in your body? What parts feel most true and alive? What parts feel aspirational rather than genuine? Revise until the whole thing feels like you.',
      affirmation: 'I can see clearly where I am going because I know clearly who I am.'
    }
  },
  {
    id: 15,
    day: 'Day 49',
    week: 'Week 8',
    title: 'What Remains: The Permanent Gifts',
    duration: '35 min',
    type: 'Teaching + Reflection',
    content: {
      intro: `As this cohort approaches its completion, it is worth naming honestly what has actually been given to you in these eight weeks.

Not what was promised. Not the most dramatic version of what might have been possible. But what is genuinely and permanently yours as a result of this work, regardless of how consistent your practice is, regardless of how many difficult tests are still ahead, regardless of how much the conditioned mind will still sometimes try to reassert its old authority.

Some things, once genuinely seen, cannot be unseen.
Some openings, once genuinely made, do not fully close.
Some knowings, once genuinely arrived at through genuine practice, do not leave.

These are the permanent gifts of the path. And you carry them with you now, into everything that comes after.`,
      sections: [
        {
          heading: 'The Seven Permanent Gifts',
          body: `THE FIRST GIFT: THE RELATIONSHIP WITH YOUR OWN INNER WORLD
Before this cohort you may have had occasional access to your inner world. Now you have a practice, a language, a relationship. You know how to go there. You know what you find there. You know it is real. This relationship will deepen for the rest of your life.

THE SECOND GIFT: THE KNOWLEDGE OF YOUR PRIMARY CHANNEL
You know how your inner eye specifically speaks. Whether through vision, feeling, hearing, or knowing. This means you will never again dismiss or pathologise your most natural form of inner perception. You know what it is. You trust it.

THE THIRD GIFT: THE PRACTICE OF DISCERNMENT
You have developed the capacity to distinguish, with increasing accuracy, between the voice of genuine inner guidance and the voices of fear and desire. This is one of the most rare and most valuable capacities a human being can possess.

THE FOURTH GIFT: THE COURAGE FOR HONEST SELF-EXAMINATION
You have faced the shadow. You have done the emotional clearing. You have looked at the things you have been not-looking-at. The courage required for that work does not disappear when the course ends. It becomes part of who you are.

THE FIFTH GIFT: THE EXPERIENCE OF GENUINE STILLNESS
You have experienced, more than once in these eight weeks, the quality of alive, receptive stillness that is the inner eye's natural environment. You know what it feels like. You know how to return to it. That knowing is permanent.

THE SIXTH GIFT: THE COMMUNITY
The people you have walked this path with are not strangers. They are fellow travellers who have seen you in a level of honest vulnerability that is rare in ordinary life. This matters. Maintain these connections. They are among the most valuable things you leave this cohort with.

THE SEVENTH GIFT: THE VISION
You have written a vision for your life from the perspective of the open inner eye rather than the conditioned mind. This vision is a compass. Return to it when you lose your way. Let it evolve as you do. But keep it. It was written by the truest part of you.`
        },
        {
          heading: 'What the Inner Eye Asks Going Forward',
          body: `The inner eye asks three things of those who have genuinely awakened it.

HONESTY: Continue to see clearly even when clarity is uncomfortable. Do not retreat into the comfortable fog of not-quite-knowing to avoid the responsibility of action. The inner eye has shown you things. That seeing carries responsibility.

COURAGE: Act on what you know. Consistently. Even when the old patterns are compelling. Even when the people around you would prefer you to remain unchanged. Even when it is genuinely hard. The courage to live from the inside out is a daily practice, not a single decision.

GRATITUDE: Receive the gift of the open inner eye with genuine appreciation. This capacity is not owed to you. It is developed through genuine effort and genuine surrender. Many people live entire lifetimes without ever encountering or cultivating what you have touched in these eight weeks. Do not take it lightly. Do not take it for granted.

These three, honesty, courage, and gratitude, are the ongoing practice that keeps the inner eye clear and the channel open. They do not require a meditation cushion or a dedicated practice space. They are qualities of character that can be expressed in every conversation, every decision, every relationship, every moment.

This is the invitation of the path. Not to become someone special. To become genuinely yourself. Fully. Without apology. Without diminishment. Without the performance of an identity that was never really yours.

This is what the inner eye has been pointing toward all along.`
        }
      ],
      reflection: 'Which of the seven permanent gifts feels most significant to you personally? How will you ensure that you continue to develop and honour it in the months and years ahead?',
      affirmation: 'What has been opened in me is real and it is mine. I carry it forward with honesty, courage, and deep gratitude.'
    }
  },
  {
    id: 16,
    day: 'Day 50',
    week: 'Week 8',
    title: 'Mentorship and Continued Growth',
    duration: '30 min',
    type: 'Guidance + Next Steps',
    content: {
      intro: `The cohort ends. The path does not.

One of the most important things to understand at the completion of a significant inner work container is that completion is not arrival. It is a threshold. The eight weeks have built a foundation, opened a channel, developed specific capacities, and pointed in a clear direction. But the work of embodying all of this fully, of genuinely living the vision, of continuing to deepen the inner eye's clarity and range, this work continues for the rest of your life.

This is not discouraging. It is actually the most encouraging thing possible. It means that what you have opened will keep opening. What you have learned will keep teaching. The inner eye, once genuinely activated, does not close. It continues to see, continues to show you what you need to see, continues to guide you toward what is genuinely true and genuinely yours.

What it needs from you is continued care. Continued practice. Continued honesty. And, at the appropriate moments, continued support from those who can see you clearly and hold you accountable to the vision.`,
      sections: [
        {
          heading: 'When to Seek Mentorship',
          body: `A mentor, in the tradition of genuine inner work, is not a teacher who tells you what to think. A mentor is someone who has walked further along the path than you, who can see what you cannot yet see from where you stand, and whose presence and honest reflection helps you navigate your own path more clearly.

The right time to seek ongoing mentorship is when:

You feel genuinely ready to go deeper than a group container allows. The cohort offers breadth. Mentorship offers depth. If you feel the call to work on specific aspects of your development in a focused, personal way, this is the sign.

You encounter a significant obstacle or confusion in your practice that the group cannot fully address. Some of what the inner eye shows us requires personal guidance to navigate wisely.

You feel called to begin sharing your gifts more formally, whether as a facilitator, a healer, a teacher, or in any other form of service that uses your developed intuitive capacities. This work requires mentorship to be done safely and effectively.

You feel a genuine pull toward a deeper spiritual commitment, a more intensive practice, a more significant life change that the inner eye has been pointing toward. In these thresholds, having a trusted guide alongside you is not weakness. It is wisdom.

The Clarity Institute offers mentorship options designed specifically for cohort graduates. You know your practice. You know your gifts. You know your edges. Mentorship is the most efficient and most profound way to continue from here.`
        },
        {
          heading: 'Sustaining the Community',
          body: `Beyond individual mentorship, the community you have built in this cohort is a resource worth protecting and sustaining.

Consider establishing a regular ongoing gathering with the cohort members you have connected with most deeply. Monthly is ideal. The format can be simple: an opening practice together, honest sharing of where each person is in their practice and their life, and a closing intention. Even a gathering of two or three people who are genuinely committed to each other's growth is more sustaining than you might expect.

The spiritual traditions that have lasted thousands of years have lasted because they embedded their wisdom in community, not just in individual practice. The sangha, the circle, the order, the congregation: these are not peripheral to the path. They are part of the path.

You have one now. Tend it as you would tend a garden. It will return the investment many times over.`
        }
      ],
      reflection: 'What form of continued support, whether mentorship, community, or both, do you sense your practice most needs going forward? What is one concrete step you will take this week to put that support in place?',
      affirmation: 'The path continues and I walk it with clarity, courage, and the support of genuine community.'
    }
  },
  {
    id: 17,
    day: 'Day 51',
    week: 'Week 8',
    title: 'The Completion Ceremony',
    duration: '75 min',
    type: 'Sacred Ceremony',
    content: {
      intro: `You have arrived at the final ceremony of the Clarity Cohort.

Fifty-one days. Eight weeks. Three phases: Foundation, Activation, Integration. Hundreds of hours of practice, reflection, honest self-examination, community sharing, and genuine inner work.

This is not a small thing. This deserves to be marked with the full weight of genuine ceremony.

Set aside ninety minutes for this. More if you can. Make your space as sacred as it can be. Candles, incense, essential oils, beautiful music, natural objects, whatever makes a space feel genuinely held and honoured. This is a ceremony. It deserves a container worthy of what is being celebrated.

Invite one or two people from the cohort to do this ceremony with you if possible, whether in person or on a call together. Being witnessed in completion is part of what completion means.`,
      sections: [
        {
          heading: 'Part One: The Acknowledgement (15 minutes)',
          body: `Begin in silence. Sit in your practice position. Take ten slow breaths.

Then speak aloud, or write, an honest acknowledgement of the journey.

Name specifically what was hard. The days when the practice felt mechanical and empty. The resistances you faced. The things you encountered that you did not want to encounter. The times you almost gave up. The moments of genuine doubt.

Name these honestly. Do not skip past them. The completion of a genuine journey is made complete by acknowledging its difficulty as well as its gifts.

Then name what was genuinely opened. The specific moments of real insight. The dreams that stayed with you. The practices that changed something. The realisations that cannot be unrealised. The version of yourself that is genuinely different from the one who arrived eight weeks ago.

If you are with others, share this acknowledgement with them. Let them witness you in the fullness of the journey, including its difficulty.`
        },
        {
          heading: 'Part Two: The Reading of the Vision (10 minutes)',
          body: `Read aloud your personal vision statement.

Read it as if you believe it. Because you wrote it from the truest part of yourself and it deserves to be received as true.

If you are with others, let them simply listen. No response needed. Simply receiving the vision being spoken aloud is itself a powerful act.

After you read it, sit in silence for two minutes. Let the vision settle into your bones. Let it move from being something you wrote to being something you are.`
        },
        {
          heading: 'Part Three: The Declaration (10 minutes)',
          body: `Speak your declaration of completion and commitment. You may write this in advance or speak it spontaneously.

The declaration should address three things:

What you are completing: "I am completing eight weeks of genuine inner work. I am completing the chapter of my life in which the inner eye was dormant. I am completing the period of searching for something I have now found within myself."

What you are carrying forward: "I carry forward a practice that is real and sustainable. I carry forward the seven permanent gifts of this cohort. I carry forward the vision I have written and the commitment to live it."

What you are committing to: Speak your specific commitments for the year ahead. Not vague intentions. Specific commitments to specific practices, relationships, and actions that express the vision you have written.

Make these commitments as if they are sacred. Because they are.`
        },
        {
          heading: 'Part Four: The Receiving (20 minutes)',
          body: `Sit in complete silence and complete receptivity for twenty minutes.

You have spoken. You have acknowledged. You have declared. Now receive.

Open the inner eye fully. Allow whatever wishes to arrive in this moment of genuine completion and genuine threshold to arrive. Image or feeling, word or knowing, silence or presence, all of it is the gift. All of it is the inner eye completing its own ceremony.

What arrives in this silence is often the most significant message of the entire cohort.

Remain genuinely open until the twenty minutes are complete.`
        },
        {
          heading: 'Part Five: The Closing (10 minutes)',
          body: `Place both hands on your heart. Take three slow, deep breaths.

If you are with others, place one hand on your own heart and one on the heart of the person beside you.

Speak aloud, together or alone:

"I am grateful for the path that has been walked.
I am grateful for the community that has walked it with me.
I am grateful for the inner eye that has opened.
I carry what I have received forward into my life with honesty, courage, and love.
The work continues. And I am ready."

Sit quietly for five minutes after speaking these words. Let the ceremony settle.

Then, very gently, return to the world.

You are not the same person who arrived eight weeks ago.

Go and live it.`
        }
      ],
      reflection: 'Write in your journal immediately after the ceremony. What arrived in the silence of Part Four? What was the most significant moment of the ceremony for you? What are you carrying out of this room and into your life?',
      affirmation: 'I am complete. I am open. I am ready. The inner eye sees clearly and so do I.'
    }
  },
  {
    id: 18,
    day: 'Day 52',
    week: 'Week 8',
    title: 'After the Cohort: The Ongoing Practice',
    duration: '30 min',
    type: 'Final Teaching',
    content: {
      intro: `This is the final lesson of the Clarity Cohort.

There is nothing left to teach here. There is only the invitation to live what you have learned.

But before you go, a few final words about what comes after. Because after is where the test begins. After is where all of this either becomes genuinely embodied in the texture of your daily life or gradually fades into a memory of having once touched something real.

The spiritual traditions are unanimous about what happens after significant inner work: there is a period of integration that can be disorienting. The container has ended. The structure has dissolved. The community support is less immediately present. And the demands of ordinary life are waiting with full urgency and full indifference to the inner work that has been happening.

This period is sometimes called the re-entry. And it requires specific attention and specific care.`,
      sections: [
        {
          heading: 'Navigating Re-Entry',
          body: `The first two weeks after a significant inner work container are among the most critical in the entire journey. This is when the gains are most vulnerable and the old patterns are most eager to reassert themselves.

A few specific practices for the re-entry period:

MAINTAIN THE ANCHOR PRACTICE WITHOUT EXCEPTION. For the first month after the cohort, your daily anchor practice is non-negotiable. No days off. No abbreviated versions. Full practice, every day. This maintains the opening and builds the neural pathways of the new way of being before they have been fully consolidated.

PROTECT YOUR ENERGETIC SPACE. You will return to environments and relationships that have not changed while you have been changing. Some of these environments may feel more challenging now than they did before. Use the protection practices consistently. Give yourself permission to take space when you need it.

MOVE SLOWLY WITH MAJOR DECISIONS. The period immediately after significant inner work is not the ideal time for major life decisions, even when the inner eye is pointing clearly in a direction. Give the integration time to settle. What remains true and clear after thirty days of ordinary life is worth acting on. What seems urgent in the first week may need more discernment.

STAY IN COMMUNITY. Reach out to cohort members. Share how re-entry is going. Ask for support when you need it. Offer it when you can. The community built in eight weeks is worth more than most people realise in the first weeks after.`
        },
        {
          heading: 'The Rhythm of Ongoing Practice',
          body: `The spiritual life, when it is genuinely lived rather than periodically visited, has a rhythm. Like breathing, like seasons, like the tides. There is always a rhythm between expansion and return, between opening and consolidating, between active practice and restful integration.

Learn to recognise and honour your own rhythm. There will be periods of deep, rich inner experience when the inner eye is vivid and the guidance is clear. There will be periods of apparent dryness when nothing seems to be happening in practice and the inner life feels quiet or even absent.

Both are necessary. Both are part of the path. The dry periods are not failures. They are often where the deepest consolidation happens, below the surface, in the parts of the psyche that do not announce themselves.

The only failure in spiritual practice is stopping. And the only protection against stopping is the commitment you made in Week 6 to a sustainable, genuinely doable daily practice that does not depend on peak experiences or dramatic openings to sustain it.

The practice that sustains you through the dry periods is the one that was built honestly, that fits your actual life, and that has the non-negotiable anchor at its centre.

You built that practice. Trust it.`
        },
        {
          heading: 'A Final Word',
          body: `The inner eye is not a faculty that you develop and then possess in some final, static form. It is a living relationship. Like all living relationships, it requires attention, honesty, care, and the willingness to keep showing up even when nothing dramatic seems to be happening.

The people who sustain genuine inner eye development across years and decades are not the ones who had the most dramatic experiences in the early stages of the path. They are the ones who kept showing up. Who maintained their practice through the ordinary days and the difficult ones. Who remained honest with themselves and with their community. Who kept offering their gifts even when they were not certain of their reception.

This is the long game. And it is the one worth playing.

You have begun. You have proven, in fifty-two days, that you can show up for this. That you have the capacity for genuine inner work. That the inner eye, when given attention and care, genuinely opens.

Now go and live from that opening. In your relationships, in your work, in your body, in your community, in the quiet moments of your ordinary days when no one is watching except the inner eye itself.

It sees clearly. And through it, so do you.

It has been a profound honour to walk this path with you.

Now go.`
        }
      ],
      reflection: 'Write a final journal entry for this cohort. Not a summary of what you learned. A genuine statement of who you are now and who you are becoming. Write it as a gift to yourself to read one year from today.',
      affirmation: 'The cohort ends. The practice continues. The inner eye remains open. I am ready for everything that comes next.'
    }
  }
]

export default function Week68() {
  const [activeLesson, setActiveLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [tab, setTab] = useState('content')

  const lesson = lessons[activeLesson]
  const progress = Math.round((completedLessons.length / lessons.length) * 100)

  const weekColors = { 'Week 6': '#3D5A3E', 'Week 7': '#6B4A2A', 'Week 8': '#C1581A' }
  const weekBg = weekColors[lesson.week] || '#3D5A3E'
  const weekGroups = ['Week 6', 'Week 7', 'Week 8']

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
      <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#FAF7F2', fontFamily: "'Jost', sans-serif" }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1E2D18, #3D5A3E, #6B4A2A)', padding: '3rem 5%', borderBottom: '4px solid #C1581A' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ color: '#D97C3A', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>The Clarity Cohort · Module 03 · Final Phase</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'white', marginBottom: '0.8rem', lineHeight: 1.2 }}>
              Integration &amp; <em style={{ fontStyle: 'italic', color: '#D97C3A' }}>Embodiment</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 300, maxWidth: '640px', lineHeight: 1.7 }}>
              Weeks 6 to 8 · 18 Days · Ground your gifts into daily life, receive feedback on your practice, and step forward with clarity as a confident intuitive.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Your Progress</span>
                  <span style={{ color: '#D97C3A', fontSize: '0.8rem', fontWeight: 500 }}>{progress}% Complete · {completedLessons.length}/{lessons.length} Days</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #3D5A3E, #C1581A)', borderRadius: '3px', transition: 'width 0.5s ease' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {weekGroups.map(w => (
                  <span key={w} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.78rem' }}>{w}</span>
                ))}
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
                  <div style={{ padding: '0.8rem 1.4rem', background: weekColors[week] }}>
                    <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{week}</p>
                  </div>
                  {lessons.filter(l => l.week === week).map((l) => {
                    const globalIdx = lessons.indexOf(l)
                    return (
                      <div key={globalIdx}
                        onClick={() => { setActiveLesson(globalIdx); setTab('content'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
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
            <div style={{ display: 'inline-block', background: weekBg, color: 'white', padding: '0.3rem 1rem', borderRadius: '2px', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{lesson.week} · Final Phase</div>

            <div style={{ background: 'white', border: '1px solid #E8D9C0', borderRadius: '6px', padding: '2rem 2.4rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C1581A', fontWeight: 500, marginBottom: '0.5rem' }}>{lesson.day} · {lesson.type}</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 400, color: '#2C1F12', lineHeight: 1.2 }}>{lesson.title}</h2>
                </div>
                <span style={{ background: '#F5EFE4', color: '#5A4433', padding: '0.4rem 1rem', borderRadius: '2px', fontSize: '0.8rem', border: '1px solid #E8D9C0', whiteSpace: 'nowrap' }}>⏱ {lesson.duration}</span>
              </div>

              <div style={{ display: 'flex', gap: 0, marginTop: '1.8rem', borderBottom: '1px solid #E8D9C0' }}>
                {['content', 'reflection', 'affirmation'].map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    style={{ padding: '0.6rem 1.4rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.82rem', fontFamily: "'Jost', sans-serif", fontWeight: tab === t ? 500 : 400, color: tab === t ? '#C1581A' : '#8A7060', borderBottom: tab === t ? '2px solid #C1581A' : '2px solid transparent', marginBottom: '-1px', letterSpacing: '0.05em', textTransform: 'capitalize', transition: 'all 0.2s' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', border: '1px solid #E8D9C0', borderRadius: '6px', padding: '2.4rem', boxShadow: '0 4px 20px rgba(44,31,18,0.07)' }}>
              {tab === 'content' && (
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#5A4433', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic', paddingBottom: '2rem', borderBottom: '1px solid #E8D9C0' }}>
                    {lesson.content.intro}
                  </p>
                  {lesson.content.sections.map((sec, i) => (
                    <div key={i} style={{ marginBottom: '2.4rem' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#3D5A3E', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #C1581A', display: 'inline-block' }}>{sec.heading}</h3>
                      {sec.body.split('\n').map((para, j) => para.trim() && (
                        <p key={j} style={{ fontSize: '0.97rem', color: '#2C1F12', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 300 }}>{para}</p>
                      ))}
                    </div>
                  ))}

                  {/* Completion button */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E8D9C0' }}>
                    {activeLesson === lessons.length - 1 && completedLessons.includes(activeLesson) && (
                      <div style={{ background: 'linear-gradient(135deg, #3D5A3E, #2D4520)', border: '2px solid #C1581A', borderRadius: '4px', padding: '1.2rem 2rem', textAlign: 'center', flex: 1, marginRight: '1rem' }}>
                        <p style={{ color: '#D97C3A', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Cohort Complete</p>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: '1.3rem', fontStyle: 'italic' }}>The inner eye is open. Go and live it.</p>
                      </div>
                    )}
                    <button onClick={markComplete}
                      style={{ background: completedLessons.includes(activeLesson) ? '#3D5A3E' : '#C1581A', color: 'white', border: 'none', padding: '0.9rem 2.4rem', borderRadius: '2px', fontSize: '0.85rem', fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      {completedLessons.includes(activeLesson)
                        ? activeLesson === lessons.length - 1 ? '✓ Cohort Complete' : '✓ Done — Next Lesson'
                        : activeLesson === lessons.length - 1 ? 'Complete the Cohort' : 'Mark Complete & Continue'}
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
                  <p style={{ fontSize: '0.9rem', color: '#8A7060', lineHeight: 1.7, fontWeight: 300 }}>Take 15 to 20 minutes with your journal. In this final phase, write with full honesty. This reflection is between you and the truest part of yourself.</p>
                </div>
              )}

              {tab === 'affirmation' && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: `linear-gradient(135deg, ${weekBg}, #C1581A)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.8rem' }}>👁</div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C1581A', fontWeight: 500, marginBottom: '1.5rem' }}>Today's Affirmation</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 300, color: '#2C1F12', lineHeight: 1.55, fontStyle: 'italic', maxWidth: '540px', margin: '0 auto 2rem' }}>"{lesson.content.affirmation}"</p>
                  <p style={{ fontSize: '0.88rem', color: '#8A7060', fontWeight: 300, lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>Speak this aloud three times. In this final phase, each affirmation is a declaration of who you have become.</p>
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
