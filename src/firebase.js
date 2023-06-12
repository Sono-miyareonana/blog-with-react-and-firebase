import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMsaWtXbmy-XnhLWXORN_NLzf-hWGzZew",
  authDomain: "blog-f20b2.firebaseapp.com",
  projectId: "blog-f20b2",
  storageBucket: "blog-f20b2.appspot.com",
  messagingSenderId: "738652430757",
  appId: "1:738652430757:web:839b7d050d65b4c782084c"
};

const app = initializeApp(firebaseConfig);

// 認証機能を使うための初期化
// 公式サイトのドキュメントに記載あり
// 認証初期化
const auth = getAuth(app);
// Google認証プロバイダーのインスタンスを作成
const provider = new GoogleAuthProvider();
// データベース初期化
const db = getFirestore(app);

export { auth, provider, db}