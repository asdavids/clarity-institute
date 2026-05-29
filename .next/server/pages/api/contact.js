"use strict";(()=>{var e={};e.id=2091,e.ids=[2091],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6906:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>p,default:()=>l,routeModule:()=>m});var a=r(1802),o=r(7153),n=r(6249),s=r(452),d=e([s]);s=(d.then?(await d)():d)[0];let l=(0,n.l)(s,"default"),p=(0,n.l)(s,"config"),m=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:s});i()}catch(e){i(e)}})},452:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d});var a=r(3745),o=r(1492),n=r(6326),s=e([a,o,n]);[a,o,n]=s.then?(await s)():s;let l={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:"clarity-institute.firebaseapp.com",projectId:"clarity-institute",storageBucket:"clarity-institute.firebasestorage.app",messagingSenderId:"505987977417",appId:"1:505987977417:web:546a9ba1998328f1617d18"},p=0===(0,a.getApps)().length?(0,a.initializeApp)(l):(0,a.getApps)()[0],m=(0,o.getFirestore)(p),c=new n.Resend(process.env.RESEND_API_KEY);async function d(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let{name:r,email:i,message:a}=e.body;if(!r||!i||!a)return t.status(400).json({error:"All fields are required."});try{return await (0,o.addDoc)((0,o.collection)(m,"contact_submissions"),{name:r,email:i,message:a,createdAt:(0,o.serverTimestamp)()}),await c.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`💬 New Contact Message — ${r}`,html:`
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem; width: 30%;">Name</td>
              <td style="padding: 0.65rem 0; font-weight: 500;">${r}</td>
            </tr>
            <tr>
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Email</td>
              <td style="padding: 0.65rem 0;"><a href="mailto:${i}" style="color: #3D5A3E;">${i}</a></td>
            </tr>
          </table>
          <div style="background: #FAF6F0; border-left: 3px solid #C1581A; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; line-height: 1.7;">${a}</p>
          </div>
          <a href="mailto:${i}?subject=Re: Your message to The Clarity Institute" style="display: inline-block; margin-top: 1.5rem; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">Reply to ${r}</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
        </div>
      `}),await c.emails.send({from:"David at The Clarity Institute <david@theclarityinstitute.guru>",to:i,subject:`Thank you for reaching out, ${r.split(" ")[0]} ✦`,html:`
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 1.5rem 0;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.6rem; margin: 0 0 0.5rem;">Message received, ${r.split(" ")[0]}.</h1>
            <p style="color: #7A6A5A; line-height: 1.7; margin: 0;">Thank you for reaching out. I personally read every message and will get back to you within 24–48 hours.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;">
            <p style="margin: 0 0 0.4rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Your message</p>
            <p style="margin: 0; font-style: italic; color: #7A6A5A; line-height: 1.7; font-size: 0.9rem;">"${a}"</p>
          </div>

          <p style="color: #7A6A5A; line-height: 1.7; text-align: center; margin: 1.5rem 0;">Need a faster response? Message me directly on WhatsApp.</p>
          <div style="text-align: center;">
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; margin-top: 2rem; padding-top: 1.5rem; text-align: center;">
            <p style="color: #aaa; font-size: 0.8rem; margin: 0;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
          </div>
        </div>
      `}),t.status(200).json({success:!0})}catch(e){return console.error("Contact error:",e),t.status(500).json({error:"Failed to send message."})}}i()}catch(e){i(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=6906);module.exports=r})();