import { redirect } from 'next/navigation';
import Image from "next/image";

export default function Home() {
  // Redirect to the default locale (English)
  redirect('/en');
}
