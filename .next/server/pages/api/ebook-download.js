"use strict";(()=>{var e={};e.id=5099,e.ids=[5099],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},7039:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{config:()=>m,default:()=>l,routeModule:()=>p});var o=i(1802),a=i(7153),n=i(6249),d=i(2789),s=e([d]);d=(s.then?(await s)():s)[0];let l=(0,n.l)(d,"default"),m=(0,n.l)(d,"config"),p=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/ebook-download",pathname:"/api/ebook-download",bundlePath:"",filename:""},userland:d});r()}catch(e){r(e)}})},2789:(e,t,i)=>{i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{default:()=>s});var o=i(3745),a=i(1492),n=i(6326),d=e([o,a,n]);[o,a,n]=d.then?(await d)():d;let l={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:"clarity-institute.firebaseapp.com",projectId:"clarity-institute",storageBucket:"clarity-institute.firebasestorage.app",messagingSenderId:"505987977417",appId:"1:505987977417:web:546a9ba1998328f1617d18"},m=0===(0,o.getApps)().length?(0,o.initializeApp)(l):(0,o.getApps)()[0],p=(0,a.getFirestore)(m),c=new n.Resend(process.env.RESEND_API_KEY);async function s(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let{name:i,email:r}=e.body;if(!r)return t.status(400).json({error:"Email is required."});let o=i?.split(" ")[0]||"there";try{return await (0,a.addDoc)((0,a.collection)(p,"ebook_downloads"),{name:i||"",email:r,source:"ebook_landing_page",createdAt:(0,a.serverTimestamp)()}),(await (0,a.getDocs)((0,a.query)((0,a.collection)(p,"waitlist"),(0,a.where)("email","==",r)))).empty&&await (0,a.addDoc)((0,a.collection)(p,"waitlist"),{email:r,name:i||"",source:"ebook_download",createdAt:(0,a.serverTimestamp)()}),await c.emails.send({from:"David at The Clarity Institute <david@theclarityinstitute.guru>",to:r,subject:`Your Free Ebook: The Third Eye Awakening ✦`,html:`
        <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">Your ebook is ready, ${o}.</h1>
            <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Thank you for your interest in the inner work. Here's your free copy.</p>
          </div>

          <div style="background: linear-gradient(145deg, #3D5A3E, #2e4530); border-radius: 12px; padding: 2rem; text-align: center; margin: 1.5rem 0;">
            <div style="font-family: Georgia, serif; font-size: 1.4rem; color: white; font-weight: 300; margin-bottom: 0.5rem;">The Third Eye Awakening</div>
            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-bottom: 1.25rem;">by AS Davids</div>
            <a href="https://drive.google.com/file/d/1tlDSepusgZ16sB0_A3Edgu75azQtHGlz/view?usp=drive_link" style="display: inline-block; background: #C1581A; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">
              Download Your Free Ebook →
            </a>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem;">What's inside:</h3>
            <ul style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.9; font-size: 0.9rem;">
              <li>The science and spirit of the third eye</li>
              <li>Daily activation practices you can start today</li>
              <li>How to work with dreams, visions, and inner sight</li>
              <li>Common blocks and how to move through them</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 2rem 0;">
            <p style="color: #7A6A5A; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem;">When you're ready to go deeper, the 8-week cohort provides a complete guided journey.</p>
            <a href="https://www.theclarityinstitute.guru/#pricing" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Explore the Cohort →</a>
          </div>

          <div style="text-align: center; margin: 1.5rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 0.75rem;">Questions? David responds personally.</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.9rem; line-height: 1.7; margin: 0;">"The quieter you become, the more you can hear."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
          </div>
        </div>
      `}),await c.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`📖 Ebook Downloaded — ${i||r}`,html:`
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Ebook Download</h2>
          <p style="color: #7A6A5A;">Someone just downloaded The Third Eye Awakening.</p>
          <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            ${i?`<p style="margin: 0 0 0.3rem; font-weight: 500;">${i}</p>`:""}
            <p style="margin: 0; font-size: 1.05rem;"><a href="mailto:${r}" style="color: #3D5A3E;">${r}</a></p>
          </div>
          <p style="color: #7A6A5A; font-size: 0.85rem;">Also added to waitlist.</p>
          <a href="mailto:${r}?subject=Welcome to The Clarity Institute" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Email ${o}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
        </div>
      `}),t.status(200).json({success:!0})}catch(e){return console.error("Ebook download error:",e),t.status(500).json({error:"Failed to process download."})}}r()}catch(e){r(e)}})},7153:(e,t)=>{var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},1802:(e,t,i)=>{e.exports=i(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var i=t(t.s=7039);module.exports=i})();