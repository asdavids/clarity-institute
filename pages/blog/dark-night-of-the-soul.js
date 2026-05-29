// pages/blog/dark-night-of-the-soul.js
import Head from 'next/head'
import Link from 'next/link'

const C = { green:'#3D5A3E', brown:'#6B4A2A', orange:'#C1581A', cream:'#FAF6F0', text:'#2C1F14', muted:'#7A6A5A', border:'#E0D5C5', white:'#ffffff' }
const serif = "'Cormorant Garamond', serif"
const sans = "'Jost', sans-serif"

const P = ({ children }) => <p style={{ color:C.text, fontSize:'1rem', lineHeight:1.85, margin:'0 0 1.25rem' }}>{children}</p>
const H2 = ({ children }) => <h2 style={{ fontFamily:serif, fontSize:'1.6rem', color:C.green, fontWeight:400, margin:'2rem 0 0.75rem' }}>{children}</h2>
const FAQ = ({ q, a }) => (
  <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:'1rem', marginTop:'1rem' }}>
    <p style={{ fontWeight:600, color:C.text, fontSize:'0.95rem', margin:'0 0 0.4rem' }}>{q}</p>
    <p style={{ color:C.muted, fontSize:'0.9rem', lineHeight:1.75, margin:0 }}>{a}</p>
  </div>
)

export default function Post() {
  return (
    <>
      <Head>
        <title>Dark Night of the Soul: What It Is and How to Move Through It — The Clarity Institute</title>
        <meta name="description" content="The dark night of the soul is not depression — it's a profound spiritual passage. Here's what it actually is, how to recognise it, and how to navigate it." />
        <meta property="og:title" content="Dark Night of the Soul: What It Is and How to Move Through It" />
        <meta property="og:description" content="The dark night of the soul is a profound spiritual passage, not just depression. Here's how to recognise it and move through it." />
        <meta property="og:image" content="https://www.theclarityinstitute.guru/og-image.png" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the dark night of the soul?", "acceptedAnswer": { "@type": "Answer", "text": "The dark night of the soul is a profound spiritual crisis in which the structures of the ego — identity, meaning, belief, relationship — collapse or are stripped away, leaving a person in a state of profound emptiness, disorientation, or suffering. Unlike depression, which is often a deadening of feeling, the dark night is intensely alive. It is painful precisely because something real is happening: the false self is dissolving to make room for something truer." } },
            { "@type": "Question", "name": "How do you know if you are in the dark night of the soul?", "acceptedAnswer": { "@type": "Answer", "text": "Signs of the dark night include: a loss of meaning or purpose that feels total; a withdrawal of what previously gave comfort — including spiritual practice, relationships, and former sources of identity; an inability to go back to who you were, combined with not yet knowing who you are becoming; and a quality of profound aloneness even in the presence of others. It often follows a period of spiritual opening or significant loss." } },
            { "@type": "Question", "name": "How long does the dark night of the soul last?", "acceptedAnswer": { "@type": "Answer", "text": "There is no fixed duration. For some it lasts weeks; for others, months or years. The process cannot be rushed, though it can be supported. What determines the length is less time than the willingness to remain with the process — to not flee into distraction, spiritual bypassing, or premature resolution — and to allow the transformation to complete itself." } },
            { "@type": "Question", "name": "What is the difference between the dark night of the soul and depression?", "acceptedAnswer": { "@type": "Answer", "text": "Depression and the dark night can look similar from the outside and may co-occur. The key distinctions: the dark night tends to arise in the context of spiritual development or significant life transition; it carries a sense of purposefulness even amid the suffering; it often includes periods of heightened perception and aliveness alongside the darkness; and it typically results in a genuine transformation of identity rather than a return to the former self. If you are unsure, working with both a mental health professional and a spiritual guide simultaneously is wise." } }
          ]
        })}} />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight:'100vh', background:C.cream, fontFamily:sans }}>
        <nav style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:'1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Link href="/" style={{ fontFamily:serif, fontSize:'1.3rem', color:C.green, textDecoration:'none', fontWeight:600 }}>The Clarity Institute</Link>
          <Link href="/blog" style={{ fontSize:'0.875rem', color:C.muted, textDecoration:'none' }}>← All Posts</Link>
        </nav>

        <article style={{ maxWidth:680, margin:'0 auto', padding:'3rem 1.5rem' }}>
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ display:'flex', gap:'1rem', marginBottom:'0.75rem' }}>
              <span style={{ fontSize:'0.8rem', color:C.muted }}>May 25, 2026</span>
              <span style={{ fontSize:'0.8rem', color:C.orange }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily:serif, fontSize:'clamp(2rem, 5vw, 2.8rem)', color:C.green, fontWeight:300, margin:'0 0 1rem', lineHeight:1.2 }}>
              Dark Night of the Soul: What It Is and How to Move Through It
            </h1>
            <div style={{ width:48, height:2, background:C.orange, marginBottom:'1.5rem' }} />
          </div>

          <P><strong>The dark night of the soul is a profound spiritual crisis — a passage in which the structures of the self collapse and a person is left in a state of emptiness, disorientation, and suffering that ordinary comfort cannot touch.</strong> The phrase comes from a 16th-century mystical poem by St. John of the Cross, and it names an experience that has been reported across spiritual traditions for millennia: not simply sadness, but the death of who you thought you were.</P>

          <H2>What is the dark night of the soul?</H2>
          <P>In the dark night, the things that once gave your life meaning — your identity, your relationships, your spiritual practice, your sense of purpose — stop working. They do not simply become less satisfying; they become hollow. You can go through the motions, but the aliveness has left them. What remains is a quality of absence, a stripping away, that can feel like the ground has disappeared beneath you.</P>
          <P>This is painful. But it is not, as it is often mistaken for, a sign that something has gone wrong. It is a sign that something is happening — something that requires the dissolution of the old in order for the new to be born.</P>

          <H2>How is it different from depression?</H2>
          <P>This is one of the most important and most frequently asked questions about the dark night, because the two can look similar from the outside and may co-occur. Depression is primarily a flattening — a deadening of feeling, a withdrawal of energy, a reduction of capacity. The dark night, by contrast, is often intensely alive. There is suffering, yes — but it is a sharp, purposeful suffering, not a dull numbness.</P>
          <P>The dark night tends to arise in the context of spiritual development or significant life transition. It often follows a period of opening — a meaningful experience, a loss that cracked something open, a period of genuine spiritual progress. And it carries, even amid the darkness, a quality of purposefulness that most people can sense even when they cannot articulate it.</P>
          <P>If you are in a state of significant suffering and are unsure whether it is clinical depression, the dark night, or both — working with both a mental health professional and a skilled spiritual guide simultaneously is the wisest path.</P>

          <H2>How do you know if you are in the dark night?</H2>
          <P>Some of the clearest signs: the loss of meaning feels total, not partial. What previously brought comfort — including your spiritual practice — has gone quiet or stopped working. You cannot go back to who you were, but you do not yet know who you are becoming. There is a profound aloneness, even in the presence of people who love you. And old identities, roles, and beliefs are collapsing in ways you cannot control and did not choose.</P>

          <H2>How do you move through it?</H2>
          <P>The first and most counterintuitive answer is: stop trying to escape it. The dark night cannot be bypassed. Every attempt to find a shortcut — through spiritual techniques, through distraction, through forcing resolution — tends to prolong it. The passage is through, not around.</P>
          <P>What actually helps: remaining in your body through movement, breath, and physical care. Maintaining basic structure in your days even when meaning is absent. Staying in relationship — not necessarily talking about the experience, but remaining connected to other human beings. Finding one person — a guide, a therapist, a trusted witness — who can sit with you in the darkness without trying to fix it or rush it to its end.</P>
          <P>And waiting. Not passively, but actively — like a seed in winter. The dark night has an end. What emerges on the other side is not the old self restored, but something new: quieter, more real, and more fully alive than what came before.</P>

          <div style={{ background:`linear-gradient(135deg, #f0f4f0, ${C.cream})`, border:`1px solid ${C.green}30`, borderRadius:14, padding:'1.75rem', marginTop:'2.5rem', textAlign:'center' }}>
            <p style={{ fontFamily:serif, fontSize:'1.2rem', color:C.green, margin:'0 0 0.5rem' }}>You do not have to navigate this alone.</p>
            <p style={{ color:C.muted, fontSize:'0.9rem', margin:'0 0 1rem', lineHeight:1.7 }}>A Clarity Session with David offers a grounded, compassionate space to understand what is happening and find your way through.</p>
            <Link href="/clarity-session" style={{ display:'inline-block', background:C.green, color:C.white, padding:'0.75rem 1.5rem', borderRadius:8, textDecoration:'none', fontSize:'0.9rem', fontWeight:500 }}>Book a Clarity Session →</Link>
          </div>

          <div style={{ marginTop:'3rem', padding:'1.5rem 0', borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:'0.8rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.5rem' }}>Frequently asked questions</p>
            <FAQ q="What is the dark night of the soul?" a="The dark night of the soul is a profound spiritual crisis in which the structures of the ego collapse, leaving a person in a state of emptiness and disorientation. Unlike depression, it is intensely alive — painful because something real is happening: the false self is dissolving to make room for something truer." />
            <FAQ q="How do you know if you are in the dark night of the soul?" a="Signs include: total loss of meaning; withdrawal of comfort from spiritual practice and relationships; inability to return to who you were; profound aloneness even among others; and collapsing identities and beliefs you did not choose to release." />
            <FAQ q="How long does the dark night of the soul last?" a="There is no fixed duration. What determines the length is less time than the willingness to remain with the process rather than flee it. It cannot be rushed, but it can be supported — and it does have an end." />
            <FAQ q="What is the difference between the dark night of the soul and depression?" a="Depression tends to be a flattening and deadening. The dark night is intensely alive — sharp, purposeful suffering arising in the context of spiritual development or significant transition. They can co-occur, and working with both a mental health professional and a spiritual guide is wise if you are unsure." />
          </div>

          <div style={{ marginTop:'2rem', padding:'1.25rem', background:C.white, border:`1px solid ${C.border}`, borderRadius:12 }}>
            <p style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 0.4rem' }}>About the author</p>
            <p style={{ fontSize:'0.875rem', color:C.text, lineHeight:1.75, margin:0 }}>
              <strong>AS Davids (David)</strong> is the founder of The Clarity Institute — a spiritual coaching practice rooted in prophetic insight, African wisdom traditions, and depth psychology. He works with individuals navigating awakening, calling, and the inner life. <Link href="/clarity-session" style={{ color:C.green }}>Book a session →</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
