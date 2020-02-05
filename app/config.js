// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

const TODAYS_DATE = new Date()

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Apply for New Style Jobseeker’s Allowance',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  // Today's date
  todaysDate: {
    original: TODAYS_DATE,
    year: TODAYS_DATE.getFullYear().toString(),
    month: TODAYS_DATE.getMonth().toString(),
    date: TODAYS_DATE.getDate().toString(),
    day: TODAYS_DATE.getDay().toString()
  }

}
