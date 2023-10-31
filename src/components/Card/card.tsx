import React from "react";
import "./card.css";

interface CardProps {
  title: string;
  subtitle?: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  shadow?: boolean;
  dataTestId?: string; 
}

const Card: React.FC<CardProps> = ({ title, subtitle, body, footer, shadow, dataTestId }) => {
  const cardClasses = ["card"];
  if (shadow) {
    cardClasses.push("card-shadow");
  }

  return (
    <div className={cardClasses.join(" ")} data-test={dataTestId}>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-body">{body}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
