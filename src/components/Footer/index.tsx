export default function Footer() {
  return (
    <footer className="footer width-full container-xl p-responsive">
      <h2 className="sr-only">Footer</h2>

      <div className="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
        <div className="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
          <div className="mt-2 mt-lg-0 d-flex flex-items-center">
            <a
              aria-label="Homepage"
              title="GitHub"
              className="footer-octicon mr-2"
              href="https://github.com"
            >
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-mark-github"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>{" "}
            <span>© 2022 GitHub, Inc.</span>
          </div>
        </div>

        <nav aria-label="footer" className="col-12 col-lg-8">
          <h3 className="sr-only" id="sr-footer-heading">
            Footer navigation
          </h3>
          <ul
            className="list-style-none d-flex flex-wrap col-12 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0"
            aria-labelledby="sr-footer-heading"
          >
            <li className="mr-3 mr-lg-0">
              <a
                href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
                data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
              >
                Terms
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
              >
                Privacy
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
                href="https://github.com/security"
              >
                Security
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://www.githubstatus.com/"
                data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
              >
                Status
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                data-ga-click="Footer, go to help, text:Docs"
                href="https://docs.github.com"
              >
                Docs
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://support.github.com?tags=dotcom-footer"
                data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
              >
                Contact GitHub
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://github.com/pricing"
                data-analytics-event='{"category":"Footer","action":"go to Pricing","label":"text:Pricing"}'
              >
                Pricing
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://docs.github.com"
                data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
              >
                API
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://services.github.com"
                data-analytics-event='{"category":"Footer","action":"go to training","label":"text:training"}'
              >
                Training
              </a>
            </li>
            <li className="mr-3 mr-lg-0">
              <a
                href="https://github.blog"
                data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                data-ga-click="Footer, go to about, text:about"
                href="https://github.com/about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="d-flex flex-justify-center pb-6">
        <span className="f6 color-fg-muted"></span>
      </div>
    </footer>
  );
}
