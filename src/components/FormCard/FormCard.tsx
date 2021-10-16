import React from 'react'
import style from './FormCard.module.scss'

interface FormCardProps {
  className?: string
}

const FormCard: React.FC<FormCardProps> = ({ className }) => {
  return <div className={`${style.root} ${className}`}>FormCard</div>
}

export default FormCard
