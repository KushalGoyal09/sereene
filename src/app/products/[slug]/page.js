'use client'

import { useParams } from 'next/navigation'
import ProductPage from '../../../components/ProductPage'
import { getProductBySlug } from '../../../data/products'

export default function ProductDetailPage() {
  const params = useParams()
  const product = getProductBySlug(params.slug)

  if (!product) {
    return (
      <main>
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </main>
    )
  }

  return <ProductPage product={product} />
}
