import React from 'react'
import style from './{{pascalCase name}}.module.scss'

interface {{pascalCase name}}Props {
  className?: string
}

const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = ({ className }) => {
  return <div className={`${style.root} ${className}`}>{{pascalCase name}}</div>
}

export default {{pascalCase name}}
