import { Typography } from "antd"

export const About = () => {
  return (
    <div className="container">
      <Typography.Title level={2}>About Cashflow</Typography.Title>
      <Typography.Paragraph>
        Play your way out of the rat race by generating passive income through
        real estate, stocks, companies and more.
      </Typography.Paragraph>
      <Typography.Paragraph>
        The game starts you in a typical 9-to-5 drag of a job, from there you’ll
        battle to acquire stocks, houses, apartments, companies and more to
        build up your passive income until you graduate from the RAT RACE to the
        FAST TRACK (Where the real money is made).
      </Typography.Paragraph>
      <Typography.Paragraph>
        Created by{" "}
        <a href="https://www.jamesonb.com" target="_blank">
          Jameson Brown
        </a>{" "}
        with{" "}
        <a href="https://atomic10.studio" target="_blank">
          Atomic10 Studio
        </a>
      </Typography.Paragraph>
    </div>
  )
}
