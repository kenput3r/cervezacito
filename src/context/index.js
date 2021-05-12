import React, { createContext, useState } from "react"

export const SiteContext = createContext({})

export const SiteProvider = ({ children }) => {
  const [isLegal, setIsLegal] = useState(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [display, setDisplay] = useState("block")
  const [contentHeight, setContentHeight] = useState("100vh")
  const [contentOverflow, setContentOverflow] = useState("hidden")
  const [activeComponent, setActiveComponent] = useState("menu")

  return (
    <SiteContext.Provider
      value={{
        isLegal,
        setIsLegal,
        isFadingOut,
        setIsFadingOut,
        opacity,
        setOpacity,
        display,
        setDisplay,
        contentHeight,
        setContentHeight,
        contentOverflow,
        setContentOverflow,
        activeComponent,
        setActiveComponent
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
