export const linkIsSelected = ({
  path,
  comparison
}: {
  path: string
  comparison: string
}) => {
  const pathWithoutHash = path.slice(0)
  const decodedPath = decodeURI(pathWithoutHash)

  return !!(decodedPath === comparison)
}
