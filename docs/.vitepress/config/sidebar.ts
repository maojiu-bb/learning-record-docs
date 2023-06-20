/**
 * @sidebar
 */

type Tsidebar = {
  [propName: string]: [
    {
      text: string
      link: string
      children?: [
        {
          text: string
          link: string
        }
      ]
    }
  ]
}

export const sidebar = (): Tsidebar => {
  return {
    '': [
      {
        text: '',
        link: '',
        children: [
          {
            text: '',
            link: ''
          }
        ]
      }
    ]
  }
}
