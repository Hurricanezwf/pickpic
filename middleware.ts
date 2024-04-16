import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["zh-CN", "en-US"],

  // Used when no locale matches
  defaultLocale: "zh-CN",
  localePrefix: "never", // Note: 只能为 never, 不然会影响语言切换;
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  //matcher: ["/", "/(zh-CN|en-US)/:path*"],
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
