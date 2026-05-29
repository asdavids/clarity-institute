"use strict";(()=>{var e={};e.id=8041,e.ids=[8041],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},7186:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{config:()=>p,default:()=>d,routeModule:()=>u});var o=i(1802),a=i(7153),n=i(6249),s=i(9177),l=e([s]);s=(l.then?(await l)():l)[0];let d=(0,n.l)(s,"default"),p=(0,n.l)(s,"config"),u=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/waitlist",pathname:"/api/waitlist",bundlePath:"",filename:""},userland:s});r()}catch(e){r(e)}})},9177:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{default:()=>l});var o=i(3745),a=i(1492),n=i(6326),s=e([o,a,n]);[o,a,n]=s.then?(await s)():s;let d={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:"clarity-institute.firebaseapp.com",projectId:"clarity-institute",storageBucket:"clarity-institute.firebasestorage.app",messagingSenderId:"505987977417",appId:"1:505987977417:web:546a9ba1998328f1617d18"},p=0===(0,o.getApps)().length?(0,o.initializeApp)(d):(0,o.getApps)()[0],u=(0,a.getFirestore)(p),m=new n.Resend(process.env.RESEND_API_KEY);async function l(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let{email:i}=e.body;if(!i)return t.status(400).json({error:"Email is required."});try{return await (0,a.addDoc)((0,a.collection)(u,"waitlist"),{email:i,createdAt:(0,a.serverTimestamp)()}),await m.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`✦ New Waitlist Signup — ${i}`,html:`
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Waitlist Signup</h2>
          <p style="color: #7A6A5A;">Someone just joined the waitlist for the next cohort.</p>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            <p style="margin: 0; font-size: 1.1rem;"><strong>${i}</strong></p>
          </div>
          <a href="mailto:${i}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Reply to ${i}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
        </div>
      `}),await m.emails.send({from:"David at The Clarity Institute <david@theclarityinstitute.guru>",to:i,subject:`You're on the waitlist ✦ The Clarity Institute`,html:`
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">You're on the list.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Thank you for your interest in The Clarity Institute. You'll be among the first to know when the next cohort opens.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">While you wait...</h3>
            <p style="color: #7A6A5A; line-height: 1.7; margin: 0 0 1rem;">Download the free Third Eye Ebook — a powerful introduction to the practices we use in the cohort.</p>
            <a href="https://drive.google.com/uc?export=download&id=1tlDSepusgZ16sB0_A3Edgu75azQtHGlz" style="display: inline-block; border: 1.5px solid #6B4A2A; color: #6B4A2A; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Download Free Ebook ↓</a>
          </div>

          <div style="text-align: center; margin: 1.5rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Have questions? David responds personally.</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The quieter you become, the more you can hear."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
          </div>
        </div>
      `}),t.status(200).json({success:!0})}catch(e){return console.error("Waitlist error:",e),t.status(500).json({error:"Failed to join waitlist."})}}r()}catch(e){r(e)}})},7153:(e,t)=>{var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},1802:(e,t,i)=>{e.exports=i(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var i=t(t.s=7186);module.exports=i})();