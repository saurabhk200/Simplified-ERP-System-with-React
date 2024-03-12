/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardPieChart = ({ availableStock, orders }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current && chartInstance === null) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Available Total Stock', 'Total Orders'],
          datasets: [{
            data: [availableStock, orders],
            backgroundColor: [
              'rgba(54, 162, 235, 0.5)', 
              'rgba(255, 99, 132, 0.5)'  
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    return () => {
      if (chartInstance !== null) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  }, [availableStock, orders]);

  return (
    <div style={{ height: '300px', width: '300px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}

export default DashboardPieChart;
