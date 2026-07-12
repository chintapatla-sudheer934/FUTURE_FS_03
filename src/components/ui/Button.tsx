import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  icon?: ReactNode;
}

export default function Button({ children, variant = 'primary', to, href, onClick, type = 'button', className = '', icon }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost';
  const classes = `${base} ${className}`;

  if (to) return <Link to={to} className={classes} onClick={onClick}>{children}{icon}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>{children}{icon}</a>;
  return <button type={type} className={classes} onClick={onClick}>{children}{icon}</button>;
}
