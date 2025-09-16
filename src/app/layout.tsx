import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@/Store/Provider'
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";

const poppin = Poppins({
  weight: ['100', '400'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'Ecommerce Next App',
  description: 'Developed by Abdullah Moiz',
  authors: [{ name: "Abdullah Moiz", url: 'https://abdullahmoiz.vercel.app/' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Providers>
          {children}
        </Providers>
        {/* Script thêm licenseId và load tracking.js */}
        <Script id="tracking-loader" strategy="afterInteractive">
          {`
 (function () {
        var currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('licenseId', 't5qmsc85trfrlpevjb3tnq'); // Thay đổi licenseId này để test
        window.history.replaceState({}, '', currentUrl);

        var script = document.createElement("script");
        script.src = "https://livechat-fe.workonchain.systems/tracking.js"; 
        script.async = true;
        script.onerror = function () {
          console.warn("Không thể load widget. Hãy chắc chắn rằng server đang chạy và file tracking.js đã được build.");
        };
        document.head.appendChild(script);
      })();
          `}
        </Script>
      </body>

    </html>
  )
}
