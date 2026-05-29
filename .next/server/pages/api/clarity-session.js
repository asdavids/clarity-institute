"use strict";(()=>{var e={};e.id=4200,e.ids=[4200],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7412:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>l,routeModule:()=>p});var o=r(1802),n=r(7153),s=r(6249),a=r(7970),d=e([a]);a=(d.then?(await d)():d)[0];let l=(0,s.l)(a,"default"),m=(0,s.l)(a,"config"),p=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/clarity-session",pathname:"/api/clarity-session",bundlePath:"",filename:""},userland:a});i()}catch(e){i(e)}})},7970:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d});var o=r(3745),n=r(1492),s=r(6326),a=e([o,n,s]);[o,n,s]=a.then?(await a)():a;let l={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:"clarity-institute.firebaseapp.com",projectId:"clarity-institute",storageBucket:"clarity-institute.firebasestorage.app",messagingSenderId:"505987977417",appId:"1:505987977417:web:546a9ba1998328f1617d18"},m=0===(0,o.getApps)().length?(0,o.initializeApp)(l):(0,o.getApps)()[0],p=(0,n.getFirestore)(m),c=new s.Resend(process.env.RESEND_API_KEY);async function d(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let{name:r,email:i,phone:o,preferredDate:s,preferredTime:a,timezone:d,sessionFocus:l,intention:m,howHeard:y,paypalConfirmation:g}=e.body;if(!r||!i||!l)return t.status(400).json({error:"Name, email, and session focus are required."});try{let e=await (0,n.addDoc)((0,n.collection)(p,"clarity_sessions"),{name:r,email:i,phone:o||"",preferredDate:s||"",preferredTime:a||"",timezone:d||"",sessionFocus:l,intention:m||"",howHeard:y||"",paypalConfirmation:g||"",status:"pending",sessionType:"single_clarity_session",price:99,currency:"USD",createdAt:(0,n.serverTimestamp)()}),u=e.id.slice(0,8).toUpperCase();return await c.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`🕯 New Session Booking — ${r}`,html:`
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin-bottom: 0.5rem;">New Session Booking</h1>
          <p style="color: #7A6A5A; margin-top: 0;">A client has booked a Single Clarity Session.</p>

          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem; width: 40%;">Booking Ref</td>
              <td style="padding: 0.75rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace;">${u}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Name</td>
              <td style="padding: 0.75rem 0; font-weight: 500;">${r}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Email</td>
              <td style="padding: 0.75rem 0;"><a href="mailto:${i}" style="color: #3D5A3E;">${i}</a></td>
            </tr>
            ${o?`<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Phone / WhatsApp</td><td style="padding: 0.75rem 0;"><a href="https://wa.me/${o.replace(/\D/g,"")}" style="color: #25D366;">${o}</a></td></tr>`:""}
            ${s?`<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Preferred Date</td><td style="padding: 0.75rem 0;">${s}</td></tr>`:""}
            ${a?`<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Preferred Time</td><td style="padding: 0.75rem 0;">${a} (${d})</td></tr>`:""}
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">Session Focus</td>
              <td style="padding: 0.75rem 0;">${l}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">PayPal Ref</td>
              <td style="padding: 0.75rem 0; font-family: monospace;">${g}</td>
            </tr>
            ${y?`<tr><td style="padding: 0.75rem 0; color: #7A6A5A; font-size: 0.9rem;">How They Heard</td><td style="padding: 0.75rem 0;">${y}</td></tr>`:""}
          </table>

          <div style="background: #FAF6F0; border-left: 3px solid #3D5A3E; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
            <p style="margin: 0 0 0.5rem; font-size: 0.8rem; color: #7A6A5A; text-transform: uppercase; letter-spacing: 0.05em;">Their Intention</p>
            <p style="margin: 0; font-style: italic; line-height: 1.7; color: #2C1F14;">${m}</p>
          </div>

          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="mailto:${i}?subject=Your Clarity Session Booking — ${u}" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; margin-right: 0.75rem;">Reply by Email</a>
            ${o?`<a href="https://wa.me/${o.replace(/\D/g,"")}?text=${encodeURIComponent(`Hi ${r.split(" ")[0]}, this is David from The Clarity Institute. Thank you for booking a Clarity Session! I'm confirming your booking (ref: ${u}). Let's find a time that works for you.`)}" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">WhatsApp ${r.split(" ")[0]}</a>`:""}
          </div>

          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
        </div>
      `}),await c.emails.send({from:"David at The Clarity Institute <david@theclarityinstitute.guru>",to:i,subject:`Your Clarity Session is Booked ✦ Ref: ${u}`,html:`
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
          <div style="text-align: center; padding: 2rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">👁</div>
            <h1 style="color: #3D5A3E; font-weight: 300; font-size: 2rem; margin: 0 0 0.5rem;">Your session is booked, ${r.split(" ")[0]}.</h1>
            <p style="color: #7A6A5A; margin: 0;">I've received your intention and will be in touch within 24 hours.</p>
          </div>

          <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Booking Reference</td>
                <td style="padding: 0.65rem 0; font-weight: 600; color: #3D5A3E; font-family: monospace; text-align: right;">${u}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E0D5C5;">
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Session Type</td>
                <td style="padding: 0.65rem 0; text-align: right;">Single Clarity Session \xb7 60 min</td>
              </tr>
              <tr>
                <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Session Focus</td>
                <td style="padding: 0.65rem 0; text-align: right;">${l}</td>
              </tr>
            </table>
          </div>

          <div style="background: #3D5A3E; color: white; border-radius: 12px; padding: 1.75rem; margin: 1.5rem 0;">
            <h3 style="margin: 0 0 1rem; font-weight: 400; font-size: 1.2rem;">What happens next?</h3>
            <ol style="padding-left: 1.25rem; margin: 0;">
              <li style="margin-bottom: 0.6rem; line-height: 1.6; opacity: 0.9;">I'll review your intention and prepare for our time together.</li>
              <li style="margin-bottom: 0.6rem; line-height: 1.6; opacity: 0.9;">You'll receive a Zoom link and confirmed time within 24 hours.</li>
              <li style="line-height: 1.6; opacity: 0.9;">Show up as you are. The session holds space for exactly what you need.</li>
            </ol>
          </div>

          <div style="text-align: center; margin: 2rem 0;">
            <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Any questions? Message me directly:</p>
            <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
          </div>

          <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
            <p style="font-style: italic; color: #7A6A5A; font-size: 0.95rem; line-height: 1.7; margin: 0;">"The eye through which I see God is the same eye through which God sees me."</p>
            <p style="color: #aaa; font-size: 0.8rem; margin-top: 1rem;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
          </div>
        </div>
      `}),t.status(200).json({success:!0,bookingId:e.id,message:"Your session has been booked! Check your email for confirmation."})}catch(e){return console.error("Clarity session error:",e),t.status(500).json({error:"Booking failed. Please try again or reach out via WhatsApp."})}}i()}catch(e){i(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=7412);module.exports=r})();