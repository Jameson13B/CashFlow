import { useState } from "react"
import { Layout, Menu } from "antd"
import {
  CalculatorOutlined,
  InfoCircleOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { useDarkMode } from "./useDarkMode.tsx"
import { darkTheme, lightTheme } from "./theme.css.ts"
import tokens from "./theme.css.ts"
import { layoutStyle, headerStyle, contentStyle } from "./styles.css"

import { CharacterInfo } from "./CharacterInfo.tsx"
import { RatRaceCalc } from "./RatRaceCalc.tsx"
import { FastTrack } from "./FastTrack.tsx"
import { About } from "./About.tsx"

const { Header, Content } = Layout

function App() {
  const [step, setStep] = useState("character-info")
  useDarkMode(lightTheme, darkTheme)
  useGSAP(
    () =>
      gsap.fromTo(
        ".container",
        { autoAlpha: 0, duration: 1, delay: 1, ease: "power2.inOut" },
        { autoAlpha: 1, duration: 1, ease: "power2.inOut" }
      ),
    {
      dependencies: [step],
      scope: "#content",
    }
  )

  return (
    <>
      <Layout className={layoutStyle}>
        <Header className={headerStyle}>
          {/* <h1 style={{ lineHeight: "normal", marginBottom: 0 }}>
            Rat Race Calculator
          </h1> */}
          <Menu
            onClick={({ key }: { key: string }) => setStep(key)}
            selectedKeys={[step]}
            mode="horizontal"
            items={[
              {
                label: "Character",
                key: "character-info",
                icon: <UserOutlined />,
              },
              {
                label: "Rat Race",
                key: "rat-race-calc",
                icon: <CalculatorOutlined />,
              },
              {
                label: "Fast Track",
                key: "fast-track",
                icon: <StarOutlined />,
              },
              {
                label: "About",
                key: "about",
                icon: <InfoCircleOutlined />,
              },
            ]}
            style={{
              color: tokens.colors.background,
              backgroundColor: "transparent",
              maxHeight: 48,
              fontWeight: "bold",
              gap: 12,
              justifyContent: "center",
            }}
          />
        </Header>
        <Content id="content" className={contentStyle}>
          {step === "character-info" && <CharacterInfo />}
          {step === "rat-race-calc" && <RatRaceCalc />}
          {step === "fast-track" && <FastTrack />}
          {step === "about" && <About />}
        </Content>
      </Layout>
    </>
  )
}

export default App
