interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
  id: string;
  isSoldOut: boolean;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position,
  id,
  isSoldOut
}: Props) {

  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a href={`./products/${id}`} style={ isSoldOut ? {pointerEvents: 'none'} : {} }>
          {(isSoldOut) && <span className="sold-out-overlay">Vendido</span>}
          <div className="height-300">
            <img className="w-100 h-100 p-4 rounded-top" src={`${thumb_src}`} alt={thumb_alt} />
          </div>
          <div className={classList}>
            {(color) && 
              <h6 className="text-md mb-1 text-body">{color}</h6>
            }
            {(title) && 
              <h4 className="font-weight-bold">
                {title}
              </h4>
            }

            {(description) && 
              <p className="text-body">{description}</p>
            }
            
            {(price) && 
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ${price.toLocaleString("es-CO")}
              </h4>
            }

            {!(description || colors || color) &&
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }
          </div>
        </a>
      </div>
    </>
  );
};
