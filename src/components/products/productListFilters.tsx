import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';

interface Props {
  title: string;
}

export default function ProductOverview({
  title,
}: Props) {

  return (
    <>
      <div className="card card-product card-plain">
        <div className="d-flex border-bottom pb-3">
          {(title.length != 0) && 
            <h3 className="mb-3">{title}</h3>
          }
          <div className="d-flex ms-auto align-items-center">
          </div>
        </div>
        <div className="row mt-5">
            <div className="d-flex h-100">
              <div className="row">
                {data.products.map(product => 
                  <div className="col-md-6 col-lg-3">
                    <CardProduct 
                      thumb_src = {product.thumb_src}
                      thumb_alt = {product.thumb_alt}
                      title = {product.title}
                      description = {product.description}
                      price = {product.price}
                      position = "left"
                      id = {product.id}
                      isSoldOut = {product.isSoldOut}
                    />
                  </div>
                )}        
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
