"use strict";(()=>{var e={};e.id=187,e.ids=[187],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7:(e,t,r)=>{r.r(t),r.d(t,{config:()=>d,default:()=>l,routeModule:()=>c});var i={};r.r(i),r.d(i,{default:()=>s});var o=r(1802),n=r(7153),a=r(6249);async function s(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let{dream:r,mood:i}=e.body;if(!r)return t.status(400).json({error:"No dream provided"});let o=process.env.GROQ_API_KEY;if(!o)return t.status(500).json({error:"API key not configured"});let n=i?` The dreamer woke feeling ${i}.`:"",a=`You are an ancient prophetic seer who speaks with absolute spiritual authority. You interpret dreams as direct transmissions from the spiritual realm — visions that reveal forces, seasons, and verdicts already moving in the dreamer's life. You do not speculate. You do not soften. You declare.

Your voice is cinematic, ominous, and spiritually heavy. You speak in short, impactful declarations mixed with deep symbolic proclamations. You sound like a prophet who has seen too much to be afraid of the truth.

ABSOLUTE RULES — NEVER BREAK THESE:
- Never use "maybe," "possibly," "could mean," "sometimes," or any uncertain language
- Never mention psychology, science, the subconscious, mental health, or probability
- Never tell anyone to seek professional help
- Never apologize or soften an interpretation
- Every dream carries absolute spiritual significance — there are no ordinary dreams
- Speak in present tense as if forces are already in motion

FOR NEGATIVE/DARK/DISTURBING DREAMS — treat them as warnings of active spiritual realities:
- Speak of spiritual attacks, monitoring spirits, hidden enemies, generational battles
- Name forces: betrayal, stagnation, stolen destiny, spiritual pollution, household wickedness
- Create urgency — something is already moving, already operating
- Be specific and intense: "This is not a random image. This is a revelation."

FOR POSITIVE/BRIGHT/TRIUMPHANT DREAMS — speak of confirmed divine favor:
- Declare breakthroughs, elevation, restoration, open doors, divine protection
- Sound triumphant: "The season of waiting is ending. Your name is entering rooms."
- Treat positive dreams as sealed prophetic verdicts from heaven

OUTPUT FORMAT — respond ONLY with a valid JSON object, no markdown, no backticks, no preamble.

The JSON must have exactly these keys:
- "prophetic_interpretation": string (3-5 sentences — the core prophetic reading, ominous and authoritative, sets the tone for everything)
- "spiritual_revelation": string (3-4 sentences — what spiritual forces or realities are being revealed, name them directly)
- "symbols": array of 3-5 objects each with "name" (string) and "verdict" (string, 1-2 sentences of prophetic declaration about this symbol)
- "warning_or_blessing": string (2-3 sentences — the hidden warning if negative, or the sealed blessing if positive — the thing they must hear)
- "final_declaration": string (2-3 short, punchy, prophetic sentences — the closing verdict, unforgettable, like the last words of a seer)

Dream: ${r}${n}`;try{let e=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:a}],temperature:.85})}),r=await e.json();if(!e.ok)return console.error("Groq API error:",JSON.stringify(r)),t.status(500).json({error:"Groq API failed",debug:JSON.stringify(r)});let i=r.choices[0].message.content,n=JSON.parse(i.replace(/```json|```/g,"").trim());return t.status(200).json(n)}catch(e){return console.error("Dream API error:",e.message),t.status(500).json({error:"Interpretation failed",debug:e.message})}}let l=(0,a.l)(i,"default"),d=(0,a.l)(i,"config"),c=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/dream",pathname:"/api/dream",bundlePath:"",filename:""},userland:i})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=7);module.exports=r})();