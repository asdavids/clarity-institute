/**
 * Firebase Admin — The Clarity Institute
 *
 * Initialises the Admin SDK once and exports Firestore.
 * Uses GOOGLE_APPLICATION_CREDENTIALS or FIREBASE_SERVICE_ACCOUNT_KEY env var.
 */

import admin from "firebase-admin";

let initialised = false;

export function initAdmin() {
  if (initialised || admin.apps.length > 0) {
    initialised = true;
    return;
  }

  // Option A: GOOGLE_APPLICATION_CREDENTIALS points to a JSON key file
  // Option B: FIREBASE_SERVICE_ACCOUNT_KEY holds the JSON string (Vercel)
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccountJson) {
    const serviceAccount = JSON.parse(serviceAccountJson);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    // Falls back to GOOGLE_APPLICATION_CREDENTIALS or default credentials
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }

  initialised = true;
}

export function getFirestore() {
  return admin.firestore();
}

export default admin;
