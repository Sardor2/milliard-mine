function getGradient(ctx, chartArea) {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "#7a7a7a");
    gradient.addColorStop(0.3, "#bd9555");
    gradient.addColorStop(0.5145, "#d7c982");
    gradient.addColorStop(0.6352, "#fcefcf");
    gradient.addColorStop(0.7759, "#e1b16e");
    gradient.addColorStop(1, "#9a783a");
  }

  return gradient;
}

export const linedata = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Projects",
      data: [0, 3, 2, 3, 1.5, 0.6],
      fill: false,
      backgroundColor: "#544179",
      tension: 0.3,
      borderColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
        return getGradient(ctx, chartArea);
      },
      pointBorderWidth: 0,
      pointBackgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
        return getGradient(ctx, chartArea);
      },
      pointHoverBorderWidth: 4,
      pointBorderColor: "white",
      pointRadius: 5,
      pointHoverRadius: 15,
      pointStyle: "rectRounded",
    },
  ],
};

export const lineOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      bottom: 10,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "transparent",
        font: {
          size: 15,
        },
      },
      grid: {
        color: "#3D3C41",
        drawBorder: false,
      },
    },
    x: {
      beginAtZero: true,
      ticks: {
        color: "transparent",
        font: {
          size: 15,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};
