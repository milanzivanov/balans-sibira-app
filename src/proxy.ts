import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /studio and its sub-paths
  // - /api and its sub-paths
  // - Files with extensions (static files)
  matcher: ["/((?!studio|api|_next|.*\\..*).*)"]
};
