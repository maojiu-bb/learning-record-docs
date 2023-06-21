export type Tsidebar = {
  [propName: string]: {
    text: string
    items: {
      text: string
      link: string
    }[]
  }[]
}

export type TsidebarItem = {
  text: string
  items: {
    text: string
    link: string
  }[]
}

export type Tnav =
  | {
      text: string
      link: string
    }
  | {
      text: string
      items: Tnav[]
    }
