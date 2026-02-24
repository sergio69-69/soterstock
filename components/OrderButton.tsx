export default function OrderButton({ serverId }: { serverId: string }) {
  return (
    <button
      onClick={() => alert(`Solicitud de orden para servidor ${serverId}. En producción, esto abriría el flujo de compra.`)}
      className="btn-primary text-sm !py-2.5 !px-5 whitespace-nowrap"
    >
      Ordenar
    </button>
  )
}
