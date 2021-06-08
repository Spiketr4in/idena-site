import Link from 'next/link'
import {Accordion, Card, Tab, Tabs} from 'react-bootstrap'
import {useState} from 'react'
import Layout from '../shared/components/layout'
import {CustomToggle} from '../shared/components/toggle'
import {useHash} from '../shared/useHash'
import {getGoogleCalendarLink, useNextValidationTime} from '../public/api'

export default function Gitcoin() {
  const [activeHash, setActiveHash] = useState()
  const [hash] = useHash()

  const {localeTime: validationTime, jsonDateString} = useNextValidationTime()
  const validationCalendarLink = getGoogleCalendarLink(jsonDateString)

  return (
    <Layout
      title="Donate to Idena"
      description="Support Idena by making a donation"
    >
      <section
        className="section section_content menu_section_content menu_gitcoin"
        id="gitcoin"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
              <div className="">
                <h3 className="h1">
                  How to verify your Gitcoin account with Idena
                </h3>
                <p className="text-center" style={{color: '#96999E'}}>
                  Idena is the first proof-of-person blockchain based on
                  democratic principles. Every node is linked to a
                  cryptoidentity — a unique person with equal voting power and
                  mining income.
                </p>
                <p>
                  Your validated cryptoidentity ensures you are a unique human
                  without revealing any personal data. It allows you to have
                  more voting power when the voting can be subject to a sybil
                  attack. Gitcoin accounts verified with Idena get +25% grants
                  match bonus in Gitcoin funding.
                </p>
              </div>

              <Accordion
                activeKey={activeHash}
                onSelect={e => setActiveHash(e)}
              >
                <Card id="gitcoin-1-1">
                  <Card.Header>
                    <CustomToggle eventKey="#gitcoin-1-1">
                      <span>Step 1</span>
                      <br />
                      Get an invitation code
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="#gitcoin-1-1">
                    <div className="card-body">
                      <p>
                        To prevent invite drain and welcome more new users, we
                        need to confirm you are a unique human. Invitations will
                        be distributed on a competitive basis: the most
                        trustworthy accounts will get invitations first.
                      </p>
                      <p>
                        Please choose the platform where you are most active and
                        have longest account history:
                      </p>

                      <Tabs
                        defaultActiveKey="#social_twitter"
                        transition={false}
                        id="tab_social"
                      >
                        <Tab eventKey="#social_twitter" title="Twitter">
                          <p style={{marginTop: '2rem'}}>
                            Send a tweet with a hashtag #IdenaTrustBonus from
                            your account and we will send you an invitation code
                            in pm. The tweet should say:
                          </p>
                        </Tab>
                        <Tab eventKey="#social_github" title="Github">
                          <p style={{marginTop: '2rem'}}>
                            Leave a request in the Idena Invitation Codes
                            discussion on Github from your account and we will
                            send an invitation to your email. Please make sure
                            your email address is set to public in your{' '}
                            <a>Github Account Email settings</a>.
                          </p>
                        </Tab>
                        <Tab eventKey="#social_discord" title="Discord">
                          <p style={{marginTop: '2rem'}}>
                            Join Idena Community Discord and request an invite
                            from the community in <i>#invite-requests</i>{' '}
                            channel.
                          </p>
                        </Tab>
                        <Tab eventKey="#social_telegram" title="Telegram">
                          <p style={{marginTop: '2rem'}}>
                            Join the official Idena Telegram group and request
                            an invite from the community.
                          </p>
                        </Tab>
                        <Tab eventKey="#social_email" title="Email">
                          <p style={{marginTop: '2rem'}}>
                            Email verification is the least reliable way to
                            confirm you are a unique human. That means that you
                            will be the last in the queue to get an invitation.
                            Please consider other channels and use this option
                            only as the last resort.
                          </p>
                        </Tab>
                      </Tabs>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card id="gitcoin-1-2">
                  <Card.Header>
                    <CustomToggle eventKey="#gitcoin-1-2">
                      <span>Step 2</span>
                      <br />
                      Create and activate your Idena account
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="#gitcoin-1-2">
                    <div className="card-body">
                      <ul>
                        <li>Open Idena Web App</li>
                        <li>
                          Follow the instructions to create your account and
                          activate it with your invitation code:
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card id="gitcoin-1-3">
                  <Card.Header>
                    <CustomToggle eventKey="#gitcoin-1-3">
                      <span>Step 3</span>
                      <br />
                      Create and activate your Idena account
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="#gitcoin-1-3">
                    <div className="card-body">
                      <ul>
                        <li>
                          <Link href="/faq#faq-validation-1">
                            <a>
                              Learn what a validation is and how to pass it
                              successfully
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://flips.idena.io/?pass=idena.io"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Train to solve flips
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card id="gitcoin-1-4">
                  <Card.Header>
                    <CustomToggle eventKey="#gitcoin-1-4">
                      <span>Step 4</span>
                      <br />
                      Join the validation ceremony to validate your account
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="#gitcoin-1-4">
                    <div className="card-body">
                      <div
                        className="section_lead__info lead_info"
                        style={{marginTop: '0px'}}
                      >
                        <div className="row">
                          <div className="col-sm-8 lead_info__item">
                            <div
                              id="TimerPanel"
                              className="_value row justify-content-center"
                            >
                              <div className="col-auto">
                                <span className="days">-</span>
                                <span className="_smalltext">d</span>
                              </div>
                              <div className="col-auto">
                                <span className="hours">-</span>
                                <span className="_smalltext">h</span>
                              </div>
                              <div className="col-auto">
                                <span className="minutes">-</span>
                                <span className="_smalltext">m</span>
                              </div>
                              <div className="col-auto">
                                <span className="seconds">-</span>
                                <span className="_smalltext">s</span>
                              </div>
                            </div>

                            <p className="time _hint">
                              Next validation:{' '}
                              <span
                                style={{fontSize: 'small'}}
                                className="NextValidationDateTime"
                              >
                                {validationTime === null ? '' : validationTime}
                              </span>
                            </p>
                          </div>

                          <div
                            className="col-sm-4 lead_info__counter"
                            id="CalendarPanel"
                          >
                            {validationTime !== null &&
                              validationTime !== 'RUNNING NOW' && (
                                <div>
                                  <img
                                    src="/static/images/icon-plus.svg"
                                    alt=""
                                    width="20px"
                                  />
                                  <br />
                                  <a
                                    className="_calendar"
                                    href={validationCalendarLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{margin: '0'}}
                                  >
                                    Add to calendar
                                  </a>
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          Sign in to your Idena Web app 15 minutes before the
                          next validation session starts. Check you have Wait
                          for validation status. Make sure you have reliable and
                          fast internet connection. We advise to use a laptop
                          for better experience.
                        </li>
                        <li>
                          Wait for the validation session to begin. Follow the
                          instructions, solve flips and enjoy the process!
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card id="gitcoin-1-5">
                  <Card.Header>
                    <CustomToggle eventKey="#gitcoin-1-5">
                      <span>Step 5</span>
                      <br />
                      Connect your Idena account to your Gitcoin profile
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="#gitcoin-1-5">
                    <div className="card-body">
                      <ul>
                        <li>
                          Go to the Trust Bonus tab of your Gitcoin profile
                        </li>
                        <li>Find Idena and click Connect</li>
                        <li>Authorise Gitcoin to access your Idena account</li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
