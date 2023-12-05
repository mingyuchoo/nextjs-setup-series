'use client';

import { MDXRemote } from 'next-mdx-remote'

const MdXCompnents = {
  h1: (props) => (<h1 {...props} />),
  Card: (props) => (<div {...props} />)
}
export function MdxRemoteContents({ source }) {
  return <MDXRemote {...source} components={MdXCompnents}/>
}
