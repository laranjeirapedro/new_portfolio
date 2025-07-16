'use client';

import { useState } from 'react';
import { createClient } from './utils/supabase/client';

interface Order {
  order_number: number;
  created_at: string;
  order_description: { status: string; orderId: number }[];
}

export default function OrderTracker() {
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('order_number', Number(orderNumber))
      .single();

      if (error || !data) {
        setError('Order not found');
      } else {
        setOrder(data);
      }

      setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Track your Order</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            type="text"
            placeholder="Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            {loading ? 'Searching...' : 'Track Order'}
          </button>
        </form>

        {order && <p className='text-red-500 mt-4'>{error}</p>}

        {order && (
          <div className='mt-6 p-4 border rounded bg-gray-100'>
            <h2 className='text-lg font-semibold mb-2'>Order #{order.order_number}</h2>
            <p>Created: {new Date(order.created_at).toLocaleString()}</p>

            <ul className='list-disc ml-5'>
              {order.order_description.map((desc, idx) => (
                <li className='text-sm' key={idx}>
                  Status: {desc.status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  )
}
