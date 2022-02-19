import { useMediaQuery } from "react-responsive"

export const minDesktopXL = 1920
export const minDesktopL = 1440
export const minDesktop = 1024
export const minTablet = 768
export const maxMobile = 767

export const useDesktopXLMediaQuery = () =>
  useMediaQuery({
    query: `(min-width: ${minDesktopXL}px)`,
  })
export const useDesktopMediaQuery = () =>
  useMediaQuery({
    query: `(min-width: ${minDesktop}px)`,
  })
export const useTabletMediaQuery = () =>
  useMediaQuery({
    query: `(min-width: ${minTablet}px)`,
  })
export const useMobileMediaQuery = () =>
  useMediaQuery({
    query: `(max-width: ${maxMobile}px)`,
  })
