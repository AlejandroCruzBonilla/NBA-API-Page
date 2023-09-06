export interface ImageProps {
  src: string
  srcHigh?: string
  alt: string
  width: number
  height: number
  base64?: string
  type?: string
}

export interface SeoProps {
  title: string
  description: string
}


export type themeType = 'lightTheme' | 'darkTheme' | 'systemTheme';