import React from 'react'

export default function StatsCard({ item }) {
  return (
    <div
      className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
    >
      <div className="flex justify-center mb-3">{item.icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800">{item.value}</h3>
      <p className="text-gray-500">{item.label}</p>
    </div>
  )
}
