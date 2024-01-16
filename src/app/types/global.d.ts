declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}
declare module '* .svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '* .png' {
  const content: string
  export default content
}

declare module '* .jpg' {
  const content: string
  export default content
}

declare module '* .jpeg' {
  const content: string
  export default content
}

declare module '* .webp' {
  const content: string
  export default content
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
