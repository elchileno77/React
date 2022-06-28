
export const GifGridItem = ({title,id,url}) => {
  return (
    <img key={id} src={url} title={title} /> 
  )
}
