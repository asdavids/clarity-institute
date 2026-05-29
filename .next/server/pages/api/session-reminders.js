"use strict";(()=>{var e={};e.id=3644,e.ids=[3644],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2932:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>l,routeModule:()=>p});var o=r(1802),n=r(7153),s=r(6249),a=r(9118),d=e([a]);a=(d.then?(await d)():d)[0];let l=(0,s.l)(a,"default"),m=(0,s.l)(a,"config"),p=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/session-reminders",pathname:"/api/session-reminders",bundlePath:"",filename:""},userland:a});i()}catch(e){i(e)}})},9118:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d});var o=r(3745),n=r(1492),s=r(6326),a=e([o,n,s]);[o,n,s]=a.then?(await a)():a;let l={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:"clarity-institute.firebaseapp.com",projectId:"clarity-institute",storageBucket:"clarity-institute.firebasestorage.app",messagingSenderId:"505987977417",appId:"1:505987977417:web:546a9ba1998328f1617d18"},m=0===(0,o.getApps)().length?(0,o.initializeApp)(l):(0,o.getApps)()[0],p=(0,n.getFirestore)(m),u=new s.Resend(process.env.RESEND_API_KEY),c=process.env.ZOOM_LINK||"https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1";async function d(e,t){if("GET"!==e.method&&"POST"!==e.method)return t.status(405).json({error:"Method not allowed"});let r=e.headers.authorization;if(process.env.CRON_SECRET&&r!==`Bearer ${process.env.CRON_SECRET}`)return t.status(401).json({error:"Unauthorized"});try{let e=new Date;e.setDate(e.getDate()+1);let r=e.toISOString().split("T")[0],i=await (0,n.getDocs)((0,n.query)((0,n.collection)(p,"clarity_sessions"),(0,n.where)("preferredDate","==",r),(0,n.where)("status","==","confirmed")));if(i.empty)return t.status(200).json({message:"No sessions tomorrow.",sent:0});let o=0;for(let e of i.docs){let t=e.data();try{await u.emails.send({from:"David at The Clarity Institute <david@theclarityinstitute.guru>",to:t.email,subject:`Reminder: Your Clarity Session is Tomorrow ✦`,html:`
            <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14; background: #FAF6F0;">
              <div style="text-align: center; padding: 1.5rem 0;">
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁</div>
                <h1 style="color: #3D5A3E; font-weight: 300; font-size: 1.8rem; margin: 0 0 0.5rem;">See you tomorrow, ${t.name?.split(" ")[0]||"there"}.</h1>
                <p style="color: #7A6A5A; margin: 0; line-height: 1.7;">Your Clarity Session is scheduled for tomorrow.</p>
              </div>

              <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #E0D5C5;">
                    <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Date</td>
                    <td style="padding: 0.65rem 0; text-align: right; font-weight: 500;">${t.preferredDate}</td>
                  </tr>
                  ${t.preferredTime?`<tr style="border-bottom: 1px solid #E0D5C5;"><td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Time</td><td style="padding: 0.65rem 0; text-align: right; font-weight: 500;">${t.preferredTime}${t.timezone?` (${t.timezone})`:""}</td></tr>`:""}
                  <tr>
                    <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Focus</td>
                    <td style="padding: 0.65rem 0; text-align: right;">${t.sessionFocus||"General guidance"}</td>
                  </tr>
                </table>
              </div>

              <div style="background: #3D5A3E; border-radius: 12px; padding: 1.5rem; text-align: center; margin: 1.5rem 0;">
                <p style="color: rgba(255,255,255,0.7); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.75rem;">Your Zoom Link</p>
                <a href="${c}" style="display: inline-block; background: white; color: #3D5A3E; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-size: 1rem; font-weight: 600;">
                  Join Zoom Session →
                </a>
                <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 0.75rem 0 0;">Save this link — click it at your session time.</p>
              </div>

              <div style="background: white; border: 1px solid #E0D5C5; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                <h3 style="color: #3D5A3E; font-weight: 400; margin: 0 0 0.75rem; font-size: 1.1rem;">Before your session:</h3>
                <ol style="padding-left: 1.25rem; margin: 0; color: #7A6A5A; line-height: 1.8; font-size: 0.9rem;">
                  <li>Find a quiet, private space where you won't be interrupted.</li>
                  <li>Have a journal and pen nearby.</li>
                  <li>Take a few deep breaths before we begin.</li>
                  <li>Come as you are — there's no preparation needed beyond your openness.</li>
                </ol>
              </div>

              <div style="text-align: center; margin: 1.5rem 0;">
                <p style="color: #7A6A5A; font-size: 0.9rem; margin-bottom: 1rem;">Need to reschedule? Message David at least 24 hours in advance.</p>
                <a href="https://wa.me/27817904941" style="display: inline-block; background: #25D366; color: white; padding: 0.65rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">💬 WhatsApp David</a>
              </div>

              <div style="border-top: 1px solid #E0D5C5; padding-top: 1.5rem; text-align: center;">
                <p style="color: #aaa; font-size: 0.8rem; margin: 0;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
              </div>
            </div>
          `}),o++}catch(e){console.error(`[Reminder] Failed to send to ${t.email}:`,e)}}let s=i.docs.map(e=>e.data());try{await u.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`📅 You have ${s.length} session${s.length>1?"s":""} tomorrow`,html:`
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
            <h2 style="color: #3D5A3E; font-weight: 300;">Tomorrow's Sessions</h2>
            <p style="color: #7A6A5A;">You have ${s.length} session${s.length>1?"s":""} scheduled for ${r}.</p>
            ${s.map(e=>`
              <div style="background: #FAF6F0; border: 1px solid #E0D5C5; border-radius: 10px; padding: 1.25rem; margin: 1rem 0;">
                <div style="font-weight: 500; margin-bottom: 0.3rem;">${e.name}</div>
                <div style="font-size: 0.85rem; color: #7A6A5A;">${e.email}</div>
                ${e.preferredTime?`<div style="font-size: 0.85rem; color: #6B4A2A; margin-top: 0.3rem;">🕐 ${e.preferredTime}${e.timezone?` (${e.timezone})`:""}</div>`:""}
                <div style="font-size: 0.85rem; color: #7A6A5A; margin-top: 0.3rem;">${e.sessionFocus}</div>
              </div>
            `).join("")}
            <a href="https://www.theclarityinstitute.guru/admin" style="display: inline-block; margin-top: 1rem; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">View in Admin Dashboard</a>
            <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
          </div>
        `})}catch(e){console.error("[Reminder] Failed to notify admin:",e)}return t.status(200).json({message:`Sent ${o} reminder(s) for ${r}.`,sent:o})}catch(e){return console.error("[Session Reminders] Error:",e),t.status(500).json({error:"Failed to send reminders."})}}i()}catch(e){i(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2932);module.exports=r})();