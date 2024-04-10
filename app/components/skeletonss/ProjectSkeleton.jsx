import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={372}
    height={378}
    viewBox="0 0 400 400"
    backgroundColor="#4db5ff"
    foregroundColor="#fafafa"
    {...props}
  >
    <rect x="10" y="20" rx="25" ry="25" width="332" height="200" /> 
    <rect x="10" y="250" rx="25" ry="25" width="150" height="28" /> 
    <rect x="10" y="305" rx="25" ry="25" width="100" height="50" /> 
    <rect x="140" y="305" rx="25" ry="25" width="100" height="50" />
  </ContentLoader>
)

export default Skeleton

