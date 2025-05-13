interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div className={className} style={style} onClick={onClick}>
      <img
        src="/prev.svg"
        alt="Previous slide"
        className="w-8 h-8"
      />
    </div>
  );
}

export function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div className={className} style={style} onClick={onClick}>
      <img
        src="/next.svg"
        alt="Next slide"
        className="w-8 h-8"
      />
    </div>
  );
}