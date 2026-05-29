"use strict";(()=>{var e={};e.id=1206,e.ids=[1206],e.modules={2509:e=>{e.exports=require("firebase-admin")},4217:e=>{e.exports=require("micro")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6326:e=>{e.exports=import("resend")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,o){return o in t?t[o]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,o)):"function"==typeof t&&"default"===o?t:void 0}}})},8580:(e,t,o)=>{o.a(e,async(e,a)=>{try{o.r(t),o.d(t,{config:()=>c,default:()=>d,routeModule:()=>p});var i=o(1802),r=o(7153),n=o(6249),s=o(8503),l=e([s]);s=(l.then?(await l)():l)[0];let d=(0,n.l)(s,"default"),c=(0,n.l)(s,"config"),p=new i.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/webhooks/paypal",pathname:"/api/webhooks/paypal",bundlePath:"",filename:""},userland:s});a()}catch(e){a(e)}})},2127:(e,t,o)=>{o.a(e,async(e,a)=>{try{o.d(t,{j:()=>n});var i=o(6326),r=e([i]);let s=new(i=(r.then?(await r)():r)[0]).Resend(process.env.RESEND_API_KEY),l=process.env.ZOOM_LINK||"https://us05web.zoom.us/j/5541552777?pwd=hVLUx0faojiPboPB1AYOrUBANDFnI5.1";async function n({to:e,clientName:t,sessionDate:o,amount:a,currency:i="USD"}){if(!e){console.warn("[Email] No recipient address — skipping confirmation email");return}let r=o?new Date(o).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):"To be confirmed",n=`
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
      <div style="border-bottom: 2px solid #8b7355; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="font-size: 22px; margin: 0; color: #8b7355;">The Clarity Institute</h1>
      </div>

      <p>Dear ${t||"Valued Client"},</p>

      <p>Thank you for your payment of <strong>${i} ${a}</strong>.
         Your session is confirmed.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; color: #666;">Session Date</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; text-align: right; font-weight: 600;">${r}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; color: #666;">Amount Paid</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e0d8cc; text-align: right; font-weight: 600;">${i} ${a}</td>
        </tr>
      </table>

      <div style="background: #f0f4f0; border: 1px solid #c8d8c8; border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center;">
        <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Your Zoom Session Link</p>
        <a href="${l}" style="display: inline-block; background: #3D5A3E; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-family: Arial, sans-serif; font-size: 15px; font-weight: 600; letter-spacing: 0.02em;">
          Join Zoom Session
        </a>
        <p style="margin: 12px 0 0; font-size: 13px; color: #888;">
          Save this link — use it to join at your scheduled time.
        </p>
      </div>

      <p>If you have any questions, simply reply to this email or
         <a href="https://wa.me/27817904941" style="color: #3D5A3E;">message David on WhatsApp</a>.</p>

      <p style="margin-top: 32px;">With warmth,<br/>
      <strong>The Clarity Institute</strong></p>

      <p style="font-size: 12px; color: #999; margin-top: 40px; border-top: 1px solid #e0d8cc; padding-top: 12px;">
        This is an automated confirmation. Please do not reply unless you need assistance.
      </p>
    </div>
  `,{data:d,error:c}=await s.emails.send({from:process.env.RESEND_FROM_EMAIL||"The Clarity Institute <hello@theclarityinstitute.guru>",to:[e],subject:"Your Session is Confirmed — The Clarity Institute",html:n});if(c)throw Error(`Resend error: ${JSON.stringify(c)}`);console.log(`[Email] Confirmation sent to ${e} (id: ${d?.id})`)}a()}catch(e){a(e)}})},5351:(e,t,o)=>{o.d(t,{ad:()=>s,xH:()=>n});var a=o(2509),i=o.n(a);let r=!1;function n(){if(r||i().apps.length>0){r=!0;return}let e=process.env.FIREBASE_SERVICE_ACCOUNT_KEY;if(e){let t=JSON.parse(e);i().initializeApp({credential:i().credential.cert(t)})}else i().initializeApp({credential:i().credential.applicationDefault()});r=!0}function s(){return i().firestore()}},4794:(e,t,o)=>{o.d(t,{po:()=>n});let a={sandbox:"https://api-m.sandbox.paypal.com",live:"https://api-m.paypal.com"};function i(){return a[(process.env.PAYPAL_MODE||"sandbox").toLowerCase()]||a.sandbox}async function r(){let e=i(),t=Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64"),o=await fetch(`${e}/v1/oauth2/token`,{method:"POST",headers:{Authorization:`Basic ${t}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!o.ok){let e=await o.text();throw Error(`PayPal auth failed (${o.status}): ${e}`)}return(await o.json()).access_token}async function n({headers:e,rawBody:t,webhookId:o}){let a=await r(),n=i(),s={auth_algo:e["paypal-auth-algo"],cert_url:e["paypal-cert-url"],transmission_id:e["paypal-transmission-id"],transmission_sig:e["paypal-transmission-sig"],transmission_time:e["paypal-transmission-time"],webhook_id:o,webhook_event:JSON.parse(t)},l=await fetch(`${n}/v1/notifications/verify-webhook-signature`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify(s)});if(!l.ok){let e=await l.text();throw Error(`PayPal verification request failed (${l.status}): ${e}`)}return"SUCCESS"===(await l.json()).verification_status}},8503:(e,t,o)=>{o.a(e,async(e,a)=>{try{o.r(t),o.d(t,{config:()=>y,default:()=>c});var i=o(4217),r=o(6326),n=o(5351),s=o(4794),l=o(2127),d=e([r,l]);[r,l]=d.then?(await d)():d;let u=new r.Resend(process.env.RESEND_API_KEY),y={api:{bodyParser:!1}},f=()=>o(2509).firestore.FieldValue.serverTimestamp();async function c(e,t){let o;if("POST"!==e.method)return t.setHeader("Allow","POST"),t.status(405).json({error:"Method not allowed"});try{o=(await (0,i.buffer)(e)).toString("utf8")}catch(e){return console.error("[PayPal Webhook] Failed to read body:",e),t.status(400).json({error:"Could not read request body"})}let a=JSON.parse(o);try{if(!await (0,s.po)({headers:e.headers,rawBody:o,webhookId:process.env.PAYPAL_WEBHOOK_ID}))return console.warn("[PayPal Webhook] Signature verification failed"),t.status(401).json({error:"Invalid signature"})}catch(e){return console.error("[PayPal Webhook] Verification error:",e),t.status(500).json({error:"Verification error"})}let r=a.event_type;console.log(`[PayPal Webhook] Received: ${r}`);try{switch(r){case"PAYMENT.CAPTURE.COMPLETED":await p(a);break;case"PAYMENT.CAPTURE.DENIED":case"PAYMENT.CAPTURE.REFUNDED":await m(a,r);break;default:console.log(`[PayPal Webhook] Unhandled event type: ${r}`)}}catch(e){return console.error(`[PayPal Webhook] Error handling ${r}:`,e),t.status(500).json({error:"Internal processing error"})}return t.status(200).json({received:!0})}async function p(e){let t=e.resource,o=t.id,a=t.amount?.value,i=t.amount?.currency_code,r=t.payer?.email_address??null,s=t.custom_id;if(!s){console.warn("[PayPal Webhook] No bookingId (custom_id) on capture",o);return}(0,n.xH)();let d=(0,n.ad)(),c=d.collection("bookings").doc(s),p=await c.get();if(!p.exists){console.warn(`[PayPal Webhook] Booking ${s} not found in Firestore`);return}let m=p.data();if("paid"===m.paymentStatus){console.log(`[PayPal Webhook] Booking ${s} already paid — skipping`);return}await c.update({paymentStatus:"paid",paypalCaptureId:o,paypalPayerEmail:r,paidAmount:a,paidCurrency:i,paidAt:f(),updatedAt:f()}),await d.collection("adminNotifications").add({type:"payment_received",bookingId:s,clientName:m.clientName??"Unknown",clientEmail:m.clientEmail??r,amount:a,currency:i,message:`Payment of ${i} ${a} received from ${m.clientName??"a client"}.`,read:!1,createdAt:f()});try{await (0,l.j)({to:m.clientEmail??r,clientName:m.clientName,sessionDate:m.sessionDate,amount:a,currency:i})}catch(e){console.error("[PayPal Webhook] Confirmation email failed:",e)}try{await u.emails.send({from:"The Clarity Institute <david@theclarityinstitute.guru>",to:"davidmuyunda@gmail.com",subject:`💰 Payment Received — ${i} ${a} from ${m.clientName??r}`,html:`
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 2rem; color: #2C1F14;">
          <h2 style="color: #3D5A3E; font-weight: 300;">Payment Received</h2>
          <p style="color: #7A6A5A;">A payment has been confirmed via PayPal.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem; width: 40%;">Client</td>
              <td style="padding: 0.65rem 0; font-weight: 500;">${m.clientName??"Unknown"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Email</td>
              <td style="padding: 0.65rem 0;"><a href="mailto:${m.clientEmail??r}" style="color: #3D5A3E;">${m.clientEmail??r}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Amount</td>
              <td style="padding: 0.65rem 0; font-weight: 600; color: #3D5A3E; font-size: 1.2rem;">${i} ${a}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E0D5C5;">
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">PayPal Capture ID</td>
              <td style="padding: 0.65rem 0; font-family: monospace; font-size: 0.85rem;">${o}</td>
            </tr>
            <tr>
              <td style="padding: 0.65rem 0; color: #7A6A5A; font-size: 0.85rem;">Booking ID</td>
              <td style="padding: 0.65rem 0; font-family: monospace; font-size: 0.85rem;">${s}</td>
            </tr>
          </table>
          <a href="https://www.theclarityinstitute.guru/admin" style="display: inline-block; background: #3D5A3E; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">View in Admin Dashboard</a>
          <p style="margin-top: 2rem; font-size: 0.8rem; color: #aaa;">The Clarity Institute \xb7 theclarityinstitute.guru</p>
        </div>
      `})}catch(e){console.error("[PayPal Webhook] Admin notification email failed:",e)}console.log(`[PayPal Webhook] Booking ${s} marked as paid (${i} ${a})`)}async function m(e,t){let o=e.resource.custom_id;if(!o)return;(0,n.xH)();let a=(0,n.ad)(),i=a.collection("bookings").doc(o),r="PAYMENT.CAPTURE.REFUNDED"===t?"refunded":"failed";await i.update({paymentStatus:r,updatedAt:f()}),await a.collection("adminNotifications").add({type:`payment_${r}`,bookingId:o,message:`Payment ${r} for booking ${o}.`,read:!1,createdAt:f()}),console.log(`[PayPal Webhook] Booking ${o} marked as ${r}`)}a()}catch(e){a(e)}})},7153:(e,t)=>{var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(o||(o={}))},1802:(e,t,o)=>{e.exports=o(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var o=t(t.s=8580);module.exports=o})();