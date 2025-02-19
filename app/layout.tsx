import type { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "School Management System",
  description: "Manage your school like pro"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="TemplateMo" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"  />
        {/* <title>Stepforward Educational Academy</title> */}
        {/* <!-- Bootstrap core CSS --> */}
        <link rel="stylesheet" href={"/vendor/bootstrap/css/bootstrap.min.css"}  />
        {/* <!-- Additional CSS Files --> */}
        <link rel="stylesheet" href={"/assets/css/fontawesome.css"} />
        <link rel="stylesheet" href={"/assets/css/templatemo-edu-meeting.css"} />
        <link rel="stylesheet" href={"/assets/css/owl.css"} />
        <link rel="stylesheet" href={"/assets/css/lightbox.css"} />
       
      </head>
      <body>
        {children}
        {/* <!-- Scripts --> */}
        {/* <!-- Bootstrap core JavaScript --> */}
        <Script src="/vendor/jquery/jquery.min.js" defer />
        <Script src="/vendor/bootstrap/js/bootstrap.min.js" defer/>
        <Script src="/assets/js/isotope.min.js" defer />
        <Script src="/assets/js/owl-carousel.js" async />
        <Script src="/assets/js/lightbox.js" defer />
        <Script src="/assets/js/tabs.js" defer />
        <Script src="/assets/js/video.js" defer />
        <Script src="/assets/js/slick-slider.js" defer />
        <Script src="/assets/js/custom.js" async />
        <Script src="/assets/js/main.js" defer />
      </body>
    </html>
  );
}
