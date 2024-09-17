export type TSpecialLinksProps = {
  $variant?: 'selected'
}

export type TLinkProps = {
  title: string
  variant?: TSpecialLinksProps['$variant']
  additionalAction?: VoidFunction
}
