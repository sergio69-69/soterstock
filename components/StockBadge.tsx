export default function StockBadge({ stock }: { stock: number }) {
  if (stock <= 0) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        Sin stock
      </span>
    )
  }

  if (stock <= 2) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-coral/10 text-coral">
        <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
        {stock} restante{stock > 1 ? 's' : ''}
      </span>
    )
  }

  if (stock <= 5) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
        {stock} disponibles
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
      {stock} en stock
    </span>
  )
}
