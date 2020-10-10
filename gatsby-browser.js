import React from "react"
import { SiteProvider } from "./src/context"

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)
