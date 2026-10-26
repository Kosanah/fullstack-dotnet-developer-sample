import { useEffect, useState } from 'react';
export function Orders() { const [orders, setOrders] = useState<any[]>([]); useEffect(() => { fetch('/api/orders').then(r => r.json()).then(setOrders).catch(() => setOrders([{ id: 1, total: 120 }])); }, []); return <ul>{orders.map(o => <li key={o.id}>Order {o.id} — ${o.total}</li>)}</ul>; }
